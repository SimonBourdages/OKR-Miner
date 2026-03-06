# OKR Miner

### ⛏️ Engine Building Game

A space-themed engine building game where you grow a corporate empire among the stars. Hire talent, manage finances, deploy AI, and achieve Key Results — all while defending against competitors and technical debt.

🎮 **Play now:** [game.thisai.fun](https://game.thisai.fun)

---

## 🚀 How to Play

1. Click **NEW GAME** from the main menu
2. Select a building from the right panel and click inside the circular play area
3. Buildings auto-generate resources — watch your Key Results (KR) grow
4. Reach Objective Review milestones to unlock new buildings and mechanics
5. Manage three currencies: **HC** (HeadCount), **$** (Funding), and **KR** (Key Results)
6. Defend your operation against Competitors and Technical Debt
7. Use ☰ Menu button for save, quit, sound, and more

## 📊 Objective Review Progression

Each milestone unlocks new features as your total KRs grow:

| # | KR Goal | Unlock | Description |
|---|---------|--------|-------------|
| 1 | 0 | 🏢 Recruiter + Employee | Starting buildings — Recruiters generate HC, Employees generate KR |
| 2 | 50 | ✖️ Multiplier | Network Hub — boosts ALL production rates by x1.5 each |
| 3 | 500 | 💲 Finances | Introduces Funding ($) — buildings consume $ to operate |
| 4 | 5K | 🏦 Bank | Investment Fund — earns 2% interest on your $ per second |
| 5 | 50K | 🤖 AI | Robot Worker — massive KR generator (+100 KR/s) |
| 6 | 500K | 🛸 Spaceships | Technical Debt ships appear and damage buildings on impact |
| 7 | 1M | 🍕 Morale Events | Pizza Party drones — fly to and heal the most damaged building |
| 8 | 5M | ☠️ Competitors | Corporate Raider ships poach your KRs from Leadership |
| 9 | 50M | 🎲 Random Events | 100 space events fire every 15-35s — some help, some hurt |
| 10 | 100M | 🎨 Themes | Unlock 5 visual themes, each with a small production bonus |
| 11 | 500M | ⬆️ Upgrades | Click buildings to upgrade to Lv.2 (2x output) and Lv.3 (4.5x) |
| 12-15 | 5B+ | 🌌 Deep Space | Play area expands, new galaxy backgrounds, Leadership evolves |

Each milestone also **expands the circular play area** by 20px radius.

## 🏗️ Building Types

| Building | Cost | Output | $ Cost | Role |
|---|---|---|---|---|
| **Recruiter** | 50 HC | +2 HC/s | 1 $/s | Talent Beacon — generates HeadCount to hire more |
| **Employee** | 150 HC | +5 KR/s | 3 $/s | Work Station — generates Key Results |
| **Multiplier** | 500 HC | x1.5 all | 5 $/s | Network Hub — multiplies all production rates |
| **Finances** | 75 HC | +5 $/s | — | Investment Satellite — generates Funding |
| **Bank** | 300 HC | 2% $/s interest | — | Investment Fund — earns compound interest on $ |
| **AI** | 2,000 HC | +100 KR/s | 10 $/s | Robot Worker — high-output KR automation |
| **Morale Event** | 200 HC | 15 HP/s heal | 2 $/s | Pizza Party — drone that heals damaged buildings |

All buildings upgrade to **Lv.3**: Lv.2 = 2x output (2.5x cost), Lv.3 = 4.5x output (6x cost).

## 🛸 Threats

| Threat | Appears At | Behavior |
|---|---|---|
| **Technical Debt** | 500K KR | Ships fly across screen, damage buildings on impact (explode) |
| **Competitors** | 5M KR | Corporate Raiders fly to Leadership, poach KRs — click to destroy |

## ⚙️ Core Mechanics

- **Circular Play Area** — Buildings placed inside an expanding circle centered on Leadership
- **Rotating Asteroid Belt** — Dense asteroid field orbits outside the play boundary
- **Leadership (Mothership)** — Central hub evolving through 4 visual stages as you progress
- **Funding ($)** — Buildings consume $ to run; build Finances to stay solvent
- **UNDERFUNDED** — Production halves if $ runs out
- **MST Connections** — Buildings chain to nearest neighbor via minimum spanning tree
- **100 Random Events** — Meteor showers, stellar bonuses, cosmic shifts, and more
- **5 Themes** — Emerald Matrix (default), Neon Synthwave, Solar Forge, Arctic Command, Deep Space

## 💾 Save System

- **Auto-save** every 30 seconds to localStorage
- **💾 Save** button shows a portable save code (base64)
- **📋 Load Code** on main menu to resume on any device
- **🚪 Quit** saves and returns to menu

## 📱 Platforms

- **Web** — Any modern browser at [game.thisai.fun](https://game.thisai.fun)
- **Android** — Offline APK in repo (`OKR-Miner.apk`, 8.8MB)
- **Mobile** — Responsive layout with touch controls and pinch-to-zoom

## 🎨 Tech Stack

- Single HTML file (~5500 lines), no build step, no dependencies
- Vanilla JavaScript (ES5), HTML5 Canvas
- HD galaxy backgrounds from Unsplash
- Background music + SFX via Web Audio API

## 🔗 Links

- 🌐 **Play:** [game.thisai.fun](https://game.thisai.fun)
- 📦 **Repo:** [github.com/SimonBourdages/OKR-Miner](https://github.com/SimonBourdages/OKR-Miner)

---
Built with ☕ and 🤖
