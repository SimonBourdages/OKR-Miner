# Power-Up System Test Checklist

## Quick Start
1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari)
2. Click "PLAY GAME" → Select "SINGLE PLAYER" → Choose any character → Start game

## Visual Effects Tests

### ✓ Power-Up Spawning
- [ ] Power-ups appear on the map with enhanced glow effects
- [ ] Each power-up has 3 orbiting particles circling it
- [ ] Power-ups have color-coded glows based on rarity:
  - Green = Common
  - Blue = Rare
  - Purple = Epic
  - Gold = Legendary
- [ ] Power-ups bob up and down smoothly
- [ ] Glow pulses in and out rhythmically

### ✓ Pickup Effects
- [ ] Burst particle explosion on pickup (30 particles in circle)
- [ ] Sound effect plays (different pitch per rarity)
- [ ] Quote popup appears with power-up name
- [ ] Power-up disappears smoothly

### ✓ Active Power-Up UI Panel
- [ ] UI panel appears on left side when power-up is active
- [ ] Shows power-up icon with colored background
- [ ] Shows power-up name
- [ ] Timer bar animates from green → yellow → red
- [ ] Panel flashes when 3 seconds remaining
- [ ] Multiple power-ups stack vertically in panel
- [ ] Panel disappears when no active power-ups

### ✓ Screen Vignette Effect
- [ ] Subtle colored glow around screen edges
- [ ] Color matches active power-up rarity
- [ ] Not too intrusive, adds atmosphere

### ✓ Player Aura Effects
- [ ] Multi-layer glowing aura around player
- [ ] 12 particles orbit around player
- [ ] Pulses in sync with heartbeat
- [ ] Color matches dominant power-up

### ✓ Particle Trail
- [ ] Small colored particles spawn behind player while moving
- [ ] Particles fade out gracefully
- [ ] Trail color matches active power-up

## Power-Up Functionality Tests

### ✓ Sprint Boost (S - Green - Common)
- [ ] Pickup displays "Sprint Planning Boost! 2x speed!"
- [ ] Player moves 2x faster
- [ ] Green glow and speed lines around player
- [ ] Lasts 5 seconds
- [ ] Timer shows countdown

### ✓ Agile Shield (A - Blue - Rare)
- [ ] Pickup displays "Agile Shield! Pass through obstacles!"
- [ ] Can walk through meetings and tech debt
- [ ] Cannot walk through buildings
- [ ] Blue pulsing shield bubble effect
- [ ] Lasts 3 seconds
- [ ] Protects from enemies

### ✓ Standup Skip (T - Purple - Epic)
- [ ] Pickup displays "Standup Skip! Teleported!"
- [ ] Player teleports to random road location
- [ ] Confetti explosion at new location
- [ ] Instant effect (no duration)
- [ ] Purple burst particles

### ✓ Time Freeze (⏸ - Purple - Epic) **NEW**
- [ ] Pickup displays "Time Freeze! Freeze obstacles!"
- [ ] All enemies stop moving completely
- [ ] Cyan clock hands spinning around player
- [ ] Lasts 5 seconds
- [ ] Player can still move normally

### ✓ OKR Magnet (M - Green - Common) **NEW**
- [ ] Pickup displays "OKR Magnet! Auto-collect OKRs!"
- [ ] OKRs collected from 4 tiles away (much further)
- [ ] Power-ups also collected from 3 tiles away
- [ ] Golden pulsing rings around player
- [ ] Lasts 10 seconds
- [ ] Very convenient for collection

### ✓ Ghost Mode (G - Blue - Rare) **NEW**
- [ ] Pickup displays "Ghost Mode! Walk through everything!"
- [ ] Can walk through ALL obstacles (meetings, tech debt, buildings)
- [ ] Can walk through enemies without damage
- [ ] Semi-transparent dashed circle effect
- [ ] Player flickers slightly
- [ ] Lasts 7 seconds
- [ ] More powerful than shield (cancels shield if active)

### ✓ 2x Multiplier (× - Gold - Legendary) **NEW**
- [ ] Pickup displays "2x Multiplier! 2x OKR value!"
- [ ] Delivery gives 2x tokens
- [ ] Quote says "(2x BONUS!)" on delivery
- [ ] "×2" text floats above player
- [ ] Golden legendary glow
- [ ] Lasts 15 seconds (longest duration)
- [ ] Very rare spawn (2% chance)

### ✓ Dash Charge (⚡ - Blue - Rare) **NEW**
- [ ] Pickup displays "Dash Charge! Unlimited sprint!"
- [ ] Player moves 2x faster (like Sprint Boost)
- [ ] Green speed lines effect
- [ ] Lasts 10 seconds (longer than Sprint)
- [ ] Cancels Sprint Boost if active (replaces it)
- [ ] Yellow/cyan color scheme

## Stacking & Canceling Tests

### ✓ Stacking (Multiple Active)
- [ ] Collect Magnet + Sprint = Fast collection
- [ ] Collect Multiplier + any other = Bonus stacks
- [ ] UI panel shows both power-ups
- [ ] Visual effects combine (multiple auras)
- [ ] Both timers count down independently

### ✓ Canceling (Replacement)
- [ ] Collect Shield, then Ghost = Ghost replaces Shield
- [ ] Quote says "Ghost Mode replaced Agile Shield!"
- [ ] Old power-up removed from UI panel
- [ ] New power-up timer starts fresh
- [ ] Only new visual effect shows

### ✓ Refreshing (Same Power-Up)
- [ ] Collect Sprint Boost twice
- [ ] Quote says "Sprint Planning Boost refreshed!"
- [ ] Timer resets to 5 seconds
- [ ] Visual effects continue smoothly

## Rarity Spawn Rate Tests
(Play 5-10 levels to observe)
- [ ] Common (Green) appears frequently (~60% of spawns)
- [ ] Rare (Blue) appears occasionally (~30% of spawns)
- [ ] Epic (Purple) appears rarely (~8% of spawns)
- [ ] Legendary (Gold) appears very rarely (~2% of spawns)
- [ ] Can find at least one legendary in 5+ levels

## Performance Tests
- [ ] Game runs smoothly at 60 FPS
- [ ] No lag when multiple power-ups active
- [ ] No lag with many particles on screen
- [ ] UI panel updates smoothly
- [ ] Screen effect doesn't cause slowdown

## Edge Cases
- [ ] Can collect power-up while moving fast
- [ ] Multiple power-ups in same area work correctly
- [ ] Power-up expires during movement (no crash)
- [ ] Timer warning works at exactly 3 seconds
- [ ] All power-ups work in multiplayer mode
- [ ] Power-ups work across level transitions

## Audio Tests
- [ ] Sound plays on pickup
- [ ] Common power-ups = lower pitch
- [ ] Legendary power-ups = higher pitch
- [ ] Sound doesn't overlap badly
- [ ] Volume is appropriate (not too loud)

## Bug Checks
- [ ] No console errors in browser
- [ ] UI panel doesn't block gameplay
- [ ] Screen vignette doesn't cover important UI
- [ ] Particle effects don't obscure player
- [ ] Timers count down correctly (no freezing)
- [ ] Power-ups don't duplicate
- [ ] Game doesn't crash when power-up expires

## Multiplayer-Specific Tests
(If testing multiplayer mode)
- [ ] Each player has independent power-ups
- [ ] Each player has own UI panel
- [ ] Power-up effects don't interfere between players
- [ ] Pickup is exclusive (only one player gets it)

---

## Known Issues to Watch For
None currently known - this is a fresh implementation!

## How to Report Issues
If you find any problems:
1. Note the specific power-up involved
2. Describe exactly what happened
3. Note if any errors appear in browser console (F12)
4. Try to reproduce the issue
5. Document browser and OS

---

**Have fun testing!** The power-up system should feel amazing! ✨
