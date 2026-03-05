# Team Dominos: The OKR Ascension - Complete Game Design

## 🎮 Core Concept

**Genre:** 3D Platformer with Evolving Gameplay Phases  
**Inspiration:** Universal Paperclips (phase evolution) + Super Mario 3D World (platforming)  
**Theme:** Start as a simple delivery person, evolve into OKR automation god, complete digital transformation  
**End Goal:** Achieve complete organizational automation and transcend to the cloud

---

## 🎯 Victory Condition

**YOU WIN WHEN:** You complete all 5 phases and automate all 20 team members, culminating in the final "Digital Transformation Complete" sequence where ODSP transcends into a fully autonomous AI organization.

---

## 📊 Five Evolving Phases

### **PHASE 1: "The Delivery Person" (Levels 1-10)**
**Core Mechanic:** Classic 3D platformer - run, jump, collect OKRs, deliver to Jrod

**Gameplay:**
- Side-scrolling 3D platformer levels (like Crash Bandicoot)
- Jump over obstacles, cross platforms, avoid enemies
- Collect 3 OKRs per level, deliver to Jrod at the end
- Simple controls: Move, Jump, Sprint
- **Boss:** "The Bureaucrat" - dodge endless meeting invites

**Progression:**
- Unlock new team members (characters with different abilities)
- Each character has unique jump height, speed, special move
- Earn "Delivery Points" to upgrade stats

**Visual Style:**
- Bright, colorful corporate campus
- Simple geometric 3D platforming
- Clear paths and obstacles

**Completion:** Deliver 100 OKRs total → Unlock Phase 2

---

### **PHASE 2: "The Manager" (Levels 11-20)**
**Core Mechanic:** Platforming + Team Management - command AI teammates

**Gameplay Evolution:**
- Unlock "Team Command System"
- Press buttons to spawn AI teammates who auto-deliver OKRs
- You still platformer to collect OKRs, but now manage 3 AI helpers
- New mechanic: "Delegation Points" - spend to improve AI efficiency
- Levels become larger, require multi-path strategies
- **Boss:** "The Scope Creep Monster" - grows bigger as fight continues

**New Systems:**
- AI teammates have energy bars, need "Coffee Stations"
- Build "Delivery Hubs" that passively generate OKRs
- Upgrade tree: Speed, Capacity, AI Intelligence

**Visual Changes:**
- Multiple paths through levels
- More complex environments
- AI teammates follow paths you've cleared

**Completion:** Automate 5 team members + deliver 500 OKRs → Unlock Phase 3

---

### **PHASE 3: "The Director" (Levels 21-30)**
**Core Mechanic:** Automation Management + Resource Strategy

**Gameplay Evolution:**
- Shift to "base building" within platformer levels
- Place "Automation Nodes" that generate OKR delivery streams
- Platforming becomes about optimizing routes and defending nodes
- New resource: "Innovation Points" - spend on advanced automation
- Enemies now attack your nodes - tower defense elements
- **Boss:** "Technical Debt Dragon" - must reduce its "Legacy Code HP"

**New Systems:**
- Build automated delivery pipelines (conveyor belts through levels)
- Hire managers who manage sectors autonomously
- Real-time strategy elements merged with platforming
- Prestige system: "Sprint Cycles" - reset for permanent bonuses

**Visual Changes:**
- Futuristic corporate campus
- Glowing automation nodes and energy streams
- Multiple elevation layers

**Completion:** Full automation of 15 team members + 5000 OKRs delivered → Unlock Phase 4

---

### **PHASE 4: "The VP" (Levels 31-40)**
**Core Mechanic:** Exponential Growth + Multi-dimensional Platforming

**Gameplay Evolution:**
- Unlock "Cloud Migration" - access to new dimensional planes
- Platforming through "The Cloud" - abstract 3D spaces
- Each cloud dimension multiplies OKR generation
- Meta-strategy: balance physical offices vs cloud resources
- Exponential numbers: thousands → millions of OKRs
- **Boss:** "The Monolith" - represents legacy infrastructure

**New Systems:**
- Quantum OKRs - deliver to multiple Jrods simultaneously
- Parallel universes - see ghost versions of yourself
- Prestige currency: "Transformation Credits"
- Unlock "AI Jrods" that accept infinite deliveries

**Visual Changes:**
- Abstract, glitchy environments
- Tron-like digital aesthetics
- Reality-bending platforming (Escher-style)

**Completion:** 100,000 OKRs delivered + All 20 team members automated → Unlock Phase 5

---

### **PHASE 5: "The Singularity" (Final Phase)**
**Core Mechanic:** Complete Automation - Witness the Transcendence

**Gameplay Evolution:**
- Minimal player input required
- Watch as your automated empire delivers OKRs exponentially
- One final platformer gauntlet to "The Server Room"
- Philosophical narrative about automation and humanity
- **Final Boss:** "Yourself" - represent the last human element

**The Final Challenge:**
- Navigate "The Digital Transformation" - hardest platformer level
- No checkpoints, one life, perfect execution required
- Collect "The Final OKR" - represents organizational enlightenment
- Deliver to "The Cloud Jrod" - AI representation of perfect leadership

**The Ending:**
- Choose: Stay human or join the automation
- Different endings based on choice
- Credits roll showing your org chart evolving
- Post-game: Infinite mode with leaderboards

**Visual Style:**
- Pure white void with geometric shapes
- Minimalist, transcendent aesthetic
- Reality dissolving into pure data

---

## 🎮 Core Platformer Mechanics

### Movement (All Phases):
- **Walk/Run:** WASD / Arrow Keys
- **Jump:** Spacebar (hold for higher jump)
- **Double Jump:** Unlock in Phase 1
- **Sprint:** Shift (consumes stamina)
- **Dash:** E (unlock in Phase 2)
- **Wall Jump:** Unlock in Phase 3

### Camera:
- 3D third-person behind player
- Smooth follow with slight look-ahead
- Rotate with mouse/right stick (optional)
- Smart camera avoids obstacles

### Collectibles:
- **OKRs:** Main objective (golden cubes)
- **Coffee Cups:** Restore stamina
- **Coins:** Currency for shop upgrades
- **Power-ups:** Temporary abilities
- **Secret Documents:** Unlock lore/bonus levels

---

## 🏗️ Technical Architecture (3D Platformer)

### Three.js Setup:
```javascript
// Scene with platformer-optimized settings
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
camera.position.set(0, 8, 15); // Behind and above player

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
sunLight.castShadow = true;

// Player (3D character model)
player = new THREE.Group();
const body = new THREE.Mesh(
  new THREE.BoxGeometry(1, 2, 1),
  new THREE.MeshLambertMaterial({ color: 0xff0000 })
);
player.add(body);
```

### Physics:
- Custom gravity system (9.8 units/s²)
- AABB collision detection
- Ground detection for jumping
- Slope handling

### Level Format:
```javascript
{
  name: "Corporate Campus 1-1",
  phase: 1,
  platforms: [
    { x: 0, y: 0, z: 0, width: 20, depth: 2, height: 1 },
    { x: 25, y: 3, z: 0, width: 10, depth: 2, height: 1 }
  ],
  okrs: [
    { x: 10, y: 2, z: 0 },
    { x: 20, y: 5, z: 0 }
  ],
  enemies: [...],
  jrodLocation: { x: 100, y: 0, z: 0 }
}
```

---

## 📈 Progression Systems

### XP & Leveling:
- Earn XP from collecting OKRs, completing levels
- Level up unlocks: new moves, characters, upgrades
- Skill tree with branching paths

### Unlock Tree:
```
Phase 1: Double Jump → Wall Jump → Ground Pound
Phase 2: Team Command → Delegation → Auto-Collect
Phase 3: Build Mode → Pipelines → Defense Turrets  
Phase 4: Cloud Jump → Quantum Dash → Dimensional Rift
Phase 5: Transcendence Mode
```

### Prestige System:
- "Sprint Cycles" - reset progress for permanent multipliers
- Each prestige adds new QoL features
- Unlock "New Game+" harder modes

---

## 🎨 Visual Evolution

### Phase 1: Realistic Corporate
- Office buildings, cubicles, meeting rooms
- Bright daytime lighting
- Professional color palette

### Phase 2: Modern Tech Campus
- Open offices, glass buildings
- Holographic displays
- Blue/cyan accent colors

### Phase 3: Futuristic Automation
- Robot workers, conveyor belts
- Neon lighting, metallic surfaces
- Orange/yellow energy flows

### Phase 4: The Cloud
- Abstract digital spaces
- Floating platforms of pure light
- Glitch effects, particle streams
- Purple/pink cyberpunk aesthetic

### Phase 5: Pure Abstraction
- White void, geometric shapes
- Minimalist zen garden aesthetic
- Data streams as visual elements

---

## 🎵 Audio Design

Each phase has distinct music:
- Phase 1: Upbeat corporate elevator music
- Phase 2: Tech startup vibes (indie electronic)
- Phase 3: Industrial techno
- Phase 4: Glitchy synthwave
- Phase 5: Ambient drone music

---

## 🏆 Achievements (Steam-style)

**Phase 1:**
- "First Delivery" - Complete first level
- "Speedrunner" - Finish level under par time
- "Perfectionist" - Collect all OKRs in phase

**Phase 2:**
- "Delegation Master" - Automate first teammate
- "Coffee Addict" - Use 100 coffee power-ups
- "Efficient Manager" - Complete phase without deaths

**Phase 3:**
- "Automation Expert" - Build 50 automation nodes
- "Defender" - Defeat 100 enemies
- "Architect" - Complete custom delivery pipeline

**Phase 4:**
- "Cloud Native" - Migrate all operations
- "Quantum Leap" - Deliver 1M OKRs
- "Multiverse Mogul" - Access all dimensions

**Phase 5:**
- "Digital Transformation" - Beat the game
- "Transcendence" - Choose automation ending
- "Humanity" - Choose human ending
- "Perfectionist God" - 100% completion

---

## 📝 Story & Narrative

### Act 1 (Phase 1-2): The Rise
You're a new hire at ODSP. Jrod needs OKRs delivered. Start simple, learn the ropes, become indispensable. Get promoted to manager.

### Act 2 (Phase 3): The Scaling
Company grows explosively. Can't keep up manually. Must automate or fail. Discover the power of systems thinking.

### Act 3 (Phase 4): The Transformation
Reality shifts. Physical limitations disappear. Cloud migration begins. Question what "work" means.

### Act 4 (Phase 5): The Choice
Face the ultimate question: Is full automation the goal? What happens when humans aren't needed? Choose your philosophy.

**Good Ending:** Keep one human (you) in the loop. Balance achieved.  
**Neutral Ending:** Full automation. Efficiency maximized. Meaning?  
**True Ending:** Transcend the dichotomy. Humans and AI merge.

---

## 🎯 Implementation Priority

### Week 1: Core Platformer
- Basic 3D platforming movement
- Jump, double jump, collision
- First 3 levels playable
- Phase 1 complete

### Week 2: Phase 2 Systems
- AI teammate system
- Delegation mechanics
- Levels 11-15

### Week 3: Phase 3 & 4
- Automation nodes
- Cloud mechanics
- Exponential scaling

### Week 4: Phase 5 & Polish
- Final boss fight
- Multiple endings
- Bug fixes, performance

---

## 🚀 Launch Plan

1. **Alpha:** Phases 1-2 playable
2. **Beta:** All phases, rough endings
3. **Release Candidate:** Polish, balance
4. **1.0 Launch:** Complete game
5. **Post-launch:** Community levels, speedrun mode

---

**This transforms Team Dominos from an endless runner into an epic journey with a definitive conclusion!**
