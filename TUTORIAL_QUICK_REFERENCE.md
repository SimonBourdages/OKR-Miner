# Onboarding Tutorial System - Quick Reference

## For New Players

### First Time Playing?
1. Click "🎓 NEW PLAYER? START TUTORIAL" on main menu
2. Follow the 6-step interactive tutorial:
   - Learn movement controls
   - Pick up your first OKR
   - Deliver to HQ
   - Try a power-up
   - Learn about obstacles
   - Complete your first run
3. Practice mode unlocks after completion!

### Need Help During Game?
- Press **ESC** anytime to open the help menu
- View controls, power-ups, characters, and tips
- Return to game whenever ready

### Want to Practice?
- Complete tutorial first to unlock
- Access "🎓 PRACTICE MODE" from main menu
- No penalties, fewer enemies, safe learning
- Test all characters and power-ups freely

## For Developers

### Quick Integration Guide

The tutorial system is fully integrated and runs automatically. Key integration points:

```javascript
// Tutorial starts automatically for first-time players in startGame()
if(!tutorialState.completed && !isPracticeMode) {
  setTimeout(() => startTutorial(), 1000);
}

// Tutorial updates each frame
updateTutorial();
updateTutorialElements();

// Progressive disclosure checks run count
checkProgressiveDisclosure();

// Practice mode reduces difficulty
if(isPracticeMode) {
  // Fewer enemies, no death penalty
}
```

### Customization

To modify tutorial steps, edit the `TUTORIAL_STEPS` array:

```javascript
const TUTORIAL_STEPS = [
  {
    title: "Step Title",
    text: "Instructions for player",
    keys: ['W','A','S','D'], // Optional: show keys
    checkComplete: () => { /* completion condition */ },
    onStart: () => { /* setup code */ }
  },
  // ... more steps
];
```

### Storage Keys

- `teamDominosTutorial` - Tutorial progress and state
- Accessed via `getTutorialState()` and `saveTutorialState()`

## Controls Reference

### Movement
- **Player 1**: WASD
- **Player 2**: Arrow Keys  
- **Player 3**: TFGH
- **Player 4**: IJKL

### System
- **ESC**: Open/close help menu
- **Mouse**: Click buttons and UI elements

## Feature Flags

Modify these to customize behavior:

```javascript
// Require tutorial completion to access main game
if(!tutorialState.completed && !isPracticeMode) {
  // Force tutorial
}

// Show tooltips only for first N runs
if(tutorialState.runsCompleted < 3) {
  // Show contextual tooltips
}

// Enable practice mode
if(tutorialState.practiceUnlocked) {
  // Show practice mode button
}
```

## Testing

1. **Fresh Player**: Clear localStorage and reload
2. **Tutorial Flow**: Complete all 6 steps
3. **Skip Tutorial**: Complete once, then test skip button
4. **Practice Mode**: Verify unlocks after tutorial
5. **Tooltips**: Check they appear in first 3 runs
6. **Help Menu**: Press ESC during game
7. **Progressive Disclosure**: Play multiple runs, verify tips

## Design Notes

### Why This Approach?

1. **Mandatory First Tutorial**: Ensures all players learn basics
2. **Skippable After**: Respects returning players' time
3. **Practice Mode**: Safe space for experimentation
4. **Progressive Disclosure**: Prevents information overload
5. **Always-Available Help**: Reference without interrupting flow
6. **Contextual Tooltips**: Learning at point of need
7. **Visual Indicators**: Clear, non-verbal guidance

### Accessibility Considerations

- High contrast visuals
- Clear text hierarchy
- Keyboard-only navigation
- ESC key for quick help access
- Multiple learning paths
- Non-blocking UI
- Saved progress

## Common Issues & Solutions

**Tutorial not starting?**
- Check `tutorialState.completed` in localStorage
- Ensure `startGame()` is calling `startTutorial()`

**Tutorial elements not visible?**
- Check z-index values in CSS
- Verify `#tutorial-overlay` exists in HTML
- Check `tutorialActive` state

**Practice mode not unlocking?**
- Verify tutorial completion
- Check `tutorialState.practiceUnlocked` value
- Ensure `saveTutorialState()` is called

**Tooltips not showing?**
- Check run counter: `tutorialState.runsCompleted`
- Verify tooltip IDs in `tooltipsShown` object
- Ensure conditions in `showTooltip()` are met

## Metrics to Track

Consider tracking these for improvement:

- Tutorial completion rate
- Average time per tutorial step
- Skip tutorial usage
- Practice mode usage
- Help menu access frequency
- Tooltip dismissal vs auto-hide ratio
- First-run retention rate
- Tutorial replay frequency

## Credits

Tutorial system designed for:
- **Team Dominos** - Delivering OKRs Since 2024
- Smooth onboarding, non-frustrating learning
- Progressive disclosure of game mechanics
- Safe practice environment for new players

---

**Version**: 1.0  
**Last Updated**: 2024  
**Status**: Complete and Integrated
