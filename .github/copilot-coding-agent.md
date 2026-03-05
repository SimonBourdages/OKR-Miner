# Copilot Coding Agent Instructions

## Project Overview
OKR Miner is a browser-based idle/engine-building game. It's a single `index.html` file (~4500 lines) with inline CSS and vanilla JavaScript (no frameworks, no ES modules, no build step).

## Tech Stack
- Single HTML file with inline `<style>` and `<script>` tags
- Vanilla JavaScript (ES5-compatible, uses `var` not `let/const`, `function` not arrow functions)
- HTML5 Canvas for all game rendering
- localStorage for save data and analytics
- No external dependencies except HD background images from Unsplash

## Architecture
- Game class: `OKRFarmingGame` with prototype methods
- Constants at top: `MILESTONES`, `BUILDINGS`, `THEMES`, `SPACE_EVENTS`, `BG_IMAGES`, etc.
- Game loop: `update(ts)` → `draw()` via `requestAnimationFrame`
- State stored in `this.state` object, nodes in `this.nodes` array

## Key Game Systems
- **Buildings**: collector, processor, multiplier, synthesizer, generator, bank (placed on canvas)
- **Upgrades**: Buildings can be upgraded to Lv.3 (click existing building)
- **Electricity**: Buildings consume EL, generators produce it, brownout if deficit
- **MST Connections**: Buildings connect via minimum spanning tree (Prim's algorithm)
- **Spaceships**: Hazard ships damage buildings, thief ships steal OKRs
- **Repair Bots**: Autonomous flying drones that heal lowest-HP buildings
- **Events**: 100 random space events (positive/negative/neutral)
- **Milestones**: OKR-based unlock system (no levels, continuous progression)
- **Themes**: 5 visual themes with production bonuses
- **Analytics**: Behavioral tracking stored in localStorage

## Code Style Rules
- Use `var` for all variable declarations (ES5)
- Use `function` keyword, not arrow functions
- Use `OKRFarmingGame.prototype.methodName = function() {...}` for methods
- Use `this._pxRect(ctx, x, y, w, h, color)` for pixel drawing
- All canvas drawing happens in the `draw()` method chain
- Sound effects use Web Audio API oscillators
- Keep the single-file structure — do NOT split into multiple files

## Testing
- After making changes, verify JavaScript syntax by checking the `<script>` content
- The game should load and run without console errors
- Test that new features don't break existing ones (building placement, upgrades, events, etc.)

## Files
- `index.html` — The entire game
- `stats.html` — Hidden analytics dashboard
- `theme-preview.html` — Theme comparison page
- `improvements-preview.html` — Engine improvement proposals
- `backend-options.html` — Analytics backend comparison
- `music.mp3` — Background music
- `phase3-galaxy.jpg` — Fallback galaxy background
- `phase3-intro.mp4` — Video intro
- `phase3.html` — Video intro entry page
