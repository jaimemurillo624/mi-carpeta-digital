@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

<template>
  <section class="hero">

    <!-- FONDO: GRID + GRADIENTE ATMOSFÉRICO -->
    <div class="hero-bg">
      <div class="grid-overlay"></div>
      <div class="glow-orb glow-1"></div>
      <div class="glow-orb glow-2"></div>
      <div class="glow-orb glow-3"></div>
    </div>

    <!-- SCANLINES -->
    <div class="scanlines"></div>

    <!-- PARTÍCULAS DECORATIVAS -->
    <div class="particles">
      <span v-for="n in 12" :key="n" class="particle" :style="particleStyle(n)"></span>
    </div>

    <!-- CONTENIDO PRINCIPAL -->
    <div class="hero-content">

      <!-- BADGE TERMINAL -->
      <div class="terminal-badge">
        <span class="badge-dot"></span>
        <span class="badge-text">SYSTEM_ONLINE // v2.0.25</span>
      </div>

      <!-- NOMBRE CON GLITCH -->
      <h1 class="hero-title">
        <span class="pre-name">Hola, soy</span>
        <span class="name" data-text="Jaime Murillo">Jaime Murillo</span>
      </h1>

      <!-- SUBTÍTULO CON TYPEWRITER -->
      <div class="typing-wrapper">
        <span class="typing-label">role<span class="symbol">:</span></span>
        <h2 class="typing">Ingeniero en TI<span class="cursor">_</span></h2>
      </div>

      <!-- DESCRIPCIÓN -->
      <p class="hero-desc">
        Arquitecto de experiencias digitales.<br>
        Construyo el futuro de la web.
      </p>

      <!-- STATS DECORATIVOS -->
      <div class="stats-row">
        <div class="stat">
          <span class="stat-num">2</span>
          <span class="stat-label">años exp.</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">+10</span>
          <span class="stat-label">proyectos</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">∞</span>
          <span class="stat-label">café</span>
        </div>
      </div>

      <!-- BOTONES -->
      <div class="hero-buttons">
        <router-link to="/proyectos" class="btn btn-primary">
          <span class="btn-inner">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            Ver Proyectos
          </span>
          <span class="btn-glow"></span>
        </router-link>

        <router-link to="/contacto" class="btn btn-ghost">
          <span class="btn-inner">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 2L8 8M14 2H9M14 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" />
            </svg>
            Contactar
          </span>
        </router-link>
      </div>

    </div>

    <!-- INDICADOR SCROLL -->
    <a href="#sobre-mi" class="scroll-hint">
      <span class="scroll-text">SCROLL</span>
      <div class="scroll-line"></div>
    </a>


  </section>
    <section id="sobre-mi" class="about-section">

    <!-- FONDO DECORATIVO -->
    <div class="about-bg">
      <div class="bg-dot-grid"></div>
      <div class="bg-glow bg-glow-1"></div>
      <div class="bg-glow bg-glow-2"></div>
    </div>

    <div class="about-container">

      <!-- HEADER -->
      <div class="about-header">
        <span class="header-eyebrow">// PERFIL.EXE</span>
        <h2 class="about-title">Sobre <em>Mí</em></h2>
        <div class="about-line">
          <span class="line-track"></span>
          <span class="line-dot"></span>
          <span class="line-track"></span>
        </div>
      </div>

      <!-- GRID PRINCIPAL -->
      <div class="about-grid">

        <!-- COLUMNA IZQUIERDA: FOTO -->
        <div class="about-image-col">

          <!-- DECORACIÓN ESQUINAS -->
          <div class="frame-corner corner-tl"></div>
          <div class="frame-corner corner-tr"></div>
          <div class="frame-corner corner-bl"></div>
          <div class="frame-corner corner-br"></div>

          <!-- ETIQUETA FLOTANTE -->
          <div class="img-badge">
            <span class="badge-pulse"></span>
            <span>Disponible</span>
          </div>

          <!-- FOTO -->
          <div class="img-wrapper">
            <div class="img-glow"></div>
            <img src="../assets/img/JaimeMurillo.jpg" alt="Jaime Murillo" />
            <div class="img-overlay"></div>
          </div>

          <!-- TARJETA DE EXPERIENCIA -->
          <div class="exp-card">
            <span class="exp-num">3+</span>
            <span class="exp-label">años de<br>experiencia</span>
          </div>

        </div>

        <!-- COLUMNA DERECHA: CONTENIDO -->
        <div class="about-content">

          <!-- TEXTO BIO -->
          <div class="bio-block">
            <p class="about-text">
              Mi enfoque va más allá del código. Como Ingeniero en Tecnologías de la Información,
              mi verdadera misión es utilizar eficiente y eficazmente las TI para mejorar el desempeño
              de las organizaciones, ya sean públicas o privadas.
            </p>
            <p class="about-text about-text--secondary">
              Me especializo en gestionar proyectos tecnológicos integrales, donde aplico conceptos
              éticos, legales y financieros que garantizan impacto real en el negocio.
            </p>
          </div>

          <!-- DIVISOR -->
          <div class="content-divider">
            <span class="divider-label">STACK TÉCNICO</span>
          </div>

          <!-- SKILLS GRID -->
          <div class="skills-grid">

            <div class="skill-card" style="--i:0">
              <div class="skill-icon-wrap">
                <svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 6l4-4 4 4M8 2v13M20 18l-4 4-4-4M16 22V9"/>
                </svg>
              </div>
              <div class="skill-info">
                <h3>Frontend</h3>
                <p>Vue · React · Ionic</p>
              </div>
              <div class="skill-bar">
                <span class="skill-fill" style="--w: 92%"></span>
              </div>
            </div>

            <div class="skill-card" style="--i:1">
              <div class="skill-icon-wrap">
                <svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <div class="skill-info">
                <h3>Backend </h3>
                <p>Node.js · Python · APIs</p>
              </div>
              <div class="skill-bar">
                <span class="skill-fill" style="--w: 87%"></span>
              </div>
            </div>

            <div class="skill-card" style="--i:2">
              <div class="skill-icon-wrap">
                <svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <div class="skill-info">
                <h3>Cloud & DevOps</h3>
                <p>AWS · Docker · CI/CD</p>
              </div>
              <div class="skill-bar">
                <span class="skill-fill" style="--w: 78%"></span>
              </div>
            </div>

            <div class="skill-card" style="--i:3">
              <div class="skill-icon-wrap">
                <svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div class="skill-info">
                <h3>Performance</h3>
                <p>Optimización · Escalabilidad</p>
              </div>
              <div class="skill-bar">
                <span class="skill-fill" style="--w: 83%"></span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const particleStyle = (n) => {
  const positions = [
    { top: '10%', left: '5%', size: '2px', delay: '0s', dur: '4s' },
    { top: '20%', left: '90%', size: '3px', delay: '1s', dur: '6s' },
    { top: '70%', left: '8%', size: '2px', delay: '2s', dur: '5s' },
    { top: '80%', left: '85%', size: '4px', delay: '0.5s', dur: '7s' },
    { top: '40%', left: '2%', size: '2px', delay: '1.5s', dur: '4.5s' },
    { top: '55%', left: '95%', size: '3px', delay: '3s', dur: '6s' },
    { top: '15%', left: '50%', size: '2px', delay: '0.8s', dur: '5s' },
    { top: '90%', left: '40%', size: '3px', delay: '2.2s', dur: '4s' },
    { top: '30%', left: '75%', size: '2px', delay: '1.2s', dur: '7s' },
    { top: '65%', left: '60%', size: '4px', delay: '3.5s', dur: '5.5s' },
    { top: '5%', left: '30%', size: '2px', delay: '0.3s', dur: '6s' },
    { top: '85%', left: '20%', size: '3px', delay: '1.8s', dur: '4s' },
  ]
  const p = positions[n - 1] || positions[0]
  return {
    top: p.top,
    left: p.left,
    width: p.size,
    height: p.size,
    animationDelay: p.delay,
    animationDuration: p.dur,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500&display=swap');

/* ─────────────────────────────────────────── BASE */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  transition: background 0.4s ease, color 0.4s ease;
}

/* ── MODO OSCURO (default cyberpunk) */
body.dark-mode .hero {
  background: #020814;
  color: #e2e8f0;
}

/* ── MODO CLARO */
body.light-mode .hero {
  background: #f0f4ff;
  color: #1a1a2e;
}

/* ─────────────────────────────────────────── FONDO */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* GRID PERSPECTIVA */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 234, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 234, 255, 0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
  animation: gridShift 20s linear infinite;
  transition: opacity 0.4s;
}

body.light-mode .grid-overlay {
  background-image:
    linear-gradient(rgba(0, 100, 180, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 100, 180, 0.08) 1px, transparent 1px);
  opacity: 0.6;
}

@keyframes gridShift {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 60px 60px;
  }
}

/* ORBES DE LUZ */
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
  animation: orbPulse 8s ease-in-out infinite;
  transition: opacity 0.4s;
}

body.light-mode .glow-orb {
  opacity: 0.18;
}

.glow-1 {
  width: 500px;
  height: 500px;
  top: -100px;
  left: -100px;
  background: radial-gradient(circle, #00eaff 0%, transparent 70%);
}

body.light-mode .glow-1 {
  background: radial-gradient(circle, #0ea5e9 0%, transparent 70%);
}

.glow-2 {
  width: 400px;
  height: 400px;
  bottom: -80px;
  right: -80px;
  background: radial-gradient(circle, #c026d3 0%, transparent 70%);
  animation-delay: 3s;
}

body.light-mode .glow-2 {
  background: radial-gradient(circle, #a855f7 0%, transparent 70%);
}

.glow-3 {
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, #3b0764 0%, transparent 70%);
  animation-delay: 6s;
  opacity: 0.2;
}

body.light-mode .glow-3 {
  opacity: 0.08;
}


/* ─────────────────────────────────────────── SCANLINES */
.scanlines {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: repeating-linear-gradient(0deg,
      rgba(0, 0, 0, 0.12) 0px,
      rgba(0, 0, 0, 0.12) 1px,
      transparent 1px,
      transparent 3px);
  animation: scanMove 12s linear infinite;
  transition: opacity 0.4s;
}

body.light-mode .scanlines {
  opacity: 0.25;
  background: repeating-linear-gradient(0deg,
      rgba(0, 80, 160, 0.06) 0px,
      rgba(0, 80, 160, 0.06) 1px,
      transparent 1px,
      transparent 3px);
}



/* ─────────────────────────────────────────── PARTÍCULAS */
.particles {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: #00eaff;
  border-radius: 50%;
  box-shadow: 0 0 6px #00eaff;
  animation: particleFloat linear infinite;
  transition: background 0.4s, box-shadow 0.4s;
}

body.light-mode .particle {
  background: #0284c7;
  box-shadow: 0 0 6px #0284c7;
  opacity: 0.5;
}



/* ─────────────────────────────────────────── CONTENIDO */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 820px;
  width: 100%;
  padding: 0 24px;
  text-align: center;
  animation: contentReveal 1s ease forwards;
}

@keyframes contentReveal {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─────────────────────────────────────────── BADGE */
.terminal-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 234, 255, 0.06);
  border: 1px solid rgba(0, 234, 255, 0.25);
  border-radius: 100px;
  padding: 6px 16px;
  margin-bottom: 32px;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: #00eaff;
  transition: background 0.4s, border-color 0.4s, color 0.4s;
}

body.light-mode .terminal-badge {
  background: rgba(14, 165, 233, 0.08);
  border-color: rgba(14, 165, 233, 0.35);
  color: #0284c7;
}

body.light-mode .badge-dot {
  background: #0284c7;
  box-shadow: 0 0 8px #0284c7;
}

.badge-dot {
  width: 7px;
  height: 7px;
  background: #00eaff;
  border-radius: 50%;
  box-shadow: 0 0 8px #00eaff;
  animation: dotBlink 2s ease-in-out infinite;
}

@keyframes dotBlink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}

/* ─────────────────────────────────────────── TÍTULO */
.pre-name {
  display: block;
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  color: #64748b;
  margin-bottom: 8px;
  text-transform: uppercase;
  transition: color 0.4s;
}

body.light-mode .pre-name {
  color: #94a3b8;
}

.hero-title {
  margin: 0 0 16px;
  line-height: 1.1;
}

.name {
  display: block;
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: transparent;
  background: linear-gradient(135deg, #ffffff 30%, #00eaff 60%, #c026d3 100%);
  -webkit-background-clip: text;
  background-clip: text;
  position: relative;
  animation: glitchSettle 1.4s ease forwards;
  transition: background 0.4s;
}

body.light-mode .name {
  background: linear-gradient(135deg, #0f172a 20%, #0284c7 55%, #7c3aed 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Glitch sutil en el nombre */
.name::before,
.name::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  right: 0;
  background: inherit;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: glitch 6s infinite;
}

.name::before {
  clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
  transform: translateX(-2px);
  filter: hue-rotate(90deg);
  animation-delay: 0.3s;
}

.name::after {
  clip-path: polygon(0 55%, 100% 55%, 100% 70%, 0 70%);
  transform: translateX(2px);
  filter: hue-rotate(-90deg);
  animation-delay: 0.6s;
}

@keyframes glitch {

  0%,
  90%,
  100% {
    opacity: 0;
  }

  92%,
  94% {
    opacity: 0.8;
  }
}

@keyframes glitchSettle {
  0% {
    filter: blur(4px);
    letter-spacing: 0.3em;
  }

  100% {
    filter: blur(0);
    letter-spacing: -0.02em;
  }
}

/* ─────────────────────────────────────────── SUBTÍTULO */
.typing-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
}

.typing-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: #c026d3;
  letter-spacing: 0.05em;
  transition: color 0.4s;
}

body.light-mode .typing-label {
  color: #7c3aed;
}

.symbol {
  color: #64748b;
}

.typing {
  font-family: 'Space Mono', monospace;
  font-size: clamp(0.9rem, 2.5vw, 1.3rem);
  font-weight: 700;
  color: #94a3b8;
  margin: 0;
  letter-spacing: 0.02em;
  transition: color 0.4s;
}

body.light-mode .typing {
  color: #475569;
}

.cursor {
  color: #00eaff;
  animation: cursorBlink 1.1s step-end infinite;
  transition: color 0.4s;
}

body.light-mode .cursor {
  color: #0284c7;
}

@keyframes cursorBlink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

/* ─────────────────────────────────────────── DESCRIPCIÓN */
.hero-desc {
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  line-height: 1.8;
  color: #64748b;
  margin: 0 auto 36px;
  max-width: 540px;
  font-weight: 300;
  transition: color 0.4s;
}

body.light-mode .hero-desc {
  color: #475569;
}

/* ─────────────────────────────────────────── STATS */
.stats-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-bottom: 40px;
  padding: 20px 32px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  transition: background 0.4s, border-color 0.4s;
}

body.light-mode .stats-row {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(14, 165, 233, 0.15);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.stat-num {
  font-family: 'Orbitron', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00eaff;
  line-height: 1;
  transition: color 0.4s;
}

body.light-mode .stat-num {
  color: #0284c7;
}

.stat-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #475569;
  transition: color 0.4s;
}

body.light-mode .stat-label {
  color: #94a3b8;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, transparent, rgba(0, 234, 255, 0.3), transparent);
  transition: background 0.4s;
}

body.light-mode .stat-divider {
  background: linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.25), transparent);
}

/* ─────────────────────────────────────────── BOTONES */
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  position: relative;
  display: inline-flex;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-inner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  position: relative;
  z-index: 1;
}

/* Botón primario */
.btn-primary {
  background: linear-gradient(135deg, #00b4cc, #00eaff, #9333ea);
  background-size: 200% 200%;
  animation: btnGradientShift 4s ease infinite;
  color: #020814;
  font-weight: 700;
  box-shadow: 0 0 20px rgba(0, 234, 255, 0.3);
}

body.light-mode .btn-primary {
  background: linear-gradient(135deg, #0ea5e9, #0284c7, #7c3aed);
  background-size: 200% 200%;
  color: white;
  box-shadow: 0 4px 20px rgba(2, 132, 199, 0.35);
}

.btn-primary:hover {
  box-shadow: 0 0 40px rgba(0, 234, 255, 0.6);
}

body.light-mode .btn-primary:hover {
  box-shadow: 0 6px 30px rgba(2, 132, 199, 0.55);
}

@keyframes btnGradientShift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.btn-primary:hover .btn-glow {
  opacity: 1;
}

/* Botón ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid rgba(0, 234, 255, 0.3);
  color: #00eaff;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s, color 0.4s;
}

body.light-mode .btn-ghost {
  border-color: rgba(2, 132, 199, 0.35);
  color: #0284c7;
}

.btn-ghost::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 234, 255, 0.05);
  opacity: 0;
  transition: opacity 0.3s;
}

body.light-mode .btn-ghost::before {
  background: rgba(2, 132, 199, 0.06);
}

.btn-ghost:hover {
  border-color: rgba(0, 234, 255, 0.7);
  box-shadow: 0 0 20px rgba(0, 234, 255, 0.15), inset 0 0 20px rgba(0, 234, 255, 0.05);
}

body.light-mode .btn-ghost:hover {
  border-color: rgba(2, 132, 199, 0.7);
  box-shadow: 0 4px 20px rgba(2, 132, 199, 0.18);
}

.btn-ghost:hover::before {
  opacity: 1;
}

/* ─────────────────────────────────────────── SCROLL HINT */
.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.scroll-text {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  color: #334155;
  transition: color 0.4s;
}

body.light-mode .scroll-text {
  color: #94a3b8;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, #00eaff, transparent);
  animation: scrollPulse 2s ease-in-out infinite;
  transition: background 0.4s;
}

body.light-mode .scroll-line {
  background: linear-gradient(to bottom, #0284c7, transparent);
}

@keyframes scrollPulse {
  0% {
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
  }

  50% {
    transform: scaleY(1);
    transform-origin: top;
    opacity: 1;
  }

  100% {
    transform: scaleY(1);
    transform-origin: bottom;
    opacity: 0;
  }
}

/* ─────────────────────────────────────────── RESPONSIVE */
@media (max-width: 640px) {
  .typing-wrapper {
    flex-direction: column;
    gap: 4px;
  }

  .stats-row {
    gap: 16px;
    padding: 16px 20px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 260px;
    justify-content: center;
  }

  .terminal-badge {
    font-size: 0.6rem;
  }
}


.about-section {
  min-height: 100vh;
  padding: 120px 20px;
  background: #020617;
  color: white;
}


/* SECCION SOBRE MI */

/* ─── VARIABLES */
.about-section {
  --cyan: #00eaff;
  --magenta: #c026d3;
  --cyan-dim: rgba(0, 234, 255, 0.15);
  --cyan-border: rgba(0, 234, 255, 0.25);
  --radius: 14px;
}

/* ─── BASE */
.about-section {
  position: relative;
  min-height: 100vh;
  padding: 100px 24px;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.4s, color 0.4s;
}

body.dark-mode .about-section {
  background: #030712;
  color: #e2e8f0;
}

body.light-mode .about-section {
  background: #f0f4ff;
  color: #1a1a2e;
}

/* ─── FONDO */
.about-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(0,234,255,0.12) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent);
  transition: opacity 0.4s;
}

body.light-mode .bg-dot-grid {
  background-image: radial-gradient(rgba(2,132,199,0.1) 1px, transparent 1px);
  opacity: 0.6;
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  transition: opacity 0.4s;
}

.bg-glow-1 {
  width: 500px; height: 500px;
  top: -100px; right: -100px;
  background: radial-gradient(circle, rgba(0,234,255,0.12), transparent 70%);
}

.bg-glow-2 {
  width: 400px; height: 400px;
  bottom: 0; left: -80px;
  background: radial-gradient(circle, rgba(192,38,211,0.1), transparent 70%);
}

body.light-mode .bg-glow-1 { opacity: 0.5; }
body.light-mode .bg-glow-2 { opacity: 0.4; }

/* ─── CONTENEDOR */
.about-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── HEADER */
.about-header {
  text-align: center;
  margin-bottom: 80px;
}

.header-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: var(--cyan);
  display: block;
  margin-bottom: 12px;
  transition: color 0.4s;
}

body.light-mode .header-eyebrow { color: #0284c7; }

.about-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 20px;
  letter-spacing: -0.03em;
}

body.dark-mode .about-title { color: #f1f5f9; }
body.light-mode .about-title { color: #0f172a; }

.about-title em {
  font-style: normal;
  color: transparent;
  background: linear-gradient(135deg, var(--cyan), var(--magenta));
  -webkit-background-clip: text;
  background-clip: text;
}

body.light-mode .about-title em {
  background: linear-gradient(135deg, #0284c7, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
}

/* DIVISOR DECORATIVO */
.about-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.line-track {
  display: block;
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyan));
  transition: background 0.4s;
}

.line-track:last-child {
  background: linear-gradient(90deg, var(--cyan), transparent);
}

body.light-mode .line-track {
  background: linear-gradient(90deg, transparent, #0284c7);
}
body.light-mode .line-track:last-child {
  background: linear-gradient(90deg, #0284c7, transparent);
}

.line-dot {
  display: block;
  width: 8px; height: 8px;
  background: var(--cyan);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--cyan);
  transition: background 0.4s, box-shadow 0.4s;
}

body.light-mode .line-dot {
  background: #0284c7;
  box-shadow: 0 0 10px #0284c7;
}

/* ─── GRID */
.about-grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 70px;
  align-items: start;
}

/* ─── COLUMNA IMAGEN */
.about-image-col {
  position: relative;
  padding: 24px;
}

/* ESQUINAS DECORATIVAS */
.frame-corner {
  position: absolute;
  width: 22px; height: 22px;
  border-color: var(--cyan);
  border-style: solid;
  transition: border-color 0.4s;
}

body.light-mode .frame-corner { border-color: #0284c7; }

.corner-tl { top: 0; left: 0; border-width: 2px 0 0 2px; }
.corner-tr { top: 0; right: 0; border-width: 2px 2px 0 0; }
.corner-bl { bottom: 0; left: 0; border-width: 0 0 2px 2px; }
.corner-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

/* BADGE DISPONIBLE */
.img-badge {
  position: absolute;
  top: 16px;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(0, 234, 255, 0.08);
  border: 1px solid var(--cyan-border);
  backdrop-filter: blur(10px);
  border-radius: 100px;
  padding: 5px 12px 5px 8px;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  color: var(--cyan);
  letter-spacing: 0.06em;
  transition: background 0.4s, color 0.4s, border-color 0.4s;
}

body.light-mode .img-badge {
  background: rgba(2,132,199,0.08);
  border-color: rgba(2,132,199,0.3);
  color: #0284c7;
}

.badge-pulse {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.85); }
}

/* WRAPPER FOTO */
.img-wrapper {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  line-height: 0;
}

.img-wrapper img {
  width: 100%;
  display: block;
  border-radius: var(--radius);
  filter: grayscale(15%) contrast(1.05);
  transition: filter 0.4s, transform 0.5s;
}

.about-image-col:hover .img-wrapper img {
  transform: scale(1.02);
  filter: grayscale(0%) contrast(1.08);
}

.img-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle at 50% 50%, rgba(0,234,255,0.2), transparent 60%);
  filter: blur(30px);
  z-index: -1;
  transition: background 0.4s;
}

body.light-mode .img-glow {
  background: radial-gradient(circle at 50% 50%, rgba(2,132,199,0.15), transparent 60%);
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(3,7,18,0.4) 0%, transparent 40%);
  border-radius: var(--radius);
  border: 1px solid var(--cyan-border);
  transition: border-color 0.4s;
  pointer-events: none;
}

body.light-mode .img-overlay {
  background: linear-gradient(to top, rgba(240,244,255,0.3) 0%, transparent 40%);
  border-color: rgba(2,132,199,0.25);
}

/* TARJETA EXPERIENCIA */
.exp-card {
  position: absolute;
  bottom: 8px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(3,7,18,0.8);
  border: 1px solid var(--cyan-border);
  backdrop-filter: blur(14px);
  border-radius: 12px;
  padding: 12px 18px;
  transition: background 0.4s, border-color 0.4s;
}

body.light-mode .exp-card {
  background: rgba(255,255,255,0.88);
  border-color: rgba(2,132,199,0.25);
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}

.exp-num {
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--cyan);
  line-height: 1;
  transition: color 0.4s;
}

body.light-mode .exp-num { color: #0284c7; }

.exp-label {
  font-size: 0.72rem;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748b;
}

body.light-mode .exp-label { color: #475569; }

/* ─── CONTENIDO */
.about-content {
  padding-top: 16px;
}

/* BIO */
.bio-block {
  margin-bottom: 36px;
}

.about-text {
  line-height: 1.85;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 16px;
  transition: color 0.4s;
}

body.dark-mode .about-text { color: #94a3b8; }
body.light-mode .about-text { color: #374151; }

.about-text--secondary {
  padding-left: 16px;
  border-left: 2px solid var(--cyan-border);
  transition: border-color 0.4s;
}

body.light-mode .about-text--secondary { border-left-color: rgba(2,132,199,0.3); }

/* DIVISOR INTERNO */
.content-divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.content-divider::before,
.content-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  transition: background 0.4s;
}

body.dark-mode .content-divider::before,
body.dark-mode .content-divider::after { background: rgba(255,255,255,0.07); }

body.light-mode .content-divider::before,
body.light-mode .content-divider::after { background: rgba(0,0,0,0.08); }

.divider-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  white-space: nowrap;
  transition: color 0.4s;
}

body.dark-mode .divider-label { color: #334155; }
body.light-mode .divider-label { color: #94a3b8; }

/* ─── SKILL CARDS */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.skill-card {
  display: grid;
  grid-template-columns: 44px 1fr;
  grid-template-rows: auto auto;
  column-gap: 14px;
  row-gap: 10px;
  padding: 20px;
  border-radius: var(--radius);
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  cursor: default;
  animation: cardReveal 0.5s ease both;
  animation-delay: calc(var(--i) * 0.1s);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s, background 0.4s;
}

@keyframes cardReveal {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

body.dark-mode .skill-card {
  background: rgba(255,255,255,0.03);
  border-color: rgba(255,255,255,0.06);
}

body.light-mode .skill-card {
  background: rgba(255,255,255,0.8);
  border-color: rgba(2,132,199,0.1);
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.skill-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,234,255,0.05), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

body.light-mode .skill-card::before {
  background: linear-gradient(135deg, rgba(2,132,199,0.05), transparent);
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: var(--cyan-border);
}

body.light-mode .skill-card:hover {
  border-color: rgba(2,132,199,0.3);
  box-shadow: 0 8px 28px rgba(2,132,199,0.1);
}

.skill-card:hover::before { opacity: 1; }

/* ICONO */
.skill-icon-wrap {
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px; height: 44px;
  border-radius: 10px;
  background: var(--cyan-dim);
  border: 1px solid var(--cyan-border);
  color: var(--cyan);
  transition: background 0.4s, color 0.4s, border-color 0.4s;
}

body.light-mode .skill-icon-wrap {
  background: rgba(2,132,199,0.08);
  border-color: rgba(2,132,199,0.2);
  color: #0284c7;
}

.skill-icon {
  width: 20px; height: 20px;
}

/* INFO */
.skill-info { align-self: end; }

.skill-info h3 {
  font-family: 'Syne', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.01em;
  transition: color 0.4s;
}

body.dark-mode .skill-info h3 { color: #e2e8f0; }
body.light-mode .skill-info h3 { color: #0f172a; }

.skill-info p {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  margin: 3px 0 0;
  letter-spacing: 0.03em;
  transition: color 0.4s;
}

body.dark-mode .skill-info p { color: #475569; }
body.light-mode .skill-info p { color: #64748b; }

/* BARRA DE NIVEL */
.skill-bar {
  grid-column: 2;
  height: 3px;
  border-radius: 100px;
  overflow: hidden;
  transition: background 0.4s;
}

body.dark-mode .skill-bar { background: rgba(255,255,255,0.06); }
body.light-mode .skill-bar { background: rgba(0,0,0,0.06); }

.skill-fill {
  display: block;
  height: 100%;
  width: var(--w);
  border-radius: 100px;
  background: linear-gradient(90deg, var(--cyan), var(--magenta));
  animation: fillBar 1.2s ease forwards;
  transform-origin: left;
}

body.light-mode .skill-fill {
  background: linear-gradient(90deg, #0284c7, #7c3aed);
}

@keyframes fillBar {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* ─── RESPONSIVE */
@media (max-width: 960px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .about-image-col {
    max-width: 380px;
    margin: 0 auto;
  }
}

@media (max-width: 560px) {
  .about-section { padding: 80px 18px; }
  .skills-grid { grid-template-columns: 1fr; }
  .about-header { margin-bottom: 52px; }
}

</style>