<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }">

    <!-- LÍNEA DE ESCANEO SUPERIOR -->
    <div class="nav-scanline"></div>

    <!-- BORDE INFERIOR ANIMADO -->
    <div class="nav-border-bottom">
      <span class="border-glow"></span>
    </div>

    <div class="nav-inner">

      <!-- LOGO -->
      <router-link class="nav-logo" to="/">
        <div class="logo-wrapper">
          <img src="../assets/img/logomarca.png" alt="logo" height="36">
          <div class="logo-glitch-layer"></div>
        </div>
       
      </router-link>

      <!-- TOGGLE MOBILE -->
      <button class="hamburger" @click="toggleMenu" :class="{ 'hamburger--active': menuOpen }" aria-label="Menu">
        <span class="ham-line ham-line-1"></span>
        <span class="ham-line ham-line-2"></span>
        <span class="ham-line ham-line-3"></span>
      </button>

      <!-- MENÚ -->
      <div class="nav-menu" :class="{ 'nav-menu--open': menuOpen }">

        <!-- ÍNDICE DECORATIVO -->
        <span class="menu-index">NAV://</span>

        <ul class="nav-links">
          <li v-for="(item, i) in navItems" :key="item.path" class="nav-item" :style="`--i:${i}`">
            <router-link
              class="nav-link"
              :to="item.path"
              @click="menuOpen = false"
              v-slot="{ isActive }"
            >
              <span class="link-num">0{{ i + 1 }}</span>
              <span class="link-label">{{ item.label }}</span>
              <span class="link-line" :class="{ 'link-line--active': isActive }"></span>
            </router-link>
          </li>
        </ul>

        <!-- TOGGLE TEMA -->
        <button class="theme-toggle" @click="toggleTheme" :title="darkMode ? 'Modo claro' : 'Modo oscuro'">
          <div class="toggle-track">
            <span class="toggle-icon toggle-icon--sun">
              <!-- Sol -->
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            </span>
            <span class="toggle-icon toggle-icon--moon">
              <!-- Luna -->
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            </span>
            <span class="toggle-thumb" :class="{ 'toggle-thumb--light': !darkMode }"></span>
          </div>
        </button>

      </div>
    </div>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const darkMode = ref(false)
const scrolled  = ref(false)
const menuOpen  = ref(false)

const navItems = [
  { label: 'Inicio',     path: '/' },
  { label: 'Sobre Mí',  path: '/vida' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Hobbies', path: '/hobbies' },
  { label: 'Contacto',  path: '/contacto' },
]

const toggleTheme = () => {
  darkMode.value = !darkMode.value
  applyTheme()
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const applyTheme = () => {
  if (darkMode.value) {
    document.body.classList.add('dark-mode')
    document.body.classList.remove('light-mode')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.add('light-mode')
    document.body.classList.remove('dark-mode')
    localStorage.setItem('theme', 'light')
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 30
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') darkMode.value = true
  applyTheme()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@600;700&display=swap');

/* ── VARIABLES */
.navbar {
  --cyan: #00eaff;
  --cyan-dim: rgba(0,234,255,0.12);
  --cyan-border: rgba(0,234,255,0.22);
  --h: 64px;
}

/* ── BASE */
.navbar {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  z-index: 1000;
  height: var(--h);
  display: flex;
  align-items: center;
}

body.dark-mode .navbar {
  background: rgba(2, 6, 23, 0.7);
}

body.light-mode .navbar {
  background: rgba(240, 244, 255, 0.75);
}

/* FONDO SÓLIDO AL HACER SCROLL */
body.dark-mode .navbar--scrolled {
  background: rgba(2, 6, 23, 0.96);
  backdrop-filter: blur(16px);
}

body.light-mode .navbar--scrolled {
  background: rgba(240, 244, 255, 0.97);
  backdrop-filter: blur(16px);
}

/* ── LÍNEA SCAN */
.nav-scanline {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--cyan) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: scanSlide 4s linear infinite;
  opacity: 0.7;
}

body.light-mode .nav-scanline {
  background: linear-gradient(90deg, transparent 0%, #0284c7 50%, transparent 100%);
  background-size: 200% 100%;
  opacity: 0.5;
}

@keyframes scanSlide {
  0%   { background-position: -100% 0; }
  100% { background-position: 200% 0; }
}

/* ── BORDE INFERIOR */
.nav-border-bottom {
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 1px;
  overflow: hidden;
  transition: opacity 0.4s;
}

body.dark-mode .nav-border-bottom { background: rgba(255,255,255,0.05); }
body.light-mode .nav-border-bottom { background: rgba(0,0,0,0.06); }

.border-glow {
  display: block;
  position: absolute;
  top: 0; left: -30%;
  width: 30%; height: 100%;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  animation: borderGlow 5s ease-in-out infinite;
}

body.light-mode .border-glow {
  background: linear-gradient(90deg, transparent, #0284c7, transparent);
}

@keyframes borderGlow {
  0%   { left: -30%; opacity: 0; }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { left: 130%; opacity: 0; }
}

/* ── INNER */
.nav-inner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ── LOGO */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  position: relative;
}

.logo-wrapper {
  position: relative;
  line-height: 0;
}

.logo-wrapper img {
  display: block;
  transition: filter 0.3s;
}


/* Glitch sutil en hover */
.logo-glitch-layer {
  position: absolute;
  inset: 0;
  background: inherit;
  opacity: 0;
  clip-path: polygon(0 30%, 100% 30%, 100% 55%, 0 55%);
  pointer-events: none;
}

.nav-logo:hover .logo-glitch-layer {
  animation: logoGlitch 0.4s steps(2) both;
}




/* ── HAMBURGER */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: 1px solid var(--cyan-border);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s, background 0.3s;
}

body.light-mode .hamburger { border-color: rgba(2,132,199,0.25); }

.hamburger:hover {
  background: var(--cyan-dim);
  border-color: var(--cyan);
}

.ham-line {
  display: block;
  width: 20px; height: 1.5px;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

body.dark-mode .ham-line { background: var(--cyan); }
body.light-mode .ham-line { background: #0284c7; }

.hamburger--active .ham-line-1 { transform: translateY(6.5px) rotate(45deg); }
.hamburger--active .ham-line-2 { opacity: 0; transform: scaleX(0); }
.hamburger--active .ham-line-3 { transform: translateY(-6.5px) rotate(-45deg); }

/* ── MENÚ */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 6px;
}

.menu-index {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  margin-right: 8px;
  transition: color 0.4s;
}

body.dark-mode .menu-index { color: #1e293b; }
body.light-mode .menu-index { color: #cbd5e1; }

/* ── LINKS */
.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0; padding: 0;
  gap: 2px;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  text-decoration: none;
  font-family: 'Syne', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: color 0.25s, background 0.25s;
}

body.dark-mode .nav-link { color: #64748b; }
body.light-mode .nav-link { color: #64748b; }

/* Número índice */
.link-num {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s, color 0.3s;
}

body.dark-mode .link-num { color: var(--cyan); }
body.light-mode .link-num { color: #0284c7; }

.nav-link:hover .link-num,
.router-link-active .link-num {
  opacity: 1;
  transform: translateX(0);
}

/* Label */
.link-label {
  position: relative;
  z-index: 1;
}

/* Subrayado animado */
.link-line {
  position: absolute;
  bottom: 5px; left: 14px;
  height: 1px;
  width: 0;
  background: linear-gradient(90deg, var(--cyan), #c026d3);
  border-radius: 2px;
  transition: width 0.3s ease;
}

body.light-mode .link-line {
  background: linear-gradient(90deg, #0284c7, #7c3aed);
}

.link-line--active { width: calc(100% - 28px); }

/* Hover: fondo sutil + subrayado */
.nav-link:hover {
  background: var(--cyan-dim);
}

body.light-mode .nav-link:hover {
  background: rgba(2,132,199,0.07);
}

body.dark-mode .nav-link:hover { color: #e2e8f0; }
body.light-mode .nav-link:hover { color: #0f172a; }

.nav-link:hover .link-line { width: calc(100% - 28px); }



/* ── THEME TOGGLE */
.theme-toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-left: 12px;
}

.toggle-track {
  position: relative;
  width: 52px; height: 26px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 3px;
  border: 1px solid var(--cyan-border);
}

body.dark-mode .toggle-track {
  background: rgba(0,234,255,0.08);
  box-shadow: 0 0 10px rgba(0,234,255,0.1);
}

body.light-mode .toggle-track {
  background: rgba(2,132,199,0.08);
  border-color: rgba(2,132,199,0.25);
}

.toggle-thumb {
  position: absolute;
  right: 3px;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan), #c026d3);
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.4s;
  box-shadow: 0 0 8px rgba(0,234,255,0.5);
}

.toggle-thumb--light {
  transform: translateX(-26px);
  background: linear-gradient(135deg, #0284c7, #7c3aed);
  box-shadow: 0 0 8px rgba(2,132,199,0.5);
}

.toggle-icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, color 0.3s;
}

.toggle-icon--sun  { left: 6px;  }
.toggle-icon--moon { right: 6px; }

body.dark-mode .toggle-icon--sun  { opacity: 0.2; color: #94a3b8; }
body.dark-mode .toggle-icon--moon { opacity: 1;   color: var(--cyan); }
body.light-mode .toggle-icon--sun  { opacity: 1;   color: #f59e0b; }
body.light-mode .toggle-icon--moon { opacity: 0.2; color: #94a3b8; }

/* ── RESPONSIVE */
@media (max-width: 900px) {

  .hamburger { display: flex; }
  .menu-index { display: none; }

  .nav-menu {
    position: fixed;
    top: var(--h);
    left: 0; right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 20px 24px 28px;
    gap: 0;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s, transform 0.3s, background 0.4s;
  }

  body.dark-mode .nav-menu {
    background: rgba(2, 6, 23, 0.97);
    border-bottom: 1px solid var(--cyan-border);
  }

  body.light-mode .nav-menu {
    background: rgba(240, 244, 255, 0.98);
    border-bottom: 1px solid rgba(2,132,199,0.2);
  }

  .nav-menu--open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .nav-links {
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
    margin-bottom: 16px;
  }

  .nav-item {
    animation: mobileItemIn 0.3s ease both;
    animation-delay: calc(var(--i) * 0.06s);
  }

  @keyframes mobileItemIn {
    from { opacity: 0; transform: translateX(-12px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .nav-link {
    padding: 12px 10px;
    border-radius: 10px;
    font-size: 1rem;
  }

  .link-line { bottom: 8px; }

  .theme-toggle {
    margin-left: 0;
    margin-top: 4px;
  }

}
</style>