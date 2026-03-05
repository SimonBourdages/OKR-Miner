# Team Dominos - Improvement Cycle 1 Plan

**Date:** February 12, 2026  
**Status:** In Progress  
**Focus:** Foundation for 4-Player Multiplayer + Core Game Enhancements

---

## Research Summary

Based on comprehensive analysis of 10 similar games (Crossy Road, Frogger, Agar.io, Slither.io, Crazy Taxi, Paperboy, Hades, Dead Cells, Mario Party, Fall Guys, Among Us), we identified critical improvement areas:

### Key Findings:
1. **Multiplayer is Essential** - Top requested feature across all arcade/party games
2. **Lag Kills Games** - Network performance and optimization are make-or-break
3. **Retention Through Systems** - Daily challenges, achievements, social features boost engagement 25%
4. **Progression Depth** - Players want both skill mastery AND stat progression
5. **Visual Feedback** - Power-ups and rewards need dramatic, immediate sensory responses
6. **Content Variety** - Procedural generation + regular updates prevent staleness
7. **Balance Luck vs Skill** - Players want fair challenges, not RNG determining outcomes
8. **Accessibility** - Must serve both casual and hardcore players through difficulty layers

---

## Priority Improvements for Cycle 1

### 🎮 TIER 1: CORE MULTIPLAYER (Must Have)

#### 1. Local 4-Player Mode
**Rationale:** Mario Party/Fall Guys style local multiplayer is the most requested feature. Provides immediate value without network complexity.

**Implementation:**
- Split-screen camera system (2x2 grid for 4 players)
- Independent player controls (WASD + Arrow Keys + Gamepad 1-2)
- Shared world state with individual OKR collection
- Competitive scoring: First to deliver X OKRs wins
- Cooperative mode: Team delivery goals
- Character selection screen for each player
- Visual indicators (colored trails, nameplates) to distinguish players

**Technical Approach:**
- Four camera viewports rendered to canvas quadrants
- Shared game loop with per-player input handlers
- Color-coded HUD for each player
- Performance target: Maintain 60 FPS with 4 simultaneous viewports

---

### 🚀 TIER 2: RETENTION SYSTEMS (High Priority)

#### 2. Daily Challenge System
**Rationale:** Increases retention by 25% according to research. Creates habit loops.

**Implementation:**
- One unique challenge per day (e.g., "Deliver 10 OKRs without getting hit")
- Streak tracker with escalating rewards
- Challenge leaderboard separate from main game
- Visual celebration for streak milestones
- Reset at consistent time (e.g., midnight UTC)

#### 3. Achievement System
**Rationale:** Provides long-term goals and visible progression.

**Implementation:**
- 50+ achievements across difficulty levels:
  - Easy: "First Delivery" (deliver 1 OKR)
  - Medium: "Century Club" (100 total deliveries)
  - Hard: "Speedrunner" (deliver 10 OKRs in under 2 minutes)
  - Mastery: "Perfect Run" (complete level without damage)
- Progress bars for multi-step achievements
- Badge display on character select screen
- Achievement notifications with sound/animation

#### 4. Enhanced Progression System
**Rationale:** Current progression is linear. Players want meaningful choices and visible growth.

**Implementation:**
- **Skill Trees** for each character:
  - Speed branch: Dash ability, faster base speed
  - Capacity branch: Carry more OKRs, magnetic pickup radius
  - Defense branch: Shield regeneration, obstacle invulnerability windows
- **Unlock Currency** earned per run (separate from score)
- **Persistent Upgrades** that carry between runs
- **Meta-Progression** - even failed runs provide upgrade materials
- Visual character evolution (glows, trails) as skills unlock

---

### ✨ TIER 3: GAMEPLAY ENHANCEMENTS (Medium Priority)

#### 5. Enhanced Power-Up System
**Rationale:** Current power-ups lack visual feedback and strategic depth.

**Improvements:**
- **Better Visual Feedback:**
  - Character glow/aura matching power-up color
  - Particle effects and trails
  - Screen edge tint during major power-ups
  - Timer bar with warning flash at 3 seconds remaining
  - Pickup animation and sound
- **New Power-Ups:**
  - **Time Freeze** - Pause all obstacles/enemies for 5 seconds
  - **Magnet** - Auto-collect nearby OKRs for 10 seconds
  - **Ghost Mode** - Walk through obstacles for 7 seconds
  - **Multiplier** - 2x OKR value for 15 seconds
  - **Dash Charge** - Unlimited sprint for 10 seconds
- **Strategic Stacking** - Multiple power-ups can combine for unique effects
- **Rarity Tiers** - Common (green), Rare (blue), Epic (purple), Legendary (gold)

#### 6. Combo System
**Rationale:** Crazy Taxi's combo system creates flow state and rewards skilled play.

**Implementation:**
- **Near-Miss Bonus** - Avoiding obstacles by narrow margin
- **Speed Delivery** - Bonus for quick deliveries
- **Perfect Pickup** - Collecting multiple OKRs rapidly
- **Chain Deliveries** - Delivering multiple times without damage
- **Combo Multiplier** - Increases score up to 10x
- **Visual Feedback** - Combo counter with increasing intensity
- **Combo Break** - Taking damage resets multiplier
- **Audio Cues** - Rising pitch with combo level

#### 7. Procedural Map Enhancement
**Rationale:** Current 10 maps become predictable. Procedural generation adds infinite variety.

**Implementation:**
- **Modular Chunk System:**
  - Library of 100+ handcrafted obstacle patterns
  - Procedurally arrange chunks with entrance/exit validation
  - Difficulty-weighted selection (harder chunks at higher levels)
- **Environmental Variation:**
  - Weather effects (rain, snow, fog)
  - Time of day (day, sunset, night)
  - Dynamic obstacles (moving platforms, rotating hazards)
- **Seed-Based Generation:**
  - Daily seed for consistent challenges
  - Share seeds with friends for competition
- **Adaptive Difficulty:**
  - Monitor player death rate and adjust chunk selection
  - Personalized difficulty curves per player

---

### 🎨 TIER 4: POLISH & UX (Important)

#### 8. Improved Visual Feedback
**Rationale:** Players need clear, immediate feedback for all actions.

**Improvements:**
- **Damage Feedback:**
  - Screen shake on hit
  - Red screen flash
  - Character knockback animation
  - Brief invulnerability frames with transparency flicker
- **Delivery Celebration:**
  - Confetti/fireworks on HQ delivery
  - Victory animation and sound
  - Score popup with growing numbers
  - Motivational quote popup (existing feature, enhance it)
- **Minimap Enhancements:**
  - Show power-up locations
  - Highlight Jrod/HQ more clearly
  - Show other players in multiplayer
  - Danger zones (high enemy density)

#### 9. Mobile Optimization
**Rationale:** Mobile performance is critical but current game may struggle.

**Technical Improvements:**
- **Adaptive Quality:**
  - Detect device capability on load
  - Reduce draw calls on weak devices (<50 target)
  - Lower polygon counts for models
  - Disable expensive effects (shadows, post-processing)
- **Touch Controls:**
  - Larger D-pad buttons
  - Gesture support (swipe to dash)
  - Haptic feedback on actions
  - Auto-camera following
- **Memory Management:**
  - Properly dispose geometries/materials
  - Object pooling for frequently created objects
  - Progressive asset loading
  - Monitor with renderer.info.memory

#### 10. Onboarding Tutorial
**Rationale:** New players need guidance without overwhelming them.

**Implementation:**
- **First-Time Tutorial:**
  - Interactive movement practice
  - OKR pickup demonstration
  - Delivery to Jrod walkthrough
  - Power-up introduction
  - Skippable for returning players
- **Tooltips:**
  - Contextual tips during first few runs
  - Character stat explanations
  - Power-up descriptions on first pickup
- **Practice Mode:**
  - Safe environment with no token penalty
  - Unlock after completing first run

---

### 🔮 TIER 5: FUTURE FEATURES (Next Cycles)

These will be implemented in subsequent improvement cycles:

#### Cycle 2-3 Preview:
- **Online Multiplayer** (WebSocket + lobby system)
- **Ranked Mode** with matchmaking
- **Season Pass** with exclusive rewards
- **Character Customization** (skins, effects)
- **Level Editor** with community sharing
- **Replay System** with ghost racing
- **Social Features** (friends, teams, guilds)
- **Spectator Mode** for multiplayer
- **Tournament System**
- **Mobile App** (PWA or native)

---

## Implementation Order

### Phase 1: Foundation (Week 1)
1. Local 4-player split-screen rendering
2. Multi-input handling
3. Player identification system
4. Basic competitive mode

### Phase 2: Retention (Week 1-2)
1. Achievement system framework
2. Daily challenge generation
3. Progression/unlock system
4. Skill tree implementation

### Phase 3: Gameplay (Week 2-3)
1. Enhanced power-up visuals
2. New power-up types
3. Combo system
4. Procedural generation framework

### Phase 4: Polish (Week 3-4)
1. Visual feedback improvements
2. Mobile optimization
3. Tutorial system
4. Bug fixes and balance

---

## Success Metrics

### Engagement:
- **Daily Active Users:** Target 25% increase
- **Average Session Time:** Target 8+ minutes (up from estimated 5)
- **Return Rate (Day 7):** Target 15%+

### Multiplayer:
- **4-Player Sessions:** Track % of games using local multiplayer
- **Player Retention:** Compare single vs multiplayer player retention

### Retention Systems:
- **Daily Challenge Completion:** Target 40% of active users
- **Achievement Progress:** Average 5+ achievements per player
- **Streak Maintenance:** Target 20% of users with 7+ day streaks

### Technical:
- **Performance:** Maintain 60 FPS on desktop, 30+ on mobile
- **Load Time:** Under 2 seconds on fast connections
- **Crash Rate:** Under 0.1%

---

## Technical Architecture Changes

### Code Structure:
```
index.html
├── [EXISTING] Game Constants
├── [EXISTING] Character Data
├── [EXISTING] Map Definitions
├── [NEW] Multiplayer Manager
│   ├── Player State Management
│   ├── Camera System
│   └── Input Routing
├── [NEW] Progression System
│   ├── Achievement Tracker
│   ├── Daily Challenge Generator
│   └── Skill Tree Manager
├── [ENHANCED] Power-Up System
│   ├── Visual Effects
│   ├── Duration Timers
│   └── Combo Calculator
├── [NEW] Procedural Generator
│   ├── Chunk Library
│   ├── Map Assembler
│   └── Difficulty Adapter
└── [ENHANCED] Game Loop
    ├── Multi-viewport Rendering
    ├── Performance Monitoring
    └── State Persistence
```

### Data Persistence:
- **LocalStorage** for:
  - Player progress (achievements, unlocks)
  - Daily challenge state
  - Streak counters
  - Settings
- **No backend required yet** - fully client-side

### Performance Budget:
- **Draw Calls:** <100 (single player), <150 (4-player)
- **Memory:** <200MB total
- **Bundle Size:** Keep under 100KB (current: ~52KB)

---

## Risk Assessment

### High Risk:
- **Split-screen performance** - May need aggressive optimization for 4 viewports
  - *Mitigation:* Implement LOD, reduce effects in multiplayer mode
- **Mobile multiplayer** - 4-player on small screens challenging
  - *Mitigation:* Design for desktop-first, mobile gets 2-player max

### Medium Risk:
- **Procedural generation balance** - May create unfair scenarios
  - *Mitigation:* Extensive playtesting, validation rules, emergency chunk overrides
- **Achievement inflation** - Too many unlocks too fast reduces engagement
  - *Mitigation:* Careful economy design, analytics monitoring

### Low Risk:
- **Feature creep** - Too many features at once
  - *Mitigation:* Strict prioritization, phased rollout
- **Code maintainability** - Single file getting large
  - *Mitigation:* Consider modularization in future cycles

---

## Next Steps

1. ✅ Complete research (DONE)
2. ✅ Create improvement plan (DONE)
3. ⏳ Implement Phase 1 (4-player local multiplayer)
4. ⏳ Implement Phase 2 (retention systems)
5. ⏳ Implement Phase 3 (gameplay enhancements)
6. ⏳ Implement Phase 4 (polish)
7. ⏳ Testing and QA
8. ⏳ Deploy and monitor metrics
9. ⏳ Gather feedback for Cycle 2
10. ⏳ Repeat improvement cycle

---

**End of Cycle 1 Plan**
