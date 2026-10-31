/* ============================================
   NOVUS IGNIS — Scrollytelling Engine
   Sparks · Burn Disintegration · Zeus Crossfade
   ============================================ */

// ========== SPARK PARTICLE SYSTEM ==========
class SparkSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.sparks = [];
    this.running = true;
    this.intensity = 1; // 0-1, can be reduced during burn
    this.resize();
    this.init();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = Math.min(350, Math.floor(window.innerWidth / 4));
    this.sparks = [];
    for (let i = 0; i < count; i++) {
      this.sparks.push(this.createSpark(false));
    }
  }

  createSpark(fromBottom = false) {
    const isEmber = Math.random() > 0.35;
    // Distribute y: if fromBottom, spawn below canvas; if initial init, distribute in bottom 75% of screen
    const spawnY = fromBottom
      ? this.canvas.height + Math.random() * 30
      : this.canvas.height * 0.25 + Math.random() * (this.canvas.height * 0.75);

    return {
      x: Math.random() * this.canvas.width,
      y: spawnY,
      vx: (Math.random() - 0.5) * 0.7,
      vy: -Math.random() * 1.5 - 0.7, // gentle upward velocity reaching 75% height
      size: Math.random() * 3.5 + 1.2,
      opacity: Math.random() * 0.85 + 0.25,
      hue: isEmber ? 18 + Math.random() * 28 : 170 + Math.random() * 20, // warm embers + cyan digital sparks
      saturation: 100,
      lightness: isEmber ? 50 + Math.random() * 25 : 55 + Math.random() * 20,
      life: Math.random() * 500 + 500,
      maxLife: 1000,
      flicker: Math.random() * Math.PI * 2,
      flickerSpeed: Math.random() * 0.05 + 0.015,
    };
  }

  update() {
    if (!this.running) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const topCutoff = this.canvas.height * 0.25; // Reaches 75% of screen height (25% from top)

    for (let i = 0; i < this.sparks.length; i++) {
      const s = this.sparks[i];

      // Physics
      s.x += s.vx;
      s.y += s.vy;
      s.vy -= 0.002; // gentle upward acceleration
      s.vx += (Math.random() - 0.5) * 0.025; // gentle horizontal drift
      s.life--;
      s.flicker += s.flickerSpeed;

      // Height-based opacity fade: full brightness in lower 60%, fades out gradually between 60% and 75% screen height
      let heightFade = 1;
      if (s.y < this.canvas.height * 0.5) {
        heightFade = (s.y - topCutoff) / (this.canvas.height * 0.25);
        if (heightFade < 0) heightFade = 0;
      }

      // Reset when dead or reached upper limit (y < topCutoff)
      if (s.life <= 0 || s.y < topCutoff || s.x < -30 || s.x > this.canvas.width + 30) {
        Object.assign(s, this.createSpark(true));
      }

      // Draw
      const lifeRatio = s.life / s.maxLife;
      const flickerAlpha = 0.5 + 0.5 * Math.sin(s.flicker);
      const alpha = s.opacity * lifeRatio * flickerAlpha * heightFade * this.intensity;

      if (alpha < 0.01) continue;

      // Glow
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.size * 3.2, 0, Math.PI * 2);
      this.ctx.fillStyle = `hsla(${s.hue}, ${s.saturation}%, ${s.lightness}%, ${alpha * 0.2})`;
      this.ctx.fill();

      // Core
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `hsla(${s.hue}, ${s.saturation}%, ${s.lightness}%, ${alpha})`;
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.update());
  }

  // Burst extra sparks from a position (used during burn)
  burst(x, y, count = 20) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      const s = this.createSpark(false);
      s.x = x + (Math.random() - 0.5) * 100;
      s.y = y + (Math.random() - 0.5) * 60;
      s.vx = Math.cos(angle) * speed * 0.5;
      s.vy = -Math.abs(Math.sin(angle) * speed) - 1;
      s.size = Math.random() * 4 + 1.5;
      s.opacity = 0.8 + Math.random() * 0.2;
      s.life = 60 + Math.random() * 60;
      s.maxLife = s.life;
      this.sparks.push(s);
    }
  }

  stop() {
    this.running = false;
  }
}


// ========== BURN DISINTEGRATION ==========
// Reads pixels from hero content and turns them into particles
class BurnEffect {
  constructor(canvas, heroContent, sparkSystem) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.heroContent = heroContent;
    this.sparkSystem = sparkSystem;
    this.particles = [];
    this.progress = 0; // 0 = not burning, 1 = fully burned
    this.prepared = false;
  }

  // Take a "snapshot" of the hero content positions
  prepare() {
    if (this.prepared) return;
    this.prepared = true;

    // We create particles based on the logo, title, and subtitle positions
    const logo = document.getElementById('heroLogo');
    const title = document.getElementById('heroTitle');
    const subtitle = document.getElementById('heroSubtitle');

    const elements = [
      { el: logo, density: 4, hueBase: 20 },      // ember colored
      { el: title, density: 3, hueBase: 25 },       // fire colored
      { el: subtitle, density: 5, hueBase: 180 },   // cyan colored
    ];

    this.particles = [];

    elements.forEach(({ el, density, hueBase }) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();

      for (let x = rect.left; x < rect.right; x += density) {
        for (let y = rect.top; y < rect.bottom; y += density) {
          this.particles.push({
            // Original position
            ox: x,
            oy: y,
            // Current position
            x: x,
            y: y,
            // Velocity (randomized on burn)
            vx: (Math.random() - 0.5) * 6,
            vy: -Math.random() * 8 - 2,
            // Visual
            size: Math.random() * 2.5 + 0.8,
            hue: hueBase + Math.random() * 20,
            opacity: 0.8 + Math.random() * 0.2,
            // When this particle "detaches" (0-1 range)
            detachAt: Math.random(),
            // Gravity & drag
            gravity: 0.02 + Math.random() * 0.03,
            drag: 0.98 + Math.random() * 0.015,
            detached: false,
          });
        }
      }
    });
  }

  // Call each frame with progress 0-1
  render(progress) {
    if (!this.prepared || this.particles.length === 0) return;

    this.progress = progress;

    // Don't render if not burning yet
    if (progress <= 0) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const p of this.particles) {
      // Has this particle "detached" yet based on progress?
      if (!p.detached && progress >= p.detachAt) {
        p.detached = true;
        // Give it a burst velocity
        p.x = p.ox;
        p.y = p.oy;
      }

      if (!p.detached) continue;

      // Physics after detaching
      const timeSinceDetach = (progress - p.detachAt) / (1 - p.detachAt + 0.001);
      p.x += p.vx;
      p.y += p.vy;
      p.vy -= p.gravity; // float upward
      p.vx *= p.drag;
      p.vy *= p.drag;

      // Fade out
      const alpha = p.opacity * Math.max(0, 1 - timeSinceDetach * 1.5);
      if (alpha < 0.01) continue;

      // Glow
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
      this.ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${alpha * 0.2})`;
      this.ctx.fill();

      // Core
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `hsla(${p.hue}, 100%, 65%, ${alpha})`;
      this.ctx.fill();
    }
  }

  reset() {
    this.particles.forEach(p => {
      p.detached = false;
      p.x = p.ox;
      p.y = p.oy;
    });
    this.progress = 0;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}


// ========== MAIN INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const canvas = document.getElementById('sparks-canvas');
  const heroContent = document.getElementById('heroContent');
  const heroLogo = document.getElementById('heroLogo');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const scrollHint = document.getElementById('scrollHint');

  // ---------- SPARK SYSTEM ----------
  const sparks = new SparkSystem(canvas);
  sparks.update();

  // ---------- BURN CANVAS ----------
  // We reuse the same canvas for burn particles
  // (they render on top of the sparks)
  const burnEffect = new BurnEffect(canvas, heroContent, sparks);

  // Delay preparation so fonts/images are loaded
  window.addEventListener('load', () => {
    setTimeout(() => burnEffect.prepare(), 200);
  });

  // ---------- HERO BURN ON SCROLL ----------
  // When user scrolls away from hero, the content burns away
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress; // 0 at start, 1 at end

      // Fade out the actual HTML elements
      const fadeProgress = Math.min(progress * 2, 1); // fade faster
      heroLogo.style.opacity = Math.max(0, 1 - fadeProgress * 1.5);
      heroTitle.style.opacity = Math.max(0, 1 - fadeProgress * 1.5);
      heroSubtitle.style.opacity = Math.max(0, 1 - fadeProgress * 1.5);
      scrollHint.style.opacity = Math.max(0, 1 - fadeProgress * 3);

      // Scale down slightly
      const scale = 1 - fadeProgress * 0.15;
      heroContent.style.transform = `scale(${scale})`;

      // Render burn particles
      burnEffect.render(fadeProgress);

      // Burst sparks during burn
      if (progress > 0.05 && progress < 0.5) {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        if (Math.random() > 0.7) {
          sparks.burst(cx, cy, 3);
        }
      }
    },
    onLeaveBack: () => {
      // Reset when scrolling back to top
      heroLogo.style.opacity = 1;
      heroTitle.style.opacity = 1;
      heroSubtitle.style.opacity = 1;
      scrollHint.style.opacity = 1;
      heroContent.style.transform = 'scale(1)';
      burnEffect.reset();
    }
  });

  // ---------- STORY SCROLLYTELLING CROSSFADE ENGINE ----------
  function setupStorySection(triggerId, images, texts) {
    const total = images.length;

    ScrollTrigger.create({
      trigger: triggerId,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
      onUpdate: (self) => {
        const p = self.progress;
        const step = 1 / total;

        images.forEach((img, i) => {
          if (!img) return;

          const sceneStart = i * step;
          const sceneEnd = (i + 1) * step;
          const fadeLen = step * 0.35;

          // Image opacity
          let opacity = 0;
          if (i === 0) {
            opacity = p < step - fadeLen ? 1 : Math.max(0, 1 - (p - (step - fadeLen)) / fadeLen);
          } else if (i === total - 1) {
            const startFade = sceneStart - fadeLen;
            opacity = p < startFade ? 0 : Math.min(1, (p - startFade) / fadeLen);
          } else {
            const fadeInStart = sceneStart - fadeLen;
            const fadeOutStart = sceneEnd - fadeLen;
            if (p >= fadeInStart && p <= sceneEnd) {
              if (p < sceneStart) {
                opacity = (p - fadeInStart) / fadeLen;
              } else if (p > fadeOutStart) {
                opacity = 1 - (p - fadeOutStart) / fadeLen;
              } else {
                opacity = 1;
              }
            }
          }
          img.style.opacity = Math.max(0, Math.min(1, opacity));

          // Text overlay opacity
          const textElem = texts[i];
          if (textElem) {
            const textStart = sceneStart + step * 0.1;
            const textPeakStart = sceneStart + step * 0.25;
            const textPeakEnd = sceneEnd - step * 0.25;
            const textEnd = sceneEnd - step * 0.1;

            let textOpacity = 0;
            if (p >= textStart && p <= textEnd) {
              if (p < textPeakStart) {
                textOpacity = (p - textStart) / (textPeakStart - textStart);
              } else if (p > textPeakEnd) {
                textOpacity = 1 - (p - textPeakEnd) / (textEnd - textPeakEnd);
              } else {
                textOpacity = 1;
              }
            }
            textElem.style.opacity = Math.max(0, Math.min(1, textOpacity));
          }
        });
      }
    });
  }

  // ACT I: ZEUS STORY (4 scenes)
  setupStorySection('#zeusStory',
    [
      document.getElementById('zeus1'),
      document.getElementById('zeus2'),
      document.getElementById('zeus3'),
      document.getElementById('zeus4')
    ],
    [
      document.getElementById('zeusText1'),
      document.getElementById('zeusText2'),
      document.getElementById('zeusText3'),
      document.getElementById('zeusText4')
    ]
  );

  // ========== ACT II: PROMETHEUS ENTRANCE & OLYMPUS QUEST ==========
  const promAura = document.getElementById('promAura');
  const prom1 = document.getElementById('prom1');
  const prom2 = document.getElementById('prom2');
  const prom3 = document.getElementById('prom3');
  const prom4 = document.getElementById('prom4');
  const promText = document.getElementById('promText');

  // ACT II: OLYMPUS & CIVILIZATION ELEMENTS
  const olimp1 = document.getElementById('olimp1');
  const olimp2 = document.getElementById('olimp2');
  const olimp3 = document.getElementById('olimp3');
  const olimp4 = document.getElementById('olimp4');
  const rekindle = document.getElementById('rekindle');

  const civ1 = document.getElementById('civ1');
  const civ2 = document.getElementById('civ2');
  const civ3 = document.getElementById('civ3');
  const civ4 = document.getElementById('civ4');
  const civ5 = document.getElementById('civ5');

  // ACT III: 17 CHANGE FRAMES
  // ACT III: 17 CHANGE FRAMES
  const chImages = [];
  for (let i = 1; i <= 17; i++) {
    const id = `ch${i.toString().padStart(2, '0')}`;
    chImages.push(document.getElementById(id));
  }

  // ACT IV: DIGITAL PROMETHEUS & WE ARE PROMETHEUS (DIGIPROM 02-06)
  const digiProm2 = document.getElementById('digiProm2');
  const digiProm3 = document.getElementById('digiProm3');
  const digiProm4 = document.getElementById('digiProm4');
  const digiProm5 = document.getElementById('digiProm5');
  const digiProm6 = document.getElementById('digiProm6');

  // TEXT OVERLAYS
  const olimpText1 = document.getElementById('olimpText1');
  const olimpText2 = document.getElementById('olimpText2');
  const olimpText3 = document.getElementById('olimpText3');
  const olimpText4 = document.getElementById('olimpText4');
  const rekindleText = document.getElementById('rekindleText');
  const civText = document.getElementById('civText');

  const deskText1 = document.getElementById('deskText1');
  const deskText2 = document.getElementById('deskText2');
  const deskText3 = document.getElementById('deskText3');
  const deskText4 = document.getElementById('deskText4');
  const deskText5 = document.getElementById('deskText5');
  const deskText6 = document.getElementById('deskText6');
  const deskText7 = document.getElementById('deskText7');
  const deskText8 = document.getElementById('deskText8');
  const deskText9 = document.getElementById('deskText9');

  const digiText2 = document.getElementById('digiText2');
  const digiText3 = document.getElementById('digiText3');
  const digiText4 = document.getElementById('digiText4');
  const digiText5 = document.getElementById('digiText5');
  const digiText6 = document.getElementById('digiText6');

  function fadeWin(p, start, peakStart, peakEnd, end) {
    if (p < start || p > end) return 0;
    if (p < peakStart) return (p - start) / (peakStart - start);
    if (p > peakEnd) return 1 - (p - peakEnd) / (end - peakEnd);
    return 1;
  }

  let olimpPinned = null;

  // 1. Prometheus Flexing Entrance: Starts later when olimpStory reaches 40% from top of viewport (top 40%),
  // and finishes at Prom4 with text 100% visible right as olimpStory reaches top top and pins!
  ScrollTrigger.create({
    trigger: '#olimpStory',
    start: 'top 40%',
    end: 'top top',
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress; // 0.0 (top reaches 40%) -> 1.0 (pinned at top)
      if (olimpPinned && olimpPinned.progress > 0) return; // the pinned Olimp timeline owns these layers now

      // Background Aura
      if (promAura) promAura.style.opacity = p * 0.9;

      // PromText ("Prometheus steps forward..."): reaches 100% as p reaches 1.0
      if (promText) promText.style.opacity = p < 0.15 ? 0 : (p - 0.15) / 0.85;

      // Poses: Prom1 -> Prom2 -> Prom3 -> Prom4
      // Prom1: visible from start (0%), fades to Prom2 around 25-35%
      if (prom1) prom1.style.opacity = p < 0.25 ? 1 : p < 0.35 ? 1 - (p - 0.25) / 0.1 : 0;

      // Prom2: fades in 25-35%, holds to 55%, fades out 55-65%
      if (prom2) {
        prom2.style.opacity = p < 0.25 ? 0 :
                              p < 0.35 ? (p - 0.25) / 0.1 :
                              p < 0.55 ? 1 :
                              p < 0.65 ? 1 - (p - 0.55) / 0.1 : 0;
      }

      // Prom3: fades in 55-65%, holds to 75%, fades out 75-85%
      if (prom3) {
        prom3.style.opacity = p < 0.55 ? 0 :
                              p < 0.65 ? (p - 0.55) / 0.1 :
                              p < 0.75 ? 1 :
                              p < 0.85 ? 1 - (p - 0.75) / 0.1 : 0;
      }

      // Prom4: fades in 75-85%, holds at 100% to p = 1.0 (ready at pin point!)
      if (prom4) {
        prom4.style.opacity = p < 0.75 ? 0 :
                              p < 0.85 ? (p - 0.75) / 0.1 : 1;
      }
    }
  });

  // 2. Pinned Act II: Prometheus Stand -> Mount Olympus -> Rekindle Campfire -> Civilization Timelapse (Civ1 -> Civ5)
  olimpPinned = ScrollTrigger.create({
    trigger: '#olimpStory',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3,
    onUpdate: (self) => {
      const p = self.progress; // 0.0 -> 1.0 while pinned

      // 0. Hold Prometheus (Prom4 + promAura + promText) visible from 0.00 to 0.12 so user can savor the pose!
      // Then crossfade out into Olimp1 from 0.12 to 0.18
      const promHold = p < 0.12 ? 1 : p < 0.18 ? 1 - (p - 0.12) / 0.06 : 0;
      if (prom4) prom4.style.opacity = promHold;
      if (promAura) promAura.style.opacity = promHold * 0.9;
      if (promText) promText.style.opacity = promHold;

      // 1. Olimp1 (mountain base): 0.12 -> 0.30
      if (olimp1) olimp1.style.opacity = fadeWin(p, 0.12, 0.17, 0.26, 0.30);
      if (olimpText1) olimpText1.style.opacity = fadeWin(p, 0.14, 0.18, 0.26, 0.29);

      // 2. Olimp2 (palace infiltration): 0.28 -> 0.46
      if (olimp2) olimp2.style.opacity = fadeWin(p, 0.28, 0.33, 0.42, 0.46);
      if (olimpText2) olimpText2.style.opacity = fadeWin(p, 0.30, 0.34, 0.42, 0.45);

      // 3. Olimp3 (seizing fire): 0.44 -> 0.62
      if (olimp3) olimp3.style.opacity = fadeWin(p, 0.44, 0.49, 0.58, 0.62);
      if (olimpText3) olimpText3.style.opacity = fadeWin(p, 0.46, 0.50, 0.58, 0.61);

      // 4. Olimp4 (returning fire down mountain): 0.60 -> 0.76
      if (olimp4) olimp4.style.opacity = fadeWin(p, 0.60, 0.64, 0.72, 0.76);
      if (olimpText4) olimpText4.style.opacity = fadeWin(p, 0.62, 0.66, 0.72, 0.75);

      // 5. Rekindle (Return to Zeus1 campfire): 0.74 -> 0.88
      if (rekindle) rekindle.style.opacity = fadeWin(p, 0.74, 0.78, 0.85, 0.88);
      if (rekindleText) rekindleText.style.opacity = fadeWin(p, 0.75, 0.79, 0.85, 0.87);

      // 6. Civilization Timelapse (Civ1 -> Civ5): 0.86 -> 1.00
      if (civText) civText.style.opacity = fadeWin(p, 0.87, 0.90, 0.98, 1.00);

      if (civ1) civ1.style.opacity = fadeWin(p, 0.86, 0.88, 0.895, 0.91);
      if (civ2) civ2.style.opacity = fadeWin(p, 0.89, 0.91, 0.925, 0.94);
      if (civ3) civ3.style.opacity = fadeWin(p, 0.92, 0.94, 0.955, 0.97);
      if (civ4) civ4.style.opacity = fadeWin(p, 0.95, 0.965, 0.98, 0.99);
      if (civ5) civ5.style.opacity = p < 0.97 ? 0 : p < 0.99 ? (p - 0.97) / 0.02 : 1;
    }
  });

  // 3. Pinned Act III: The Living Desk Transformation (Change01 -> Change17)
  ScrollTrigger.create({
    trigger: '#deskStory',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3,
    onUpdate: (self) => {
      const p = self.progress; // 0.0 -> 1.0 while pinned

      const totalSteps = 16;
      const stepDelta = 1.0 / totalSteps; // 0.0625 per frame

      chImages.forEach((img, idx) => {
        if (!img) return;
        const center = idx * stepDelta;

        if (idx === 0) {
          // Change01: starts visible at 1.0, holds, then crossfades into Change02
          img.style.opacity = p < stepDelta * 0.5 ? 1 :
                              p < stepDelta ? 1 - (p - stepDelta * 0.5) / (stepDelta * 0.5) : 0;
        } else if (idx === 16) {
          // Change17: holds solid until end of desk section
          img.style.opacity = p < center - stepDelta * 0.9 ? 0 :
                              p < center - stepDelta * 0.1 ? (p - (center - stepDelta * 0.9)) / (stepDelta * 0.8) : 1;
        } else {
          // Intermediate frames: smooth crossfade
          const fInStart = center - stepDelta * 0.9;
          const fInPeak = center - stepDelta * 0.1;
          const fOutStart = center + stepDelta * 0.1;
          const fOutEnd = center + stepDelta * 0.9;
          img.style.opacity = fadeWin(p, fInStart, fInPeak, fOutStart, fOutEnd);
        }
      });

      // Desk Text Overlays (Top only: Change01 - Change17)
      if (deskText1) deskText1.style.opacity = fadeWin(p, 0.00, 0.03, 0.09, 0.12);
      if (deskText2) deskText2.style.opacity = fadeWin(p, 0.14, 0.18, 0.34, 0.38);
      if (deskText3) deskText3.style.opacity = fadeWin(p, 0.40, 0.43, 0.47, 0.50);
      if (deskText4) deskText4.style.opacity = fadeWin(p, 0.52, 0.55, 0.59, 0.62);
      if (deskText5) deskText5.style.opacity = fadeWin(p, 0.64, 0.67, 0.70, 0.73);
      if (deskText6) deskText6.style.opacity = fadeWin(p, 0.75, 0.78, 0.81, 0.84);
      if (deskText7) deskText7.style.opacity = fadeWin(p, 0.85, 0.87, 0.89, 0.91);
      if (deskText8) deskText8.style.opacity = fadeWin(p, 0.92, 0.935, 0.95, 0.965);
      if (deskText9) deskText9.style.opacity = fadeWin(p, 0.97, 0.98, 0.988, 0.996);
    },
    onLeave: () => {
      [deskText1, deskText2, deskText3, deskText4, deskText5, deskText6, deskText7, deskText8, deskText9].forEach(el => {
        if (el) el.style.opacity = 0;
      });
    },
    onLeaveBack: () => {
      [deskText1, deskText2, deskText3, deskText4, deskText5, deskText6, deskText7, deskText8, deskText9].forEach(el => {
        if (el) el.style.opacity = 0;
      });
    }
  });

  // 4. Pinned Act IV: The Digital Prometheus & We Are Prometheus Multiplication (DigiProm02 -> DigiProm06)
  ScrollTrigger.create({
    trigger: '#digiPromStory',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3,
    onLeave: () => {
      [digiText2, digiText3, digiText4, digiText5, digiText6].forEach(el => {
        if (el) el.style.opacity = 0;
      });
    },
    onLeaveBack: () => {
      [digiText2, digiText3, digiText4, digiText5, digiText6].forEach(el => {
        if (el) el.style.opacity = 0;
      });
    },
    onUpdate: (self) => {
      const p = self.progress; // 0.0 -> 1.0 while pinned

      // DigiProm02 (Arms crossed - starts visible from start at 1.0): 0.00 -> 0.16 (halved duration!)
      if (digiProm2) {
        digiProm2.style.opacity = p < 0.10 ? 1 :
                                  p < 0.16 ? 1 - (p - 0.10) / 0.06 : 0;
      }
      // Text 1 (Top: "Except this time..."): 0.00 -> 0.15
      if (digiText2) digiText2.style.opacity = fadeWin(p, 0.00, 0.03, 0.10, 0.15);

      // DigiProm03 (3 figures): 0.10 -> 0.36
      if (digiProm3) digiProm3.style.opacity = fadeWin(p, 0.10, 0.16, 0.30, 0.36);
      // Text 2 (Top: "A single titan is not enough."): 0.12 -> 0.34
      if (digiText3) digiText3.style.opacity = fadeWin(p, 0.12, 0.17, 0.29, 0.34);

      // DigiProm04 (7 figures): 0.32 -> 0.54
      if (digiProm4) digiProm4.style.opacity = fadeWin(p, 0.32, 0.38, 0.48, 0.54);
      // Text 3 (Top: "We need numbers." / Bottom: "And the numbers are in us."): 0.34 -> 0.52
      if (digiText4) digiText4.style.opacity = fadeWin(p, 0.34, 0.39, 0.48, 0.52);

      // DigiProm05 (15 figures): 0.50 -> 0.72
      if (digiProm5) digiProm5.style.opacity = fadeWin(p, 0.50, 0.56, 0.66, 0.72);
      // Text 4 (Top: "We are Prometheus."): 0.52 -> 0.70
      if (digiText5) digiText5.style.opacity = fadeWin(p, 0.52, 0.57, 0.65, 0.70);

      // DigiProm06 (Full Crowd): 0.70 -> 1.00 (holds solid to 1.00!)
      if (digiProm6) {
        digiProm6.style.opacity = p < 0.70 ? 0 : p < 0.77 ? (p - 0.70) / 0.07 : 1;
      }

      // Text 5 (Center: "This time we are the titan"): 0.74 -> 0.99
      if (digiText6) {
        digiText6.style.opacity = fadeWin(p, 0.74, 0.80, 0.94, 0.99);
      }
    }
  });

  // ---------- GAP 4: THE FOUNDATIONAL AXIOM (KANT'S AXIOM SCROLLYTELLING) ----------
  const dignityContainer = document.getElementById('dignityContainer');
  const dignityTitle = document.getElementById('dignityTitle');
  const kantLine1 = document.getElementById('kantLine1');
  const kantLine2 = document.getElementById('kantLine2');
  const kantLine3 = document.getElementById('kantLine3');

  function animLine(el, p, inStart, inEnd, outStart, outEnd) {
    if (!el) return;
    if (p < inStart || p > outEnd) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      return;
    }
    let op = 1;
    let trY = 0;
    if (p < inEnd) {
      const norm = (p - inStart) / (inEnd - inStart);
      op = norm;
      trY = (1 - norm) * 20;
    } else if (p > outStart) {
      const norm = (outEnd - p) / (outEnd - outStart);
      op = norm;
      trY = (1 - norm) * -15;
    }
    el.style.opacity = op;
    el.style.transform = `translateY(${trY}px)`;
  }

  ScrollTrigger.create({
    trigger: '#dignityStory',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3,
    onLeave: () => {
      if (dignityContainer) dignityContainer.style.opacity = 0;
    },
    onLeaveBack: () => {
      if (dignityContainer) dignityContainer.style.opacity = 0;
      if (kantLine1) kantLine1.style.opacity = 0;
      if (kantLine2) kantLine2.style.opacity = 0;
      if (kantLine3) kantLine3.style.opacity = 0;
    },
    onUpdate: (self) => {
      const p = self.progress; // 0.0 -> 1.0

      // Overall container fade-in and hold until exit
      if (dignityContainer) {
        dignityContainer.style.opacity = fadeWin(p, 0.00, 0.04, 0.94, 0.99);
      }

      // Title: "AN ALTERNATIVE IS POSSIBLE." - starts visible and remains anchor
      if (dignityTitle) {
        dignityTitle.style.opacity = fadeWin(p, 0.00, 0.04, 0.94, 0.99);
      }

      // Step 1: "In the realm of ends..." (Enters: 0.12 -> 0.22, holds to 0.94)
      animLine(kantLine1, p, 0.12, 0.22, 0.94, 0.99);

      // Step 2: "What has a price can be replaced..." (Enters: 0.38 -> 0.48, holds to 0.94)
      animLine(kantLine2, p, 0.38, 0.48, 0.94, 0.99);

      // Step 3: "what on the other hand is above all price..." (Enters: 0.64 -> 0.74, holds to 0.94)
      animLine(kantLine3, p, 0.64, 0.74, 0.94, 0.99);
    }
  });

  // ---------- ACT V: THE SOVEREIGN TRIPTYCH (SCROLLYTELLING) ----------
  const tripAmbient = document.getElementById('tripAmbient');
  const tripIntro = document.getElementById('tripIntro');
  const triptychTitle = document.getElementById('triptychTitle');
  const tripCol1 = document.getElementById('tripCol1');
  const tripCol2 = document.getElementById('tripCol2');
  const tripCol3 = document.getElementById('tripCol3');
  const suveriaCard = document.getElementById('suveriaCard');

  function animCol(el, p, inStart, inEnd, outStart, outEnd) {
    if (!el) return;
    if (p < inStart || p > outEnd) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(35px) scale(0.95)';
      return;
    }
    let op = 1;
    let trY = 0;
    let sc = 1;
    if (p < inEnd) {
      const norm = (p - inStart) / (inEnd - inStart);
      op = norm;
      trY = (1 - norm) * 35;
      sc = 0.95 + norm * 0.05;
    } else if (p > outStart) {
      const norm = (outEnd - p) / (outEnd - outStart);
      op = norm;
      trY = (1 - norm) * -20;
      sc = 1 - (1 - norm) * 0.03;
    }
    el.style.opacity = op;
    el.style.transform = `translateY(${trY}px) scale(${sc})`;
  }

  function animCard(el, p, inStart, inEnd, outStart, outEnd) {
    if (!el) return;
    if (p < inStart || p > outEnd) {
      el.style.opacity = 0;
      el.style.transform = 'translate(-50%, calc(-50% + 25px)) scale(0.96)';
      el.style.pointerEvents = 'none';
      return;
    }
    let op = 1;
    let trY = 0;
    let sc = 1;
    if (p < inEnd) {
      const norm = (p - inStart) / (inEnd - inStart);
      op = norm;
      trY = (1 - norm) * 25;
      sc = 0.96 + norm * 0.04;
    } else if (p > outStart) {
      const norm = (outEnd - p) / (outEnd - outStart);
      op = norm;
      trY = (1 - norm) * -20;
      sc = 1 - (1 - norm) * 0.04;
    }
    el.style.opacity = op;
    el.style.transform = `translate(-50%, calc(-50% + ${trY}px)) scale(${sc})`;
    el.style.pointerEvents = op > 0.6 ? 'auto' : 'none';
  }

  ScrollTrigger.create({
    trigger: '#triptychStory',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3,
    onLeave: () => {
      if (tripIntro) tripIntro.style.opacity = 0;
      if (triptychTitle) triptychTitle.style.opacity = 0;
      if (tripCol1) tripCol1.style.opacity = 0;
      if (tripCol2) tripCol2.style.opacity = 0;
      if (tripCol3) tripCol3.style.opacity = 0;
      if (suveriaCard) suveriaCard.style.opacity = 0;
    },
    onLeaveBack: () => {
      if (tripIntro) tripIntro.style.opacity = 0;
      if (triptychTitle) triptychTitle.style.opacity = 0;
      if (tripCol1) tripCol1.style.opacity = 0;
      if (tripCol2) tripCol2.style.opacity = 0;
      if (tripCol3) tripCol3.style.opacity = 0;
      if (suveriaCard) suveriaCard.style.opacity = 0;
    },
    onUpdate: (self) => {
      const p = self.progress; // 0.0 -> 1.0 while pinned

      // Ambient Lighting
      if (tripAmbient) tripAmbient.style.opacity = fadeWin(p, 0.00, 0.03, 0.97, 1.00);

      // Timeline in vh of scroll: section 770vh = 670vh of scroll
      const at = (vh) => vh / 670;

      // Phase 1: Human Dignity + constitution (in 0-50vh, short hold, out 80-130vh)
      if (tripIntro) {
        tripIntro.style.opacity = fadeWin(p, at(0), at(50), at(80), at(130));
        const trY = p < at(50) ? (1 - p / at(50)) * 20 : p > at(80) ? -Math.min(1, (p - at(80)) / at(50)) * 20 : 0;
        tripIntro.style.transform = `translate(-50%, calc(-50% + ${trY}px))`;
      }

      // Phase 2: three pillars (130-370vh). Pillar I (centre, larger) first and lit; II and III together in the background
      if (triptychTitle) triptychTitle.style.opacity = fadeWin(p, at(130), at(170), at(330), at(370));
      animCol(tripCol1, p, at(140), at(190), at(330), at(370));
      if (tripCol1) tripCol1.classList.toggle('glow-active', p >= at(140) && p <= at(370));
      animCol(tripCol2, p, at(210), at(250), at(330), at(370));
      animCol(tripCol3, p, at(210), at(250), at(330), at(370));

      // Phase 3: Suveria card (380-660vh)
      animCard(suveriaCard, p, at(380), at(440), at(600), at(660));
    }
  });

  // ---------- HIDE SPARKS AFTER HERO ----------
  ScrollTrigger.create({
    trigger: '#zeusStory',
    start: 'top 80%',
    end: 'top 20%',
    scrub: true,
    onUpdate: (self) => {
      canvas.style.opacity = 1 - self.progress;
    }
  });

  // ---------- HOME NAV BAR VISIBILITY CONTROLLER ----------
  // Nav is visible on Hero, hidden during scrollytelling, and reappears on Hub section!
  ScrollTrigger.create({
    trigger: '#zeusStory',
    start: 'top 90%',
    endTrigger: '#hubSection',
    end: 'top 80%',
    onEnter: () => {
      const nav = document.querySelector('.site-nav--home');
      if (nav) nav.classList.add('site-nav--hidden');
    },
    onLeaveBack: () => {
      const nav = document.querySelector('.site-nav--home');
      if (nav) nav.classList.remove('site-nav--hidden');
    },
    onLeave: () => {
      const nav = document.querySelector('.site-nav--home');
      if (nav) nav.classList.remove('site-nav--hidden');
    },
    onEnterBack: () => {
      const nav = document.querySelector('.site-nav--home');
      if (nav) nav.classList.add('site-nav--hidden');
    }
  });
});
