# Procedural Map Generation System

## Overview
Team Dominos now features a sophisticated procedural map generation system that creates infinite variety while maintaining hand-crafted quality!

## Features

### 🗺️ 10 Unique Themes
Maps cycle through distinct themes that change visuals and gameplay:
- **Downtown District** - Dense urban environment (high density)
- **Suburban Sprawl** - Spacious neighborhoods (medium density)
- **Industrial Zone** - Factory districts (high density)
- **Tech Campus** - Open corporate parks (low density)
- **Financial District** - Skyscraper maze (extreme density)
- **Retail Row** - Shopping districts (medium density)
- **Nightlife Quarter** - Entertainment area (high density)
- **Waterfront** - Coastal routes (low density)
- **Old Town** - Historic streets (medium density)
- **Future City** - Sci-fi metropolis (high density)

### 🌤️ Weather System
Four weather conditions that affect gameplay:
- **Clear** - Normal visibility and speed
- **Rain** - 85% visibility, 90% speed
- **Snow** - 70% visibility, 80% speed  
- **Fog** - 60% visibility, 95% speed

### 🌅 Time of Day
Three lighting conditions for visual variety:
- **Day** - Full brightness
- **Sunset** - Golden hour glow (85% brightness)
- **Night** - Darker streets (70% brightness)

### 🧩 Chunk-Based Generation
30+ handcrafted chunk patterns assembled procedurally:
- **Open Chunks (20%)** - Easy navigation, few obstacles
- **Medium Chunks (40%)** - Balanced challenge
- **Hard Chunks (30%)** - Complex mazes and obstacles
- **Extreme Chunks (10%)** - Maximum difficulty

### 🎲 Seed System
Every map has a unique seed for reproducibility:
- **Daily Maps** - Generated from date + player name
- **Custom Seeds** - Enter any text to share maps with friends
- **Seed Display** - See current seed in bottom-left HUD

### 🎯 Adaptive Difficulty
The game learns from your performance:
- Tracks deaths per chunk location
- Reduces difficulty after 5+ deaths in same spot
- Increases difficulty after successful completions
- Saves your difficulty preference in browser

## How to Use

### Playing with Daily Maps
1. Start game normally - map generates from today's date + your name
2. Every player with same name gets same daily map
3. Perfect for competing on leaderboards!

### Using Custom Seeds
1. In character selection, find "Custom Seed" input
2. Enter any text (e.g., "CHALLENGE2024")
3. Share the seed with friends for identical maps
4. Leave blank for daily generation

### Understanding Map Info
Check the HUD in top-left during gameplay:
```
Theme: Downtown District
Weather: Rainy
Time: Night
Seed: 20241215
```

### Tips for Success
- **Rain/Snow**: Move carefully, reduced speed
- **Fog**: Stay oriented, limited visibility
- **Night**: Watch for lit buildings as landmarks
- **High Density Themes**: Plan routes carefully
- **Extreme Chunks**: Use power-ups strategically

## Technical Details

### Chunk Pattern System
- Each chunk is 20x20 tiles
- Patterns define obstacles (buildings, meetings, tech debt)
- Entrance/exit points ensure connectivity
- Difficulty rating: 0.1 (easy) to 1.0 (extreme)

### Map Assembly
- Level 1: 3x3 chunks (60x60 tiles)
- Grows with level: +0.5 chunks per dimension
- Level 10: ~8x8 chunks (160x160 tiles)
- Always ensures solvable paths

### Difficulty Weighting
```
Base weights by chunk type:
- Open: 20%
- Medium: 40%
- Hard: 30%
- Extreme: 10%

Adjusted by:
- Player level (more extreme at higher levels)
- Personal difficulty preference (based on performance)
- Death tracking (reduces difficulty in problem areas)
```

### Weather Effects
Applied to player speed in real-time:
```javascript
speed *= WEATHER_EFFECTS[weather].speedMod
Clear:  1.0x speed
Rain:   0.9x speed
Snow:   0.8x speed
Fog:    0.95x speed
```

### Seed Generation
```javascript
Daily seed = YYYYMMDD + sum(player_name_char_codes)
Custom seed = sum(seed_text_char_codes) + level
```

## Examples

### Daily Challenge Seed
```
Date: 2024-12-15
Player: "Alex"
Seed: 20241215 + (65+108+101+120) = 20241609
```

### Custom Seed
```
Seed Text: "SPEEDRUN"
Seed: (83+80+69+69+68+82+85+78) + level
Level 1 Seed: 614 + 1 = 615
```

## Advanced Features

### Chunk Death Tracking
System tracks deaths by chunk location:
```
Location: Chunk(2,3) at Seed 20241215
Deaths: 7
Action: Reduce difficulty multiplier to 0.95
```

### Success Bonus
Complete levels without deaths:
```
Success → Difficulty multiplier +0.02 (max 1.5x)
Encourages improvement over time
```

### LocalStorage Data
```javascript
{
  preference: 1.0,  // Difficulty multiplier
  deaths: {
    "2_3_20241215": 7,  // Chunk deaths by location+seed
    "1_4_20241215": 3
  }
}
```

## Compatibility

✅ Works with all existing features:
- Character selection and stats
- Skill tree progression
- Power-ups and abilities
- Multiplayer mode (2-4 players)
- Achievement system
- Daily challenges
- Leaderboards

## Future Enhancements

Potential additions (not yet implemented):
- Moving platforms
- Rotating hazards
- Timed events within chunks
- Seasonal theme variants
- Community seed sharing
- Seed leaderboards

## Troubleshooting

**Maps feel too hard:**
- System will adapt after 5+ deaths
- Try easier character (Agile Alex for balance)
- Use power-ups strategically

**Want consistent practice:**
- Use custom seed "PRACTICE"
- Same map every time for skill building

**Maps feel too easy:**
- System increases difficulty on success
- Try higher levels (10+)
- Challenge friends with custom seeds

## Credits

Procedural generation system balances:
- Infinite variety through chunk assembly
- Hand-crafted quality through pattern library  
- Fair difficulty through adaptive learning
- Competitive play through seed system

Enjoy exploring infinite variations of Team Dominos! 🍕
