<template>
  <section class="about-page">

    <!-- FONDO ATMOSFÉRICO -->
    <div class="page-bg">
      <div class="bg-grid"></div>
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
      <div class="bg-orb bg-orb-3"></div>
    </div>

    <div class="page-inner">

      <!-- ═══ HEADER ═══ -->
      <div class="about-header">
        <div class="header-pre">
          <span class="pre-line"></span>
          <span class="pre-text">// IDENTITY_FILE.EXE</span>
          <span class="pre-line"></span>
        </div>
        <h1 class="about-title">Mi <em>Historia</em></h1>
        <p class="about-subtitle">
          El camino que me llevó a convertirme en Ingeniero en Tecnologías de la Información
          y desarrollador de soluciones digitales innovadoras.
        </p>
      </div>

      <!-- ═══ GRID PRINCIPAL: BIO + GITHUB CARD ═══ -->
      <div class="top-grid">

        <!-- BIO -->
        <div class="bio-block">
          <div class="block-label">
            <span class="label-bracket">[</span>BIO<span class="label-bracket">]</span>
          </div>

          <p class="bio-text">
            Mi nombre es <strong>Jaime Isaac Murillo Montero</strong>, apasionado por la tecnología,
            la innovación y la construcción de soluciones que generen impacto real.
            Desde muy joven descubrí que la programación no solo era escribir código,
            sino una herramienta para transformar ideas en sistemas que mejoran la vida
            de las personas y el funcionamiento de las organizaciones.
          </p>
          <p class="bio-text">
            Durante mi formación como <strong>Ingeniero en Tecnologías de la Información</strong>,
            desarrollé habilidades en desarrollo de software, análisis de sistemas,
            infraestructura tecnológica y gestión de proyectos digitales,
            entendiendo que la tecnología debe ser estratégica para el crecimiento empresarial.
          </p>
          <p class="bio-text">
            He trabajado en proyectos que integran <strong>IoT, aplicaciones web,
            sistemas inteligentes y automatización</strong>, buscando eficiencia,
            escalabilidad y seguridad en cada solución.
          </p>
        </div>

        <!-- GITHUB PROFILE CARD (API) -->
        <div class="gh-card panel">
          <div class="panel-header">
            <svg class="panel-icon-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span class="panel-title">GITHUB_PROFILE</span>
            <span class="panel-status" :class="ghLoading ? 'status--loading' : 'status--ok'">
              {{ ghLoading ? 'FETCH' : 'OK' }}
            </span>
          </div>

          <div class="gh-body" v-if="!ghLoading && ghUser">
            <img :src="ghUser.avatar_url" :alt="ghUser.name" class="gh-avatar">
            <div class="gh-info">
              <p class="gh-name">{{ ghUser.name || ghUser.login }}</p>
              <p class="gh-bio">{{ ghUser.bio || 'Software Developer' }}</p>
              <div class="gh-stats">
                <div class="gh-stat">
                  <span class="gh-stat-n">{{ ghUser.public_repos }}</span>
                  <span class="gh-stat-l">Repos</span>
                </div>
                <div class="gh-stat">
                  <span class="gh-stat-n">{{ ghUser.followers }}</span>
                  <span class="gh-stat-l">Followers</span>
                </div>
                <div class="gh-stat">
                  <span class="gh-stat-n">{{ ghUser.following }}</span>
                  <span class="gh-stat-l">Following</span>
                </div>
              </div>
            </div>
          </div>

          <div class="gh-body gh-body--loading" v-else>
            <div class="skel skel-avatar"></div>
            <div class="skel-lines">
              <div class="skel skel-line skel-line--long"></div>
              <div class="skel skel-line skel-line--short"></div>
              <div class="skel skel-line skel-line--med"></div>
            </div>
          </div>

          <!-- REPOS RECIENTES -->
          <div class="gh-repos" v-if="ghRepos.length">
            <div class="repos-label">RECENT_REPOS</div>
            <div class="repo-row" v-for="r in ghRepos" :key="r.id">
              <span class="repo-name">{{ r.name }}</span>
              <div class="repo-tags">
                <span class="repo-lang" v-if="r.language">{{ r.language }}</span>
                <span class="repo-stars">★ {{ r.stargazers_count }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- ═══ ESTADÍSTICAS ═══ -->
      <div class="stats-section">
        <div class="block-label centered">
          <span class="label-bracket">[</span>METRICS<span class="label-bracket">]</span>
        </div>
        <div class="stats-grid">
          <div class="stat-card" v-for="(s, i) in stats" :key="i" :style="`--i:${i}`">
            <div class="stat-bg-glow"></div>
            <div class="stat-num">{{ s.num }}</div>
            <div class="stat-label">{{ s.label }}</div>
            <div class="stat-bar">
              <span class="stat-fill" :style="`--w:${s.pct}%`"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ TIMELINE ═══ -->
      <div class="timeline-section">
        <div class="block-label centered">
          <span class="label-bracket">[</span>TRAYECTORIA<span class="label-bracket">]</span>
        </div>

        <div class="timeline">
          <div class="timeline-track"></div>

          <div class="tl-item" v-for="(item, i) in timeline" :key="i" :style="`--i:${i}`">
            <div class="tl-left">
              <span class="tl-year">{{ item.year }}</span>
            </div>
            <div class="tl-dot-col">
              <div class="tl-dot">
                <span class="tl-dot-inner"></span>
              </div>
            </div>
            <div class="tl-right">
              <div class="tl-card panel">
                <div class="tl-icon">{{ item.icon }}</div>
                <h3 class="tl-title">{{ item.title }}</h3>
                <p class="tl-text">{{ item.text }}</p>
                <div class="tl-tags">
                  <span class="tl-tag" v-for="t in item.tags" :key="t">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ═══ TECNOLOGÍAS ═══ -->
      <div class="tech-block">
        <div class="block-label centered">
          <span class="label-bracket">[</span>TECH_STACK<span class="label-bracket">]</span>
        </div>
        <div class="tech-grid">
          <div class="tech-item" v-for="(t, i) in techs" :key="i" :style="`--i:${i}`">
            <span class="tech-icon">{{ t.icon }}</span>
            <span class="tech-name">{{ t.name }}</span>
            <div class="tech-bar">
              <span class="tech-fill" :style="`--w:${t.level}%`"></span>
            </div>
            <span class="tech-pct">{{ t.level }}%</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ── CONFIG
const GITHUB_USER = 'jaime6247' // ← cambia por tu usuario real

// ── STATE
const ghUser     = ref(null)
const ghRepos    = ref([])
const ghLoading  = ref(true)

// ── DATA ESTÁTICA
const stats = [
  { num: '2+',  label: 'Años desarrollando',  pct: 70 },
  { num: '10+', label: 'Proyectos entregados', pct: 85 },
  { num: '5+',  label: 'Tecnologías core',     pct: 75 },
  { num: '∞',   label: 'Ideas por construir',  pct: 100 },
]

const timeline = [
  {
    year: '2020',
    icon: '⟨/⟩',
    title: 'Primer línea de código',
    text: 'Exploré HTML, CSS y JavaScript construyendo mis primeros proyectos personales y descubriendo que el código es la herramienta más poderosa para crear.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    year: '2021',
    icon: '◎',
    title: 'Formación universitaria',
    text: 'Ingresé a Ingeniería en Tecnologías de la Información. Aprendí arquitectura de software, redes, bases de datos y gestión tecnológica.',
    tags: ['Algoritmos', 'Redes', 'BD'],
  },
  {
    year: '2022',
    icon: '⬡',
    title: 'Full Stack + IoT',
    text: 'Profundicé en Vue, Node.js y Python mientras exploraba el mundo del IoT integrando hardware con software en proyectos reales.',
    tags: ['Vue', 'Node.js', 'IoT'],
  },
  {
    year: '2023',
    icon: '▲',
    title: 'Proyectos profesionales',
    text: 'Participé en soluciones para organizaciones reales: aplicaciones web, sistemas inteligentes y automatización de procesos empresariales.',
    tags: ['Docker', 'Cloud', 'AI'],
  },
]

const techs = [
  { icon: '⬡', name: 'Vue.js',      level: 88 },
  { icon: '◈', name: 'JavaScript',  level: 85 },
  { icon: '⟐', name: 'Python',      level: 80 },
  { icon: '▲',  name: 'Node.js',    level: 75 },
  { icon: '⊕',  name: 'Docker',     level: 65 },
  { icon: '⌬',  name: 'IoT',        level: 70 },
]

// ── API: GITHUB
const fetchGitHub = async () => {
  ghLoading.value = true
  try {
    const [uRes, rRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=3`),
    ])
    ghUser.value  = await uRes.json()
    ghRepos.value = await rRes.json()
  } catch {
    ghUser.value  = null
    ghRepos.value = []
  } finally {
    ghLoading.value = false
  }
}

onMounted(() => {
  fetchGitHub()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@500;700;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

/* ─── VARIABLES */
.about-page {
  --cyan:    #00eaff;
  --magenta: #c026d3;
  --green:   #00ff9c;
  --cyan-dim: rgba(0,234,255,0.07);
  --cyan-b:   rgba(0,234,255,0.2);
  --r: 12px;
}

/* ─── BASE */
.about-page {
  position: relative; overflow: hidden;
  min-height: 100vh; padding: 120px 0 80px;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.4s, color 0.4s;
}

body.dark-mode .about-page  { background: #020617; color: #e2e8f0; }
body.light-mode .about-page { background: #f0f4ff; color: #1a1a2e; }

/* ─── FONDO */
.page-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

.bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,234,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,234,255,0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 90% 90% at 50% 20%, black 30%, transparent 100%);
}

body.light-mode .bg-grid {
  background-image:
    linear-gradient(rgba(2,132,199,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(2,132,199,0.05) 1px, transparent 1px);
}

.bg-orb {
  position: absolute; border-radius: 50%; filter: blur(120px);
  animation: orbFloat 10s ease-in-out infinite; transition: opacity 0.4s;
}

.bg-orb-1 { width:600px;height:400px;top:-100px;left:-100px;
  background:radial-gradient(ellipse,rgba(0,234,255,0.1),transparent 70%); }
.bg-orb-2 { width:500px;height:500px;bottom:-100px;right:-100px;
  background:radial-gradient(ellipse,rgba(192,38,211,0.08),transparent 70%);animation-delay:4s; }
.bg-orb-3 { width:400px;height:400px;top:50%;left:50%;transform:translate(-50%,-50%);
  background:radial-gradient(ellipse,rgba(0,255,156,0.04),transparent 70%);animation-delay:7s; }

body.light-mode .bg-orb { opacity: 0.5; }

@keyframes orbFloat {
  0%,100% { transform: scale(1) translate(0,0); }
  50%      { transform: scale(1.08) translate(10px,-15px); }
}

.bg-orb-3 { animation: orbFloat3 10s ease-in-out infinite; }
@keyframes orbFloat3 {
  0%,100% { transform: translate(-50%,-50%) scale(1); }
  50%      { transform: translate(-50%,-50%) scale(1.08); }
}

/* ─── INNER */
.page-inner {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto;
  padding: 0 24px;
  display: flex; flex-direction: column; gap: 72px;
}

/* ─── BLOQUE LABEL */
.block-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem; letter-spacing: 0.18em;
  margin-bottom: 24px; transition: color 0.4s;
}

.block-label.centered { text-align: center; }

body.dark-mode .block-label  { color: #334155; }
body.light-mode .block-label { color: #94a3b8; }

.label-bracket { transition: color 0.4s; }
body.dark-mode .label-bracket  { color: var(--cyan); opacity: 0.5; }
body.light-mode .label-bracket { color: #0284c7; opacity: 0.5; }

/* ─── HEADER */
.about-header { text-align: center; }

.header-pre {
  display: flex; align-items: center; justify-content: center; gap: 14px;
  margin-bottom: 20px;
}

.pre-line {
  display: block; flex: 1; max-width: 100px; height: 1px;
  transition: background 0.4s;
}

body.dark-mode .pre-line  { background: linear-gradient(90deg, transparent, rgba(0,234,255,0.3)); }
body.light-mode .pre-line { background: linear-gradient(90deg, transparent, rgba(2,132,199,0.3)); }

.pre-line:last-child {
  background: linear-gradient(90deg, rgba(0,234,255,0.3), transparent) !important;
}

.pre-text {
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.14em;
  transition: color 0.4s; white-space: nowrap;
}

body.dark-mode .pre-text  { color: var(--cyan); }
body.light-mode .pre-text { color: #0284c7; }

.about-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900; letter-spacing: -0.02em; margin: 0 0 20px;
  transition: color 0.4s;
}

body.dark-mode .about-title  { color: #f1f5f9; }
body.light-mode .about-title { color: #0f172a; }

.about-title em {
  font-style: normal;
  background: linear-gradient(135deg, var(--cyan), var(--magenta));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

body.light-mode .about-title em {
  background: linear-gradient(135deg, #0284c7, #7c3aed);
  -webkit-background-clip: text; background-clip: text;
}

.about-subtitle {
  max-width: 640px; margin: 0 auto;
  font-size: 1rem; line-height: 1.75; font-weight: 300;
  transition: color 0.4s;
}

body.dark-mode .about-subtitle  { color: #64748b; }
body.light-mode .about-subtitle { color: #475569; }

/* ─── TOP GRID */
.top-grid {
  display: grid; grid-template-columns: 1fr 380px; gap: 40px; align-items: start;
}

/* BIO */
.bio-block { display: flex; flex-direction: column; gap: 0; }

.bio-text {
  font-size: 1rem; line-height: 1.9; font-weight: 300;
  padding: 20px 0; border-bottom: 1px dashed;
  transition: color 0.4s, border-color 0.4s;
}

body.dark-mode .bio-text  { color: #94a3b8; border-color: rgba(255,255,255,0.05); }
body.light-mode .bio-text { color: #374151; border-color: rgba(0,0,0,0.07); }

.bio-text:last-child { border-bottom: none; }

.bio-text strong { font-weight: 600; transition: color 0.4s; }
body.dark-mode .bio-text strong  { color: #e2e8f0; }
body.light-mode .bio-text strong { color: #0f172a; }

/* ─── PANEL BASE */
.panel {
  border-radius: var(--r); border: 1px solid; overflow: hidden;
  transition: background 0.4s, border-color 0.4s;
}

body.dark-mode .panel  { background: rgba(0,0,0,0.3); border-color: rgba(0,234,255,0.14); }
body.light-mode .panel { background: rgba(255,255,255,0.75); border-color: rgba(2,132,199,0.14); box-shadow: 0 4px 24px rgba(0,0,0,0.06); }

.panel-header {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 16px; border-bottom: 1px solid;
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.12em;
  transition: background 0.4s, border-color 0.4s, color 0.4s;
}

body.dark-mode .panel-header  { background: rgba(0,234,255,0.04); border-color: rgba(0,234,255,0.1); color: var(--cyan); }
body.light-mode .panel-header { background: rgba(2,132,199,0.04); border-color: rgba(2,132,199,0.1); color: #0284c7; }

.panel-icon-svg { width: 13px; height: 13px; flex-shrink: 0; }
.panel-title { flex: 1; }

.panel-status {
  font-size: 0.55rem; padding: 2px 7px; border-radius: 100px; letter-spacing: 0.12em;
}

.status--ok      { background: rgba(0,255,156,0.12); color: var(--green); }
.status--loading { background: rgba(255,200,0,0.12); color: #ffc107; animation: blink 1s step-end infinite; }

@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

/* ─── GITHUB CARD */
.gh-body {
  display: flex; gap: 16px; align-items: center; padding: 16px;
}

.gh-avatar {
  width: 64px; height: 64px; border-radius: 50%;
  border: 2px solid var(--cyan-b); flex-shrink: 0;
  transition: border-color 0.4s;
}

body.light-mode .gh-avatar { border-color: rgba(2,132,199,0.25); }

.gh-info { flex: 1; min-width: 0; }

.gh-name {
  font-family: 'Orbitron', monospace; font-size: 0.85rem; font-weight: 700;
  margin: 0 0 4px; transition: color 0.4s;
}

body.dark-mode .gh-name  { color: #e2e8f0; }
body.light-mode .gh-name { color: #0f172a; }

.gh-bio {
  font-size: 0.75rem; margin: 0 0 10px; overflow: hidden;
  text-overflow: ellipsis; white-space: nowrap; transition: color 0.4s;
}

body.dark-mode .gh-bio  { color: #64748b; }
body.light-mode .gh-bio { color: #64748b; }

.gh-stats { display: flex; gap: 16px; }

.gh-stat { display: flex; flex-direction: column; align-items: center; }

.gh-stat-n {
  font-family: 'Orbitron', monospace; font-size: 1rem; font-weight: 700;
  transition: color 0.4s;
}

body.dark-mode .gh-stat-n  { color: var(--cyan); }
body.light-mode .gh-stat-n { color: #0284c7; }

.gh-stat-l { font-size: 0.6rem; letter-spacing: 0.06em; opacity: 0.5; }

/* SKELETON */
.gh-body--loading { gap: 16px; }

.skel {
  border-radius: 6px; animation: shimmer 1.5s ease-in-out infinite;
  transition: background 0.4s;
}

body.dark-mode .skel  { background: linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.08), rgba(255,255,255,0.04)); }
body.light-mode .skel { background: linear-gradient(90deg, rgba(0,0,0,0.04), rgba(0,0,0,0.08), rgba(0,0,0,0.04)); }


@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}

.skel-avatar { width: 64px; height: 64px; border-radius: 50%; flex-shrink: 0; }
.skel-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.skel-line { height: 12px; }
.skel-line--long  { width: 75%; }
.skel-line--short { width: 45%; }
.skel-line--med   { width: 60%; }

/* REPOS */
.gh-repos {
  border-top: 1px solid;
  transition: border-color 0.4s;
}

body.dark-mode .gh-repos  { border-color: rgba(0,234,255,0.1); }
body.light-mode .gh-repos { border-color: rgba(2,132,199,0.1); }

.repos-label {
  font-family: 'Space Mono', monospace; font-size: 0.55rem; letter-spacing: 0.14em;
  padding: 8px 16px; transition: color 0.4s;
}

body.dark-mode .repos-label  { color: #334155; }
body.light-mode .repos-label { color: #94a3b8; }

.repo-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 8px 16px; border-top: 1px dashed;
  transition: background 0.2s, border-color 0.4s;
}

body.dark-mode .repo-row  { border-color: rgba(255,255,255,0.05); }
body.light-mode .repo-row { border-color: rgba(0,0,0,0.06); }

.repo-row:hover { background: var(--cyan-dim); }

.repo-name {
  font-family: 'Space Mono', monospace; font-size: 0.68rem;
  max-width: 55%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  transition: color 0.4s;
}

body.dark-mode .repo-name  { color: #94a3b8; }
body.light-mode .repo-name { color: #334155; }

.repo-tags { display: flex; align-items: center; gap: 8px; }

.repo-lang {
  font-family: 'Space Mono', monospace; font-size: 0.58rem;
  padding: 2px 6px; border-radius: 4px; transition: background 0.4s, color 0.4s;
}

body.dark-mode .repo-lang  { background: rgba(0,234,255,0.08); color: var(--cyan); }
body.light-mode .repo-lang { background: rgba(2,132,199,0.08); color: #0284c7; }

.repo-stars {
  font-family: 'Space Mono', monospace; font-size: 0.65rem;
  transition: color 0.4s;
}

body.dark-mode .repo-stars  { color: #fbbf24; }
body.light-mode .repo-stars { color: #d97706; }

/* ─── STATS */
.stats-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
}

.stat-card {
  position: relative; overflow: hidden;
  border-radius: var(--r); border: 1px solid; padding: 28px 20px 20px;
  text-align: center; cursor: default;
  animation: cardIn 0.5s ease both;
  animation-delay: calc(var(--i) * 0.1s);
  transition: transform 0.3s, box-shadow 0.3s, background 0.4s, border-color 0.4s;
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

body.dark-mode .stat-card  { background: rgba(0,0,0,0.3); border-color: rgba(0,234,255,0.12); }
body.light-mode .stat-card { background: rgba(255,255,255,0.75); border-color: rgba(2,132,199,0.12); box-shadow: 0 2px 12px rgba(0,0,0,0.04); }

.stat-card:hover {
  transform: translateY(-5px);
}

body.dark-mode .stat-card:hover  { box-shadow: 0 0 30px rgba(0,234,255,0.15); border-color: rgba(0,234,255,0.3); }
body.light-mode .stat-card:hover { box-shadow: 0 8px 30px rgba(2,132,199,0.15); border-color: rgba(2,132,199,0.3); }

.stat-bg-glow {
  position: absolute; inset: 0; opacity: 0;
  background: radial-gradient(circle at 50% 0%, rgba(0,234,255,0.08), transparent 70%);
  transition: opacity 0.3s;
}

body.light-mode .stat-bg-glow {
  background: radial-gradient(circle at 50% 0%, rgba(2,132,199,0.06), transparent 70%);
}

.stat-card:hover .stat-bg-glow { opacity: 1; }

.stat-num {
  font-family: 'Orbitron', monospace; font-size: 2.2rem; font-weight: 900;
  line-height: 1; margin-bottom: 8px;
  background: linear-gradient(135deg, var(--cyan), var(--magenta));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

body.light-mode .stat-num {
  background: linear-gradient(135deg, #0284c7, #7c3aed);
  -webkit-background-clip: text; background-clip: text;
}

.stat-label {
  font-size: 0.75rem; margin-bottom: 14px; transition: color 0.4s;
}

body.dark-mode .stat-label  { color: #64748b; }
body.light-mode .stat-label { color: #64748b; }

.stat-bar {
  height: 2px; border-radius: 100px; overflow: hidden; transition: background 0.4s;
}

body.dark-mode .stat-bar  { background: rgba(255,255,255,0.06); }
body.light-mode .stat-bar { background: rgba(0,0,0,0.06); }

.stat-fill {
  display: block; height: 100%; width: var(--w);
  background: linear-gradient(90deg, var(--cyan), var(--magenta));
  border-radius: 100px;
  animation: fillBar 1.2s ease both;
  animation-delay: calc(var(--i, 0) * 0.15s);
}

body.light-mode .stat-fill {
  background: linear-gradient(90deg, #0284c7, #7c3aed);
}

@keyframes fillBar {
  from { transform: scaleX(0); transform-origin: left; }
  to   { transform: scaleX(1); transform-origin: left; }
}

/* ─── TIMELINE */
.timeline {
  position: relative; max-width: 900px; margin: 0 auto;
  display: flex; flex-direction: column; gap: 0;
}

.timeline-track {
  position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
  background: linear-gradient(to bottom, transparent, var(--cyan-b) 10%, var(--cyan-b) 90%, transparent);
  transform: translateX(-50%);
  transition: background 0.4s;
}

body.light-mode .timeline-track {
  background: linear-gradient(to bottom, transparent, rgba(2,132,199,0.2) 10%, rgba(2,132,199,0.2) 90%, transparent);
}

.tl-item {
  display: grid; grid-template-columns: 1fr 48px 1fr; gap: 0;
  align-items: start; margin-bottom: 32px;
  animation: tlIn 0.5s ease both;
  animation-delay: calc(var(--i) * 0.15s);
}

@keyframes tlIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* alternar izq/der */
.tl-item:nth-child(even) .tl-left  { order: 3; text-align: left; padding-left: 20px; padding-right: 0; }
.tl-item:nth-child(even) .tl-dot-col { order: 2; }
.tl-item:nth-child(even) .tl-right { order: 1; }

.tl-left {
  padding-right: 20px; text-align: right;
  padding-top: 18px;
}

.tl-year {
  font-family: 'Orbitron', monospace; font-size: 0.75rem; font-weight: 700;
  letter-spacing: 0.1em; transition: color 0.4s;
}

body.dark-mode .tl-year  { color: var(--cyan); }
body.light-mode .tl-year { color: #0284c7; }

.tl-dot-col {
  display: flex; justify-content: center; padding-top: 14px; position: relative; z-index: 1;
}

.tl-dot {
  width: 20px; height: 20px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid; transition: border-color 0.4s, background 0.4s;
}

body.dark-mode .tl-dot  { border-color: var(--cyan); background: #020617; }
body.light-mode .tl-dot { border-color: #0284c7; background: #f0f4ff; }

.tl-dot-inner {
  width: 8px; height: 8px; border-radius: 50%;
  transition: background 0.4s, box-shadow 0.4s;
  animation: dotGlow 2s ease-in-out infinite;
}

body.dark-mode .tl-dot-inner  { background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }
body.light-mode .tl-dot-inner { background: #0284c7; box-shadow: 0 0 8px rgba(2,132,199,0.5); }

@keyframes dotGlow { 0%,100%{opacity:1} 50%{opacity:0.4} }

.tl-right { padding-left: 20px; }

.tl-item:nth-child(even) .tl-right { padding-left: 0; padding-right: 20px; }

.tl-card {
  padding: 18px 20px; transition: transform 0.3s, box-shadow 0.3s;
}

.tl-card:hover { transform: translateY(-3px); }

body.dark-mode .tl-card:hover  { box-shadow: 0 0 20px rgba(0,234,255,0.1); }
body.light-mode .tl-card:hover { box-shadow: 0 6px 24px rgba(2,132,199,0.12); }

.tl-icon {
  font-family: 'Space Mono', monospace; font-size: 1.1rem;
  margin-bottom: 8px; transition: color 0.4s;
}

body.dark-mode .tl-icon  { color: var(--cyan); }
body.light-mode .tl-icon { color: #0284c7; }

.tl-title {
  font-family: 'Orbitron', monospace; font-size: 0.85rem; font-weight: 700;
  margin: 0 0 8px; transition: color 0.4s;
}

body.dark-mode .tl-title  { color: #e2e8f0; }
body.light-mode .tl-title { color: #0f172a; }

.tl-text {
  font-size: 0.82rem; line-height: 1.7; margin: 0 0 12px; transition: color 0.4s;
}

body.dark-mode .tl-text  { color: #64748b; }
body.light-mode .tl-text { color: #475569; }

.tl-tags { display: flex; flex-wrap: wrap; gap: 6px; }

.tl-tag {
  font-family: 'Space Mono', monospace; font-size: 0.6rem; letter-spacing: 0.06em;
  padding: 3px 8px; border-radius: 4px; transition: background 0.4s, color 0.4s;
}

body.dark-mode .tl-tag  { background: rgba(0,234,255,0.07); color: var(--cyan); }
body.light-mode .tl-tag { background: rgba(2,132,199,0.07); color: #0284c7; }

/* TECH */
.tech-grid { display: flex; flex-direction: column; gap: 12px; }

.tech-item {
  display: grid; grid-template-columns: 28px 1fr 1fr 36px;
  align-items: center; gap: 10px;
  padding: 10px 14px; border-radius: 8px; border: 1px solid;
  animation: cardIn 0.4s ease both;
  animation-delay: calc(var(--i) * 0.07s);
  transition: background 0.3s, border-color 0.3s, transform 0.2s;
}

body.dark-mode .tech-item  { background: rgba(0,0,0,0.25); border-color: rgba(0,234,255,0.1); }
body.light-mode .tech-item { background: rgba(255,255,255,0.7); border-color: rgba(2,132,199,0.1); }

.tech-item:hover {
  transform: translateX(4px);
  border-color: var(--cyan-b);
}

body.light-mode .tech-item:hover { border-color: rgba(2,132,199,0.3); }

.tech-icon {
  font-family: 'Space Mono', monospace; font-size: 0.9rem;
  transition: color 0.4s;
}

body.dark-mode .tech-icon  { color: var(--cyan); }
body.light-mode .tech-icon { color: #0284c7; }

.tech-name {
  font-family: 'Space Mono', monospace; font-size: 0.72rem; font-weight: 700;
  transition: color 0.4s;
}

body.dark-mode .tech-name  { color: #94a3b8; }
body.light-mode .tech-name { color: #334155; }

.tech-bar {
  height: 3px; border-radius: 100px; overflow: hidden; transition: background 0.4s;
}

body.dark-mode .tech-bar  { background: rgba(255,255,255,0.06); }
body.light-mode .tech-bar { background: rgba(0,0,0,0.06); }

.tech-fill {
  display: block; height: 100%; width: var(--w);
  background: linear-gradient(90deg, var(--cyan), var(--magenta));
  border-radius: 100px;
  animation: fillBar 1s ease both;
  animation-delay: calc(var(--i, 0) * 0.08s);
}

body.light-mode .tech-fill {
  background: linear-gradient(90deg, #0284c7, #7c3aed);
}

.tech-pct {
  font-family: 'Space Mono', monospace; font-size: 0.6rem;
  text-align: right; transition: color 0.4s;
}

body.dark-mode .tech-pct  { color: var(--cyan); }
body.light-mode .tech-pct { color: #0284c7; }

/* ─── RESPONSIVE */
@media (max-width: 1024px) {
  .top-grid    { grid-template-columns: 1fr; }
  .stats-grid  { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 700px) {
  .about-page { padding: 100px 0 60px; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .timeline-track { left: 20px; }
  .tl-item { grid-template-columns: 40px 1fr; }
  .tl-left { display: none; }
  .tl-item:nth-child(even) .tl-left  { display: none; }
  .tl-item:nth-child(even) .tl-dot-col { order: 1; }
  .tl-item:nth-child(even) .tl-right { order: 2; padding-right: 0; padding-left: 16px; }
  .tl-dot-col { justify-content: flex-start; }
}

@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .page-inner { gap: 52px; }
}
</style>