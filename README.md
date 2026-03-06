# OKR Miner

### ⛏️ Engine Building Game

A space-themed engine building game where you grow a corporate empire in space. Place buildings, hire talent, manage finances, and achieve Key Results. Built as a single HTML file.

🎮 **Play now:** [game.thisai.fun](https://game.thisai.fun)

---

## 🚀 How to Play

1. Click **NEW GAME** from the main menu
2. Select a building from the right panel and click on the canvas to place it
3. Buildings auto-generate resources — watch your Key Results grow
4. Reach Objective Review milestones to unlock new buildings and mechanics
5. Manage HeadCount (HC), Funding ($), and Key Results (KR)
6. Defend against Competitors and Technical Debt ships
7. Use ☰ Menu button for save, quit, sound, and more

## 📊 Objective Review Progression

Each milestone unlocks new features as your total KRs grow:

| # | KR Goal | Unlock | Description |
|---|---------|--------|-------------|
| 1 | 0 | 🏢 Recruiter, Employee | Starting buildings — generate HC and KR |
| 2 | 50 | ✖️ Multiplier | Boosts ALL production rates by 1.5x each |
| 3 | 500 | 💲 Finances | Introduces Funding ($) — buildings need $ to run |
| 4 | 5,000 | 🏦 Bank | Earns 2% interest on your Funding per second |
| 5 | 50,000 | 🤖 AI | High-output KR generator (+100 KR/s) |
| 6 | 500K | 🛸 Spaceships | Technical Debt ships appear and damage buildings |
| 7 | 1M | 🍕 Morale Events | Buy morale boosts that heal damaged buildings |
| 8 | 5M | ☠️ Competitors | Rival ships try to poach your Key Results |
| 9 | 50M | 🎲 Random Events | 100 space events — some help, some hurt |
| 10 | 100M | 🎨 Themes | Unlock visual theme selection with production bonuses |
| 11 | 500M | ⬆️ Upgrades | Click buildings to upgrade them to Lv.2 and Lv.3 |
| 12-15 | 5B+ | 🌌 Deep Space | Play area expands, new galaxy backgrounds |

Each milestone also **expands the circular play area** by 20px radius.

## 🏗️ Building Types

| Building | Cost | Output | Role |
|---|---|---|---|
| **Recruiter** | 50 HC | +2 HC/s | Talent beacon — generates HeadCount |
| **Employee** | 150 HC | +5 KR/s | Work station — generates Key Results |
| **Multiplier** | 500 HC | x1.5 all | Network hub — multiplies all production |
| **AI** | 2000 HC | +100 KR/s | Robot worker — massive KR output |
| **Finances** | 75 HC | +5 $/s | Investment satellite — generates Funding |
| **Bank** | 300 HC | 2% $/s | Investment fund — earns interest on $ |

All buildings can be upgraded to **Lv.3** for increased output (2x at Lv.2, 4.5x at Lv.3).

## ⚙️ Game Mechanics

- **Circular Play Area**: Buildings must be placed inside the expanding circle
- **Asteroid Belt**: Rotating asteroid field marks the boundary
- **Leadership (Mothership)**: Central hub that evolves through 4 visual stages
- **Funding ($)**: Buildings consume $ to run — build Finances to keep the lights on
- **UNDERFUNDED**: Production halves if $ runs out
- **Spaceships**: Technical Debt ships damage buildings on impact
- **Competitors**: Rival ships poach KRs from Leadership — click to destroy
- **Morale Events**: Flying drones that heal the most damaged building
- **100 Random Events**: Meteor showers, stellar bonuses, cosmic shifts
- **5 Themes**: Emerald Matrix, Neon Synthwave, Solar Forge, Arctic Command, Deep Space
- **MST Connections**: Buildings chain to nearest neighbor via minimum spanning tree

## 💾 Save System

- **Auto-save** every 30 seconds to localStorage
- **💾 Save** button shows a portable save code
- **📋 Load Code** on menu to resume on any device
- **🚪 Quit** saves and returns to menu

## 📱 Platforms

- **Web**: Any modern browser at [game.thisai.fun](https://game.thisai.fun)
- **Android**: APK available in repo (`OKR-Miner.apk`) — works offline
- **Mobile**: Responsive layout, touch controls, pinch-to-zoom

## 🎨 Tech Stack

- Single HTML file, no build step, no dependencies
- Vanilla JavaScript (ES5), HTML5 Canvas
- HD galaxy backgrounds from Unsplash
- Procedural music + sound effects via Web Audio API

## 🔗 Links

- 🌐 **Play**: [game.thisai.fun](https://game.thisai.fun)
- 📦 **Repo**: [github.com/SimonBourdages/OKR-Miner](https://github.com/SimonBourdages/OKR-Miner)
- 📊 **Stats**: [game.thisai.fun/stats.html](https://game.thisai.fun/stats.html)

---
Built with ☕ and 🤖
