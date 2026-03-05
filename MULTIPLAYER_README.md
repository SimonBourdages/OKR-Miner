# Team Dominos - 4-Player Local Multiplayer Implementation

## Overview
Successfully implemented a 4-player local multiplayer system with split-screen rendering for the Team Dominos game.

## Features Implemented

### 1. Game Mode Selection
- **Title Screen**: Added "Mode Selection" menu before character selection
- **Modes Available**:
  - Single Player (full screen)
  - Local 2-Player (side-by-side split)
  - Local 3-Player (2x2 grid, 3 active viewports)
  - Local 4-Player (2x2 grid, all viewports active)

### 2. Multi-Input Support
Each player has dedicated controls:
- **Player 1**: WASD keys
- **Player 2**: Arrow Keys  
- **Player 3**: TFGH keys
- **Player 4**: IJKL keys

### 3. Split-Screen Rendering
- **2-Player Mode**: Vertical split (left/right)
- **3-4 Player Mode**: 2x2 grid layout
- Each viewport shows:
  - Independent camera following that player
  - All game objects (OKRs, powerups, enemies, other players)
  - Player-specific HUD overlay with stats
  - Color-coded border matching player color

### 4. Player Identification
- **Player Colors**:
  - Player 1: Red (#E21A2C)
  - Player 2: Blue (#006491)
  - Player 3: Green (#00FF00)
  - Player 4: Yellow (#FFD700)
- Each player has a name tag above their character
- Viewport borders are color-coded
- Stats overlay at bottom of each viewport

### 5. Independent Player Systems
Each player has their own:
- Position and movement
- Carried OKRs counter
- Delivered OKRs counter  
- Token accumulation
- Active powerups
- Camera position

### 6. Shared World State
All players share:
- Same map/world
- Same OKR spawns (first come, first serve)
- Same powerup spawns
- Same enemies
- Same HQ delivery point

### 7. Team-Based Progression
- Level completion based on total team deliveries
- Combined score from all players
- Cooperative gameplay encouraged

### 8. Performance Optimizations
- Simplified rendering in split-screen mode for 60 FPS
- Viewport culling (only render visible tiles per viewport)
- Efficient particle system with pooling
- Reduced visual effects in multiplayer to maintain performance

## How to Play

1. **Start Game**: Click "PLAY GAME" from title screen
2. **Select Mode**: Choose 1-4 players
3. **Select Character**: Pick your character (all players use same character type for simplicity)
4. **Play**: 
   - Move with your assigned keys
   - Collect OKRs (pizza boxes)
   - Deliver to Jrod's HQ (red building)
   - Avoid Scope Creep monsters
   - Collect powerups for boosts
5. **Win**: Team delivers required number of OKRs to complete level

## Technical Implementation

### Code Structure
- `gameMode`: 1-4, determines number of players
- `players[]`: Array of player objects
- `cameras[]`: Array of camera objects, one per player
- `renderSplitScreen()`: Handles viewport layout
- `renderPlayerViewport()`: Renders individual player view
- `update()`: Updated to handle multiple players simultaneously

### Key Functions
- `showModeSelect()`: Display mode selection menu
- `selectMode(mode)`: Set game mode and proceed to character selection
- `initLevel()`: Initialize all players and cameras
- `update()`: Process input and game logic for all players
- `renderSplitScreen()`: Coordinate split-screen rendering
- `renderPlayerViewport()`: Render a single player's viewport

## Testing

To test multiplayer:
1. Open `index.html` in a web browser
2. Select "LOCAL 4-PLAYER" from mode menu
3. Choose a character
4. Use all four control schemes simultaneously:
   - Player 1: WASD
   - Player 2: Arrow Keys
   - Player 3: TFGH
   - Player 4: IJKL
5. Verify each viewport tracks its player independently
6. Verify all players can collect OKRs and deliver to HQ
7. Check that level completes when team total reaches goal

## Known Limitations

- All players must use the same character type
- Mobile controls only work for Player 1
- Minimap is not shown in multiplayer mode
- Some advanced visual effects are simplified in multiplayer
- Requires keyboard input (best played on desktop)

## Future Enhancements

Potential improvements:
- Per-player character selection
- Mini-minimap in each viewport
- Player vs player competitive mode
- Online multiplayer support
- Gamepad controller support
- Dynamic viewport sizing based on player proximity

## Performance

- Target: 60 FPS
- Optimized for: 4 players at 1080p resolution
- Simplified rendering in split-screen maintains performance
- Tested on modern browsers (Chrome, Firefox, Edge)
