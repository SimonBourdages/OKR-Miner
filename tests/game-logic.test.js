import { describe, expect, test } from 'vitest';
import logic from '../src/game-logic.js';

const BUILDINGS = {
    collector: { cost: 50, acPerSec: 2, okrPerSec: 0, elCost: 1 },
    processor: { cost: 150, acPerSec: 0, okrPerSec: 5, elCost: 3 },
    multiplier: { cost: 500, acPerSec: 0, okrPerSec: 0, elCost: 5, multiplier: 1.5 },
    synthesizer: { cost: 2000, acPerSec: 0, okrPerSec: 100, elCost: 10 },
    generator: { cost: 75, acPerSec: 0, okrPerSec: 0, elPerSec: 5, elCost: 0 },
    bank: { cost: 300, acPerSec: 0, okrPerSec: 0, elCost: 0, interestRate: 0.02 },
    gpu: { cost: 500, acPerSec: 0, okrPerSec: 0, elCost: 5 }
};

const THEMES = {
    emerald: { bonus: 'okr', bonusMult: 1.01 },
    neon: { bonus: 'ac', bonusMult: 1.01 },
    solar: { bonus: 'el', bonusMult: 1.01 }
};

function makeState(overrides) {
    return Object.assign(
        {
            currencies: { ac: 0, el: 0 },
            activeTheme: 'emerald',
            electricityEnabled: false,
            gpuEnabled: false,
            unlockedBuildings: ['collector', 'processor'],
            shipsEnabled: false,
            repairBotsEnabled: false,
            thievesEnabled: false,
            eventsEnabled: false,
            upgradesEnabled: false,
            themesEnabled: false
        },
        overrides || {}
    );
}

describe('game-logic constants and helpers', () => {
    test('exports canonical level maps', () => {
        expect(logic.UPGRADE_COSTS[3]).toBe(6);
        expect(logic.UPGRADE_POWER[4]).toBe(10);
        expect(logic.GPU_CAPACITY[2]).toBe(3);
    });

    test('computes playable radius by unlocked milestones', () => {
        expect(logic.getPlayableRadius(null)).toBe(450);
        expect(logic.getPlayableRadius({ unlockedMilestones: [0] })).toBe(480);
        expect(logic.getPlayableRadius({ unlockedMilestones: [0, 1, 2, 3] })).toBe(570);
    });

    test('grows node hit radius with level to match upgraded visuals', () => {
        expect(logic.getNodeHitRadius(1)).toBe(25);
        expect(logic.getNodeHitRadius(2)).toBe(38);
        expect(logic.getNodeHitRadius(3)).toBe(52);
        expect(logic.getNodeHitRadius(4)).toBe(80);
    });

    test('computes upgrade cost and collision refund from shared formulas', () => {
        expect(logic.calculateUpgradeCost(150, 2, logic.UPGRADE_COSTS)).toBe(375);
        expect(logic.calculateUpgradeCost(500, 3, logic.UPGRADE_COSTS)).toBe(3000);
        expect(logic.calculateCollisionRefund('processor', 2, BUILDINGS, logic.UPGRADE_COSTS)).toBe(187);
    });

    test('formats large numbers with game suffixes', () => {
        expect(logic.formatNumber(999)).toBe('999');
        expect(logic.formatNumber(1000)).toBe('1.0K');
        expect(logic.formatNumber(1_000_000)).toBe('1.0M');
        expect(logic.formatNumber(5_000_000_000)).toBe('5.0B');
        expect(logic.formatNumber(Number.POSITIVE_INFINITY)).toBe('0');
    });
});

describe('production snapshot calculations', () => {
    test('computes base gains without electricity mode', () => {
        const snapshot = logic.computeProductionSnapshot({
            nodes: [
                { type: 'collector', level: 1, hp: 100, maxHp: 100 },
                { type: 'processor', level: 1, hp: 100, maxHp: 100 }
            ],
            buildings: BUILDINGS,
            state: makeState({ electricityEnabled: false }),
            themes: THEMES,
            upgradePower: logic.UPGRADE_POWER,
            gpuCapacity: logic.GPU_CAPACITY,
            baseElGain: 10
        });

        expect(snapshot.acGain).toBeCloseTo(2, 8);
        expect(snapshot.okrGain).toBeCloseTo(5 * 1.01, 8);
        expect(snapshot.elGain).toBe(0);
        expect(snapshot.elDrain).toBe(0);
        expect(snapshot.underfunded).toBe(false);
    });

    test('applies underfunded penalty when drain exceeds gain at zero funding', () => {
        const snapshot = logic.computeProductionSnapshot({
            nodes: [
                { type: 'processor', level: 1, hp: 100, maxHp: 100 },
                { type: 'processor', level: 1, hp: 100, maxHp: 100 },
                { type: 'processor', level: 1, hp: 100, maxHp: 100 },
                { type: 'processor', level: 1, hp: 100, maxHp: 100 }
            ],
            buildings: BUILDINGS,
            state: makeState({ electricityEnabled: true, activeTheme: null, currencies: { ac: 0, el: 0 } }),
            themes: THEMES,
            upgradePower: logic.UPGRADE_POWER,
            gpuCapacity: logic.GPU_CAPACITY,
            baseElGain: 10
        });

        expect(snapshot.underfunded).toBe(true);
        expect(snapshot.okrGain).toBeCloseTo(10, 8); // 4 * 5, then halved
        expect(snapshot.currentElRate).toBeCloseTo(-2, 8);
    });

    test('applies multiplier buildings using level power curve', () => {
        const snapshot = logic.computeProductionSnapshot({
            nodes: [
                { type: 'collector', level: 1, hp: 100, maxHp: 100 },
                { type: 'multiplier', level: 2, hp: 100, maxHp: 100 }
            ],
            buildings: BUILDINGS,
            state: makeState({ activeTheme: null }),
            themes: THEMES,
            upgradePower: logic.UPGRADE_POWER,
            gpuCapacity: logic.GPU_CAPACITY,
            baseElGain: 10
        });

        expect(snapshot.multiplier).toBeCloseTo(2.25, 8);
        expect(snapshot.acGain).toBeCloseTo(4.5, 8);
    });

    test('scales production by hp ratio and keeps drain for destroyed buildings', () => {
        const snapshot = logic.computeProductionSnapshot({
            nodes: [
                { type: 'processor', level: 1, hp: 50, maxHp: 100 },
                { type: 'processor', level: 1, hp: 0, maxHp: 100 }
            ],
            buildings: BUILDINGS,
            state: makeState({ electricityEnabled: true, activeTheme: null }),
            themes: THEMES,
            upgradePower: logic.UPGRADE_POWER,
            gpuCapacity: logic.GPU_CAPACITY,
            baseElGain: 10
        });

        expect(snapshot.okrGain).toBeCloseTo(2.5, 8);
        expect(snapshot.elDrain).toBeCloseTo(6, 8);
    });

    test('enforces GPU capacity by reducing AI output', () => {
        const snapshot = logic.computeProductionSnapshot({
            nodes: [
                { type: 'synthesizer', level: 1, hp: 100, maxHp: 100 },
                { type: 'synthesizer', level: 1, hp: 100, maxHp: 100 },
                { type: 'gpu', level: 1, hp: 100, maxHp: 100 }
            ],
            buildings: BUILDINGS,
            state: makeState({ activeTheme: null, gpuEnabled: true }),
            themes: THEMES,
            upgradePower: logic.UPGRADE_POWER,
            gpuCapacity: logic.GPU_CAPACITY,
            baseElGain: 10
        });

        expect(snapshot.totalAIs).toBe(2);
        expect(snapshot.totalGpuCap).toBe(1);
        expect(snapshot.okrGain).toBeCloseTo(100, 8);
    });

    test('computes funding cap from bank levels', () => {
        const snapshot = logic.computeProductionSnapshot({
            nodes: [
                { type: 'bank', level: 1, hp: 100, maxHp: 100 },
                { type: 'bank', level: 3, hp: 100, maxHp: 100 }
            ],
            buildings: BUILDINGS,
            state: makeState({ electricityEnabled: true, activeTheme: null }),
            themes: THEMES,
            upgradePower: logic.UPGRADE_POWER,
            gpuCapacity: logic.GPU_CAPACITY,
            baseElGain: 10
        });

        expect(snapshot.fundingCap).toBe(5000);
    });
});

describe('milestone unlock mutation helper', () => {
    test('applies building unlocks, features, rewards, and event trigger state', () => {
        const state = makeState({ currencies: { ac: 10, el: 0 } });
        const result = logic.applyMilestoneUnlock(state, {
            unlock: ['multiplier'],
            enableRepairBots: true,
            enableEvents: true,
            enableThemes: true,
            reward: 90
        });

        expect(state.unlockedBuildings).toContain('multiplier');
        expect(state.unlockedBuildings).toContain('repairbot');
        expect(state.repairBotsEnabled).toBe(true);
        expect(state.eventsEnabled).toBe(true);
        expect(state.themesEnabled).toBe(true);
        expect(state.currencies.ac).toBe(100);
        expect(result.eventsEnabledNow).toBe(true);
        expect(result.addedBuildings).toEqual(expect.arrayContaining(['multiplier', 'repairbot']));
    });

    test('does not re-trigger event enablement when already enabled', () => {
        const state = makeState({ eventsEnabled: true });
        const result = logic.applyMilestoneUnlock(state, { unlock: [], enableEvents: true });
        expect(result.eventsEnabledNow).toBe(false);
    });
});
