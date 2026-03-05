# Team Dominos: 15 Levels with Evolving Rendering

## 🎮 COMPLETE GAME STRUCTURE

**15 Levels Total**
- **Levels 1-5:** Phase 1 - Manual platformer (3D low-poly)
- **Levels 6-10:** Phase 2 - Team management (2.5D isometric)
- **Levels 11-15:** Phase 3 - Full automation (2D abstract/UI-driven)

**2 Major Evolution Points:**
- **Evolution 1 @ Level 5 Complete:** Rendering changes from 3D to 2.5D isometric
- **Evolution 2 @ Level 10 Complete:** Rendering changes from 2.5D to 2D abstract

---

## 📊 LEVELS 1-5: "Manual Delivery"

### **Rendering Style: Full 3D with Three.js**
```javascript
// Three.js 3D rendering
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
camera.position.set(0, 10, 20); // Third-person behind player

// Low-poly 3D aesthetics
- BoxGeometry for characters (1x2x1)
- BoxGeometry for platforms
- BoxGeometry for OKRs (0.8x0.8x0.8, golden)
- Simple MeshLambertMaterial
- Real-time shadows
- Particle effects for pickups
```

### **Visual Style:**
- **Bright corporate office aesthetic**
- Realistic lighting (sun + ambient)
- Third-person camera following player
- Depth perception important for jumping
- Crossy Road / Super Mario 3D World vibe

### **Gameplay:**
- Pure manual 3D platforming
- WASD movement in 3D space
- Spacebar to jump with gravity physics
- Collect golden OKR cubes
- Deliver to Jrod (large building) at level end
- Earn **Delivery Points (DP)** per delivery

### **Level Progression:**

**Level 1: "First Day"**
- Tutorial level
- Flat platforms, easy jumps
- 3 OKRs to collect
- Reward: 10 DP

**Level 2: "The Gap"**
- Introduce jumping between platforms
- Moving platforms
- 5 OKRs
- Reward: 15 DP

**Level 3: "Meeting Rooms"**
- Add obstacles (meeting blockers)
- Timed platforms
- 7 OKRs
- Reward: 20 DP + Unlock Sprint

**Level 4: "The Cubicle Maze"**
- Complex 3D navigation
- Vertical platforming
- 10 OKRs
- Reward: 30 DP + Unlock Double Jump

**Level 5: "Promotion Day"**
- Boss level: "The Bureaucrat"
- Collect 15 OKRs while dodging paperwork attacks
- Reward: 50 DP + **TRIGGER EVOLUTION 1**

### **Upgrade Shop (Levels 1-5):**
```javascript
const Phase1Upgrades = {
  movementSpeed: { cost: [5, 10, 20], current: 5.0, max: 8.0 },
  jumpHeight: { cost: [10, 20, 40], current: 8.0, max: 12.0 },
  carryCapacity: { cost: [15, 30, 60], current: 1, max: 4 },
  sprintSpeed: { cost: [25], current: 0, max: 1.5 }, // Unlock at Level 3
  doubleJump: { cost: [40], current: false, max: true }, // Unlock at Level 4
  autoCollectRadius: { cost: [50, 100], current: 0, max: 3.0 }
};
```

**Total DP needed for Level 5:** ~200 DP (multiple level completions + collectibles)

---

## 🔥 EVOLUTION 1 CUTSCENE

**Trigger:** Complete Level 5

**What Happens:**
```
[Screen fades to white]

"Congratulations! You've been promoted to TEAM MANAGER!"
"Your perspective has changed. You now see the bigger picture."

[Camera zooms out dramatically]
[3D world flattens into isometric 2.5D view]
[UI transforms - AI Worker panel slides in from left]

"You can now hire AI teammates to help with deliveries."
"Focus on strategy. Let your team handle the routine work."

[New level loads in isometric view]
```

**Reset Rules:**
- Keep: 50% of movement speed upgrades
- Keep: Double jump ability
- Keep: All levels unlocked
- Reset: Currency (DP → MP)
- New: AI Worker system unlocked
- New: Isometric camera perspective

---

## 📊 LEVELS 6-10: "Team Management"

### **Rendering Style: 2.5D Isometric (2D Canvas)**
```javascript
// Switch to 2D Canvas rendering
ctx = canvas.getContext('2d');

// Isometric projection (fake 3D)
function worldToScreen(x, y, z) {
  const screenX = (x - z) * tileWidth / 2;
  const screenY = (x + z) * tileHeight / 4 - y * tileHeight / 2;
  return { screenX, screenY };
}

// Sprite-based rendering
- Player: Animated sprite (8 frames walk cycle)
- AI Workers: Different colored sprites
- Buildings: Pre-rendered isometric tiles
- OKRs: Floating isometric cubes
- Paths: Dotted lines showing AI routes
```

### **Visual Style:**
- **Modern tech campus aesthetic**
- Flat-shaded isometric tiles
- Blue/cyan color palette
- Multiple AI workers visible simultaneously
- Strategic overview perspective
- Stardew Valley / Habbo Hotel vibe

### **Gameplay Changes:**
- Still control player with WASD
- Can now click to hire AI workers
- AI workers appear and auto-run delivery routes
- Player collects bonus OKRs in hard-to-reach areas
- Both player + AI earn **Management Points (MP)**
- Build structures by clicking locations

### **Level Progression:**

**Level 6: "Your First Hire"**
- Tutorial: Hire your first AI worker
- Worker delivers 1 OKR/5 seconds automatically
- Player can still manually collect
- 10 OKRs total
- Reward: 30 MP + Unlock Runner #2

**Level 7: "Team Coordination"**
- Manage 3 AI workers
- Workers take different routes
- Optimize team placement
- 15 OKRs
- Reward: 50 MP + Unlock Coffee Station

**Level 8: "Rush Hour"**
- 5 AI workers available
- Moving obstacles
- Time pressure (90 seconds)
- 20 OKRs
- Reward: 75 MP + Unlock Delivery Hub

**Level 9: "Efficiency Expert"**
- Puzzle level: Optimize worker routes
- Limited worker slots (only 4 active)
- Must achieve 30 OKRs delivered
- Reward: 100 MP + Unlock Automation Research

**Level 10: "Digital Transformation"**
- Boss level: "The Scope Creep Monster"
- Grows bigger as it steals your OKRs
- Must coordinate 6 AI workers + yourself
- Defeat boss by delivering 50 OKRs
- Reward: 150 MP + **TRIGGER EVOLUTION 2**

### **AI Worker System:**
```javascript
const AIWorkers = {
  runner1: { hireCost: 10, speed: 1.0, capacity: 1, deliveryRate: 1 OKR/5sec },
  runner2: { hireCost: 25, speed: 1.5, capacity: 1, deliveryRate: 1 OKR/3sec },
  runner3: { hireCost: 50, speed: 2.0, capacity: 2, deliveryRate: 2 OKRs/3sec },
  speedUpgrade: { cost: 30, effect: '+25% all worker speed' },
  capacityUpgrade: { cost: 40, effect: '+1 worker capacity' }
};

const Buildings = {
  coffeeStation: { cost: 75, effect: '+50% worker speed in radius' },
  deliveryHub: { cost: 100, effect: 'Passive +5 OKRs/10sec' },
  trainingCenter: { cost: 150, effect: 'Workers 2x XP gain' },
  automationLab: { cost: 200, effect: 'Unlock Evolution 2' }
};
```

**UI Layout:**
```
┌─────────────────────────────────────┐
│  MP: 325    OKRs: 15/20   Time: 45s │
├──────────┬──────────────────────────┤
│ WORKERS  │                          │
│ [Runner1]│      ISOMETRIC VIEW      │
│ [Runner2]│    (Gameplay Area)       │
│ [Runner3]│                          │
│          │                          │
│ BUILDINGS│                          │
│ [Coffee] │                          │
│ [Hub]    │                          │
└──────────┴──────────────────────────┘
```

**Total MP needed for Level 10:** ~500 MP

---

## 🚀 EVOLUTION 2 CUTSCENE

**Trigger:** Complete Level 10

**What Happens:**
```
[Isometric view glitches and fragments]

"CONGRATULATIONS: DIRECTOR STATUS ACHIEVED"
"FULL AUTOMATION PROTOCOLS UNLOCKED"
"MANUAL PROCESSES NO LONGER REQUIRED"

[Screen transitions to abstract UI]
[World becomes node-based graph visualization]
[Numbers and statistics replace physical spaces]

"DEPLOY AUTOMATED SYSTEMS. OPTIMIZE EFFICIENCY."
"ACHIEVE EXPONENTIAL GROWTH. TRANSCEND LIMITATIONS."

[Level 11 loads - pure UI/numbers interface]
```

**Reset Rules:**
- Keep: All AI workers (at 25% speed)
- Keep: All building bonuses (at 25% effect)
- Keep: Player character (for placing buildings only)
- Reset: Currency (MP → AC - Automation Credits)
- New: Conveyor belt building system
- New: Exponential production multipliers
- New: Pure 2D UI-driven gameplay

---

## 📊 LEVELS 11-15: "Full Automation"

### **Rendering Style: 2D Abstract / UI-Driven**
```javascript
// Pure 2D Canvas with data visualization
ctx = canvas.getContext('2d');

// Node-graph visualization
function drawProductionNode(x, y, rate) {
  // Glowing circle node
  ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();
  
  // Production rate text
  ctx.fillStyle = '#fff';
  ctx.font = '14px monospace';
  ctx.fillText(`${rate}/sec`, x, y);
  
  // Connection lines to other nodes
  drawConnectionLines(node);
}

// Minimal player representation
- Player is small cursor/pointer
- Buildings are glowing nodes
- Conveyor belts are animated lines
- OKRs are particle streams
- Production stats overlay everything
```

### **Visual Style:**
- **Cyberpunk data visualization aesthetic**
- Dark background (#0a0a0a)
- Glowing neon nodes (gold, cyan, purple)
- Particle streams flowing between nodes
- Real-time graphs and statistics
- Massive numbers (100k+ OKRs/sec)
- Hacknet / Bitburner vibe

### **Gameplay Changes:**
- Almost no direct control
- Click to place automation buildings
- Buildings auto-process OKRs
- Watch exponential growth
- Optimize building placement for efficiency
- Minimal player input (10% active, 90% watching)

### **Level Progression:**

**Level 11: "First Pipeline"**
- Tutorial: Place first conveyor belt
- Connect OKR source → Processing Node → Jrod
- Watch automatic delivery (10 OKRs/sec)
- Reward: 100 AC + Unlock Efficiency Core

**Level 12: "Network Effects"**
- Multiple processing nodes
- Create optimal network topology
- Goal: Achieve 50 OKRs/sec
- Reward: 200 AC + Unlock Quantum Processor

**Level 13: "Exponential Growth"**
- Place efficiency multipliers
- Production compounds (100 → 1000 OKRs/sec)
- Goal: Deliver 10,000 total OKRs
- Reward: 500 AC + Unlock AI Director

**Level 14: "The Singularity Approaches"**
- Self-optimizing systems
- AI Directors auto-place buildings
- Watch production explode (10k+ OKRs/sec)
- Goal: Reach 100,000 total OKRs
- Reward: 1000 AC + Unlock The Cloud

**Level 15: "Transcendence"**
- Final level: Pure automation
- Upload consciousness to The Cloud
- Infinite scaling achieved
- Goal: Deliver 1,000,000 OKRs
- **VICTORY SCREEN**

### **Automation Buildings:**
```javascript
const AutomationBuildings = {
  // Basic Infrastructure
  conveyorBelt: { 
    cost: 50, 
    effect: 'Connects nodes, transports OKRs',
    visual: 'Animated line with particle flow'
  },
  
  processingNode: { 
    cost: 100, 
    effect: '10 OKRs/sec production',
    visual: 'Glowing gold circle node'
  },
  
  // Multipliers
  efficiencyCore: { 
    cost: 200, 
    effect: '2x production in radius',
    visual: 'Pulsing cyan aura'
  },
  
  quantumProcessor: { 
    cost: 500, 
    effect: '10x production in radius',
    visual: 'Purple quantum field effect'
  },
  
  // Advanced Automation
  aiDirector: { 
    cost: 1000, 
    effect: 'Auto-places optimal buildings, +100 OKRs/sec',
    visual: 'Animated neural network'
  },
  
  // Ultimate Buildings
  okrFactory: { 
    cost: 2000, 
    effect: 'Generates OKRs from nothing, +500 OKRs/sec',
    visual: 'Spinning golden vortex'
  },
  
  cloneLab: { 
    cost: 5000, 
    effect: 'Duplicates all production, 2x everything',
    visual: 'DNA helix with particles'
  },
  
  theCloud: { 
    cost: 10000, 
    effect: 'INFINITE SCALING - Victory unlock',
    visual: 'Ethereal cloud with data streams'
  }
};
```

### **UI Layout (Levels 11-15):**
```
┌─────────────────────────────────────────────────────┐
│  AC: 5,247  │  OKRs/sec: 1,234  │  Total: 567,890  │
├─────────────────────────────────────────────────────┤
│                                                     │
│   [PRODUCTION GRAPH - Exponential curve]           │
│                                                     │
├──────────┬──────────────────────────────────────────┤
│ BUILDINGS│                                          │
│          │       NODE NETWORK VIEW                  │
│ [Place]  │    (Click to place buildings)            │
│ Conveyor │                                          │
│ Processor│    ◉──────◉──────◉                      │
│ Efficiency│   │       │      │                      │
│ Quantum  │    ◉       ◉      ◉──────[JROD]         │
│ AI Dir   │     \     /       │                      │
│ Factory  │      ◉───◉        ◉                      │
│ Clone Lab│                                          │
│ Cloud    │   [Numbers streaming everywhere]         │
│          │   [Particle effects between nodes]       │
└──────────┴──────────────────────────────────────────┘
```

**Total AC needed:** ~20,000 AC (but exponential growth kicks in)

---

## 🎨 RENDERING COMPARISON

### **Levels 1-5: Full 3D**
- **Library:** Three.js
- **Camera:** PerspectiveCamera, third-person
- **Objects:** 3D meshes (BoxGeometry)
- **Lighting:** Real-time shadows
- **Player Control:** 3D movement (x, y, z)
- **Feel:** Immersive, spatial, skill-based

### **Levels 6-10: 2.5D Isometric**
- **Library:** 2D Canvas
- **Camera:** Fixed isometric projection
- **Objects:** Sprite-based, isometric tiles
- **Lighting:** Baked/fake
- **Player Control:** 2D movement projected isometrically
- **Feel:** Strategic, overview, management-focused

### **Levels 11-15: 2D Abstract**
- **Library:** 2D Canvas
- **Camera:** Static top-down UI view
- **Objects:** Nodes, lines, particles, text
- **Lighting:** Glowing effects only
- **Player Control:** Cursor-based building placement
- **Feel:** Abstract, cerebral, watching-numbers-go-up

---

## 🎯 Victory Conditions Per Section

**Levels 1-5 Victory:** Complete Level 5 boss
**Levels 6-10 Victory:** Complete Level 10 boss + reach 500 MP
**Levels 11-15 Victory:** Deliver 1,000,000 total OKRs + unlock The Cloud

---

## 🏆 FINAL WIN SCREEN

```
╔════════════════════════════════════════╗
║   DIGITAL TRANSFORMATION COMPLETE      ║
╚════════════════════════════════════════╝

Total OKRs Delivered: 1,000,000
Time Played: 47 minutes
Efficiency Rating: S+

Your organization has transcended physical
limitations and achieved perfect automation.

┌────────────────────────────────────────┐
│  What happens next?                    │
├────────────────────────────────────────┤
│  [A] RETIRE                            │
│      Watch your creation run forever   │
│      Unlock: Observer Mode             │
│                                        │
│  [B] MERGE                             │
│      Become one with the system       │
│      Unlock: Infinite Mode             │
│                                        │
│  [C] RESTART                           │
│      New Game+ with 2x bonuses        │
│      Unlock: Prestige System           │
└────────────────────────────────────────┘
```

---

## 📊 PROGRESSION SUMMARY

| Levels | Phase | Rendering | Gameplay | Input | Automation |
|--------|-------|-----------|----------|-------|------------|
| 1-5 | Manual | 3D | Platformer | 100% | 0-10% |
| 6-10 | Team | 2.5D Iso | Strategy | 60-30% | 10-70% |
| 11-15 | Auto | 2D UI | Watching | 10-5% | 70-95% |

---

## 🔧 TECHNICAL IMPLEMENTATION

### Renderer Switching:
```javascript
let currentRenderer = '3D';

function switchRenderer(newMode) {
  if (newMode === '2.5D') {
    // Dispose Three.js
    renderer.dispose();
    scene.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
    
    // Initialize 2D Canvas isometric
    ctx = canvas.getContext('2d');
    initIsometricRenderer();
    
  } else if (newMode === '2D') {
    // Already 2D canvas, just change drawing mode
    clearIsometricAssets();
    initAbstractRenderer();
  }
}
```

### Save System:
```javascript
const saveData = {
  currentLevel: 1,
  phase: 1,
  renderMode: '3D',
  currencies: { dp: 0, mp: 0, ac: 0 },
  totalOKRs: 0,
  upgrades: {...},
  workers: [...],
  buildings: [...],
  evolutionsComplete: 0
};
```

---

## 🎵 Audio Evolution

**Levels 1-5:** Corporate pop (upbeat, motivating)  
**Levels 6-10:** Tech startup electronic (strategic, modern)  
**Levels 11-15:** Industrial techno → ambient drone (hypnotic, transcendent)

---

**This is the complete 15-level engine-building game with three distinct rendering styles and two major evolution points!**
