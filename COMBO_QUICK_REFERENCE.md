# 🎮 Combo System Quick Reference

## Combo Actions & Points

```
┌─────────────────────┬────────┬──────────────────────────────┐
│ Combo Type          │ Points │ How to Trigger               │
├─────────────────────┼────────┼──────────────────────────────┤
│ 🎯 Near Miss        │   25   │ Pass within 2 tiles of enemy │
│ ⚡ Speed Delivery   │   50   │ Deliver in under 30 seconds  │
│ 💎 Perfect Pickup   │   35   │ Collect 3+ OKRs in 2 seconds │
│ 🔗 Chain Delivery   │  100   │ Deliver without taking damage│
│ 🎲 Risky Move       │   75   │ Collect OKR near enemy       │
└─────────────────────┴────────┴──────────────────────────────┘
```

## Multiplier Progression

```
Combo Count │ Multiplier │ Color    │ Example: Chain Delivery
────────────┼────────────┼──────────┼────────────────────────
     0      │    1.0x    │  White   │  100 points
     1      │    1.5x    │  White   │  150 points
     2      │    2.0x    │  White   │  200 points
     4      │    3.0x    │  Gold    │  300 points
     6      │    4.0x    │  Gold    │  400 points
     8      │    5.0x    │  Orange  │  500 points ⚡ MILESTONE
    12      │    7.0x    │  Orange  │  700 points
    14      │    8.0x    │  Red     │  800 points ⚡ MILESTONE
    18      │   10.0x    │  Red     │ 1000 points ⚡ MAX COMBO!
```

## Visual Feedback

### Combo Counter
```
┌─────────────────────────┐
│      Top-Center HUD     │
├─────────────────────────┤
│                         │
│       5.0x              │ ← Size increases
│       COMBO             │ ← Color changes
│                         │
└─────────────────────────┘
```

### Floating Text Example
```
                PERFECT PICKUP!  ← Combo name (pink)
Player → 🏃      +175            ← Points (gold)
                    ✨✨✨       ← Particles
```

## Sound Progression

```
Combo Level     Frequency    Description
──────────────────────────────────────────
1.0x  →  1.5x     440 Hz     Base ding
2.0x  →  3.0x     590 Hz     Higher ding
4.0x  →  5.0x     740 Hz     Exciting ding
5.0x  MILESTONE   880 Hz     Two-note celebration!
8.0x  MILESTONE  1100 Hz     Three-note fanfare!
10.0x MAX COMBO  1760 Hz     Five-note victory!
BREAK            220 Hz      Sad descending tone :(
```

## Combo Decay Timeline

```
Time                Event
─────────────────────────────────────────
T+0s    Action performed → Combo increases to 3.0x
T+1s    Another action → Combo increases to 3.5x
T+5s    No action for 5 seconds (grace period ends)
T+10s   Combo decays to 3.0x
T+15s   Combo decays to 2.5x
T+20s   Combo decays to 2.0x
T+25s   Combo decays to 1.5x
T+30s   Combo decays to 1.0x
```

## Strategy Tips

### 🌟 Easy Combos (Beginner)
1. Collect OKRs quickly for Perfect Pickup
2. Drive near enemies for Near Miss
3. Pick up Sprint powerup for easier Near Misses

### 🔥 Advanced Combos (Expert)
1. **Risky Move** requires sprint + nearby enemy + OKR pickup
2. **Chain Delivery** demands perfect dodge skills
3. **Speed Delivery** needs efficient routing

### 💎 Max Combo Strategy
1. Start with Perfect Pickup (collect 3+ OKRs fast)
2. Get Near Misses while heading to HQ (drive close to enemies)
3. Deliver quickly for Speed Delivery
4. If no damage taken, Chain Delivery triggers
5. Repeat cycle to maintain 10x multiplier!

## Example Score Comparison

### Without Combos
```
Near Miss:         25 points
Perfect Pickup:    35 points
Speed Delivery:    50 points
Chain Delivery:   100 points
─────────────────────────────
Total:            210 points
```

### With 10x Combo
```
Near Miss:        250 points (25 × 10)
Perfect Pickup:   350 points (35 × 10)
Speed Delivery:   500 points (50 × 10)
Chain Delivery:  1000 points (100 × 10)
─────────────────────────────
Total:           2100 points
```

**10x MORE TOKENS!** 💰

## Combo Breakers (Avoid These!)

❌ Getting hit by Scope Creep
❌ Running into Meeting Room
❌ Colliding with Tech Debt
❌ Being inactive for 5+ seconds

## Keyboard Shortcuts

```
WASD     - Move player
Space    - Sprint (helps with Risky Moves)
Shift    - Alternative sprint
ESC      - Pause game
```

## Fun Facts

- Highest theoretical score per delivery: 1000 points (Chain Delivery at 10x)
- Average time to reach 10x: 60-90 seconds of perfect play
- Record to beat: 10x multiplier for entire level!
- Combos are addictive - prepare to play "just one more run"

## Achievements to Chase

🥉 **Bronze**: Reach 3x combo
🥈 **Silver**: Reach 5x combo  
🥇 **Gold**: Reach 8x combo
💎 **Diamond**: Reach 10x combo (MAX!)
🏆 **Legendary**: Maintain 10x for entire level

---

**Pro Tip**: The sound of rising combo pitches is scientifically proven to trigger dopamine release. Use it to your advantage! 🎵🧠
