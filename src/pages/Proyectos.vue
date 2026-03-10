<template>
  <section class="projects-page">

    <!-- FONDO -->
    <div class="page-bg">
      <div class="bg-grid"></div>
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
    </div>

    <div class="page-inner">

      <!-- ═══ HEADER ═══ -->
      <div class="page-header">
        <div class="header-eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">// PROJECT_ARCHIVE.EXE</span>
          <span class="eyebrow-line flip"></span>
        </div>
        <h1 class="page-title">Mis <em>Proyectos</em></h1>
        <p class="page-subtitle">
          Algunos de los proyectos donde he aplicado desarrollo web,
          tecnologías inteligentes e innovación digital.
        </p>

        <!-- FILTROS -->
        <div class="filters">
          <button
            v-for="f in filters"
            :key="f"
            class="filter-btn"
            :class="{ 'filter-btn--active': activeFilter === f }"
            @click="activeFilter = f"
          >{{ f }}</button>
        </div>
      </div>

      <!-- ═══ PROYECTOS ═══ -->
      <div class="projects-grid">
        <div
          v-for="(p, i) in filteredProjects"
          :key="p.id"
          class="project-card"
          :class="{ 'project-card--featured': p.featured }"
          :style="`--i:${i}`"
        >
          <!-- ESQUINAS HUD -->
          <div class="pc-corner pc-tl"></div>
          <div class="pc-corner pc-br"></div>

          <!-- GLOW HOVER -->
          <div class="pc-glow"></div>

          <!-- HEADER CARD -->
          <div class="pc-header">
            <div class="pc-meta">
              <span class="pc-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="pc-status" :class="p.status === 'LIVE' ? 'status--live' : 'status--wip'">
                <span class="status-dot"></span>{{ p.status }}
              </span>
            </div>
            <span class="pc-featured-badge" v-if="p.featured">★ FEATURED</span>
          </div>

          <!-- ICONO + TÍTULO -->
          <div class="pc-icon">{{ p.icon }}</div>
          <h3 class="pc-title">{{ p.title }}</h3>
          <p class="pc-desc">{{ p.desc }}</p>

          <!-- TECH STACK -->
          <div class="pc-stack">
            <span class="stack-tag" v-for="t in p.tech" :key="t">{{ t }}</span>
          </div>

          <!-- DIVIDER -->
          <div class="pc-divider"></div>

          <!-- BOTONES -->
          <div class="pc-actions">
            <a :href="p.demo" target="_blank" class="pc-btn pc-btn--primary">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              Ver Proyecto
            </a>
            <a :href="p.code" target="_blank" class="pc-btn pc-btn--ghost">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Código
            </a>
          </div>

        </div>
      </div>

      <!-- ═══ CONTADOR ═══ -->
      <div class="projects-footer">
        <span class="pf-text">
          Mostrando <span class="pf-num">{{ filteredProjects.length }}</span> de
          <span class="pf-num">{{ projects.length }}</span> proyectos
        </span>
        <div class="pf-line"></div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('ALL')

const filters = ['ALL', 'Web', 'IoT', 'Mobile', 'AI', 'Tools']

const projects = [
  {
    id: 1,
    icon: '⬡',
    title: 'Sistema IoT de Monitoreo Ambiental',
    desc: 'Plataforma que permite monitorear temperatura, humedad y calidad del aire en tiempo real mediante sensores IoT conectados a un panel web interactivo.',
    tech: ['IoT', 'Node.js', 'Vue', 'MQTT'],
    category: 'IoT',
    status: 'LIVE',
    featured: true,
    demo: '#',
    code: '#',
  },
  {
    id: 2,
    icon: '◈',
    title: 'App Web de Gestión Académica',
    desc: 'Sistema web para administrar estudiantes, materias y calificaciones en instituciones educativas con panel administrativo y reportes dinámicos.',
    tech: ['Vue', 'Laravel', 'MySQL'],
    category: 'Web',
    status: 'LIVE',
    featured: false,
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    icon: '▲',
    title: 'Dashboard Inteligente de Datos',
    desc: 'Panel interactivo para visualizar indicadores empresariales y métricas clave mediante gráficos dinámicos y análisis de datos en tiempo real.',
    tech: ['JavaScript', 'Chart.js', 'REST API'],
    category: 'Web',
    status: 'LIVE',
    featured: true,
    demo: '#',
    code: '#',
  },
  {
    id: 4,
    icon: '⟐',
    title: 'Plataforma de Automatización Empresarial',
    desc: 'Sistema diseñado para automatizar procesos administrativos y mejorar la eficiencia operativa mediante herramientas digitales e integración de APIs.',
    tech: ['Python', 'Automation', 'API', 'Docker'],
    category: 'Tools',
    status: 'LIVE',
    featured: false,
    demo: '#',
    code: '#',
  },
  {
    id: 5,
    icon: '◎',
    title: 'App Móvil de Seguimiento de Hábitos',
    desc: 'Aplicación que ayuda a registrar hábitos diarios, metas personales y progreso mediante estadísticas visuales y recordatorios inteligentes.',
    tech: ['Flutter', 'Firebase', 'Mobile'],
    category: 'Mobile',
    status: 'WIP',
    featured: false,
    demo: '#',
    code: '#',
  },
  {
    id: 6,
    icon: '⌬',
    title: 'Portafolio Web Interactivo',
    desc: 'Portafolio personal con diseño moderno y estética cyberpunk para mostrar proyectos, habilidades y experiencia profesional de forma impactante.',
    tech: ['Vue', 'CSS', 'UI/UX', 'Vite'],
    category: 'Web',
    status: 'LIVE',
    featured: false,
    demo: '#',
    code: '#',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'ALL') return projects
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@500;700;900&family=DM+Sans:wght@300;400;500&display=swap');

/* ─── VARIABLES */
.projects-page {
  --cyan:    #00eaff;
  --magenta: #c026d3;
  --green:   #00ff9c;
  --cyan-dim: rgba(0,234,255,0.07);
  --cyan-b:   rgba(0,234,255,0.2);
  --r: 14px;
}

/* ─── BASE */
.projects-page {
  position: relative; overflow: hidden;
  min-height: 100vh; padding: 120px 0 80px;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.4s, color 0.4s;
}

body.dark-mode .projects-page  { background: #020617; color: #e2e8f0; }
body.light-mode .projects-page { background: #f0f4ff; color: #1a1a2e; }

/* ─── FONDO */
.page-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

.bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,234,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,234,255,0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, black 30%, transparent 100%);
}

body.light-mode .bg-grid {
  background-image:
    linear-gradient(rgba(2,132,199,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(2,132,199,0.05) 1px, transparent 1px);
}

.bg-orb { position: absolute; border-radius: 50%; filter: blur(130px); transition: opacity 0.4s; }

.bg-orb-1 { width:700px;height:500px;top:-100px;right:-100px;
  background:radial-gradient(ellipse,rgba(0,234,255,0.09),transparent 70%); }
.bg-orb-2 { width:500px;height:500px;bottom:0;left:-100px;
  background:radial-gradient(ellipse,rgba(192,38,211,0.07),transparent 70%); }

body.light-mode .bg-orb { opacity: 0.45; }

/* ─── INNER */
.page-inner {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: flex; flex-direction: column; gap: 52px;
}

/* ─── HEADER */
.page-header { text-align: center; }

.header-eyebrow {
  display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 18px;
}

.eyebrow-line {
  flex: 1; max-width: 90px; height: 1px; display: block;
  transition: background 0.4s;
}

body.dark-mode .eyebrow-line  { background: linear-gradient(90deg, transparent, rgba(0,234,255,0.4)); }
body.light-mode .eyebrow-line { background: linear-gradient(90deg, transparent, rgba(2,132,199,0.3)); }
.eyebrow-line.flip { transform: scaleX(-1); }

.eyebrow-text {
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.14em; white-space: nowrap;
  transition: color 0.4s;
}

body.dark-mode .eyebrow-text  { color: var(--cyan); }
body.light-mode .eyebrow-text { color: #0284c7; }

.page-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 900;
  letter-spacing: -0.02em; margin: 0 0 16px; transition: color 0.4s;
}

body.dark-mode .page-title  { color: #f1f5f9; }
body.light-mode .page-title { color: #0f172a; }

.page-title em {
  font-style: normal;
  background: linear-gradient(135deg, var(--cyan), var(--magenta));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

body.light-mode .page-title em {
  background: linear-gradient(135deg, #0284c7, #7c3aed);
  -webkit-background-clip: text; background-clip: text;
}

.page-subtitle {
  max-width: 580px; margin: 0 auto 32px;
  font-size: 1rem; line-height: 1.75; font-weight: 300; transition: color 0.4s;
}

body.dark-mode .page-subtitle  { color: #64748b; }
body.light-mode .page-subtitle { color: #475569; }

/* ─── FILTROS */
.filters {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;
}

.filter-btn {
  font-family: 'Space Mono', monospace; font-size: 0.68rem; letter-spacing: 0.08em;
  padding: 7px 16px; border-radius: 8px; border: 1px solid; cursor: pointer;
  transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.2s, box-shadow 0.3s;
  background: transparent;
}

body.dark-mode .filter-btn  { border-color: rgba(0,234,255,0.18); color: #475569; }
body.light-mode .filter-btn { border-color: rgba(2,132,199,0.2); color: #64748b; }

.filter-btn:hover {
  transform: translateY(-1px);
}

body.dark-mode .filter-btn:hover  { border-color: var(--cyan-b); color: #94a3b8; background: var(--cyan-dim); }
body.light-mode .filter-btn:hover { border-color: rgba(2,132,199,0.35); color: #334155; background: rgba(2,132,199,0.05); }

.filter-btn--active {
  transform: translateY(-1px);
}

body.dark-mode .filter-btn--active  { background: var(--cyan-dim); border-color: var(--cyan); color: var(--cyan); box-shadow: 0 0 12px rgba(0,234,255,0.15); }
body.light-mode .filter-btn--active { background: rgba(2,132,199,0.08); border-color: #0284c7; color: #0284c7; box-shadow: 0 4px 14px rgba(2,132,199,0.15); }

/* ─── PROJECTS GRID */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

/* ─── PROJECT CARD */
.project-card {
  position: relative; overflow: hidden;
  padding: 24px; border-radius: var(--r); border: 1px solid;
  display: flex; flex-direction: column;
  animation: cardIn 0.5s ease both;
  animation-delay: calc(var(--i) * 0.08s);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s, background 0.4s;
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

body.dark-mode .project-card  { background: rgba(0,0,0,0.3); border-color: rgba(0,234,255,0.12); }
body.light-mode .project-card { background: rgba(255,255,255,0.8); border-color: rgba(2,132,199,0.12); box-shadow: 0 2px 16px rgba(0,0,0,0.05); }

.project-card--featured {
  grid-column: span 1;
}

body.dark-mode .project-card--featured  { background: rgba(0,234,255,0.03); border-color: rgba(0,234,255,0.22); }
body.light-mode .project-card--featured { background: rgba(255,255,255,0.9); border-color: rgba(2,132,199,0.22); box-shadow: 0 4px 24px rgba(2,132,199,0.1); }

.project-card:hover {
  transform: translateY(-5px);
}

body.dark-mode .project-card:hover  { border-color: rgba(0,234,255,0.35); box-shadow: 0 0 32px rgba(0,234,255,0.1); }
body.light-mode .project-card:hover { border-color: rgba(2,132,199,0.35); box-shadow: 0 10px 36px rgba(2,132,199,0.12); }

.project-card:hover .pc-glow { opacity: 1; }
.project-card:hover .pc-corner { opacity: 1; }

/* ESQUINAS */
.pc-corner {
  position: absolute; width: 16px; height: 16px;
  border-style: solid; border-color: var(--cyan);
  opacity: 0.3; transition: opacity 0.3s, border-color 0.4s;
}

body.light-mode .pc-corner { border-color: #0284c7; }

.pc-tl { top: 8px; left: 8px; border-width: 1.5px 0 0 1.5px; }
.pc-br { bottom: 8px; right: 8px; border-width: 0 1.5px 1.5px 0; }

/* GLOW */
.pc-glow {
  position: absolute; inset: 0; opacity: 0;
  background: radial-gradient(circle at 50% 0%, rgba(0,234,255,0.06), transparent 65%);
  transition: opacity 0.4s; pointer-events: none;
}

body.light-mode .pc-glow {
  background: radial-gradient(circle at 50% 0%, rgba(2,132,199,0.05), transparent 65%);
}

/* HEADER */
.pc-header {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;
}

.pc-meta { display: flex; align-items: center; gap: 10px; }

.pc-num {
  font-family: 'Space Mono', monospace; font-size: 0.58rem; letter-spacing: 0.08em;
  transition: color 0.4s;
}

body.dark-mode .pc-num  { color: #1e293b; }
body.light-mode .pc-num { color: #cbd5e1; }

.pc-status {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: 'Space Mono', monospace; font-size: 0.55rem; letter-spacing: 0.1em;
  padding: 2px 8px; border-radius: 100px;
}

.status--live { background: rgba(0,255,156,0.1); color: var(--green); }
.status--wip  { background: rgba(251,191,36,0.1); color: #fbbf24; }

body.light-mode .status--live { background: rgba(22,163,74,0.1); color: #16a34a; }

.status-dot {
  width: 5px; height: 5px; border-radius: 50%; background: currentColor;
  animation: dotPulse 1.8s ease-in-out infinite;
}

@keyframes dotPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

.pc-featured-badge {
  font-family: 'Space Mono', monospace; font-size: 0.55rem; letter-spacing: 0.1em;
  padding: 2px 8px; border-radius: 4px; transition: background 0.4s, color 0.4s;
}

body.dark-mode .pc-featured-badge  { background: rgba(192,38,211,0.1); color: var(--magenta); }
body.light-mode .pc-featured-badge { background: rgba(124,58,237,0.08); color: #7c3aed; }

/* ICONO */
.pc-icon {
  font-family: 'Space Mono', monospace; font-size: 2rem; margin-bottom: 12px;
  transition: color 0.4s;
}

body.dark-mode .pc-icon  { color: var(--cyan); }
body.light-mode .pc-icon { color: #0284c7; }

/* TITULO */
.pc-title {
  font-family: 'Orbitron', monospace; font-size: 0.88rem; font-weight: 700;
  margin: 0 0 10px; line-height: 1.4; letter-spacing: 0.01em; transition: color 0.4s;
}

body.dark-mode .pc-title  { color: #e2e8f0; }
body.light-mode .pc-title { color: #0f172a; }

/* DESC */
.pc-desc {
  font-size: 0.82rem; line-height: 1.7; margin: 0 0 16px;
  flex: 1; transition: color 0.4s;
}

body.dark-mode .pc-desc  { color: #64748b; }
body.light-mode .pc-desc { color: #475569; }

/* STACK */
.pc-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }

.stack-tag {
  font-family: 'Space Mono', monospace; font-size: 0.58rem; letter-spacing: 0.05em;
  padding: 3px 8px; border-radius: 5px; transition: background 0.4s, color 0.4s;
}

body.dark-mode .stack-tag  { background: rgba(0,234,255,0.07); color: var(--cyan); }
body.light-mode .stack-tag { background: rgba(2,132,199,0.07); color: #0284c7; }

/* DIVIDER */
.pc-divider {
  height: 1px; margin-bottom: 16px; transition: background 0.4s;
}

body.dark-mode .pc-divider  { background: rgba(0,234,255,0.08); }
body.light-mode .pc-divider { background: rgba(2,132,199,0.08); }

/* ACCIONES */
.pc-actions { display: flex; gap: 10px; }

.pc-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 14px; border-radius: 8px; text-decoration: none;
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.06em;
  transition: transform 0.2s, box-shadow 0.3s, background 0.25s, border-color 0.25s, color 0.25s;
}

.pc-btn:hover { transform: translateY(-2px); }

.pc-btn--primary {
  background: linear-gradient(135deg, #00b4cc, #00eaff);
  color: #020617; font-weight: 700;
  box-shadow: 0 0 12px rgba(0,234,255,0.2);
}

body.light-mode .pc-btn--primary {
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  color: white; box-shadow: 0 4px 14px rgba(2,132,199,0.3);
}

.pc-btn--primary:hover { box-shadow: 0 0 24px rgba(0,234,255,0.4); }

body.light-mode .pc-btn--primary:hover { box-shadow: 0 6px 22px rgba(2,132,199,0.4); }

.pc-btn--ghost {
  border: 1px solid; background: transparent;
  transition: border-color 0.25s, background 0.25s, color 0.25s, transform 0.2s;
}

body.dark-mode .pc-btn--ghost  { border-color: rgba(0,234,255,0.25); color: var(--cyan); }
body.light-mode .pc-btn--ghost { border-color: rgba(2,132,199,0.25); color: #0284c7; }

.pc-btn--ghost:hover {
  background: var(--cyan-dim);
}

body.light-mode .pc-btn--ghost:hover { background: rgba(2,132,199,0.06); border-color: rgba(2,132,199,0.4); }

/* ─── FOOTER CONTADOR */
.projects-footer {
  display: flex; align-items: center; gap: 20px;
  padding-top: 8px;
}

.pf-text {
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.08em;
  white-space: nowrap; transition: color 0.4s;
}

body.dark-mode .pf-text  { color: #1e293b; }
body.light-mode .pf-text { color: #94a3b8; }

.pf-num { transition: color 0.4s; }
body.dark-mode .pf-num  { color: var(--cyan); }
body.light-mode .pf-num { color: #0284c7; }

.pf-line {
  flex: 1; height: 1px; transition: background 0.4s;
}

body.dark-mode .pf-line  { background: linear-gradient(90deg, rgba(0,234,255,0.15), transparent); }
body.light-mode .pf-line { background: linear-gradient(90deg, rgba(2,132,199,0.15), transparent); }

/* ─── RESPONSIVE */
@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .projects-page { padding: 100px 0 60px; }
  .projects-grid { grid-template-columns: 1fr; }
  .page-inner    { gap: 40px; }
  .pc-actions    { flex-direction: column; }
  .pc-btn        { justify-content: center; }
}
</style>