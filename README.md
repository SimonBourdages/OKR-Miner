# Team Dominos - Digital Transformation Journey

A complete 15-level game featuring evolving rendering styles that represent the journey from manual work to full automation.

> **Update:** Active gameplay now skips the former Phase 2. Main progression goes from Level 5 directly to Level 11 (automation).
>
> **Phase 3 standalone link:** `phase3.html` (or `index.html?mode=phase3`)

## 🎮 Game Structure

### Phase 1: Levels 1-5 (3D Platformer)
- **Rendering**: Three.js 3D graphics
- **Currency**: DP (Delivery Points)
- **Gameplay**: Manual platforming and OKR collection
- **Controls**: WASD to move, SPACE to jump, SHIFT to sprint (after L3)
- **Unlocks**: Sprint (L3), Double Jump (L4)

**Levels:**
1. Tutorial - 3 OKRs (10 DP reward)
2. Navigate gaps - 5 OKRs (15 DP reward)
3. Avoid obstacles - 7 OKRs (20 DP reward) + Sprint unlock
4. Vertical platforming - 10 OKRs (30 DP reward) + Double Jump
5. BOSS: The Bureaucrat - 15 OKRs (50 DP reward) → **EVOLUTION 1**

### Phase 2: Levels 6-10 (2.5D Isometric)
- **Rendering**: 2D Canvas with isometric projection
- **Currency**: MP (Management Points)
- **Gameplay**: Hire and manage AI workers
- **Controls**: WASD to move, Click to hire workers
- **Evolution**: DP→MP reset, keep 50% of player stats

**Levels:**
6. First AI hire tutorial - 10 OKRs (30 MP reward)
7. Manage 3 workers - 15 OKRs (50 MP reward)
8. Timed challenge - 20 OKRs (75 MP reward)
9. Optimization puzzle - 30 OKRs (100 MP reward)
10. BOSS: Scope Creep - 50 OKRs (150 MP reward) → **EVOLUTION 2**

### Phase 3: Levels 11-15 (2D Abstract)
- **Rendering**: 2D Canvas with data visualization/node-based UI
- **Currency**: AC (Automation Credits)
- **Gameplay**: Place automation nodes and watch exponential growth
- **Controls**: Click to place automation buildings
- **Evolution**: MP→AC reset, AI workers at 25% speed

**Levels:**
11. First conveyor - 100 OKRs (100 AC reward)
12. Network topology - 500 OKRs (200 AC reward)
13. Exponential growth - 10K OKRs (500 AC reward)
14. Singularity - 100K OKRs (1000 AC reward)
15. FINAL: Digital Transformation - 1M OKRs → **VICTORY**

## 🎯 Key Features

### Evolution Transitions
- **Evolution 1 (Level 5→6)**: Fade to white cutscene, switch from 3D→Isometric, currency reset
- **Evolution 2 (Level 10→11)**: Glitch effect cutscene, switch from Isometric→Abstract, automation unlocked

### Automation Buildings (Phase 3)
- **Collector**: 50 AC - Produces 1 OKR/s
- **Processor**: 150 AC - Produces 5 OKR/s
- **Multiplier**: 500 AC - Produces 25 OKR/s
- **Synthesizer**: 2000 AC - Produces 100 OKR/s

### Save System
- Auto-saves after each level completion
- Manual save via "Save" button
- Stores: Level progress, currencies, stats, workers, buildings

### Victory Screen
Three endings to choose from:
- 🌴 **RETIRE**: Watch the automation forever
- 🤖 **MERGE**: Become one with the system
- 🔄 **RESTART**: New Game+ with 2x bonuses

## 🕹️ Controls Summary

**Phase 1 (3D):**
- WASD - Move in 3D space
- SPACE - Jump (Double jump after Level 4)
- SHIFT - Sprint (after Level 3)

**Phase 2 (Isometric):**
- WASD - Move in 2D plane
- Click "Hire Worker" button to spend MP on AI workers

**Phase 3 (Abstract):**
- Click building buttons to select
- Click canvas to place automation nodes
- Mostly passive watching

**Universal:**
- Save button - Manual save
- Skip Level button - Testing/debug feature

## 🎨 Visual Styles

1. **Phase 1**: Full 3D with Three.js - Sky blue background, realistic shadows, perspective camera
2. **Phase 2**: Isometric 2D - Dark purple background, diamond-shaped tiles, top-down view
3. **Phase 3**: Abstract cyberpunk - Black background with cyan grid, glowing nodes, circular progress indicators

## 🚀 Technical Implementation

- **Engine**: Vanilla JavaScript with Three.js (Phase 1 only)
- **Rendering**: Switches between WebGL (Three.js) and 2D Canvas contexts
- **Physics**: Custom platformer physics in Phase 1
- **AI**: Pathfinding for worker movement in Phase 2
- **Animation**: CSS animations for cutscenes, canvas animations for Phase 3

## 📊 Progression Curve

- **Phase 1**: 100% manual input, linear growth
- **Phase 2**: 50-20% manual input, workers automate collection
- **Phase 3**: 10-0% manual input, exponential idle growth

The game becomes increasingly passive, reflecting real digital transformation where automation reduces manual work.

## 🎮 How to Play

1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge)
2. Click "START GAME" to begin
3. Complete Level 1-5 manually to experience the 3D platformer
4. After Evolution 1, Phase 2 is skipped and the game jumps directly to full automation (Level 11+)
5. Build your automation empire to reach 1 million OKRs
6. Choose your ending!

## 💾 Browser Requirements

- Modern browser with WebGL support
- ES6 module support
- LocalStorage enabled for save system
- Internet connection for Three.js CDN

## 🎯 Game Balance

The game is designed to be addictive through:
- Progressive unlocks that change gameplay
- Dramatic visual/mechanical shifts at evolutions
- Exponential growth satisfaction in Phase 3
- Clear goals with visible progress bars
- Multiple currencies creating distinct phases

Enjoy your journey to digital transformation! 🚀
