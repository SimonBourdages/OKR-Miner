# Team Dominos: Visual Style Evolution

## 🎨 THREE DISTINCT ART STYLES

**15 Levels with Dramatic Visual Transformation**

---

## 🎮 PHASE 1: Levels 1-5 - "Low-Poly 3D"

### **Rendering:** Three.js 3D
### **Visual Style:** Corporate Low-Poly

**Aesthetic:**
- Clean, simple 3D geometric shapes
- BoxGeometry characters and objects
- Bright, professional corporate colors
- Crossy Road / Monument Valley vibe
- Sharp shadows and clean lighting

**Color Palette:**
- Sky: Light blue (#87CEEB)
- Platforms: Gray concrete (#808080)
- OKRs: Golden (#FFD700)
- Character: Company red (#E21A2C)
- Buildings: Modern glass and steel

**Mood:** Professional, clean, grounded in reality

---

## 🔥 EVOLUTION 1 @ Level 5 Complete

**Transition Effect:**
- 3D world starts to flatten
- Cel-shading effect appears
- Outlines thicken
- Colors become more vibrant
- Dramatic anime-style transformation sequence

---

## 🌸 PHASE 2: Levels 6-10 - "Anime Style"

### **Rendering:** 2D Canvas with Anime Aesthetics
### **Visual Style:** Japanese Anime / Manga

**Aesthetic:**
- Hand-drawn anime character sprites
- Thick black outlines (cel-shaded look)
- Dynamic action lines and speed effects
- Manga-style impact effects
- Chibi-style character proportions
- Expressive eyes and emotions

**Visual Elements:**
- **Characters:** Anime-style sprites with:
  - Large expressive eyes
  - Dynamic poses
  - Multiple animation frames (idle, walk, run, jump)
  - Hair that moves with motion
  - Facial expressions change with actions
  
- **Effects:**
  - Speed lines when running
  - Sparkles ✨ when collecting OKRs
  - Sweat drops 💧 when stressed
  - Impact stars ⭐ when landing
  - Dust clouds when jumping
  - Manga-style action bubbles

- **UI:**
  - Manga panel borders
  - Japanese-inspired fonts
  - Dramatic action text ("JUMP!", "COLLECT!", "DELIVER!")
  - Anime-style health/energy bars

**Color Palette:**
- Vibrant, saturated colors
- Bold outlines (3-4px black borders)
- Gradient fills (anime cel-shading)
- Bright highlights
- Deep shadows

**Backgrounds:**
- Parallax scrolling layers
- Anime-style buildings and environments
- Cherry blossom petals floating (optional)
- Clouds in anime art style
- Sunbeams and dramatic lighting

**Character Design:**
- Each team member as anime character
- Unique hairstyles and expressions
- Color-coded outfits
- Exaggerated proportions (big heads, small bodies)
- Animated facial features

**Animation Style:**
- Limited animation (3-5 frames per action)
- Smear frames for fast movement
- Hold frames for impact
- Squash and stretch
- Anime running cycle (Naruto run optional! 😄)

**Mood:** Energetic, dynamic, expressive, fun

---

## 🚀 EVOLUTION 2 @ Level 10 Complete

**Transition Effect:**
- Anime outlines pixelate
- Resolution gradually decreases
- Sprites convert to pixel grid
- CRT scanline effect
- Retro bit-crush audio transition
- "Loading..." in pixel font

---

## 👾 PHASE 3: Levels 11-15 - "Pixel Art"

### **Rendering:** 2D Canvas with Pixel-Perfect Rendering
### **Visual Style:** Retro 8-bit/16-bit Pixel Art

**Aesthetic:**
- Classic pixel art (16x16 or 32x32 sprites)
- Limited color palette (NES/SNES era)
- Dithering effects
- CRT scanline filter
- Pixel-perfect positioning
- Retro arcade aesthetic

**Resolution:**
- Base canvas: 320x240 (scaled up)
- Sprite size: 16x16 pixels
- Tile size: 8x8 or 16x16
- No anti-aliasing (crisp pixels)

**Visual Elements:**
- **Characters:** Tiny pixel sprites
  - 16x16 pixel characters
  - 2-3 animation frames
  - Simple walk/jump cycles
  - Retro color palette

- **OKRs:** 8x8 pixel cubes
  - Simple rotation animation
  - Sparkle pixels around them

- **Automation Nodes:** 
  - Glowing pixel circles
  - Pulsing animation
  - Connection lines (1-2 pixels wide)

- **Effects:**
  - Pixel explosion on collection
  - Star particles (1x1 pixels)
  - Screen shake (pixel jitter)
  - Palette swaps for power-ups

**Color Palette:**
- Limited to 16-32 colors total
- Inspired by:
  - NES: 56 colors
  - Game Boy: 4 shades of green
  - SNES: More colors but still retro
  - Choose one consistent palette

**Example Palette (Cyberpunk Retro):**
```
#000000 - Black (background)
#1a1a2e - Dark blue
#16213e - Navy
#0f3460 - Blue
#533483 - Purple
#e94560 - Hot pink (highlights)
#ffd700 - Gold (OKRs)
#00ff00 - Matrix green (data)
#ffffff - White (text)
```

**UI Style:**
- Retro arcade UI
- Pixelated fonts (8x8 bitmap)
- Scanline effects
- CRT curvature (optional)
- Blinking cursors
- DOS-style borders

**Backgrounds:**
- Parallax pixel layers
- Tiled pixel backgrounds
- Dithered gradients
- Starfield effects
- Grid patterns (Tron-style)

**Animation:**
- Limited frames (2-3 per action)
- Palette swaps for effects
- Simple sprite flipping
- Tile-based movement

**Special Effects:**
- Screen transitions: Pixel dissolve
- Data streams: Scrolling pixel text
- Numbers: Bitmap font counters
- Graphs: Pixel-perfect line charts

**Reference Games:**
- Celeste (modern pixel art)
- Hyper Light Drifter (16-bit style)
- Enter the Gungeon (pixel with modern effects)
- Stardew Valley (cozy pixel aesthetic)
- Undertale (expressive pixel characters)

**Mood:** Nostalgic, retro, cyberpunk, "numbers go up"

---

## 📊 VISUAL COMPARISON

| Aspect | Phase 1 (3D) | Phase 2 (Anime) | Phase 3 (Pixel) |
|--------|--------------|-----------------|-----------------|
| **Style** | Low-poly 3D | Anime/Manga | 8-bit/16-bit |
| **Character Size** | 1x2x1 units | 64x96 pixels | 16x16 pixels |
| **Outlines** | None | Thick 3-4px | 1px or none |
| **Colors** | Realistic | Vibrant saturated | Limited palette |
| **Animation Frames** | 3D smooth | 5-8 frames | 2-3 frames |
| **Effects** | Particles | Speed lines, sparkles | Pixel explosions |
| **Inspiration** | Crossy Road | My Hero Academia | Celeste |

---

## 🎨 IMPLEMENTATION DETAILS

### Phase 2: Anime Style Implementation

```javascript
// Canvas 2D rendering with anime sprites
const ctx = canvas.getContext('2d');

// Character sprite sheet
const characterSprite = new Image();
characterSprite.src = 'character-anime.png'; // 512x512 sprite sheet

// Draw with thick outlines
function drawAnimeCharacter(x, y, frame) {
  // Draw black outline first (4px)
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 4;
  ctx.strokeRect(x-2, y-2, 64+4, 96+4);
  
  // Draw sprite
  const frameX = (frame % 8) * 64;
  const frameY = Math.floor(frame / 8) * 96;
  ctx.drawImage(characterSprite, frameX, frameY, 64, 96, x, y, 64, 96);
  
  // Add anime effects
  if (isRunning) drawSpeedLines(x, y);
  if (justLanded) drawImpactStars(x, y);
}

// Anime-style effects
function drawSpeedLines(x, y) {
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i++) {
    const offsetX = x - 20 - (i * 10);
    const offsetY = y + (Math.random() * 60);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    ctx.lineTo(offsetX - 30, offsetY);
    ctx.stroke();
  }
}

// Sparkle effect (✨)
function drawSparkles(x, y) {
  const sparkleFrames = ['✨', '⭐', '💫', '🌟'];
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  for (let i = 0; i < 3; i++) {
    const angle = (Date.now() / 100 + i * 120) % 360;
    const rad = angle * Math.PI / 180;
    const sx = x + Math.cos(rad) * 40;
    const sy = y + Math.sin(rad) * 40;
    ctx.fillText(sparkleFrames[i % 4], sx, sy);
  }
}
```

### Phase 3: Pixel Art Implementation

```javascript
// Pixel-perfect canvas setup
canvas.width = 320;
canvas.height = 240;
canvas.style.width = '960px'; // 3x scale
canvas.style.height = '720px';
canvas.style.imageRendering = 'pixelated'; // Critical!
ctx.imageSmoothingEnabled = false; // No smoothing!

// 16x16 pixel character
const pixelSprite = new Image();
pixelSprite.src = 'character-pixel.png'; // 256x256 sprite sheet

function drawPixelCharacter(x, y, frame) {
  // Snap to pixel grid
  x = Math.floor(x);
  y = Math.floor(y);
  
  // Draw 16x16 sprite
  const frameX = (frame % 16) * 16;
  const frameY = Math.floor(frame / 16) * 16;
  ctx.drawImage(pixelSprite, frameX, frameY, 16, 16, x, y, 16, 16);
}

// Pixel particle effect
function drawPixelExplosion(x, y) {
  const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#ffffff'];
  for (let i = 0; i < 20; i++) {
    const px = x + Math.random() * 16 - 8;
    const py = y + Math.random() * 16 - 8;
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillRect(Math.floor(px), Math.floor(py), 1, 1); // 1x1 pixel
  }
}

// CRT scanline effect
function drawScanlines() {
  ctx.globalAlpha = 0.1;
  for (let y = 0; y < canvas.height; y += 2) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, y, canvas.width, 1);
  }
  ctx.globalAlpha = 1.0;
}

// Pixel font rendering
function drawPixelText(text, x, y) {
  ctx.font = '8px "Press Start 2P"'; // Pixel font
  ctx.fillStyle = '#fff';
  ctx.fillText(text, Math.floor(x), Math.floor(y));
}
```

---

## 🎬 TRANSITION SEQUENCES

### Evolution 1: 3D → Anime
```
1. Camera zooms out from 3D view
2. World begins to flatten (3D → 2.5D → 2D)
3. Cel-shading effect kicks in
4. Thick black outlines appear around everything
5. Colors become more saturated
6. Speed lines burst across screen
7. Anime character sprite pops in with dramatic pose
8. Title card: "TEAM MANAGER MODE!"
9. Fade to Level 6 in full anime style
```

### Evolution 2: Anime → Pixel Art
```
1. Anime sprites start to pixelate
2. Resolution decreases gradually (smooth → chunky → pixels)
3. Color palette reduces (256 colors → 16 colors)
4. CRT scanlines appear
5. Retro "LOADING..." text with progress bar
6. Screen flickers like old monitor
7. 8-bit chiptune music starts
8. Title card in pixel font: "AUTOMATION PROTOCOL"
9. Fade to Level 11 in pure pixel art
```

---

## 💾 ASSET REQUIREMENTS

### Phase 1 (Current):
- ✅ Three.js library
- ✅ Basic geometries (built-in)

### Phase 2 (Anime):
- [ ] Anime character sprite sheet (512x512)
- [ ] UI element sprites (buttons, panels)
- [ ] Effect sprites (speed lines, sparkles, impacts)
- [ ] Background art layers (parallax)
- [ ] Anime-style font

### Phase 3 (Pixel):
- [ ] Pixel sprite sheet (256x256)
- [ ] Pixel tile set (16x16 tiles)
- [ ] Pixel UI elements
- [ ] Pixel font (8x8 or 16x16)
- [ ] CRT shader (optional)

---

## 🎯 ARTISTIC DIRECTION

**Phase 1:** "You're starting at a real company"  
**Phase 2:** "Your team becomes legendary (anime heroes)"  
**Phase 3:** "You've transcended into pure data (retro future)"

Each visual style reinforces the gameplay evolution!

---

**STATUS:** Design updated, ready for implementation! 🎨
