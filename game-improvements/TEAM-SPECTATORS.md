# Team Member Spectators System

## 🎭 Bringing the Team to Life

**Concept:** Each level features 1-2 team members as background spectators who cheer, react, and add personality to the world.

---

## 👥 THE 20 ODSP TEAM MEMBERS

### Assignment to Levels (15 levels, 20 members - some appear multiple times)

**PHASE 1 (3D Low-Poly) - Levels 1-5:**
- **Level 1:** Bea Villanueva (Tutorial guide)
- **Level 2:** Francisco Garcia-Ascanio & Mason Allen (Cheering duo)
- **Level 3:** Ramon Rick (Speed expert, gives tips)
- **Level 4:** Erik Wahlstrom (Standing near vertical section)
- **Level 5 BOSS:** Murali Govindaswamy & Stephane Cavin (Watching the boss fight)

**PHASE 2 (Anime Style) - Levels 6-10:**
- **Level 6:** Avital Sadot (First team member you hire - tutorial)
- **Level 7:** Parker Wall & Zaki Rahman (Your AI workers)
- **Level 8:** Jeff Eckerlin & Lauren Bell (Coordinating workers)
- **Level 9:** Patrick Shao & Katy Ionis (Efficiency experts)
- **Level 10 BOSS:** Jason Almaraz & Ada Ye (Epic battle spectators)

**PHASE 3 (Pixel Art) - Levels 11-15:**
- **Level 11:** Josh Kim (Automation engineer)
- **Level 12:** James Becker (Network architect)
- **Level 13:** Yanan Shi & Lauren Go (System optimizers)
- **Level 14:** All 20 members (Tiny pixel crowd)
- **Level 15 FINAL:** Jrod (John Rodrigues) - Final conversation

---

## 🎨 VISUAL DESIGN PER PHASE

### PHASE 1: 3D LOW-POLY SPECTATORS

```javascript
// 3D character models
class Spectator3D {
  constructor(name, color, position) {
    this.name = name;
    this.mesh = new THREE.Group();
    
    // Body (simple box)
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.5, 0.6),
      new THREE.MeshLambertMaterial({ color: color })
    );
    
    // Head
    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.6, 0.6),
      new THREE.MeshLambertMaterial({ color: 0xffdbac }) // Skin tone
    );
    head.position.y = 1.2;
    
    this.mesh.add(body);
    this.mesh.add(head);
    this.mesh.position.copy(position);
    
    // Animation state
    this.wavePhase = Math.random() * Math.PI * 2;
  }
  
  animate(dt) {
    // Gentle waving animation
    this.wavePhase += dt * 2;
    const wave = Math.sin(this.wavePhase) * 0.3;
    this.mesh.rotation.z = wave * 0.2;
    this.mesh.children[0].rotation.x = wave * 0.1; // Body sway
    this.mesh.children[1].rotation.y = Math.sin(this.wavePhase * 1.5) * 0.3; // Head turn
  }
  
  cheer() {
    // Jump animation when player does something good
    const originalY = this.mesh.position.y;
    this.mesh.position.y += 0.5;
    setTimeout(() => {
      this.mesh.position.y = originalY;
    }, 200);
  }
}

// Level setup
const level1Spectators = [
  new Spectator3D('Bea Villanueva', 0x4a90e2, new THREE.Vector3(-5, 0, -3))
];
```

**Appearance:**
- Simple colored boxes (team member's assigned color)
- Located in background/sides of level
- Subtle idle animations (waving, nodding)
- Cheer when player collects OKR
- Jump excitedly when level complete

---

### PHASE 2: ANIME STYLE SPECTATORS

```javascript
// Anime character sprites
class SpectatorAnime {
  constructor(name, color, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.color = color;
    this.frame = 0;
    this.emotion = 'neutral'; // neutral, happy, excited, worried
    this.speechBubble = '';
  }
  
  draw(ctx) {
    // Draw anime-style character
    const w = 40, h = 60;
    
    // Black outline (thick anime style)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.strokeRect(this.x - 2, this.y - 2, w + 4, h + 4);
    
    // Body (team member color)
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, w, h);
    
    // Face
    const faceY = this.y + 10;
    
    // Eyes (expression changes based on emotion)
    ctx.fillStyle = '#FFFFFF';
    if (this.emotion === 'excited') {
      // Star eyes! ⭐
      this.drawStarEye(ctx, this.x + 10, faceY);
      this.drawStarEye(ctx, this.x + 28, faceY);
    } else {
      // Normal eyes
      ctx.beginPath();
      ctx.arc(this.x + 10, faceY, 6, 0, Math.PI * 2);
      ctx.arc(this.x + 28, faceY, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // Pupils
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      const pupilX = this.emotion === 'worried' ? -2 : 0;
      ctx.arc(this.x + 10 + pupilX, faceY, 3, 0, Math.PI * 2);
      ctx.arc(this.x + 28 + pupilX, faceY, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Mouth
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    if (this.emotion === 'happy' || this.emotion === 'excited') {
      // Smile
      ctx.arc(this.x + 19, faceY + 8, 8, 0, Math.PI);
    } else {
      // Neutral
      ctx.moveTo(this.x + 12, faceY + 12);
      ctx.lineTo(this.x + 26, faceY + 12);
    }
    ctx.stroke();
    
    // Speech bubble
    if (this.speechBubble) {
      this.drawSpeechBubble(ctx);
    }
    
    // Emotion effects
    if (this.emotion === 'excited') {
      // Sparkles around character
      this.drawSparkles(ctx);
    }
  }
  
  drawStarEye(ctx, x, y) {
    // Draw 4-pointed star for excited expression
    ctx.fillStyle = '#FFD700';
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI / 2) - Math.PI / 4;
      const r = i % 2 === 0 ? 6 : 3;
      const px = Math.cos(angle) * r;
      const py = Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  
  drawSpeechBubble(ctx) {
    const bubbleW = 100;
    const bubbleH = 40;
    const bubbleX = this.x + 50;
    const bubbleY = this.y - 50;
    
    // Bubble
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.fillRect(bubbleX, bubbleY, bubbleW, bubbleH);
    ctx.strokeRect(bubbleX, bubbleY, bubbleW, bubbleH);
    
    // Pointer
    ctx.beginPath();
    ctx.moveTo(bubbleX + 10, bubbleY + bubbleH);
    ctx.lineTo(this.x + 30, this.y);
    ctx.lineTo(bubbleX + 20, bubbleY + bubbleH);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Text
    ctx.fillStyle = '#000000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(this.speechBubble, bubbleX + bubbleW/2, bubbleY + bubbleH/2 + 4);
  }
  
  drawSparkles(ctx) {
    // Manga-style sparkles
    const time = Date.now() / 100;
    for (let i = 0; i < 4; i++) {
      const angle = (time + i * 90) % 360;
      const rad = angle * Math.PI / 180;
      const dist = 30;
      const sx = this.x + 20 + Math.cos(rad) * dist;
      const sy = this.y + 30 + Math.sin(rad) * dist;
      
      ctx.fillStyle = '#FFD700';
      ctx.font = '16px Arial';
      ctx.fillText('✨', sx, sy);
    }
  }
  
  react(event) {
    switch(event) {
      case 'okr_collected':
        this.emotion = 'happy';
        this.speechBubble = 'Nice!';
        setTimeout(() => this.speechBubble = '', 2000);
        break;
      case 'level_complete':
        this.emotion = 'excited';
        this.speechBubble = 'Amazing!!';
        setTimeout(() => this.emotion = 'neutral', 3000);
        break;
      case 'player_died':
        this.emotion = 'worried';
        this.speechBubble = 'Oh no!';
        setTimeout(() => this.emotion = 'neutral', 2000);
        break;
    }
  }
}
```

**Appearance:**
- Full anime-style sprite (40x60px)
- Thick black outlines
- Large expressive eyes
- Emotions change based on player actions
- Speech bubbles with short phrases
- Sparkle effects when excited

**Reactions:**
- Collect OKR: "Nice!" 😊
- Level complete: "Amazing!!" ⭐⭐
- Player dies: "Oh no!" 😰
- Low health: "Be careful!" 💧
- Perfect run: "Incredible!!" ✨✨

---

### PHASE 3: PIXEL ART SPECTATORS

```javascript
// Pixel art character sprites
class SpectatorPixel {
  constructor(name, color, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.color = color;
    this.frame = 0;
  }
  
  draw(ctx) {
    // 8x8 pixel character
    const s = 4; // Scale factor
    const px = Math.floor(this.x);
    const py = Math.floor(this.y);
    
    // Draw pixel sprite
    ctx.fillStyle = this.color;
    
    // Body (4x6 pixels)
    ctx.fillRect(px * s, (py + 2) * s, 4 * s, 6 * s);
    
    // Head (4x4 pixels)
    ctx.fillStyle = '#FFDBAC';
    ctx.fillRect(px * s, py * s, 4 * s, 4 * s);
    
    // Eyes (2 pixels)
    ctx.fillStyle = '#000000';
    ctx.fillRect((px + 1) * s, (py + 1) * s, 1 * s, 1 * s);
    ctx.fillRect((px + 2) * s, (py + 1) * s, 1 * s, 1 * s);
    
    // Idle animation (bob up and down)
    const bobOffset = Math.sin(Date.now() / 500) * 2;
    ctx.translate(0, bobOffset);
    ctx.translate(0, -bobOffset);
  }
  
  react(event) {
    // Simple pixel jump
    if (event === 'okr_collected') {
      this.y -= 2;
      setTimeout(() => this.y += 2, 200);
    }
  }
}
```

**Appearance:**
- Tiny 8x8 pixel sprites
- Simple 2-3 color design
- Minimal animation (bobbing idle)
- Located at edge of screen
- Multiple can appear as a "crowd"

---

## 💬 DIALOGUE SYSTEM

### Team Member Quotes (Per Level)

**Level 1 - Bea Villanueva:**
- Start: "Welcome to your first day!"
- Mid: "You're doing great!"
- End: "Perfect first delivery!"

**Level 2 - Francisco & Mason:**
- Start: "Show us what you've got!"
- Jump: "Nice jump!"
- End: "Teamwork makes the dream work!"

**Level 3 - Ramon Rick:**
- Start: "Speed is key here!"
- Sprint: "That's the spirit!"
- End: "Fast and efficient!"

**Level 4 - Erik Wahlstrom:**
- Start: "This one's vertical!"
- Climb: "Keep climbing!"
- End: "You reached the top!"

**Level 5 BOSS - Murali & Stephane:**
- Start: "The Bureaucrat awaits!"
- Mid: "Dodge those papers!"
- Victory: "Promotion earned!"

**Level 6 - Avital Sadot:**
- Start: "I'll help you deliver!"
- Hire: "Welcome to the team!"
- End: "AI workers are amazing!"

**Level 7 - Parker & Zaki:**
- Start: "We'll coordinate!"
- Teamwork: "Perfect sync!"
- End: "That's efficiency!"

**Level 8 - Jeff & Lauren:**
- Start: "Time pressure!"
- Rush: "Faster!"
- End: "Beat the clock!"

**Level 9 - Patrick & Katy:**
- Start: "Optimize this!"
- Strategy: "Smart placement!"
- End: "Peak efficiency!"

**Level 10 BOSS - Jason & Ada:**
- Start: "Scope Creep is huge!"
- Battle: "Work together!"
- Victory: "Digital transformation!"

**Level 11 - Josh Kim:**
- Start: "Build your first pipeline!"
- Place: "Perfect node placement!"
- End: "Automation begins!"

**Level 12 - James Becker:**
- Start: "Network topology matters!"
- Connect: "Great connections!"
- End: "Optimal network!"

**Level 13 - Yanan & Lauren:**
- Start: "Exponential growth time!"
- Grow: "Look at those numbers!"
- End: "Incredible throughput!"

**Level 14 - ALL 20 MEMBERS (Crowd):**
- Start: "We're all watching!"
- Progress: "Keep going!"
- End: "Almost there!"

**Level 15 - Jrod (Final):**
- Start: "You've come so far..."
- Mid: "Choose your path..."
- Victory: "Transformation complete!"

---

## 🎮 IMPLEMENTATION

### Level Configuration:

```javascript
const levelConfigs = [
  {
    level: 1,
    spectators: [
      { 
        name: 'Bea Villanueva',
        color: '#4a90e2',
        position: { x: -5, y: 0, z: -3 },
        quotes: {
          start: "Welcome to your first day!",
          okr: "Great pickup!",
          complete: "Perfect first delivery!"
        }
      }
    ]
  },
  {
    level: 2,
    spectators: [
      { name: 'Francisco Garcia-Ascanio', color: '#e74c3c', position: { x: -4, y: 0, z: -2 } },
      { name: 'Mason Allen', color: '#27ae60', position: { x: 4, y: 0, z: -2 } }
    ]
  },
  // ... etc for all 15 levels
];
```

### Event Triggers:

```javascript
function onOKRCollected() {
  // Trigger spectator reactions
  currentLevel.spectators.forEach(spectator => {
    spectator.react('okr_collected');
    if (spectator.quotes.okr) {
      showSpeechBubble(spectator, spectator.quotes.okr);
    }
  });
}

function onLevelComplete() {
  currentLevel.spectators.forEach(spectator => {
    spectator.react('level_complete');
    if (spectator.quotes.complete) {
      showSpeechBubble(spectator, spectator.quotes.complete, 3000);
    }
  });
}

function onPlayerDeath() {
  currentLevel.spectators.forEach(spectator => {
    spectator.react('player_died');
    showSpeechBubble(spectator, "Don't give up!");
  });
}
```

---

## 🌟 SPECIAL MOMENTS

### Level 5 Boss Fight:
- Murali and Stephane stand on opposite sides
- Cheer when you dodge attacks
- Jump when boss is defeated
- High-five each other (animation)

### Level 10 Boss Fight:
- Jason and Ada in anime style
- Dramatic reaction poses
- Speech bubbles with "Go!" and "You can do it!"
- Victory celebration with sparkles

### Level 14 Crowd Scene:
- All 20 members as tiny pixel sprites
- Wave motion through crowd
- Individual jumps when milestones hit
- Collective cheer at completion

### Level 15 Final:
- Jrod alone, center stage
- Philosophical dialogue
- Player choice presented
- Emotional farewell

---

## 🎯 BENEFITS

✅ **Personality:** Each level feels unique  
✅ **Motivation:** Team cheers you on  
✅ **Lore:** Learn about team members  
✅ **Immersion:** World feels alive  
✅ **Tutorial:** Spectators give helpful tips  
✅ **Celebration:** Shared victories  

---

**STATUS:** Design complete, ready for implementation!  
**Agent-28:** Can add spectator system to renderers
