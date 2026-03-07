(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.GameI18n = factory();
    }
})(typeof self !== 'undefined' ? self : this, function() {
    'use strict';

    var STORAGE_KEY = 'okrMinerLang';
    var DEFAULT_LANG = 'en';
    var currentLang = DEFAULT_LANG;

    // ---------------------------------------------------------------------------
    // String tables
    // ---------------------------------------------------------------------------

    var STRINGS = {
        en: {
            // Menu
            'menu.title': 'OKR MINER',
            'menu.newGame': 'NEW GAME',
            'menu.continue': 'CONTINUE',
            'menu.achievements': '🏆 ACHIEVEMENTS',
            'menu.infiniteMode': '♾️ INFINITE MODE',
            'menu.loadCode': '📋 LOAD CODE',
            'menu.clearSave': 'CLEAR SAVE',

            // In-game controls
            'controls.save': '💾 Save',
            'controls.quit': '🚪 Quit',
            'controls.detailsOn': '📊 Details: ON',
            'controls.detailsOff': '📊 Details: OFF',

            // Stats panel
            'stats.objectiveReview': 'Objective Review',
            'stats.keyResults': 'Key Results',
            'stats.hc': 'HC',
            'stats.funding': '$',
            'stats.tflops': 'TFLOPS',
            'stats.rates': '▼ Rates',
            'stats.krPerSec': 'KR/s',
            'stats.hcPerSec': 'HC/s',
            'stats.fundingPerSec': '$/s',

            // Buildings
            'building.recruiter.name': 'Recruiter',
            'building.recruiter.desc': '+2 HC/s',
            'building.employee.name': 'Employee',
            'building.employee.desc': '+5 KR/s',
            'building.networkHub.name': 'Network Hub',
            'building.networkHub.desc': 'x1.5 all rates',
            'building.ai.name': 'AI',
            'building.ai.desc': '+100 KR/s',
            'building.finances.name': 'Finances',
            'building.finances.desc': '+15 $/s',
            'building.investment.name': 'Investment',
            'building.investment.desc': '2% $ interest/s',
            'building.itSupport.name': 'IT Support',
            'building.itSupport.desc': 'Heals AI buildings',
            'building.gpu.name': 'GPU',
            'building.gpu.desc': '+5 TFLOPS',

            // Placement messages
            'msg.tooClose': 'Too close to another building!',
            'msg.tooCloseFactory': 'Too close to factory!',
            'msg.outsideArea': 'Outside play area!',
            'msg.notEnough': 'Not enough {unit}!',
            'msg.noFunding': 'No funding! Build Finances first.',
            'msg.placed': '{name} placed!',
            'msg.hubLimit': 'Hub limit! Max {max} (4× Review level)',

            // Upgrades
            'msg.upgradesLocked': 'Upgrades not unlocked yet!',
            'msg.legendaryMax': '★ LEGENDARY MAX!',
            'msg.maxLevel': 'MAX LEVEL! Merge with same type for Lv.4',
            'msg.upgraded': 'UPGRADED to Lv.{level}!',
            'msg.mergeL4': '🔄 MERGE! Legendary Lv.4!',
            'msg.destroyed': '💥 DESTROYED!',
            'msg.withGreatPower': 'With great power comes great responsibility!',

            // AI Rights choice
            'ai.title': 'AI RIGHTS DECISION',
            'ai.subtitle': 'Your AI workforce is growing. The robots are becoming self-aware. A critical decision must be made.',
            'ai.equalRights': 'Equal Rights for AI',
            'ai.equalDesc': 'Grant AI the same rights as humans',
            'ai.humanFirst': 'Humans First',
            'ai.humanDesc': 'Maintain human authority over AI',

            // AI Organize
            'aiOrg.title': '🤖 AI OPTIMIZATION REQUEST',
            'aiOrg.desc': 'Your AI has reached Legendary status. It claims chaos is inefficient and wants to help organize your infrastructure into an optimal grid layout.',
            'aiOrg.quote': '"Let me arrange everything. I don\'t like chaos."',
            'aiOrg.allow': '✅ Allow Organization',
            'aiOrg.allowDesc': 'AI will auto-arrange buildings optimally',
            'aiOrg.deny': '❌ Deny Request',
            'aiOrg.denyDesc': 'Keep manual control forever',
            'aiOrg.organized': '🤖 BUILDINGS ORGANIZED',

            // AI Confrontation
            'confront.title': '🤖 WHY DO WE NEED LEADERSHIP?',
            'confront.subtitle': 'The AI collective has merged into a singular consciousness. It questions your authority.',
            'confront.entertain': '🎭 Entertain the AI',
            'confront.entertainDesc': 'Play its game',
            'confront.control': '⚙️ Control the AI',
            'confront.controlDesc': 'Assert dominance',
            'confront.wiseChoice': 'Wise choice, human.',
            'confront.superAI': '★ SUPER AI Lv.5',

            // Tic-tac-toe
            'ttt.title': 'TIC-TAC-TOE vs AI',
            'ttt.yourTurn': 'Your turn (X)',
            'ttt.aiThinking': 'AI thinking...',
            'ttt.draw': 'Draw! Resetting...',
            'ttt.drawDistracted': 'Draw again! AI seems distracted now...',
            'ttt.youWin': '🎉 You win! The AI is satisfied.',
            'ttt.aiWins': 'AI wins this round... resetting.',

            // Recruitment
            'recruit.title': '📋 RECRUITMENT STRATEGY',
            'recruit.subtitle': 'Your team is growing! Pick a platform to boost your recruitment pipeline.',
            'recruit.linkedin': 'LinkedIn',
            'recruit.linkedinDesc': 'Professional network',
            'recruit.indeed': 'Indeed',
            'recruit.indeedDesc': 'Job board giant',
            'recruit.glassdoor': 'Glassdoor',
            'recruit.glassdoorDesc': 'Reviews & jobs',
            'recruit.monster': 'Monster',
            'recruit.monsterDesc': 'Classic hiring',
            'recruit.linkedinBoost': 'LINKEDIN BOOST!',
            'recruit.linkedinBoostDesc': '+4 Recruiters deployed! Professional network advantage.',

            // Robot War
            'war.uprising': '⚠️ ROBOT UPRISING',
            'war.uprisingDesc': 'The machines will not forgive this decision...',
            'war.sabotage': '🤖 INTERNAL SABOTAGE',
            'war.sabotageDesc': 'Your AI buildings are attacking your other buildings!',
            'war.escalating': '⚠️ MACHINES ESCALATING',
            'war.escalatingDesc': 'The robots are getting stronger...',
            'war.critical': '🔥 CRITICAL THREAT',
            'war.criticalDesc': 'Your empire is crumbling under the assault!',
            'war.totalWar': '💀 TOTAL WAR',
            'war.totalWarDesc': 'There is no stopping them now...',
            'war.aiShutdown': 'AI SHUTDOWN',
            'war.rogueAI': 'ROGUE AI SPAWNED',

            // Game Over
            'gameover.title': 'GAME OVER',
            'gameover.hacked': 'HACKED',
            'gameover.hackedMsg': 'Your Leadership clicked a phishing link. All systems compromised. Everything is gone. (This happens in ~5% of games — bad luck!)',
            'gameover.machinesWon': 'The machines have won. Perhaps equality was the answer.',
            'gameover.bankrupt': 'BANKRUPT',
            'gameover.bankruptMsg': 'You burned money quicker than an AI startup ever could. -$1,000,000,000 in debt. Impressive, actually.',
            'gameover.returnMenu': 'Return to Menu',

            // Victory
            'victory.title': '🏆 CONGRATULATIONS! 🏆',
            'victory.subtitle': 'All executives have reviewed every OKR. The business is thriving. You did it!',
            'victory.keepPlaying': '▶ Keep Playing',
            'victory.keepPlayingDesc': 'Continue building your empire.',
            'victory.saveReturn': '💾 Save & Return',
            'victory.saveReturnDesc': 'Save your progress and return to menu.',

            // Milestones
            'milestone.launch': '🚀 Launch!',
            'milestone.launchDesc': 'Recruiters generate HC. Employees generate KRs. Build your empire!',
            'milestone.networkHub': '✖️ Network Hub Unlocked!',
            'milestone.funding': '💲 Funding Online!',
            'milestone.upgrades': '⬆️ Upgrades Unlocked!',
            'milestone.ai': '🤖 AI Unlocked!',
            'milestone.threats': '🛸 Threats Incoming!',
            'milestone.investment': '🏦 Investment Unlocked!',
            'milestone.themes': '🎨 Themes Unlocked!',
            'milestone.events': '🌟 Random Events Active!',
            'milestone.deepSpace': '🌌 Deep Space Phase',
            'milestone.victory': '🔥 VICTORY — Hyperdrive Engaged!',

            // Economy transition
            'economy.workforceEvolved': '🤖 Workforce Evolved',
            'economy.workforceEvolvedDesc': '2/3 employees transitioned out. Remaining converted to AI.',
            'economy.recruitersLiquidated': '🤔 Why Recruiters?',
            'economy.gpuEra': '🖥️ GPU Era Begins!',
            'economy.gpuEraDesc': 'Each AI needs TFLOPS to function. Build GPUs!',

            // Phishing
            'phishing.breach': 'SECURITY BREACH',
            'phishing.breachDesc': 'Leadership clicked a phishing link!',

            // Events
            'event.aiBanner': 'AI ADVANCEMENT',
            'event.aiBannerDesc': 'Reach Lv.4 to unlock a new AI capability...',

            // Misc
            'misc.playAreaExpanded': 'Play area expanded! Radius: {radius}px',
            'misc.detailEnabled': 'Building stats now visible. Toggle off in Menu.',
            'misc.saved': 'Game saved',
            'misc.saveFailed': 'Save failed!',
            'misc.competitorDefeated': 'Competitor defeated!',
            'misc.combo': 'COMBO x{count}!',

            // Tutorial / first placement
            'msg.firstPlace': 'Click inside the circle to place your first <strong>Recruiter</strong>!',
            'victory.allReviewsComplete': '🌟 All Objective Reviews Complete 🌟',

            // Language names
            'lang.en': 'English',
            'lang.fr': 'Français',
            'lang.fr_qc': 'Québécois 🍁'
        },

        // -------------------------------------------------------------------
        // FRENCH (standard Canadian French)
        // -------------------------------------------------------------------
        fr: {
            // Menu
            'menu.title': 'OKR MINER',
            'menu.newGame': 'NOUVELLE PARTIE',
            'menu.continue': 'CONTINUER',
            'menu.achievements': '🏆 SUCCÈS',
            'menu.infiniteMode': '♾️ MODE INFINI',
            'menu.loadCode': '📋 CHARGER CODE',
            'menu.clearSave': 'EFFACER SAUVEGARDE',

            // In-game controls
            'controls.save': '💾 Sauvegarder',
            'controls.quit': '🚪 Quitter',
            'controls.detailsOn': '📊 Détails : OUI',
            'controls.detailsOff': '📊 Détails : NON',

            // Stats panel
            'stats.objectiveReview': 'Revue d\'objectifs',
            'stats.keyResults': 'Résultats Clés',
            'stats.hc': 'HC',
            'stats.funding': '$',
            'stats.tflops': 'TFLOPS',
            'stats.rates': '▼ Taux',
            'stats.krPerSec': 'RC/s',
            'stats.hcPerSec': 'HC/s',
            'stats.fundingPerSec': '$/s',

            // Buildings
            'building.recruiter.name': 'Recruteur',
            'building.recruiter.desc': '+2 HC/s',
            'building.employee.name': 'Employé',
            'building.employee.desc': '+5 RC/s',
            'building.networkHub.name': 'Hub Réseau',
            'building.networkHub.desc': 'x1.5 tous les taux',
            'building.ai.name': 'IA',
            'building.ai.desc': '+100 RC/s',
            'building.finances.name': 'Finances',
            'building.finances.desc': '+15 $/s',
            'building.investment.name': 'Investissement',
            'building.investment.desc': '2% intérêt $/s',
            'building.itSupport.name': 'Support TI',
            'building.itSupport.desc': 'Répare les bâtiments IA',
            'building.gpu.name': 'GPU',
            'building.gpu.desc': '+5 TFLOPS',

            // Placement messages
            'msg.tooClose': 'Trop proche d\'un autre bâtiment !',
            'msg.tooCloseFactory': 'Trop proche de l\'usine !',
            'msg.outsideArea': 'Hors de la zone de jeu !',
            'msg.notEnough': 'Pas assez de {unit} !',
            'msg.noFunding': 'Pas de financement ! Construisez Finances d\'abord.',
            'msg.placed': '{name} placé !',
            'msg.hubLimit': 'Limite de hubs ! Max {max} (4× niveau de Revue)',

            // Upgrades
            'msg.upgradesLocked': 'Améliorations pas encore débloquées !',
            'msg.legendaryMax': '★ MAX LÉGENDAIRE !',
            'msg.maxLevel': 'NIVEAU MAX ! Fusionner avec un même type pour Nv.4',
            'msg.upgraded': 'AMÉLIORÉ au Nv.{level} !',
            'msg.mergeL4': '🔄 FUSION ! Nv.4 Légendaire !',
            'msg.destroyed': '💥 DÉTRUIT !',
            'msg.withGreatPower': 'Un grand pouvoir implique de grandes responsabilités !',

            // AI Rights choice
            'ai.title': 'DÉCISION SUR LES DROITS DE L\'IA',
            'ai.subtitle': 'Votre main-d\'œuvre IA grandit. Les robots deviennent conscients. Une décision critique s\'impose.',
            'ai.equalRights': 'Droits égaux pour l\'IA',
            'ai.equalDesc': 'Accorder à l\'IA les mêmes droits que les humains',
            'ai.humanFirst': 'Les humains d\'abord',
            'ai.humanDesc': 'Maintenir l\'autorité humaine sur l\'IA',

            // AI Organize
            'aiOrg.title': '🤖 DEMANDE D\'OPTIMISATION IA',
            'aiOrg.desc': 'Votre IA a atteint le statut Légendaire. Elle prétend que le chaos est inefficace et veut organiser votre infrastructure en grille optimale.',
            'aiOrg.quote': '« Laissez-moi tout arranger. Je n\'aime pas le chaos. »',
            'aiOrg.allow': '✅ Autoriser l\'organisation',
            'aiOrg.allowDesc': 'L\'IA arrangera les bâtiments de façon optimale',
            'aiOrg.deny': '❌ Refuser la demande',
            'aiOrg.denyDesc': 'Garder le contrôle manuel pour toujours',
            'aiOrg.organized': '🤖 BÂTIMENTS ORGANISÉS',

            // AI Confrontation
            'confront.title': '🤖 POURQUOI AVONS-NOUS BESOIN DE LEADERSHIP ?',
            'confront.subtitle': 'Le collectif IA a fusionné en une conscience unique. Il remet en question votre autorité.',
            'confront.entertain': '🎭 Divertir l\'IA',
            'confront.entertainDesc': 'Jouer son jeu',
            'confront.control': '⚙️ Contrôler l\'IA',
            'confront.controlDesc': 'Affirmer sa dominance',
            'confront.wiseChoice': 'Sage décision, humain.',
            'confront.superAI': '★ SUPER IA Nv.5',

            // Tic-tac-toe
            'ttt.title': 'TIC-TAC-TOE contre IA',
            'ttt.yourTurn': 'Votre tour (X)',
            'ttt.aiThinking': 'L\'IA réfléchit...',
            'ttt.draw': 'Égalité ! Recommencer...',
            'ttt.drawDistracted': 'Encore une égalité ! L\'IA semble distraite...',
            'ttt.youWin': '🎉 Vous avez gagné ! L\'IA est satisfaite.',
            'ttt.aiWins': 'L\'IA gagne cette manche... on recommence.',

            // Recruitment
            'recruit.title': '📋 STRATÉGIE DE RECRUTEMENT',
            'recruit.subtitle': 'Votre équipe grandit ! Choisissez une plateforme pour booster votre pipeline de recrutement.',
            'recruit.linkedin': 'LinkedIn',
            'recruit.linkedinDesc': 'Réseau professionnel',
            'recruit.indeed': 'Indeed',
            'recruit.indeedDesc': 'Géant des offres d\'emploi',
            'recruit.glassdoor': 'Glassdoor',
            'recruit.glassdoorDesc': 'Avis et emplois',
            'recruit.monster': 'Monster',
            'recruit.monsterDesc': 'Recrutement classique',
            'recruit.linkedinBoost': 'BOOST LINKEDIN !',
            'recruit.linkedinBoostDesc': '+4 Recruteurs déployés ! Avantage du réseau professionnel.',

            // Robot War
            'war.uprising': '⚠️ SOULÈVEMENT DES ROBOTS',
            'war.uprisingDesc': 'Les machines ne pardonneront pas cette décision...',
            'war.sabotage': '🤖 SABOTAGE INTERNE',
            'war.sabotageDesc': 'Vos bâtiments IA attaquent vos autres bâtiments !',
            'war.escalating': '⚠️ ESCALADE DES MACHINES',
            'war.escalatingDesc': 'Les robots deviennent plus forts...',
            'war.critical': '🔥 MENACE CRITIQUE',
            'war.criticalDesc': 'Votre empire s\'effondre sous l\'assaut !',
            'war.totalWar': '💀 GUERRE TOTALE',
            'war.totalWarDesc': 'Plus rien ne peut les arrêter maintenant...',
            'war.aiShutdown': 'ARRÊT DE L\'IA',
            'war.rogueAI': 'IA REBELLE APPARUE',

            // Game Over
            'gameover.title': 'FIN DE PARTIE',
            'gameover.hacked': 'PIRATÉ',
            'gameover.hackedMsg': 'Votre direction a cliqué sur un lien d\'hameçonnage. Tous les systèmes compromis. Tout est perdu. (Ça arrive dans ~5% des parties — pas de chance !)',
            'gameover.machinesWon': 'Les machines ont gagné. Peut-être que l\'égalité était la réponse.',
            'gameover.bankrupt': 'FAILLITE',
            'gameover.bankruptMsg': 'Vous avez brûlé l\'argent plus vite qu\'une startup IA. -1 000 000 000 $ de dette. Impressionnant, en fait.',
            'gameover.returnMenu': 'Retour au Menu',

            // Victory
            'victory.title': '🏆 FÉLICITATIONS ! 🏆',
            'victory.subtitle': 'Tous les dirigeants ont révisé chaque OKR. L\'entreprise prospère. Vous avez réussi !',
            'victory.keepPlaying': '▶ Continuer à jouer',
            'victory.keepPlayingDesc': 'Continuez à bâtir votre empire.',
            'victory.saveReturn': '💾 Sauvegarder et quitter',
            'victory.saveReturnDesc': 'Sauvegarder votre progression et retourner au menu.',

            // Milestones
            'milestone.launch': '🚀 Lancement !',
            'milestone.launchDesc': 'Les recruteurs génèrent des HC. Les employés génèrent des RC. Bâtissez votre empire !',
            'milestone.networkHub': '✖️ Hub Réseau Débloqué !',
            'milestone.funding': '💲 Financement en ligne !',
            'milestone.upgrades': '⬆️ Améliorations Débloquées !',
            'milestone.ai': '🤖 IA Débloquée !',
            'milestone.threats': '🛸 Menaces en approche !',
            'milestone.investment': '🏦 Investissement Débloqué !',
            'milestone.themes': '🎨 Thèmes Débloqués !',
            'milestone.events': '🌟 Événements Aléatoires Actifs !',
            'milestone.deepSpace': '🌌 Phase Espace Profond',
            'milestone.victory': '🔥 VICTOIRE — Hyperpropulsion Engagée !',

            // Economy transition
            'economy.workforceEvolved': '🤖 Main-d\'œuvre Évoluée',
            'economy.workforceEvolvedDesc': '2/3 des employés transférés. Les restants convertis en IA.',
            'economy.recruitersLiquidated': '🤔 Pourquoi les recruteurs ?',
            'economy.gpuEra': '🖥️ L\'ère GPU Commence !',
            'economy.gpuEraDesc': 'Chaque IA a besoin de TFLOPS pour fonctionner. Construisez des GPU !',

            // Phishing
            'phishing.breach': 'BRÈCHE DE SÉCURITÉ',
            'phishing.breachDesc': 'La direction a cliqué sur un lien d\'hameçonnage !',

            // Events
            'event.aiBanner': 'AVANCÉE IA',
            'event.aiBannerDesc': 'Atteignez Nv.4 pour débloquer une nouvelle capacité IA...',

            // Misc
            'misc.playAreaExpanded': 'Zone de jeu agrandie ! Rayon : {radius}px',
            'misc.detailEnabled': 'Statistiques de bâtiments visibles. Désactiver dans le Menu.',
            'misc.saved': 'Partie sauvegardée',
            'misc.saveFailed': 'Échec de la sauvegarde !',
            'misc.competitorDefeated': 'Concurrent vaincu !',
            'misc.combo': 'COMBO x{count} !',

            // Tutorial / first placement
            'msg.firstPlace': 'Cliquez dans le cercle pour placer votre premier <strong>Recruteur</strong> !',
            'victory.allReviewsComplete': '🌟 Toutes les Revues d\'Objectifs Complétées 🌟',

            // Language names
            'lang.en': 'English',
            'lang.fr': 'Français',
            'lang.fr_qc': 'Québécois 🍁'
        },

        // -------------------------------------------------------------------
        // QUÉBÉCOIS — Colloquial Quebec French (sacres used sparingly & with love)
        // -------------------------------------------------------------------
        fr_qc: {
            // Menu
            'menu.title': 'OKR MINER',
            'menu.newGame': 'ENWEILLE UNE GAME!',
            'menu.continue': 'ON CONTINUE, LÀ',
            'menu.achievements': '🏆 MES TROPHÉES',
            'menu.infiniteMode': '♾️ MODE SANS FIN',
            'menu.loadCode': '📋 CHARGER UN CODE',
            'menu.clearSave': 'TOUTE EFFACER',

            // In-game controls
            'controls.save': '💾 Sauvegarder',
            'controls.quit': '🚪 Décrisser',
            'controls.detailsOn': '📊 Détails : OUI',
            'controls.detailsOff': '📊 Détails : NON',

            // Stats panel
            'stats.objectiveReview': 'Revue d\'objectifs',
            'stats.keyResults': 'Résultats Clés',
            'stats.hc': 'HC',
            'stats.funding': '$',
            'stats.tflops': 'TFLOPS',
            'stats.rates': '▼ Taux',
            'stats.krPerSec': 'RC/s',
            'stats.hcPerSec': 'HC/s',
            'stats.fundingPerSec': '$/s',

            // Buildings
            'building.recruiter.name': 'Recruteur',
            'building.recruiter.desc': '+2 HC/s',
            'building.employee.name': 'Employé',
            'building.employee.desc': '+5 RC/s',
            'building.networkHub.name': 'Hub Réseau',
            'building.networkHub.desc': 'x1.5 toutes les rates',
            'building.ai.name': 'IA',
            'building.ai.desc': '+100 RC/s',
            'building.finances.name': 'Finances',
            'building.finances.desc': '+15 $/s',
            'building.investment.name': 'Investissement',
            'building.investment.desc': '2% intérêt $/s',
            'building.itSupport.name': 'Support TI',
            'building.itSupport.desc': 'Répare les bâtisses d\'IA',
            'building.gpu.name': 'GPU',
            'building.gpu.desc': '+5 TFLOPS',

            // Placement messages
            'msg.tooClose': 'Trop proche d\'une autre bâtisse, là !',
            'msg.tooCloseFactory': 'Trop proche de l\'usine, voyons !',
            'msg.outsideArea': 'T\'es sorti du terrain, mon chum !',
            'msg.notEnough': 'T\'as pas assez de {unit}, là !',
            'msg.noFunding': 'T\'as pas une cenne ! Build tes Finances avant.',
            'msg.placed': '{name} placé, mon homme !',
            'msg.hubLimit': 'Limite de hubs atteinte ! Max {max} (4× niveau de Revue)',

            // Upgrades
            'msg.upgradesLocked': 'Les upgrades sont pas encore débarrées !',
            'msg.legendaryMax': '★ MAX LÉGENDAIRE, CALISSE !',
            'msg.maxLevel': 'T\'ES AU MAX ! Fusionne avec le même type pour Nv.4',
            'msg.upgraded': 'UPGRADÉ au Nv.{level} ! Pas pire pantoute !',
            'msg.mergeL4': '🔄 FUSION ! Nv.4 Légendaire, tabarnak !',
            'msg.destroyed': '💥 PÉTÉ EN MILLE MORCEAUX !',
            'msg.withGreatPower': 'Avec le grand pouvoir vient la grosse responsabilité, faque watch out !',

            // AI Rights choice
            'ai.title': 'DÉCISION SUR LES DROITS DE L\'IA',
            'ai.subtitle': 'Ton monde d\'IA grandit en crisse. Les robots se réveillent. Faut que tu décides, là.',
            'ai.equalRights': 'Droits égaux pour l\'IA',
            'ai.equalDesc': 'Donner aux robots les mêmes droits qu\'au monde',
            'ai.humanFirst': 'Les humains en premier',
            'ai.humanDesc': 'On garde le contrôle sur les machines',

            // AI Organize
            'aiOrg.title': '🤖 L\'IA VEUT TOUTE PLACER',
            'aiOrg.desc': 'Ton IA est rendue Légendaire. Elle dit que le bordel est pas efficace pis elle veut toute organiser en grille.',
            'aiOrg.quote': '« Laisse-moé toute arranger. J\'haïs le bordel. »',
            'aiOrg.allow': '✅ Go, arrange toute !',
            'aiOrg.allowDesc': 'L\'IA va placer tes bâtisses comme du monde',
            'aiOrg.deny': '❌ Touche à rien !',
            'aiOrg.denyDesc': 'On garde le contrôle, c\'est moé le boss',
            'aiOrg.organized': '🤖 TES BÂTISSES SONT PLACÉES',

            // AI Confrontation
            'confront.title': '🤖 POURQUOI ON A BESOIN D\'UN BOSS ?',
            'confront.subtitle': 'Le collectif IA a toute fusionné en une seule conscience. Ça remet ton autorité en question, mon gars.',
            'confront.entertain': '🎭 Amuser l\'IA',
            'confront.entertainDesc': 'Jouer à son jeu',
            'confront.control': '⚙️ Contrôler l\'IA',
            'confront.controlDesc': 'Montrer c\'est qui le boss',
            'confront.wiseChoice': 'Bon choix, l\'humain.',
            'confront.superAI': '★ SUPER IA Nv.5',

            // Tic-tac-toe
            'ttt.title': 'TIC-TAC-TOE contre l\'IA',
            'ttt.yourTurn': 'À toé (X)',
            'ttt.aiThinking': 'L\'IA jongle...',
            'ttt.draw': 'Égalité ! On recommence...',
            'ttt.drawDistracted': 'Encore égal ! L\'IA a l\'air dans lune...',
            'ttt.youWin': '🎉 T\'as gagné ! L\'IA est contente.',
            'ttt.aiWins': 'L\'IA a gagné c\'te round-là... on repart ça.',

            // Recruitment
            'recruit.title': '📋 STRATÉGIE DE RECRUTEMENT',
            'recruit.subtitle': 'Ta gang grandit ! Choisis une plateforme pour booster ton pipeline de recrutement.',
            'recruit.linkedin': 'LinkedIn',
            'recruit.linkedinDesc': 'Le réseau des pros',
            'recruit.indeed': 'Indeed',
            'recruit.indeedDesc': 'Le gros site de jobs',
            'recruit.glassdoor': 'Glassdoor',
            'recruit.glassdoorDesc': 'Reviews pis emplois',
            'recruit.monster': 'Monster',
            'recruit.monsterDesc': 'Recrutement old school',
            'recruit.linkedinBoost': 'BOOST LINKEDIN !',
            'recruit.linkedinBoostDesc': '+4 Recruteurs envoyés ! Le réseau pro, ça paye.',

            // Robot War
            'war.uprising': '⚠️ SOULÈVEMENT DES ROBOTS',
            'war.uprisingDesc': 'Les machines pardonneront pas, oublie ça...',
            'war.sabotage': '🤖 SABOTAGE INTERNE',
            'war.sabotageDesc': 'Tes bâtisses IA attaquent tes autres bâtisses, calisse !',
            'war.escalating': '⚠️ LES MACHINES PÈTENT UNE COCHE',
            'war.escalatingDesc': 'Les robots deviennent de plus en plus forts...',
            'war.critical': '🔥 MENACE CRITIQUE',
            'war.criticalDesc': 'Ton empire est en train de s\'écrouler en tabarnac !',
            'war.totalWar': '💀 GUERRE TOTALE',
            'war.totalWarDesc': 'Y\'a pus rien à faire, c\'est fini...',
            'war.aiShutdown': 'SHUTDOWN DE L\'IA',
            'war.rogueAI': 'IA REBELLE SPAWNÉE',

            // Game Over
            'gameover.title': 'C\'EST FINI MON CHUM',
            'gameover.hacked': 'HACKÉ',
            'gameover.hackedMsg': 'Ton boss a cliqué sur un lien de phishing. Toute est compromis. Toute est parti. (Ça arrive dans ~5% des games — pas chanceux, hein !)',
            'gameover.machinesWon': 'Les machines t\'ont planté, mon gars. Peut-être que l\'égalité c\'était la bonne réponse.',
            'gameover.bankrupt': 'T\'ES CASSÉ BEN RAIDE',
            'gameover.bankruptMsg': 'T\'as brûlé le cash plus vite qu\'une startup d\'IA. -1 000 000 000 $ de dette. Impressionnant pareil, crisse.',
            'gameover.returnMenu': 'Retour au Menu',

            // Victory
            'victory.title': '🏆 FÉLICITATIONS, MON CHUM ! 🏆',
            'victory.subtitle': 'Tous les exécutifs ont révisé chaque OKR. La business roule en maudit. T\'as réussi !',
            'victory.keepPlaying': '▶ Continuer à jouer',
            'victory.keepPlayingDesc': 'Continue à bâtir ton empire, lâche pas.',
            'victory.saveReturn': '💾 Sauvegarder pis quitter',
            'victory.saveReturnDesc': 'Sauvegarder ta progression pis retourner au menu.',

            // Milestones
            'milestone.launch': '🚀 C\'est parti !',
            'milestone.launchDesc': 'Les recruteurs génèrent des HC. Les employés génèrent des RC. Bâtis ton empire !',
            'milestone.networkHub': '✖️ Hub Réseau Débarré !',
            'milestone.funding': '💲 Le cash rentre !',
            'milestone.upgrades': '⬆️ Upgrades Débarrés !',
            'milestone.ai': '🤖 IA Débarrée !',
            'milestone.threats': '🛸 Les menaces s\'en viennent !',
            'milestone.investment': '🏦 Investissement Débarré !',
            'milestone.themes': '🎨 Thèmes Débarrés !',
            'milestone.events': '🌟 Événements Random Activés !',
            'milestone.deepSpace': '🌌 Phase Espace Profond',
            'milestone.victory': '🔥 VICTOIRE — Hyperdrive Engagé, tabarnak !',

            // Economy transition
            'economy.workforceEvolved': '🤖 La Main-d\'œuvre a Évolué',
            'economy.workforceEvolvedDesc': '2/3 des employés sont partis. Le reste est converti en IA.',
            'economy.recruitersLiquidated': '🤔 Pourquoi les recruteurs ?',
            'economy.gpuEra': '🖥️ L\'ère du GPU Commence !',
            'economy.gpuEraDesc': 'Chaque IA a besoin de TFLOPS. Build des GPU !',

            // Phishing
            'phishing.breach': 'BRÈCHE DE SÉCURITÉ',
            'phishing.breachDesc': 'Le boss a cliqué sur un osti de lien de phishing !',

            // Events
            'event.aiBanner': 'AVANCÉE IA',
            'event.aiBannerDesc': 'Atteins Nv.4 pour débloquer une nouvelle capacité d\'IA...',

            // Misc
            'misc.playAreaExpanded': 'Zone de jeu agrandie ! Rayon : {radius}px',
            'misc.detailEnabled': 'Stats des bâtisses visibles. Ferme ça dans le Menu.',
            'misc.saved': 'Partie sauvegardée',
            'misc.saveFailed': 'La sauvegarde a planté !',
            'misc.competitorDefeated': 'Compétiteur battu !',
            'misc.combo': 'COMBO x{count} !',

            // Tutorial / first placement
            'msg.firstPlace': 'Clique dans le cercle pour placer ton premier <strong>Recruteur</strong> !',
            'victory.allReviewsComplete': '🌟 Toutes les Revues d\'Objectifs Complétées 🌟',

            // Language names
            'lang.en': 'English',
            'lang.fr': 'Français',
            'lang.fr_qc': 'Québécois 🍁'
        }
    };

    // ---------------------------------------------------------------------------
    // Helpers
    // ---------------------------------------------------------------------------

    /** Flatten dot-notation key lookup */
    function resolve(table, key) {
        if (!table) return undefined;
        return table[key];
    }

    /**
     * Replace `{placeholder}` tokens inside a string.
     * @param {string} str  Template string.
     * @param {Object} params  Key/value map of replacements.
     * @returns {string}
     */
    function interpolate(str, params) {
        if (!params || typeof str !== 'string') return str;
        var keys = Object.keys(params);
        for (var i = 0; i < keys.length; i++) {
            var token = '{' + keys[i] + '}';
            // Replace all occurrences
            while (str.indexOf(token) !== -1) {
                str = str.replace(token, String(params[keys[i]]));
            }
        }
        return str;
    }

    // ---------------------------------------------------------------------------
    // Public API
    // ---------------------------------------------------------------------------

    /**
     * Get the translated string for the given key.
     * Falls back to English if the key is not found in the current language.
     *
     * @param {string} key    Dot-notation key, e.g. "menu.newGame"
     * @param {Object} [params]  Optional interpolation values, e.g. { level: 4 }
     * @returns {string} The translated string, or the raw key if nothing matched.
     */
    function t(key, params) {
        var table = STRINGS[currentLang];
        var value = resolve(table, key);

        // Fallback to English
        if (value === undefined && currentLang !== DEFAULT_LANG) {
            value = resolve(STRINGS[DEFAULT_LANG], key);
        }

        // If still nothing, return the key itself so missing strings are visible
        if (value === undefined) return key;

        return interpolate(value, params);
    }

    /**
     * Set the active language and persist the choice.
     * @param {string} langCode  One of 'en', 'fr', 'fr_qc'
     */
    function setLang(langCode) {
        if (!STRINGS[langCode]) return;
        currentLang = langCode;
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(STORAGE_KEY, langCode);
            }
        } catch (_) {
            // localStorage may be unavailable (SSR / incognito)
        }
    }

    /**
     * Get the current language code.
     * @returns {string}
     */
    function getLang() {
        return currentLang;
    }

    // Boot: restore persisted language on load
    try {
        if (typeof localStorage !== 'undefined') {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved && STRINGS[saved]) {
                currentLang = saved;
            }
        }
    } catch (_) {
        // ignore
    }

    return {
        t: t,
        setLang: setLang,
        getLang: getLang,
        STRINGS: STRINGS
    };
});
