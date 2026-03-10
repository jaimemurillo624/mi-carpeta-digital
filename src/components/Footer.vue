<template>
  <footer class="cyber-footer">

    <!-- FONDO ATMOSFÉRICO -->
    <div class="footer-bg">
      <div class="bg-grid"></div>
      <div class="bg-glow bg-glow-1"></div>
      <div class="bg-glow bg-glow-2"></div>
      <div class="scanline-top"></div>
    </div>

    <div class="footer-inner">

      <!-- ═══ FILA SUPERIOR: IDENTIDAD + CLIMA + CRIPTOS ═══ -->
      <div class="footer-top">

        <!-- BRAND -->
        <div class="brand-col">
          <div class="brand-badge">
            <span class="badge-dot"></span>
            <span class="badge-txt">PORTFOLIO_v2.0</span>
          </div>
          <h2 class="brand-name">Jaime<br><em>Murillo</em></h2>
          <p class="brand-role">
            <span class="role-tag">Software Dev</span>
            <span class="role-sep">·</span>
            <span class="role-tag">IoT</span>
            <span class="role-sep">·</span>
            <span class="role-tag">AI</span>
          </p>
          <!-- REDES SOCIALES -->
          <div class="socials">
            <a href="https://github.com" target="_blank" class="social-btn" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" class="social-btn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:jaimeisaac624@gmail.com" class="social-btn" title="Correo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>Correo</span>
            </a>
          </div>
        </div>

        <!-- PANEL SISTEMA -->
        <div class="panel sys-panel">
          <div class="panel-header">
            <span class="panel-icon">▸</span>
            <span class="panel-title">SYS_MONITOR</span>
            <span class="panel-live">LIVE</span>
          </div>
          <div class="sys-rows">

            <div class="sys-row">
              <span class="sys-key">STATUS</span>
              <span class="sys-val sys-val--online">
                <span class="online-dot"></span>ONLINE
              </span>
            </div>

            <div class="sys-row">
              <span class="sys-key">LOCAL TIME</span>
              <span class="sys-val">{{ time }}</span>
            </div>

            <div class="sys-row">
              <span class="sys-key">LOCATION</span>
              <span class="sys-val">{{ location }}</span>
            </div>

            <div class="sys-row">
              <span class="sys-key">IP</span>
              <span class="sys-val">{{ ip }}</span>
            </div>

            <div class="sys-row">
              <span class="sys-key">UPTIME</span>
              <span class="sys-val">{{ uptime }}</span>
            </div>

            <!-- CLIMA API -->
            <div class="sys-row" v-if="weather.temp">
              <span class="sys-key">WEATHER</span>
              <span class="sys-val">{{ weather.icon }} {{ weather.temp }}°C — {{ weather.desc }}</span>
            </div>

          </div>
        </div>

        <!-- PANEL CRIPTOMONEDAS -->
        <div class="panel crypto-panel">
          <div class="panel-header">
            <span class="panel-icon">◈</span>
            <span class="panel-title">CRYPTO_FEED</span>
            <span class="panel-live" :class="{ 'panel-live--loading': cryptoLoading }">
              {{ cryptoLoading ? 'SYNC' : 'LIVE' }}
            </span>
          </div>
          <div class="crypto-list">
            <div
              v-for="coin in cryptos"
              :key="coin.id"
              class="crypto-row"
            >
              <span class="crypto-name">{{ coin.symbol.toUpperCase() }}</span>
              <div class="crypto-right">
                <span class="crypto-price">${{ formatPrice(coin.current_price) }}</span>
                <span
                  class="crypto-change"
                  :class="coin.price_change_percentage_24h >= 0 ? 'change-up' : 'change-down'"
                >
                  {{ coin.price_change_percentage_24h >= 0 ? '▲' : '▼' }}
                  {{ Math.abs(coin.price_change_percentage_24h).toFixed(2) }}%
                </span>
              </div>
            </div>
            <div v-if="cryptoLoading" class="crypto-loading">
              <span class="loading-bar"></span>
            </div>
          </div>
        </div>

      </div>

      <!-- ═══ FILA MEDIA: FRASE CITA + ACTIVIDAD GITHUB ═══ -->
      <div class="footer-mid">

        <!-- QUOTE API -->
        <div class="quote-block">
          <span class="quote-mark">"</span>
          <p class="quote-text" v-if="quote.text">{{ quote.text }}</p>
          <p class="quote-text quote-text--loading" v-else>LOADING_QUOTE...</p>
          <span class="quote-author" v-if="quote.author">— {{ quote.author }}</span>
        </div>

        <!-- GITHUB ACTIVITY -->
        <div class="panel github-panel">
          <div class="panel-header">
            <span class="panel-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </span>
            <span class="panel-title">GITHUB_ACTIVITY</span>
          </div>
          <div class="github-repos">
            <div v-for="repo in githubRepos" :key="repo.id" class="repo-row">
              <span class="repo-name">{{ repo.name }}</span>
              <div class="repo-meta">
                <span class="repo-lang" v-if="repo.language">{{ repo.language }}</span>
                <span class="repo-stars">★ {{ repo.stargazers_count }}</span>
              </div>
            </div>
            <div v-if="githubLoading" class="crypto-loading">
              <span class="loading-bar"></span>
            </div>
          </div>
        </div>

      </div>

      <!-- ═══ FILA INFERIOR: COPYRIGHT ═══ -->
      <div class="footer-bottom">
        <div class="bottom-left">
          <span class="copy-bracket">[</span>
          <span class="copy-text">© {{ year }} JAIME_MURILLO.DEV</span>
          <span class="copy-bracket">]</span>
        </div>
        <div class="bottom-center">
          <span class="bottom-status">
            <span class="status-dot"></span>
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
        <div class="bottom-right">
          <span class="bottom-tech">BUILT WITH Vue.js + ❤</span>
        </div>
      </div>

    </div>

  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ── STATE
const time      = ref('--:--:--')
const location  = ref('LOADING...')
const ip        = ref('XXX.XXX.X.X')
const uptime    = ref('00:00:00')
const weather   = ref({})
const cryptos   = ref([])
const cryptoLoading = ref(true)
const quote     = ref({})
const githubRepos   = ref([])
const githubLoading = ref(true)
const year = new Date().getFullYear()

// ── GITHUB USERNAME (cambia esto)
const GITHUB_USER = 'jaime6247' // ← tu usuario real

// ── UPTIME
let startTime = Date.now()
let timerId = null

const updateTime = () => {
  const now = new Date()
  time.value = now.toLocaleTimeString('es', { hour12: false })
  const elapsed = Math.floor((Date.now() - startTime) / 1000)
  const h = String(Math.floor(elapsed / 3600)).padStart(2,'0')
  const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2,'0')
  const s = String(elapsed % 60).padStart(2,'0')
  uptime.value = `${h}:${m}:${s}`
}

// ── API 1: GEOLOCALIZACIÓN IP (ipapi.co)
const fetchGeo = async () => {
  try {
    const res  = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    location.value = `${data.city}, ${data.country_name}`
    ip.value = data.ip

    // ── API 2: CLIMA (Open-Meteo — sin key)
    if (data.latitude && data.longitude) {
      const wRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&current_weather=true&hourly=relativehumidity_2m`
      )
      const wData = await wRes.json()
      const code = wData.current_weather?.weathercode
      const temp = Math.round(wData.current_weather?.temperature)

      const weatherMap = {
        0: { desc: 'Despejado', icon: '☀️' },
        1: { desc: 'Mayormente despejado', icon: '🌤' },
        2: { desc: 'Parcialmente nublado', icon: '⛅' },
        3: { desc: 'Nublado', icon: '☁️' },
        45: { desc: 'Niebla', icon: '🌫' },
        61: { desc: 'Llovizna', icon: '🌦' },
        63: { desc: 'Lluvia moderada', icon: '🌧' },
        80: { desc: 'Chubascos', icon: '🌩' },
        95: { desc: 'Tormenta', icon: '⛈' },
      }
      const w = weatherMap[code] || { desc: 'Variable', icon: '🌡' }
      weather.value = { temp, ...w }
    }
  } catch {
    location.value = 'SIGNAL_LOST'
    ip.value = 'MASKED'
  }
}

// ── API 3: CRIPTOMONEDAS (CoinGecko — sin key)
const fetchCryptos = async () => {
  cryptoLoading.value = true
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano&order=market_cap_desc&per_page=4&sparkline=false'
    )
    cryptos.value = await res.json()
  } catch {
    cryptos.value = []
  } finally {
    cryptoLoading.value = false
  }
}

// ── API 4: FRASES INSPIRADORAS (quotable.io)
const fetchQuote = async () => {
  try {
    const res  = await fetch('https://api.quotable.io/random?tags=technology,science,inspirational')
    const data = await res.json()
    quote.value = { text: data.content, author: data.author }
  } catch {
    quote.value = { text: 'El código es poesía que las máquinas entienden.', author: 'Anon' }
  }
}

// ── API 5: GITHUB REPOS PÚBLICOS
const fetchGitHub = async () => {
  githubLoading.value = true
  try {
    const res  = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=4`)
    githubRepos.value = await res.json()
  } catch {
    githubRepos.value = []
  } finally {
    githubLoading.value = false
  }
}

const formatPrice = (n) => {
  if (n >= 1000) return n.toLocaleString('en', { maximumFractionDigits: 0 })
  return n.toFixed(2)
}

onMounted(() => {
  updateTime()
  timerId = setInterval(updateTime, 1000)
  fetchGeo()
  fetchCryptos()
  fetchQuote()
  fetchGitHub()
  // Refrescar cripto cada 60s
  setInterval(fetchCryptos, 60000)
})

onUnmounted(() => {
  clearInterval(timerId)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@500;700;900&family=DM+Sans:wght@300;400&display=swap');

/* ─── VARIABLES */
.cyber-footer {
  --cyan:      #00eaff;
  --magenta:   #c026d3;
  --green:     #00ff9c;
  --cyan-dim:  rgba(0,234,255,0.08);
  --cyan-b:    rgba(0,234,255,0.2);
  --radius:    10px;
}

/* ─── BASE */
.cyber-footer {
  position: relative;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.4s, color 0.4s;
}

body.dark-mode .cyber-footer  { background: #020617; color: #e2e8f0; }
body.light-mode .cyber-footer { background: #f0f4ff; color: #1a1a2e; }

/* ─── FONDO */
.footer-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

.bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,234,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,234,255,0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 80% 100% at 50% 0%, black 30%, transparent 100%);
}

body.light-mode .bg-grid {
  background-image:
    linear-gradient(rgba(2,132,199,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(2,132,199,0.06) 1px, transparent 1px);
}

.bg-glow {
  position: absolute; border-radius: 50%;
  filter: blur(120px); transition: opacity 0.4s;
}

.bg-glow-1 {
  width: 700px; height: 400px;
  top: -150px; left: 50%; transform: translateX(-50%);
  background: radial-gradient(ellipse, rgba(0,234,255,0.1), transparent 70%);
}

.bg-glow-2 {
  width: 400px; height: 400px;
  bottom: 0; right: 0;
  background: radial-gradient(circle, rgba(192,38,211,0.08), transparent 70%);
}

body.light-mode .bg-glow-1 { opacity: 0.5; }
body.light-mode .bg-glow-2 { opacity: 0.3; }

.scanline-top {
  position: absolute; top: 0; left: 0;
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
}

body.light-mode .scanline-top {
  background: linear-gradient(90deg, transparent, #0284c7, transparent);
}

@keyframes scanPass {
  0%   { background-position: -100% 0; }
  100% { background-position: 200% 0; }
}

/* ─── INNER */
.footer-inner {
  position: relative; z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* ─── TOP ROW */
.footer-top {
  display: grid;
  grid-template-columns: 280px 1fr 1fr;
  gap: 28px;
  align-items: start;
}

/* ─── BRAND */
.brand-col { display: flex; flex-direction: column; gap: 12px; }

.brand-badge {
  display: inline-flex; align-items: center; gap: 7px;
  border: 1px solid var(--cyan-b);
  border-radius: 100px;
  padding: 4px 12px;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem; letter-spacing: 0.14em;
  width: fit-content;
  transition: border-color 0.4s, color 0.4s;
}

body.dark-mode .brand-badge { color: var(--cyan); }
body.light-mode .brand-badge { color: #0284c7; border-color: rgba(2,132,199,0.25); }

.badge-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 8px var(--green);
}

@keyframes dotPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

.brand-name {
  font-family: 'Orbitron', monospace;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 900;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.02em;
}

body.dark-mode .brand-name { color: #f1f5f9; }
body.light-mode .brand-name { color: #0f172a; }

.brand-name em {
  font-style: normal;
  background: linear-gradient(135deg, var(--cyan), var(--magenta));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

body.light-mode .brand-name em {
  background: linear-gradient(135deg, #0284c7, #7c3aed);
  -webkit-background-clip: text; background-clip: text;
}

.brand-role { display: flex; align-items: center; gap: 6px; margin: 0; }

.role-tag {
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.06em;
  padding: 3px 8px; border-radius: 4px; transition: background 0.4s, color 0.4s;
}

body.dark-mode .role-tag  { background: rgba(0,234,255,0.08); color: var(--cyan); }
body.light-mode .role-tag { background: rgba(2,132,199,0.08); color: #0284c7; }

.role-sep { opacity: 0.3; font-size: 0.8rem; }

/* SOCIALS */
.socials { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 4px; }

.social-btn {
  display: flex; align-items: center; gap: 7px;
  padding: 8px 14px;
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem; letter-spacing: 0.06em;
  border-radius: 8px; border: 1px solid var(--cyan-b);
  transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.2s, box-shadow 0.3s;
}

body.dark-mode .social-btn { color: var(--cyan); }
body.light-mode .social-btn { color: #0284c7; border-color: rgba(2,132,199,0.25); }

.social-btn svg { width: 14px; height: 14px; flex-shrink: 0; }

.social-btn:hover {
  transform: translateY(-2px);
  border-color: var(--cyan);
  background: var(--cyan-dim);
  box-shadow: 0 0 16px rgba(0,234,255,0.2);
}

body.light-mode .social-btn:hover {
  border-color: #0284c7;
  background: rgba(2,132,199,0.07);
  box-shadow: 0 4px 16px rgba(2,132,199,0.15);
}

/* ─── PANEL BASE */
.panel {
  border-radius: var(--radius);
  border: 1px solid;
  overflow: hidden;
  transition: background 0.4s, border-color 0.4s;
}

body.dark-mode .panel  { background: rgba(0,0,0,0.3); border-color: rgba(0,234,255,0.15); }
body.light-mode .panel { background: rgba(255,255,255,0.7); border-color: rgba(2,132,199,0.15); box-shadow: 0 4px 20px rgba(0,0,0,0.05); }

.panel-header {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 16px;
  border-bottom: 1px solid;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem; letter-spacing: 0.12em;
  transition: border-color 0.4s, background 0.4s, color 0.4s;
}

body.dark-mode .panel-header  { border-color: rgba(0,234,255,0.1); background: rgba(0,234,255,0.04); color: var(--cyan); }
body.light-mode .panel-header { border-color: rgba(2,132,199,0.1); background: rgba(2,132,199,0.04); color: #0284c7; }

.panel-icon { font-size: 0.8rem; }
.panel-title { flex: 1; }

.panel-live {
  font-size: 0.55rem; letter-spacing: 0.18em;
  padding: 2px 7px; border-radius: 100px;
  background: rgba(0,255,156,0.15); color: var(--green);
}

.panel-live--loading { background: rgba(255,200,0,0.15); color: #ffc107 }

@keyframes livePulse { 0%,100%{opacity:1} 50%{opacity:0.5} }

/* ─── SYS PANEL */
.sys-rows { padding: 12px 16px; display: flex; flex-direction: column; gap: 8px; }

.sys-row {
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'Space Mono', monospace; font-size: 0.7rem;
  padding: 4px 0; border-bottom: 1px dashed;
  transition: border-color 0.4s;
}

body.dark-mode .sys-row  { border-color: rgba(255,255,255,0.05); }
body.light-mode .sys-row { border-color: rgba(0,0,0,0.06); }

.sys-row:last-child { border-bottom: none; }

.sys-key { opacity: 0.45; letter-spacing: 0.1em; font-size: 0.62rem; }

.sys-val { letter-spacing: 0.04em; transition: color 0.4s; }
body.dark-mode .sys-val  { color: var(--cyan); }
body.light-mode .sys-val { color: #0284c7; }

.sys-val--online {
  display: flex; align-items: center; gap: 6px;
  color: var(--green) !important;
}

.online-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 8px var(--green);
}

/* ─── CRYPTO PANEL */
.crypto-list { padding: 10px 16px; display: flex; flex-direction: column; gap: 6px; }

.crypto-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 6px 0; border-bottom: 1px dashed;
  transition: border-color 0.4s;
}

body.dark-mode .crypto-row  { border-color: rgba(255,255,255,0.05); }
body.light-mode .crypto-row { border-color: rgba(0,0,0,0.06); }

.crypto-row:last-child { border-bottom: none; }

.crypto-name {
  font-family: 'Space Mono', monospace; font-size: 0.72rem; font-weight: 700;
  transition: color 0.4s;
}

body.dark-mode .crypto-name  { color: #94a3b8; }
body.light-mode .crypto-name { color: #475569; }

.crypto-right { display: flex; align-items: center; gap: 10px; }

.crypto-price {
  font-family: 'Space Mono', monospace; font-size: 0.75rem;
  transition: color 0.4s;
}

body.dark-mode .crypto-price  { color: #e2e8f0; }
body.light-mode .crypto-price { color: #0f172a; }

.crypto-change { font-family: 'Space Mono', monospace; font-size: 0.65rem; font-weight: 700; }
.change-up   { color: var(--green); }
.change-down { color: #f43f5e; }

.crypto-loading { padding: 8px 0; }

.loading-bar {
  display: block; height: 2px; border-radius: 2px;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  background-size: 200% 100%;
}

body.light-mode .loading-bar {
  background: linear-gradient(90deg, transparent, #0284c7, transparent);
  background-size: 200% 100%;
}

@keyframes loadingMove {
  0%   { background-position: -100% 0; }
  100% { background-position: 200% 0; }
}

/* ─── MID ROW */
.footer-mid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

/* ─── QUOTE */
.quote-block {
  position: relative;
  padding: 28px 28px 28px 48px;
  border-radius: var(--radius);
  border-left: 2px solid var(--cyan);
  transition: background 0.4s, border-color 0.4s;
}

body.dark-mode .quote-block  { background: rgba(0,234,255,0.04); }
body.light-mode .quote-block { background: rgba(2,132,199,0.04); border-color: #0284c7; }

.quote-mark {
  position: absolute; top: 12px; left: 16px;
  font-family: 'Orbitron', monospace; font-size: 3rem; line-height: 1;
  opacity: 0.15; pointer-events: none;
}

.quote-text {
  font-size: 0.9rem; line-height: 1.75; font-style: italic;
  margin: 0 0 12px;
  transition: color 0.4s;
}

body.dark-mode .quote-text  { color: #94a3b8; }
body.light-mode .quote-text { color: #475569; }

.quote-text--loading {
  font-family: 'Space Mono', monospace; font-size: 0.7rem;
}

@keyframes blinkText { 0%,100%{opacity:1} 50%{opacity:0.3} }

.quote-author {
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.08em;
  transition: color 0.4s;
}

body.dark-mode .quote-author  { color: var(--cyan); }
body.light-mode .quote-author { color: #0284c7; }

/* ─── GITHUB PANEL */
.github-repos { padding: 10px 16px; display: flex; flex-direction: column; gap: 6px; }

.repo-row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 7px 0; border-bottom: 1px dashed;
  transition: border-color 0.4s;
}

body.dark-mode .repo-row  { border-color: rgba(255,255,255,0.05); }
body.light-mode .repo-row { border-color: rgba(0,0,0,0.06); }

.repo-row:last-child { border-bottom: none; }

.repo-name {
  font-family: 'Space Mono', monospace; font-size: 0.7rem;
  max-width: 55%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  transition: color 0.4s;
}

body.dark-mode .repo-name  { color: #94a3b8; }
body.light-mode .repo-name { color: #334155; }

.repo-meta { display: flex; align-items: center; gap: 10px; }

.repo-lang {
  font-family: 'Space Mono', monospace; font-size: 0.6rem;
  padding: 2px 7px; border-radius: 4px; transition: background 0.4s, color 0.4s;
}

body.dark-mode .repo-lang  { background: rgba(0,234,255,0.08); color: var(--cyan); }
body.light-mode .repo-lang { background: rgba(2,132,199,0.08); color: #0284c7; }

.repo-stars {
  font-family: 'Space Mono', monospace; font-size: 0.65rem;
  transition: color 0.4s;
}

body.dark-mode .repo-stars  { color: #fbbf24; }
body.light-mode .repo-stars { color: #d97706; }

/* ─── BOTTOM BAR */
.footer-bottom {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 24px; border-top: 1px solid;
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.08em;
  flex-wrap: wrap; gap: 12px;
  transition: border-color 0.4s;
}

body.dark-mode .footer-bottom  { border-color: rgba(0,234,255,0.12); }
body.light-mode .footer-bottom { border-color: rgba(2,132,199,0.12); }

.copy-bracket { transition: color 0.4s; }
body.dark-mode .copy-bracket  { color: var(--cyan); opacity: 0.4; }
body.light-mode .copy-bracket { color: #0284c7; opacity: 0.4; }

.copy-text { margin: 0 4px; transition: color 0.4s; }
body.dark-mode .copy-text  { color: #334155; }
body.light-mode .copy-text { color: #64748b; }

.bottom-status {
  display: flex; align-items: center; gap: 7px;
  transition: color 0.4s;
}

body.dark-mode .bottom-status  { color: var(--green); }
body.light-mode .bottom-status { color: #16a34a; }

.status-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 6px var(--green);
}

.bottom-tech { transition: color 0.4s; }
body.dark-mode .bottom-tech  { color: #1e293b; }
body.light-mode .bottom-tech { color: #cbd5e1; }

/* ─── RESPONSIVE */
@media (max-width: 960px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
  .brand-col { grid-column: 1 / -1; }
}

@media (max-width: 640px) {
  .footer-top  { grid-template-columns: 1fr; }
  .footer-mid  { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; align-items: center; text-align: center; }
  .footer-inner { padding: 48px 18px 24px; gap: 28px; }
}
</style>