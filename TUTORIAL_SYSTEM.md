# Team Dominos - Onboarding Tutorial System

## Overview
A comprehensive tutorial system that guides new players through game mechanics with interactive, step-by-step instructions. The system includes first-time tutorials, contextual tooltips, practice mode, and an extensive help menu.

## Features

### 1. Interactive First-Time Tutorial
**Mandatory on first play, skippable after completion**

#### Tutorial Steps:
1. **Movement Practice**
   - Teaches WASD/Arrow key controls
   - Completes when player moves significantly
   - Displays control keys visually

2. **OKR Pickup**
   - Shows how to collect yellow OKR markers
   - Highlights nearest OKR with arrow and glow
   - Completes when player picks up first OKR

3. **Delivery to HQ**
   - Guides player to red HQ building
   - Highlights HQ location
   - Completes when first delivery is made

4. **Power-Up Introduction**
   - Spawns a power-up near player
   - Explains power-up mechanics
   - Completes when power-up is collected

5. **Obstacle Awareness**
   - Explains meetings, tech debt, and scope creep
   - Auto-completes after 5 seconds

6. **Complete First Run**
   - Final encouragement
   - Completes when level is finished

#### Visual Elements:
- **Tutorial Box**: Centered overlay with title, text, and progress dots
- **Arrows**: Animated arrows pointing to important elements
- **Highlights**: Pulsing circles highlighting targets
- **Skip Button**: Available only after tutorial is completed once

### 2. Contextual Tooltips
**Shown only during first 3 runs**

#### Tooltip Types:
- **Character Stats**: Appears when selecting a character for the first time
- **Power-Up Info**: Shows on first pickup of each power-up type
- **Map Introduction**: Displays when visiting a new map type
- **Combo System**: Explains combos on first combo trigger

#### Features:
- Auto-dismiss after 5 seconds
- Manual dismiss with X button
- Stored in localStorage (one-time per tooltip ID)
- Clean, minimal design

### 3. Practice Mode
**Unlocks after completing first tutorial run**

#### Features:
- **No Penalties**: Damage doesn't add extra OKR requirements
- **Reduced Enemies**: 50% fewer enemies spawn
- **Unlimited Lives**: No game-over from hits
- **All Characters Available**: Test any character freely
- **Practice Watermark**: Subtle "PRACTICE MODE" overlay
- **Safe Environment**: Perfect for learning and experimentation

#### Access:
- From main menu (green button)
- Shows "🎓 Practice Mode" title
- Returns to main menu anytime

### 4. Help Menu
**Always accessible via ESC key or menu button**

#### Sections:

1. **Controls**
   - Complete control layout
   - All player bindings (P1-P4)
   - ESC key functions

2. **How to Play**
   - Step-by-step gameplay instructions
   - Core mechanics explained
   - Delivery and collection systems

3. **Power-Ups Guide**
   - Visual grid of all power-ups
   - Icons, names, descriptions
   - Duration and rarity info

4. **Character Stats**
   - All characters displayed
   - Speed and capacity ratings
   - Descriptions and playstyles

5. **Tips & Strategies**
   - Route planning advice
   - Character selection tips
   - Power-up stacking strategies
   - Combo building techniques

6. **Tutorial Options**
   - Replay tutorial button
   - Access to practice mode

### 5. Progressive Disclosure
**Introduces features gradually across multiple runs**

#### Timeline:
- **Game 1**: Basic movement and delivery (tutorial)
- **Game 2**: Power-up system introduction
- **Game 3**: Character selection tips
- **Game 4**: Advanced strategies and combos
- **Game 5+**: Full mastery, all tooltips shown

#### Benefits:
- Prevents information overload
- Natural learning curve
- Builds confidence gradually
- Encourages experimentation

## Technical Implementation

### Storage
All tutorial progress is stored in localStorage under `teamDominosTutorial`:

```javascript
{
  completed: boolean,          // Has tutorial been completed?
  currentStep: number,          // Current tutorial step (0-5)
  runsCompleted: number,        // Total runs completed
  tooltipsShown: {              // Which tooltips have been shown
    [tooltipId]: boolean
  },
  practiceUnlocked: boolean    // Is practice mode available?
}
```

### Key Functions

#### Tutorial Management
- `getTutorialState()` - Loads tutorial state from localStorage
- `saveTutorialState(state)` - Saves tutorial state
- `startTutorial()` - Begins tutorial sequence
- `showTutorialStep(index)` - Displays specific tutorial step
- `updateTutorial()` - Checks step completion each frame
- `completeTutorial()` - Finishes tutorial, unlocks practice mode
- `skipTutorial()` - Allows skipping (only if completed before)

#### Visual Elements
- `addTutorialArrow(x, y, symbol)` - Creates pointing arrow
- `addTutorialHighlight(x, y, size)` - Creates pulsing highlight
- `updateTutorialElements()` - Updates screen positions of arrows/highlights
- `clearTutorialElements()` - Removes all tutorial visuals

#### Tooltips
- `showTooltip(id, title, text, x, y, autoHide)` - Displays contextual tooltip
- `showCharacterTooltip(character)` - Character selection tooltip
- `showPowerupTooltip(powerupType)` - Power-up collection tooltip
- `showMapTooltip(mapType)` - New map introduction
- `showComboTooltip()` - Combo system explanation

#### Practice Mode
- `startPracticeMode()` - Begins practice session
- `renderPracticeWatermark()` - Draws "PRACTICE MODE" overlay
- `showPracticeMode()` - Character selection for practice

#### Help System
- `showHelpMenu()` - Opens comprehensive help overlay
- `hideHelpMenu()` - Closes help menu
- `replayTutorial()` - Restarts tutorial from beginning

#### Progressive Disclosure
- `checkProgressiveDisclosure()` - Shows appropriate tooltips based on run count

### Integration Points

1. **startGame()**: Checks if tutorial should start
2. **update()**: Calls `updateTutorial()` and `checkProgressiveDisclosure()`
3. **render()**: Calls `renderPracticeWatermark()`
4. **showGameOver()**: Increments run counter
5. **keydown handler**: ESC key opens help menu
6. **showTitle()**: Resets practice mode, clears tutorial elements

## User Experience

### First-Time Player Journey
1. Opens game
2. Sees "🎓 NEW PLAYER? START TUTORIAL" button prominently
3. Clicks and begins interactive tutorial
4. Learns movement → pickup → delivery → power-ups → obstacles
5. Completes first run
6. Practice mode unlocks
7. Can access help menu anytime with ESC

### Returning Player Journey
1. Opens game
2. Tutorial button gone (completed)
3. Practice mode available if unlocked
4. Contextual tooltips for first 3 runs
5. Help menu always available
6. Can replay tutorial from help menu

### Practice Mode Journey
1. Accesses from main menu
2. Selects any character
3. Plays with reduced pressure
4. No penalty for mistakes
5. Learns mechanics safely
6. Returns to main menu when ready

## Design Principles

1. **Non-Intrusive**: Tutorial is mandatory only once
2. **Gradual**: Features introduced over multiple sessions
3. **Optional**: Help always available, never forced
4. **Clear**: Visual indicators make objectives obvious
5. **Safe**: Practice mode provides risk-free learning
6. **Comprehensive**: Help menu covers everything
7. **Persistent**: Progress saved in localStorage
8. **Discoverable**: ESC key for help, prominent buttons

## Accessibility

- **Keyboard-Friendly**: All controls keyboard accessible
- **Visual Clarity**: High contrast, clear text
- **Non-Blocking**: Can skip tutorial after first completion
- **Multiple Learning Paths**: Tutorial, tooltips, practice, help
- **Progressive**: Information revealed gradually
- **Reference**: Help menu always available

## Future Enhancements

Potential additions:
- Video tutorials in help menu
- Animated GIFs showing controls
- Achievement for completing tutorial quickly
- Tutorial for multiplayer controls
- In-game hints system
- Replay specific tutorial steps
- Different tutorial tracks for different skill levels
- Onboarding analytics tracking

## Testing Checklist

- [ ] Tutorial starts automatically on first play
- [ ] All 6 tutorial steps complete correctly
- [ ] Tutorial can be skipped after first completion
- [ ] Practice mode unlocks after tutorial
- [ ] Tooltips appear during first 3 runs
- [ ] Tooltips can be dismissed manually
- [ ] Tooltips auto-dismiss after 5 seconds
- [ ] Help menu opens with ESC key
- [ ] Help menu shows all content correctly
- [ ] Practice mode has reduced enemies
- [ ] Practice mode has no death penalty
- [ ] Practice mode shows watermark
- [ ] Tutorial progress saves to localStorage
- [ ] Tutorial elements clear when leaving game
- [ ] Replay tutorial works from help menu
- [ ] Progressive disclosure shows appropriate tips

## Files Modified

- **index.html**: Complete tutorial system implementation
  - Added CSS for tutorial overlays, tooltips, help menu
  - Added HTML elements for tutorial and help
  - Implemented JavaScript tutorial logic
  - Integrated tutorial with game loop
  - Added ESC key handler for help menu
