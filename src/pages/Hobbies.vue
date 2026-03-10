<template>
  <section class="hobbies-page">

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
          <span class="eyebrow-text">// PERSONAL_PROFILE.DAT</span>
          <span class="eyebrow-line"></span>
        </div>
        <h1 class="page-title">Mis <em>Hobbies</em></h1>
        <p class="page-subtitle">
          Las actividades que forman parte de mi vida fuera del desarrollo profesional
          y que alimentan mi creatividad, disciplina y curiosidad por aprender.
        </p>
      </div>

      <!-- ═══ HOBBY CARDS ═══ -->
      <div class="hobbies-grid">
        <div class="hobby-card" v-for="(h, i) in hobbies" :key="i" :style="`--i:${i}`">
          <div class="hobby-corner hc-tl"></div>
          <div class="hobby-corner hc-br"></div>
          <div class="hobby-glow"></div>
          <span class="hobby-num">0{{ i + 1 }}</span>
          <div class="hobby-icon">{{ h.icon }}</div>
          <h3 class="hobby-title">{{ h.title }}</h3>
          <p class="hobby-text">{{ h.text }}</p>
          <div class="hobby-tags">
            <span class="hobby-tag" v-for="t in h.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>

      <!-- ═══ DEPORTES (TheSportsDB API) ═══ -->
      <div class="api-section">
        <div class="section-label">
          <span class="label-bracket">[</span>SPORTS_FEED<span class="label-bracket">]</span>
          <span class="label-live">LIVE</span>
        </div>

        <div class="sports-panel panel">
          <div class="panel-header">
            <svg class="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              <path d="M2 12h20"/>
            </svg>
            <span>PREMIER_LEAGUE // RECENT MATCHES</span>
            <span class="ph-sub">via TheSportsDB</span>
          </div>

          <!-- MATCHES LOADED -->
          <div class="matches-list" v-if="!sportsLoading && matches.length">
            <div
              v-for="(m, i) in matches"
              :key="m.idEvent"
              class="match-row"
              :style="`--i:${i}`"
            >
              <!-- FECHA -->
              <div class="match-date">
                <span class="md-day">{{ formatMatchDate(m.dateEvent) }}</span>
                <span class="md-time">{{ m.strTime ? m.strTime.slice(0,5) : '--:--' }}</span>
              </div>

              <!-- EQUIPOS + MARCADOR -->
              <div class="match-center">
                <div class="match-team match-team--home">
                  <img v-if="m.strHomeTeamBadge" :src="m.strHomeTeamBadge" class="team-badge" :alt="m.strHomeTeam">
                  <span class="team-name">{{ m.strHomeTeam }}</span>
                </div>

                <div class="match-score" :class="m.intHomeScore !== null ? 'score--final' : 'score--upcoming'">
                  <template v-if="m.intHomeScore !== null">
                    <span>{{ m.intHomeScore }}</span>
                    <span class="score-sep">:</span>
                    <span>{{ m.intAwayScore }}</span>
                  </template>
                  <template v-else>
                    <span class="score-vs">VS</span>
                  </template>
                </div>

                <div class="match-team match-team--away">
                  <span class="team-name">{{ m.strAwayTeam }}</span>
                  <img v-if="m.strAwayTeamBadge" :src="m.strAwayTeamBadge" class="team-badge" :alt="m.strAwayTeam">
                </div>
              </div>

              <!-- ESTADO -->
              <div class="match-status">
                <span
                  class="status-badge"
                  :class="{
                    'status--ft':  m.strStatus === 'Match Finished',
                    'status--ns':  m.strStatus === 'Not Started',
                    'status--live': m.strStatus === 'Live',
                  }"
                >
                  {{ matchStatus(m.strStatus) }}
                </span>
              </div>
            </div>
          </div>

          <!-- SKELETON LOADING -->
          <div class="matches-list" v-else>
            <div class="match-row" v-for="n in 5" :key="n" style="pointer-events:none">
              <div class="skel" style="width:48px;height:28px;border-radius:6px;flex-shrink:0"></div>
              <div style="flex:1;display:flex;gap:12px;align-items:center">
                <div class="skel skel-line" style="flex:1;height:12px"></div>
                <div class="skel" style="width:48px;height:28px;border-radius:6px"></div>
                <div class="skel skel-line" style="flex:1;height:12px"></div>
              </div>
              <div class="skel" style="width:40px;height:20px;border-radius:100px"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ NOTICIAS TECH (HackerNews API) ═══ -->
      <div class="api-section">
        <div class="section-label">
          <span class="label-bracket">[</span>TECH_NEWS_FEED<span class="label-bracket">]</span>
          <span class="label-live">LIVE</span>
        </div>

        <div class="news-panel panel">
          <div class="panel-header">
            <svg class="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"/><path d="M14 2v6h6M12 18v-6M9 15h6"/>
            </svg>
            <span>HACKER_NEWS // TOP STORIES</span>
            <span class="ph-sub">via HN API</span>
          </div>

          <div class="news-list" v-if="!newsLoading && news.length">
            <a
              v-for="(n, i) in news"
              :key="n.id"
              :href="n.url || `https://news.ycombinator.com/item?id=${n.id}`"
              target="_blank"
              class="news-row"
              :style="`--i:${i}`"
            >
              <span class="news-idx">{{ String(i+1).padStart(2,'0') }}</span>
              <div class="news-body">
                <p class="news-title">{{ n.title }}</p>
                <div class="news-meta">
                  <span class="news-score">▲ {{ n.score }}</span>
                  <span class="news-by">by {{ n.by }}</span>
                  <span class="news-comments">💬 {{ n.descendants || 0 }}</span>
                </div>
              </div>
              <span class="news-arrow">→</span>
            </a>
          </div>

          <div class="news-list" v-else>
            <div class="news-row" v-for="n in 5" :key="n" style="pointer-events:none">
              <span class="news-idx skel" style="width:20px;height:14px;border-radius:3px"></span>
              <div class="news-body">
                <div class="skel skel-line skel-long" style="margin-bottom:8px"></div>
                <div class="skel skel-line skel-short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ INTERESES + METAS ═══ -->
      <div class="bottom-grid">

        <!-- INTERESES -->
        <div>
          <div class="section-label">
            <span class="label-bracket">[</span>TECH_INTERESTS<span class="label-bracket">]</span>
          </div>
          <div class="interests-grid">
            <div class="interest-item" v-for="(it, i) in interests" :key="i" :style="`--i:${i}`">
              <span class="interest-icon">{{ it.icon }}</span>
              <span class="interest-name">{{ it.name }}</span>
            </div>
          </div>
        </div>

        <!-- METAS -->
        <div>
          <div class="section-label">
            <span class="label-bracket">[</span>PERSONAL_GOALS<span class="label-bracket">]</span>
          </div>
          <div class="goals-list">
            <div class="goal-item" v-for="(g, i) in goals" :key="i" :style="`--i:${i}`">
              <div class="goal-dot"></div>
              <p class="goal-text">{{ g }}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ─── DATOS ESTÁTICOS
const hobbies = [
  {
    icon: '⟨/⟩', title: 'Programación Creativa',
    text: 'Desarrollar pequeños proyectos experimentales es una de mis actividades favoritas. Muchas ideas que surgen como hobby terminan convirtiéndose en proyectos reales.',
    tags: ['Side Projects', 'Experimentos', 'Open Source'],
  },
  {
    icon: '◈', title: 'Videojuegos',
    text: 'Los videojuegos me inspiran a pensar en diseño de interfaces, experiencias interactivas y mundos digitales complejos. Son una fuente de creatividad infinita.',
    tags: ['FPS', 'Strategy', 'Indie'],
  },
  {
    icon: '⬡', title: 'Ciclismo',
    text: 'Salir en bicicleta me permite desconectarme del mundo digital y mantener un equilibrio entre la mente y el cuerpo. El movimiento activa la creatividad.',
    tags: ['Outdoor', 'Fitness', 'Mindfulness'],
  },
  {
    icon: '▣', title: 'Lectura Tecnológica',
    text: 'Disfruto leer artículos, libros y blogs sobre nuevas tecnologías, inteligencia artificial, desarrollo web y tendencias digitales que moldean el futuro.',
    tags: ['AI', 'Web Dev', 'Trends'],
  },
  {
    icon: '◎', title: 'Nuevas Tecnologías',
    text: 'Siempre investigando nuevas herramientas y frameworks para mejorar mis habilidades. El aprendizaje continuo es parte esencial de mi identidad como desarrollador.',
    tags: ['Frameworks', 'Tools', 'Learning'],
  },
  {
    icon: '⌬', title: 'Explorar Ideas',
    text: 'Me gusta analizar cómo la tecnología puede resolver problemas del mundo real y generar impacto positivo en la sociedad y las organizaciones.',
    tags: ['Innovation', 'Impact', 'Design'],
  },
]

const interests = [
  { icon: '⟐', name: 'Inteligencia Artificial' },
  { icon: '⊕', name: 'Internet de las Cosas' },
  { icon: '◈', name: 'Desarrollo Web' },
  { icon: '▲', name: 'Automatización' },
  { icon: '⬡', name: 'Cloud Computing' },
  { icon: '◎', name: 'Ciberseguridad' },
  { icon: '⌬', name: 'Machine Learning' },
  { icon: '▣', name: 'DevOps' },
]

const goals = [
  'Desarrollar soluciones tecnológicas que impacten positivamente en la sociedad.',
  'Crear proyectos innovadores combinando software, inteligencia artificial e IoT.',
  'Seguir aprendiendo constantemente nuevas tecnologías y metodologías.',
  'Contribuir a comunidades tecnológicas y compartir conocimiento abiertamente.',
]

// ─── API STATE
const matches      = ref([])
const sportsLoading = ref(true)
const news         = ref([])
const newsLoading  = ref(true)

// ─── API 1: TheSportsDB — Premier League recent results (sin key)
const fetchSports = async () => {
  sportsLoading.value = true
  try {
    // Liga: Premier League id=4328 | La Liga=4335 | Champions=4480
    const res  = await fetch('https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328')
    const data = await res.json()
    // Tomar los últimos 6 partidos
    matches.value = (data.events || []).slice(-6).reverse()
  } catch {
    matches.value = []
  } finally {
    sportsLoading.value = false
  }
}

// ─── API 2: HackerNews — Top tech stories (sin key)
const fetchNews = async () => {
  newsLoading.value = true
  try {
    const idsRes = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const ids    = await idsRes.json()
    const top5   = ids.slice(0, 5)
    const stories = await Promise.all(
      top5.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json()))
    )
    news.value = stories.filter(s => s && s.title)
  } catch {
    news.value = []
  } finally {
    newsLoading.value = false
  }
}

// ─── HELPERS
const formatMatchDate = (d) => {
  if (!d) return '---'
  const date = new Date(d)
  return date.toLocaleDateString('es', { day: '2-digit', month: 'short' })
}

const matchStatus = (s) => {
  if (!s) return 'NS'
  if (s === 'Match Finished') return 'FT'
  if (s === 'Not Started') return 'NS'
  if (s === 'Live') return 'LIVE'
  return s.slice(0, 4).toUpperCase()
}

onMounted(() => {
  fetchSports()
  fetchNews()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@500;700;900&family=DM+Sans:wght@300;400;500&display=swap');

/* ─── VARIABLES */
.hobbies-page {
  --cyan:    #00eaff;
  --magenta: #c026d3;
  --green:   #00ff9c;
  --cyan-dim: rgba(0,234,255,0.07);
  --cyan-b:   rgba(0,234,255,0.2);
  --r: 12px;
}

/* ─── BASE */
.hobbies-page {
  position: relative; overflow: hidden;
  min-height: 100vh; padding: 120px 0 80px;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.4s, color 0.4s;
}

body.dark-mode .hobbies-page  { background: #020617; color: #e2e8f0; }
body.light-mode .hobbies-page { background: #f0f4ff; color: #1a1a2e; }

/* ─── FONDO */
.page-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

.bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,234,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,234,255,0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 100% 60% at 50% 0%, black 20%, transparent 100%);
}

body.light-mode .bg-grid {
  background-image:
    linear-gradient(rgba(2,132,199,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(2,132,199,0.05) 1px, transparent 1px);
}

.bg-orb {
  position: absolute; border-radius: 50%;
  filter: blur(130px); transition: opacity 0.4s;
}

.bg-orb-1 { width:700px;height:500px;top:-150px;left:-150px;
  background:radial-gradient(ellipse,rgba(0,234,255,0.09),transparent 70%); }
.bg-orb-2 { width:600px;height:600px;bottom:-100px;right:-100px;
  background:radial-gradient(ellipse,rgba(192,38,211,0.07),transparent 70%); }

body.light-mode .bg-orb { opacity: 0.45; }

/* ─── INNER */
.page-inner {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: flex; flex-direction: column; gap: 72px;
}

/* ─── HEADER */
.page-header { text-align: center; }

.header-eyebrow {
  display: flex; align-items: center; justify-content: center; gap: 14px;
  margin-bottom: 20px;
}

.eyebrow-line {
  flex: 1; max-width: 100px; height: 1px; display: block;
}

body.dark-mode .eyebrow-line  { background: linear-gradient(90deg, transparent, rgba(0,234,255,0.35)); }
body.light-mode .eyebrow-line { background: linear-gradient(90deg, transparent, rgba(2,132,199,0.3)); }
.eyebrow-line:last-child { transform: scaleX(-1); }

.eyebrow-text {
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.14em;
  white-space: nowrap; transition: color 0.4s;
}

body.dark-mode .eyebrow-text  { color: var(--cyan); }
body.light-mode .eyebrow-text { color: #0284c7; }

.page-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 900;
  letter-spacing: -0.02em; margin: 0 0 18px;
  transition: color 0.4s;
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
  max-width: 620px; margin: 0 auto;
  font-size: 1rem; line-height: 1.75; font-weight: 300; transition: color 0.4s;
}

body.dark-mode .page-subtitle  { color: #64748b; }
body.light-mode .page-subtitle { color: #475569; }

/* ─── HOBBIES GRID */
.hobbies-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
}

.hobby-card {
  position: relative; overflow: hidden;
  padding: 28px 24px 22px; border-radius: var(--r); border: 1px solid;
  animation: cardIn 0.5s ease both;
  animation-delay: calc(var(--i) * 0.08s);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s, background 0.4s;
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

body.dark-mode .hobby-card  { background: rgba(0,0,0,0.3); border-color: rgba(0,234,255,0.12); }
body.light-mode .hobby-card { background: rgba(255,255,255,0.8); border-color: rgba(2,132,199,0.12); box-shadow: 0 2px 16px rgba(0,0,0,0.05); }

.hobby-card:hover {
  transform: translateY(-5px);
}

body.dark-mode .hobby-card:hover  { border-color: rgba(0,234,255,0.35); box-shadow: 0 0 28px rgba(0,234,255,0.1); }
body.light-mode .hobby-card:hover { border-color: rgba(2,132,199,0.3); box-shadow: 0 8px 32px rgba(2,132,199,0.12); }

.hobby-card:hover .hobby-glow { opacity: 1; }

/* ESQUINAS */
.hobby-corner {
  position: absolute; width: 14px; height: 14px; border-color: var(--cyan); border-style: solid;
  transition: border-color 0.4s, opacity 0.4s; opacity: 0.4;
}

body.light-mode .hobby-corner { border-color: #0284c7; }
.hobby-card:hover .hobby-corner { opacity: 1; }

.hc-tl { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
.hc-br { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }

.hobby-glow {
  position: absolute; inset: 0; opacity: 0;
  background: radial-gradient(circle at 50% 0%, rgba(0,234,255,0.06), transparent 70%);
  transition: opacity 0.4s; pointer-events: none;
}

body.light-mode .hobby-glow {
  background: radial-gradient(circle at 50% 0%, rgba(2,132,199,0.05), transparent 70%);
}

.hobby-num {
  font-family: 'Space Mono', monospace; font-size: 0.58rem; letter-spacing: 0.1em;
  display: block; margin-bottom: 14px; transition: color 0.4s;
}

body.dark-mode .hobby-num  { color: #1e293b; }
body.light-mode .hobby-num { color: #cbd5e1; }

.hobby-icon {
  font-family: 'Space Mono', monospace; font-size: 1.8rem; margin-bottom: 12px;
  transition: color 0.4s;
}

body.dark-mode .hobby-icon  { color: var(--cyan); }
body.light-mode .hobby-icon { color: #0284c7; }

.hobby-title {
  font-family: 'Orbitron', monospace; font-size: 0.85rem; font-weight: 700;
  margin: 0 0 10px; letter-spacing: 0.01em; transition: color 0.4s;
}

body.dark-mode .hobby-title  { color: #e2e8f0; }
body.light-mode .hobby-title { color: #0f172a; }

.hobby-text {
  font-size: 0.82rem; line-height: 1.7; margin: 0 0 14px; transition: color 0.4s;
}

body.dark-mode .hobby-text  { color: #64748b; }
body.light-mode .hobby-text { color: #475569; }

.hobby-tags { display: flex; flex-wrap: wrap; gap: 5px; }

.hobby-tag {
  font-family: 'Space Mono', monospace; font-size: 0.58rem; letter-spacing: 0.05em;
  padding: 2px 7px; border-radius: 4px; transition: background 0.4s, color 0.4s;
}

body.dark-mode .hobby-tag  { background: rgba(0,234,255,0.07); color: var(--cyan); }
body.light-mode .hobby-tag { background: rgba(2,132,199,0.07); color: #0284c7; }

/* ─── SECTION LABEL */
.api-section { display: flex; flex-direction: column; gap: 18px; }

.section-label {
  display: flex; align-items: center; gap: 10px;
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.16em;
  transition: color 0.4s;
}

body.dark-mode .section-label  { color: #334155; }
body.light-mode .section-label { color: #94a3b8; }

.label-bracket { transition: color 0.4s; }
body.dark-mode .label-bracket  { color: var(--cyan); opacity: 0.5; }
body.light-mode .label-bracket { color: #0284c7; opacity: 0.5; }

.label-live {
  font-size: 0.55rem; padding: 2px 7px; border-radius: 100px; letter-spacing: 0.14em;
  background: rgba(0,255,156,0.12); color: var(--green);
  animation: livePulse 2s ease-in-out infinite;
}

@keyframes livePulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

/* ─── PANEL BASE */
.panel {
  border-radius: var(--r); border: 1px solid; overflow: hidden;
  transition: background 0.4s, border-color 0.4s;
}

body.dark-mode .panel  { background: rgba(0,0,0,0.3); border-color: rgba(0,234,255,0.12); }
body.light-mode .panel { background: rgba(255,255,255,0.8); border-color: rgba(2,132,199,0.12); box-shadow: 0 4px 24px rgba(0,0,0,0.05); }

.panel-header {
  display: flex; align-items: center; gap: 10px;
  padding: 11px 18px; border-bottom: 1px solid;
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em;
  transition: background 0.4s, border-color 0.4s, color 0.4s;
}

body.dark-mode .panel-header  { background: rgba(0,234,255,0.04); border-color: rgba(0,234,255,0.08); color: var(--cyan); }
body.light-mode .panel-header { background: rgba(2,132,199,0.04); border-color: rgba(2,132,199,0.08); color: #0284c7; }

.ph-icon { width: 14px; height: 14px; flex-shrink: 0; }
.ph-sub  { margin-left: auto; opacity: 0.4; font-size: 0.58rem; }

/* ─── SPORTS PANEL */
.matches-list { display: flex; flex-direction: column; }

.match-row {
  display: flex; align-items: center; gap: 16px;
  padding: 14px 20px; border-bottom: 1px dashed;
  animation: cardIn 0.4s ease both;
  animation-delay: calc(var(--i, 0) * 0.07s);
  transition: background 0.2s, border-color 0.4s;
}

body.dark-mode .match-row  { border-color: rgba(255,255,255,0.05); }
body.light-mode .match-row { border-color: rgba(0,0,0,0.06); }

.match-row:last-child { border-bottom: none; }
.match-row:hover { background: var(--cyan-dim); }
body.light-mode .match-row:hover { background: rgba(2,132,199,0.04); }

/* FECHA */
.match-date {
  display: flex; flex-direction: column; align-items: center;
  min-width: 48px; flex-shrink: 0;
}

.md-day {
  font-family: 'Space Mono', monospace; font-size: 0.65rem; font-weight: 700;
  text-transform: uppercase; transition: color 0.4s;
}

body.dark-mode .md-day  { color: var(--cyan); }
body.light-mode .md-day { color: #0284c7; }

.md-time {
  font-family: 'Space Mono', monospace; font-size: 0.58rem; transition: color 0.4s;
}

body.dark-mode .md-time  { color: #334155; }
body.light-mode .md-time { color: #94a3b8; }

/* CENTRO */
.match-center {
  flex: 1; display: flex; align-items: center; gap: 12px; min-width: 0;
}

.match-team {
  flex: 1; display: flex; align-items: center; gap: 8px; min-width: 0;
}

.match-team--home { justify-content: flex-end; text-align: right; }
.match-team--away { justify-content: flex-start; text-align: left; }

.team-badge {
  width: 24px; height: 24px; object-fit: contain; flex-shrink: 0;
  filter: drop-shadow(0 0 4px rgba(0,234,255,0.3));
}

body.light-mode .team-badge { filter: drop-shadow(0 0 4px rgba(2,132,199,0.2)); }

.team-name {
  font-family: 'Space Mono', monospace; font-size: 0.68rem; font-weight: 700;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  transition: color 0.4s; max-width: 130px;
}

body.dark-mode .team-name  { color: #cbd5e1; }
body.light-mode .team-name { color: #1e293b; }

/* MARCADOR */
.match-score {
  display: flex; align-items: center; gap: 4px;
  font-family: 'Orbitron', monospace; font-size: 1rem; font-weight: 700;
  flex-shrink: 0; min-width: 56px; justify-content: center;
  padding: 6px 10px; border-radius: 8px; border: 1px solid;
  transition: background 0.4s, border-color 0.4s, color 0.4s;
}

.score--final {
  background: linear-gradient(135deg, rgba(0,234,255,0.08), rgba(192,38,211,0.06));
}

body.dark-mode .score--final   { border-color: rgba(0,234,255,0.2); color: #e2e8f0; }
body.light-mode .score--final  { border-color: rgba(2,132,199,0.2); color: #0f172a; background: rgba(2,132,199,0.06); }

.score--upcoming {
  background: transparent;
}

body.dark-mode .score--upcoming  { border-color: rgba(255,255,255,0.06); color: #334155; }
body.light-mode .score--upcoming { border-color: rgba(0,0,0,0.08); color: #94a3b8; }

.score-sep { opacity: 0.5; font-size: 0.8rem; }
.score-vs  { font-size: 0.65rem; letter-spacing: 0.08em; }

/* STATUS */
.match-status { min-width: 42px; display: flex; justify-content: flex-end; flex-shrink: 0; }

.status-badge {
  font-family: 'Space Mono', monospace; font-size: 0.55rem; letter-spacing: 0.1em;
  padding: 3px 8px; border-radius: 100px;
}

.status--ft   { background: rgba(0,255,156,0.1); color: var(--green); }
.status--ns   { background: rgba(255,255,255,0.05); color: #475569; }
.status--live { background: rgba(239,68,68,0.15); color: #f87171; animation: livePulse 1s ease-in-out infinite; }

body.light-mode .status--ft { background: rgba(22,163,74,0.1); color: #16a34a; }
body.light-mode .status--ns { background: rgba(0,0,0,0.05); color: #94a3b8; }

/* SKELETON heredado */

.skel {
  border-radius: 6px; animation: shimmer 1.5s ease-in-out infinite;
}

body.dark-mode .skel  { background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%); background-size: 200% 100%; }
body.light-mode .skel { background: linear-gradient(90deg, rgba(0,0,0,0.04) 25%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.04) 75%); background-size: 200% 100%; }

@keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }

.skel-cover { height: 130px; border-radius: 0; margin-bottom: 12px; }
.skel-line  { height: 10px; margin-bottom: 6px; }
.skel-long  { width: 80%; }
.skel-short { width: 50%; }

/* ─── NEWS */
.news-list { display: flex; flex-direction: column; }

.news-row {
  display: flex; align-items: center; gap: 14px;
  padding: 13px 18px; border-bottom: 1px dashed; text-decoration: none;
  animation: cardIn 0.4s ease both;
  animation-delay: calc(var(--i, 0) * 0.07s);
  transition: background 0.2s, border-color 0.4s;
}

body.dark-mode .news-row  { border-color: rgba(255,255,255,0.05); }
body.light-mode .news-row { border-color: rgba(0,0,0,0.06); }

.news-row:last-child { border-bottom: none; }
.news-row:hover { background: var(--cyan-dim); }

body.light-mode .news-row:hover { background: rgba(2,132,199,0.04); }

.news-idx {
  font-family: 'Space Mono', monospace; font-size: 0.6rem; flex-shrink: 0;
  transition: color 0.4s;
}

body.dark-mode .news-idx  { color: #1e293b; }
body.light-mode .news-idx { color: #cbd5e1; }

.news-body { flex: 1; min-width: 0; }

.news-title {
  font-size: 0.82rem; font-weight: 500; margin: 0 0 5px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; transition: color 0.4s;
}

body.dark-mode .news-title  { color: #cbd5e1; }
body.light-mode .news-title { color: #1e293b; }

.news-row:hover .news-title { color: var(--cyan) !important; }

.news-meta {
  display: flex; gap: 12px;
  font-family: 'Space Mono', monospace; font-size: 0.6rem;
}

.news-score { color: var(--green); }
body.light-mode .news-score { color: #16a34a; }

.news-by, .news-comments { transition: color 0.4s; }
body.dark-mode  .news-by, body.dark-mode  .news-comments { color: #334155; }
body.light-mode .news-by, body.light-mode .news-comments { color: #94a3b8; }

.news-arrow {
  font-size: 1rem; opacity: 0; transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s; flex-shrink: 0;
}

body.dark-mode .news-arrow  { color: var(--cyan); }
body.light-mode .news-arrow { color: #0284c7; }

.news-row:hover .news-arrow { opacity: 1; transform: translateX(0); }

/* ─── BOTTOM GRID */
.bottom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }

/* INTERESTS */
.interests-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;
}

.interest-item {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 16px; border-radius: 10px; border: 1px solid;
  animation: cardIn 0.4s ease both;
  animation-delay: calc(var(--i) * 0.06s);
  transition: transform 0.2s, border-color 0.3s, background 0.4s;
  cursor: default;
}

body.dark-mode .interest-item  { background: rgba(0,0,0,0.25); border-color: rgba(0,234,255,0.1); }
body.light-mode .interest-item { background: rgba(255,255,255,0.8); border-color: rgba(2,132,199,0.1); }

.interest-item:hover {
  transform: translateX(4px);
}

body.dark-mode .interest-item:hover  { border-color: rgba(0,234,255,0.3); }
body.light-mode .interest-item:hover { border-color: rgba(2,132,199,0.3); }

.interest-icon {
  font-family: 'Space Mono', monospace; font-size: 1rem; flex-shrink: 0;
  transition: color 0.4s;
}

body.dark-mode .interest-icon  { color: var(--cyan); }
body.light-mode .interest-icon { color: #0284c7; }

.interest-name {
  font-size: 0.8rem; font-weight: 500; transition: color 0.4s;
}

body.dark-mode .interest-name  { color: #94a3b8; }
body.light-mode .interest-name { color: #334155; }

/* GOALS */
.goals-list { display: flex; flex-direction: column; gap: 12px; }

.goal-item {
  display: flex; gap: 14px; align-items: flex-start;
  animation: cardIn 0.4s ease both;
  animation-delay: calc(var(--i) * 0.1s);
}

.goal-dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-top: 7px;
  transition: background 0.4s, box-shadow 0.4s;
}

body.dark-mode .goal-dot  { background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }
body.light-mode .goal-dot { background: #0284c7; box-shadow: 0 0 8px rgba(2,132,199,0.5); }

.goal-text {
  font-size: 0.88rem; line-height: 1.7; margin: 0;
  padding: 10px 16px; border-radius: 8px; border-left: 2px solid;
  transition: color 0.4s, background 0.4s, border-color 0.4s;
}

body.dark-mode .goal-text  { color: #94a3b8; background: rgba(0,0,0,0.2); border-color: rgba(0,234,255,0.15); }
body.light-mode .goal-text { color: #475569; background: rgba(255,255,255,0.7); border-color: rgba(2,132,199,0.2); }

/* ─── RESPONSIVE */
@media (max-width: 1024px) {
  .hobbies-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 700px) {
  .hobbies-page   { padding: 100px 0 60px; }
  .hobbies-grid   { grid-template-columns: 1fr; }
  .bottom-grid    { grid-template-columns: 1fr; }
  .interests-grid { grid-template-columns: 1fr; }
  .page-inner     { gap: 48px; }
  .match-center   { gap: 8px; }
  .team-name      { font-size: 0.58rem; max-width: 80px; }
  .team-badge     { width: 18px; height: 18px; }
  .match-score    { font-size: 0.8rem; min-width: 44px; padding: 4px 7px; }
}

@media (max-width: 480px) {
  .match-date { display: none; }
}
</style>