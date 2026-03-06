(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.OKRMinerLogic = factory();
    }
})(typeof self !== 'undefined' ? self : this, function() {
    'use strict';

    var UPGRADE_COSTS = Object.freeze({ 1: 1.0, 2: 2.5, 3: 6.0, 4: 0 });
    var UPGRADE_POWER = Object.freeze({ 1: 1.0, 2: 2.0, 3: 4.5, 4: 10.0 });
    var GPU_CAPACITY = Object.freeze({ 1: 1, 2: 3, 3: 5, 4: 10 });

    function getLevel(node) {
        if (!node || typeof node.level !== 'number') return 1;
        return node.level > 0 ? node.level : 1;
    }

    function getHpRatio(node) {
        var hp = node && node.hp !== undefined ? node.hp : 100;
        var maxHp = node && node.maxHp ? node.maxHp : 100;
        if (maxHp <= 0) return 0;
        return hp / maxHp;
    }

    function getPlayableRadius(state) {
        if (!state) return 300;
        var milestones = state.unlockedMilestones ? state.unlockedMilestones.length : 1;
        return 300 + milestones * 20;
    }

    function getNodeHitRadius(nodeOrLevel) {
        var level = 1;
        if (typeof nodeOrLevel === 'number') {
            level = nodeOrLevel > 0 ? nodeOrLevel : 1;
        } else if (nodeOrLevel && typeof nodeOrLevel === 'object') {
            level = getLevel(nodeOrLevel);
        }

        if (level <= 1) return 25;

        var baseS = 3;
        var s = baseS + (level - 1);
        if (level === 4) return (9 + level) * s + 2;
        return (7 + level) * s + 2;
    }

    function calculateUpgradeCost(baseCost, nextLevel, upgradeCosts) {
        var costs = upgradeCosts || UPGRADE_COSTS;
        var multiplier = costs[nextLevel];
        if (multiplier === undefined) multiplier = 1;
        return Math.floor(baseCost * multiplier);
    }

    function calculateCollisionRefund(nodeType, level, buildings, upgradeCosts) {
        var defs = buildings || {};
        var costs = upgradeCosts || UPGRADE_COSTS;
        var base = defs[nodeType] && defs[nodeType].cost ? defs[nodeType].cost : 0;
        var costMult = costs[level] !== undefined ? costs[level] : 1;
        return Math.floor(base * costMult * 0.5);
    }

    function calculateFundingCap(nodes) {
        var fundingCap = 500;
        var list = nodes || [];
        for (var i = 0; i < list.length; i++) {
            if (list[i].type !== 'bank') continue;
            var level = getLevel(list[i]);
            fundingCap += level === 1 ? 500 : level === 2 ? 1500 : level === 3 ? 4000 : 10000;
        }
        return fundingCap;
    }

    function calculateGlobalMultiplier(nodes, buildings, upgradePower) {
        var list = nodes || [];
        var defs = buildings || {};
        var powerMap = upgradePower || UPGRADE_POWER;
        var mult = 1;
        for (var i = 0; i < list.length; i++) {
            if (list[i].type !== 'multiplier') continue;
            var level = getLevel(list[i]);
            var levelPower = powerMap[level] || 1;
            var base = defs.multiplier && defs.multiplier.multiplier ? defs.multiplier.multiplier : 1;
            mult *= Math.pow(base, levelPower);
        }
        return mult;
    }

    function computeProductionSnapshot(options) {
        var opts = options || {};
        var nodes = opts.nodes || [];
        var buildings = opts.buildings || {};
        var state = opts.state || {};
        var themes = opts.themes || {};
        var upgradePower = opts.upgradePower || UPGRADE_POWER;
        var gpuCapacity = opts.gpuCapacity || GPU_CAPACITY;
        var baseElGain = opts.baseElGain === undefined ? 10 : opts.baseElGain;

        var mult = calculateGlobalMultiplier(nodes, buildings, upgradePower);
        var acGain = 0;
        var okrGain = 0;
        var elGain = baseElGain;
        var elDrain = 0;
        var totalInterest = 0;
        var totalGpuCap = 0;
        var totalAIs = 0;
        var aiBaseOkrForGpuCalc = 0;

        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var building = buildings[node.type];
            if (!building) continue;

            var level = getLevel(node);
            var levelPower = upgradePower[level] || 1;

            if (node.type === 'gpu') {
                totalGpuCap += gpuCapacity[level] || 1;
            }
            if (node.type === 'synthesizer') {
                totalAIs++;
                aiBaseOkrForGpuCalc += (building.okrPerSec || 0) * levelPower;
            }

            var hpRatio = getHpRatio(node);
            if (hpRatio <= 0) {
                if (building.elCost) elDrain += building.elCost * levelPower;
                continue;
            }

            var dmgMult = hpRatio < 1 ? hpRatio : 1;
            if (building.acPerSec) acGain += building.acPerSec * levelPower * dmgMult;
            if (building.okrPerSec) okrGain += building.okrPerSec * levelPower * dmgMult;
            if (building.elPerSec) elGain += building.elPerSec * levelPower * dmgMult;
            if (building.elCost) elDrain += building.elCost * levelPower;
            if (building.interestRate) totalInterest += building.interestRate * levelPower * dmgMult;
        }

        acGain *= mult;
        okrGain *= mult;
        elGain *= mult;
        elDrain *= mult;

        var activeTheme = state.activeTheme ? themes[state.activeTheme] : null;
        if (activeTheme && activeTheme.bonus === 'ac') acGain *= activeTheme.bonusMult;
        if (activeTheme && activeTheme.bonus === 'okr') okrGain *= activeTheme.bonusMult;
        if (activeTheme && activeTheme.bonus === 'el') elGain *= activeTheme.bonusMult;

        if (state.gpuEnabled && totalAIs > totalGpuCap) {
            var gpuRatio = totalGpuCap / totalAIs;
            okrGain -= aiBaseOkrForGpuCalc * (1 - gpuRatio) * mult;
        }

        var fundingCap = null;
        if (state.electricityEnabled) {
            fundingCap = calculateFundingCap(nodes);
        } else {
            elGain = 0;
            elDrain = 0;
        }

        var currentEl = state.currencies && typeof state.currencies.el === 'number' ? state.currencies.el : 0;
        var underfunded = !!state.electricityEnabled && currentEl <= 0 && elDrain > elGain;
        if (underfunded) {
            okrGain *= 0.5;
            acGain *= 0.5;
        }

        return {
            multiplier: mult,
            acGain: acGain,
            okrGain: okrGain,
            elGain: elGain,
            elDrain: elDrain,
            currentElRate: elGain - elDrain,
            totalInterest: totalInterest,
            fundingCap: fundingCap,
            underfunded: underfunded,
            totalGpuCap: totalGpuCap,
            totalAIs: totalAIs
        };
    }

    function applyMilestoneUnlock(state, milestone) {
        var addedBuildings = [];
        var eventsEnabledNow = false;
        if (!state || !milestone) {
            return { addedBuildings: addedBuildings, eventsEnabledNow: eventsEnabledNow };
        }

        var unlockList = Array.isArray(milestone.unlock) ? milestone.unlock : [];
        for (var i = 0; i < unlockList.length; i++) {
            if (state.unlockedBuildings.indexOf(unlockList[i]) === -1) {
                state.unlockedBuildings.push(unlockList[i]);
                addedBuildings.push(unlockList[i]);
            }
        }

        if (milestone.enableElectricity) state.electricityEnabled = true;
        if (milestone.enableShips) state.shipsEnabled = true;
        if (milestone.enableRepairBots) {
            state.repairBotsEnabled = true;
            if (state.unlockedBuildings.indexOf('repairbot') === -1) {
                state.unlockedBuildings.push('repairbot');
                addedBuildings.push('repairbot');
            }
        }
        if (milestone.enableThieves) state.thievesEnabled = true;
        if (milestone.enableEvents && !state.eventsEnabled) eventsEnabledNow = true;
        if (milestone.enableEvents) state.eventsEnabled = true;
        if (milestone.enableUpgrades) state.upgradesEnabled = true;
        if (milestone.enableThemes) state.themesEnabled = true;
        if (milestone.reward && state.currencies) state.currencies.ac += milestone.reward;

        return { addedBuildings: addedBuildings, eventsEnabledNow: eventsEnabledNow };
    }

    function formatNumber(n) {
        if (!isFinite(n)) return '0';
        if (n >= 1e30) return (n / 1e30).toFixed(1) + 'N';
        if (n >= 1e27) return (n / 1e27).toFixed(1) + 'O';
        if (n >= 1e24) return (n / 1e24).toFixed(1) + 'Sp';
        if (n >= 1e21) return (n / 1e21).toFixed(1) + 'Sx';
        if (n >= 1e18) return (n / 1e18).toFixed(1) + 'Qi';
        if (n >= 1e15) return (n / 1e15).toFixed(1) + 'Q';
        if (n >= 1e12) return (n / 1e12).toFixed(1) + 'T';
        if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
        if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
        if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
        return Math.floor(n).toString();
    }

    return {
        UPGRADE_COSTS: UPGRADE_COSTS,
        UPGRADE_POWER: UPGRADE_POWER,
        GPU_CAPACITY: GPU_CAPACITY,
        getPlayableRadius: getPlayableRadius,
        getNodeHitRadius: getNodeHitRadius,
        calculateUpgradeCost: calculateUpgradeCost,
        calculateCollisionRefund: calculateCollisionRefund,
        calculateFundingCap: calculateFundingCap,
        calculateGlobalMultiplier: calculateGlobalMultiplier,
        computeProductionSnapshot: computeProductionSnapshot,
        applyMilestoneUnlock: applyMilestoneUnlock,
        formatNumber: formatNumber
    };
});
