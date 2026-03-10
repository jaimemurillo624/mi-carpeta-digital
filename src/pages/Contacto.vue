<template>
  <section class="contact-page">

    <!-- FONDO -->
    <div class="page-bg">
      <div class="bg-grid"></div>
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
      <div class="bg-scanline"></div>
    </div>

    <div class="page-inner">

      <!-- ═══ HEADER ═══ -->
      <div class="page-header">
        <div class="header-eyebrow">
          <span class="eyebrow-line"></span>
          <span class="eyebrow-text">// CONTACT_INIT.SH</span>
          <span class="eyebrow-line flip"></span>
        </div>
        <h1 class="page-title">Hablemos <em>.</em></h1>
        <p class="page-subtitle">
          ¿Tienes una idea, proyecto o colaboración en mente?
          Estoy disponible para conversar y construir algo extraordinario.
        </p>
      </div>

      <!-- ═══ GRID PRINCIPAL ═══ -->
      <div class="contact-grid">

        <!-- ─ FORMULARIO ─ -->
        <div class="form-col">
          <div class="col-label">
            <span class="lb">[</span>SEND_MESSAGE<span class="lb">]</span>
          </div>

          <form class="cyber-form" @submit.prevent="handleSubmit" novalidate>

            <div class="field-row">
              <div class="field-wrap" :class="{ 'field--error': errors.name, 'field--ok': touched.name && !errors.name }">
                <label class="field-label">NAME_</label>
                <input
                  v-model="form.name"
                  @blur="touch('name')"
                  type="text"
                  class="cyber-input"
                  placeholder="Tu nombre completo"
                  autocomplete="off"
                />
                <span class="field-line"></span>
                <span class="field-msg" v-if="errors.name">{{ errors.name }}</span>
              </div>

              <div class="field-wrap" :class="{ 'field--error': errors.email, 'field--ok': touched.email && !errors.email }">
                <label class="field-label">EMAIL_</label>
                <input
                  v-model="form.email"
                  @blur="touch('email')"
                  type="email"
                  class="cyber-input"
                  placeholder="correo@dominio.com"
                  autocomplete="off"
                />
                <span class="field-line"></span>
                <span class="field-msg" v-if="errors.email">{{ errors.email }}</span>
              </div>
            </div>

            <div class="field-wrap" :class="{ 'field--ok': form.subject.length > 2 }">
              <label class="field-label">SUBJECT_</label>
              <input
                v-model="form.subject"
                type="text"
                class="cyber-input"
                placeholder="¿De qué trata tu mensaje?"
                autocomplete="off"
              />
              <span class="field-line"></span>
            </div>

            <div class="field-wrap" :class="{ 'field--error': errors.message, 'field--ok': touched.message && !errors.message }">
              <label class="field-label">MESSAGE_</label>
              <textarea
                v-model="form.message"
                @blur="touch('message')"
                class="cyber-input cyber-textarea"
                placeholder="Escribe tu mensaje aquí..."
                rows="5"
              ></textarea>
              <span class="field-line"></span>
              <span class="char-count">{{ form.message.length }} / 500</span>
              <span class="field-msg" v-if="errors.message">{{ errors.message }}</span>
            </div>

            <!-- BOTÓN ENVIAR -->
            <button type="submit" class="send-btn" :class="{ 'send-btn--loading': sending, 'send-btn--sent': sent }">
              <span class="send-btn-inner" v-if="!sending && !sent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
                ENVIAR_MENSAJE
              </span>
              <span class="send-btn-inner" v-else-if="sending">
                <span class="spinner"></span>
                TRANSMITIENDO...
              </span>
              <span class="send-btn-inner" v-else>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                MENSAJE_ENVIADO
              </span>
            </button>

            <!-- ESTADO -->
            <div class="form-status" v-if="sent">
              <span class="status-dot-green"></span>
              Gracias {{ form.name.split(' ')[0] }}, me pondré en contacto pronto.
            </div>

          </form>
        </div>

        <!-- ─ INFO ─ -->
        <div class="info-col">
          <div class="col-label">
            <span class="lb">[</span>SYS_INFO<span class="lb">]</span>
          </div>

          <!-- STATUS CARD -->
          <div class="status-card panel">
            <div class="sc-header">
              <span class="sc-dot"></span>
              <span class="sc-title">DISPONIBILIDAD_ACTUAL</span>
            </div>
            <div class="sc-body">
              <div class="avail-badge">
                <span class="avail-pulse"></span>
                <span class="avail-text">OPEN TO WORK</span>
              </div>
              <p class="avail-desc">Disponible para proyectos freelance, colaboraciones y posiciones full-time remoto.</p>
            </div>
          </div>

          <!-- INFO ITEMS -->
          <div class="info-list panel">
            <div class="info-row" v-for="item in infoItems" :key="item.label">
              <div class="ir-icon">
                <component :is="item.iconComponent" />
              </div>
              <div class="ir-body">
                <span class="ir-label">{{ item.label }}</span>
                <span class="ir-value">{{ item.value }}</span>
              </div>
            </div>
          </div>

          <!-- REDES -->
          <div class="socials-block panel">
            <div class="panel-mini-header">REDES_SOCIALES</div>
            <div class="socials-grid">
              <a href="https://github.com" target="_blank" class="social-card">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
                <span class="sc-arrow">↗</span>
              </a>
              <a href="https://linkedin.com" target="_blank" class="social-card">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
                <span class="sc-arrow">↗</span>
              </a>
              <a href="mailto:jaimeisaac624@gmail.com" class="social-card">
                <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>Email</span>
                <span class="sc-arrow">↗</span>
              </a>
            </div>
          </div>

          <!-- TIEMPO DE RESPUESTA -->
          <div class="response-card panel">
            <div class="panel-mini-header">TIEMPO_RESPUESTA</div>
            <div class="rc-body">
              <div class="rc-bar-wrap">
                <span class="rc-label">Tiempo promedio</span>
                <span class="rc-val">≤ 24h</span>
              </div>
              <div class="rc-track">
                <span class="rc-fill"></span>
              </div>
              <div class="rc-note">Respondo todos los mensajes dentro de 24 horas en días hábiles.</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, h } from 'vue'
import emailjs from '@emailjs/browser'

// ─── CONFIG EMAILJS
const SERVICE_ID = "service_9p1qisa"
const TEMPLATE_ID = "template_w5v7iml"
const PUBLIC_KEY = "BSClaLeaZFpo3Mpws"

// ─── ICONOS SVG inline como componentes
const IconMail = { render: () => h('svg', { viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', 'stroke-width':'1.8', class:'ir-svg' }, [
  h('path', { d:'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
]) }

const IconGlobe = { render: () => h('svg', { viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', 'stroke-width':'1.8', class:'ir-svg' }, [
  h('circle', { cx:'12', cy:'12', r:'10' }),
  h('path', { d:'M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 0 014-10z' }),
  h('path', { d:'M2 12h20' })
]) }

const IconCode = { render: () => h('svg', { viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', 'stroke-width':'1.8', class:'ir-svg' }, [
  h('polyline', { points:'16 18 22 12 16 6' }),
  h('polyline', { points:'8 6 2 12 8 18' })
]) }

const infoItems = [
  { label: 'EMAIL_', value: 'jaimeisaac624@gmail.com', iconComponent: IconMail },
  { label: 'REMOTE_', value: 'Disponible en cualquier zona horaria', iconComponent: IconGlobe },
  { label: 'STACK_', value: 'Web · IoT · IA · Cloud', iconComponent: IconCode },
]

// ─── FORM STATE
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const touched = reactive({
  name: false,
  email: false,
  message: false
})

const sending = ref(false)
const sent = ref(false)

// ─── VALIDACIÓN
const validate = (field) => {

  if (field === 'name') {
    errors.name = form.name.trim().length < 2
      ? 'El nombre debe tener al menos 2 caracteres'
      : ''
  }

  if (field === 'email') {
    errors.email =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ? ''
        : 'Email inválido'
  }

  if (field === 'message') {
    errors.message = form.message.trim().length < 10
      ? 'El mensaje debe tener al menos 10 caracteres'
      : ''
  }

}

const touch = (field) => {
  touched[field] = true
  validate(field)
}

// ─── ENVIAR MENSAJE REAL
const handleSubmit = async () => {

  ;['name','email','message'].forEach(f=>{
    touched[f] = true
    validate(f)
  })

  if (errors.name || errors.email || errors.message) return

  sending.value = true

  try {

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      PUBLIC_KEY
    )

    sent.value = true

    // limpiar formulario
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''

  } catch (error) {

    console.error("Error enviando email:", error)
    alert("Error al enviar el mensaje")

  }

  sending.value = false
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@500;700;900&family=DM+Sans:wght@300;400;500&display=swap');

/* ─── VARIABLES */
.contact-page {
  --cyan:    #00eaff;
  --magenta: #c026d3;
  --green:   #00ff9c;
  --red:     #f43f5e;
  --cyan-dim: rgba(0,234,255,0.07);
  --cyan-b:   rgba(0,234,255,0.2);
  --r: 12px;
}

/* ─── BASE */
.contact-page {
  position: relative; overflow: hidden;
  min-height: 100vh; padding: 120px 0 80px;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.4s, color 0.4s;
}

body.dark-mode .contact-page  { background: #020617; color: #e2e8f0; }
body.light-mode .contact-page { background: #f0f4ff; color: #1a1a2e; }

/* ─── FONDO */
.page-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }

.bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,234,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,234,255,0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%);
}

body.light-mode .bg-grid {
  background-image:
    linear-gradient(rgba(2,132,199,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(2,132,199,0.05) 1px, transparent 1px);
}

.bg-orb { position: absolute; border-radius: 50%; filter: blur(130px); transition: opacity 0.4s; }

.bg-orb-1 { width:600px;height:600px;top:-100px;left:-150px;
  background:radial-gradient(ellipse,rgba(0,234,255,0.09),transparent 70%); }
.bg-orb-2 { width:500px;height:500px;bottom:-80px;right:-100px;
  background:radial-gradient(ellipse,rgba(192,38,211,0.07),transparent 70%); }

body.light-mode .bg-orb { opacity: 0.4; }

.bg-scanline {
  position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,234,255,0.012) 3px, rgba(0,234,255,0.012) 4px);
  pointer-events: none; transition: opacity 0.4s;
}

body.light-mode .bg-scanline { opacity: 0.3; }

/* ─── INNER */
.page-inner {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: flex; flex-direction: column; gap: 56px;
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
body.light-mode .eyebrow-line { background: linear-gradient(90deg, transparent, rgba(2,132,199,0.35)); }
.eyebrow-line.flip { transform: scaleX(-1); }

.eyebrow-text {
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.14em; white-space: nowrap;
  transition: color 0.4s;
}

body.dark-mode .eyebrow-text  { color: var(--cyan); }
body.light-mode .eyebrow-text { color: #0284c7; }

.page-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 900; letter-spacing: -0.02em;
  margin: 0 0 16px; transition: color 0.4s;
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
  max-width: 580px; margin: 0 auto;
  font-size: 1rem; line-height: 1.75; font-weight: 300; transition: color 0.4s;
}

body.dark-mode .page-subtitle  { color: #64748b; }
body.light-mode .page-subtitle { color: #475569; }

/* ─── GRID */
.contact-grid {
  display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: start;
}

/* ─── COL LABEL */
.col-label {
  font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.16em;
  margin-bottom: 20px; transition: color 0.4s;
}

body.dark-mode .col-label  { color: #334155; }
body.light-mode .col-label { color: #94a3b8; }

.lb { transition: color 0.4s; }
body.dark-mode .lb  { color: var(--cyan); opacity: 0.5; }
body.light-mode .lb { color: #0284c7; opacity: 0.5; }

/* ─── FORM */
.cyber-form { display: flex; flex-direction: column; gap: 18px; }

.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.field-wrap {
  position: relative; display: flex; flex-direction: column; gap: 6px;
}

.field-label {
  font-family: 'Space Mono', monospace; font-size: 0.6rem; letter-spacing: 0.14em;
  transition: color 0.4s;
}

body.dark-mode .field-label  { color: #334155; }
body.light-mode .field-label { color: #94a3b8; }

.field-wrap.field--ok .field-label    { color: var(--cyan); }
.field-wrap.field--error .field-label { color: var(--red); }

body.light-mode .field-wrap.field--ok .field-label    { color: #0284c7; }
body.light-mode .field-wrap.field--error .field-label { color: #e11d48; }

.cyber-input {
  width: 100%; padding: 12px 14px;
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
  border-radius: 8px; border: 1px solid; outline: none;
  transition: background 0.3s, border-color 0.3s, color 0.4s, box-shadow 0.3s;
}

body.dark-mode .cyber-input {
  background: rgba(0,0,0,0.35); color: #e2e8f0;
  border-color: rgba(0,234,255,0.15);
}

body.light-mode .cyber-input {
  background: rgba(255,255,255,0.85); color: #0f172a;
  border-color: rgba(2,132,199,0.2);
}

.cyber-input::placeholder { opacity: 0.35; }

.cyber-input:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 3px rgba(0,234,255,0.08), 0 0 16px rgba(0,234,255,0.08);
}

body.light-mode .cyber-input:focus {
  border-color: #0284c7;
  box-shadow: 0 0 0 3px rgba(2,132,199,0.08);
}

.field-wrap.field--ok .cyber-input { border-color: rgba(0,234,255,0.4); }
.field-wrap.field--error .cyber-input { border-color: rgba(244,63,94,0.5); box-shadow: 0 0 0 3px rgba(244,63,94,0.07); }

body.light-mode .field-wrap.field--ok .cyber-input { border-color: rgba(2,132,199,0.4); }
body.light-mode .field-wrap.field--error .cyber-input { border-color: rgba(225,29,72,0.4); }

.cyber-textarea { resize: none; min-height: 130px; }

.field-line {
  position: absolute; bottom: 0; left: 0;
  height: 1px; width: 0;
  background: linear-gradient(90deg, var(--cyan), var(--magenta));
  transition: width 0.3s ease; border-radius: 0 0 8px 8px;
  pointer-events: none;
}

.cyber-input:focus ~ .field-line { width: 100%; }

body.light-mode .field-line {
  background: linear-gradient(90deg, #0284c7, #7c3aed);
}

.char-count {
  align-self: flex-end;
  font-family: 'Space Mono', monospace; font-size: 0.55rem; transition: color 0.4s;
}

body.dark-mode .char-count  { color: #1e293b; }
body.light-mode .char-count { color: #cbd5e1; }

.field-msg {
  font-family: 'Space Mono', monospace; font-size: 0.6rem;
  color: var(--red); animation: fadeIn 0.2s ease;
}

body.light-mode .field-msg { color: #e11d48; }

@keyframes fadeIn { from{opacity:0;transform:translateY(-4px)} to{opacity:1;transform:translateY(0)} }

/* ─── SEND BUTTON */
.send-btn {
  position: relative; overflow: hidden;
  width: 100%; padding: 14px;
  border: none; border-radius: 10px; cursor: pointer;
  font-family: 'Space Mono', monospace; font-size: 0.8rem; font-weight: 700;
  letter-spacing: 0.08em;
  transition: transform 0.2s, box-shadow 0.3s, background 0.4s;
  background: linear-gradient(135deg, #00b4cc, #00eaff 50%, #9333ea);
  background-size: 200% 200%;
  animation: gradShift 4s ease infinite;
  color: #020617;
}

body.light-mode .send-btn { background: linear-gradient(135deg, #0ea5e9, #0284c7 50%, #7c3aed); background-size:200% 200%; color: white; }

@keyframes gradShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

.send-btn:hover { transform: translateY(-2px); box-shadow: 0 0 32px rgba(0,234,255,0.4); }

body.light-mode .send-btn:hover { box-shadow: 0 6px 28px rgba(2,132,199,0.35); }

.send-btn--sent {
  background: linear-gradient(135deg, #059669, #00ff9c) !important;
  animation: none; color: #020617 !important;
}

.send-btn--loading { opacity: 0.85; cursor: not-allowed; }

.send-btn-inner { display: flex; align-items: center; justify-content: center; gap: 10px; }

.spinner {
  width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.2); border-top-color: #020617;
  animation: spin 0.7s linear infinite;
}

@keyframes spin { to{transform:rotate(360deg)} }

.form-status {
  display: flex; align-items: center; gap: 8px;
  font-family: 'Space Mono', monospace; font-size: 0.7rem;
  padding: 10px 14px; border-radius: 8px;
  background: rgba(0,255,156,0.07); border: 1px solid rgba(0,255,156,0.2);
  color: var(--green); animation: fadeIn 0.3s ease;
}

body.light-mode .form-status { background: rgba(22,163,74,0.07); border-color: rgba(22,163,74,0.2); color: #16a34a; }

.status-dot-green {
  width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
  background: var(--green); box-shadow: 0 0 8px var(--green);
  animation: pulse 2s ease-in-out infinite;
}

body.light-mode .status-dot-green { background: #16a34a; box-shadow: 0 0 8px rgba(22,163,74,0.5); }

@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

/* ─── PANEL BASE */
.panel {
  border-radius: var(--r); border: 1px solid; overflow: hidden;
  margin-bottom: 16px; transition: background 0.4s, border-color 0.4s;
}

body.dark-mode .panel  { background: rgba(0,0,0,0.28); border-color: rgba(0,234,255,0.12); }
body.light-mode .panel { background: rgba(255,255,255,0.8); border-color: rgba(2,132,199,0.12); box-shadow: 0 2px 16px rgba(0,0,0,0.05); }

.panel-mini-header {
  padding: 9px 16px; border-bottom: 1px solid;
  font-family: 'Space Mono', monospace; font-size: 0.6rem; letter-spacing: 0.14em;
  transition: background 0.4s, border-color 0.4s, color 0.4s;
}

body.dark-mode .panel-mini-header  { background: rgba(0,234,255,0.04); border-color: rgba(0,234,255,0.08); color: var(--cyan); }
body.light-mode .panel-mini-header { background: rgba(2,132,199,0.04); border-color: rgba(2,132,199,0.08); color: #0284c7; }

/* ─── STATUS CARD */
.sc-header {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 16px; border-bottom: 1px solid;
  font-family: 'Space Mono', monospace; font-size: 0.6rem; letter-spacing: 0.12em;
  transition: background 0.4s, border-color 0.4s, color 0.4s;
}

body.dark-mode .sc-header  { background: rgba(0,234,255,0.04); border-color: rgba(0,234,255,0.08); color: var(--cyan); }
body.light-mode .sc-header { background: rgba(2,132,199,0.04); border-color: rgba(2,132,199,0.08); color: #0284c7; }

.sc-dot {
  width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
  background: var(--green); box-shadow: 0 0 8px var(--green);
  animation: pulse 1.8s ease-in-out infinite;
}

.sc-body { padding: 16px; }

.avail-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: 100px; margin-bottom: 10px;
  font-family: 'Space Mono', monospace; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em;
  transition: background 0.4s, color 0.4s;
}

body.dark-mode .avail-badge  { background: rgba(0,255,156,0.1); color: var(--green); }
body.light-mode .avail-badge { background: rgba(22,163,74,0.08); color: #16a34a; }

.avail-pulse {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 10px var(--green);
  animation: pulse 1.5s ease-in-out infinite;
}

body.light-mode .avail-pulse { background: #16a34a; box-shadow: 0 0 10px rgba(22,163,74,0.6); }

.avail-desc { font-size: 0.82rem; line-height: 1.6; margin: 0; transition: color 0.4s; }

body.dark-mode .avail-desc  { color: #64748b; }
body.light-mode .avail-desc { color: #475569; }

/* ─── INFO LIST */
.info-row {
  display: flex; align-items: center; gap: 14px;
  padding: 13px 16px; border-bottom: 1px dashed;
  transition: background 0.2s, border-color 0.4s;
}

body.dark-mode .info-row  { border-color: rgba(255,255,255,0.05); }
body.light-mode .info-row { border-color: rgba(0,0,0,0.06); }

.info-row:last-child { border-bottom: none; }
.info-row:hover { background: var(--cyan-dim); }

body.light-mode .info-row:hover { background: rgba(2,132,199,0.04); }

.ir-icon {
  width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  transition: background 0.4s;
}

body.dark-mode .ir-icon  { background: rgba(0,234,255,0.08); }
body.light-mode .ir-icon { background: rgba(2,132,199,0.08); }

:deep(.ir-svg) {
  width: 14px; height: 14px; transition: stroke 0.4s;
}

body.dark-mode :deep(.ir-svg)  { stroke: var(--cyan); }
body.light-mode :deep(.ir-svg) { stroke: #0284c7; }

.ir-body { display: flex; flex-direction: column; gap: 2px; }

.ir-label {
  font-family: 'Space Mono', monospace; font-size: 0.55rem; letter-spacing: 0.1em;
  transition: color 0.4s;
}

body.dark-mode .ir-label  { color: #334155; }
body.light-mode .ir-label { color: #94a3b8; }

.ir-value { font-size: 0.8rem; transition: color 0.4s; }

body.dark-mode .ir-value  { color: #94a3b8; }
body.light-mode .ir-value { color: #334155; }

/* ─── SOCIALS */
.socials-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0; }

.social-card {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 14px 10px; text-decoration: none; border-right: 1px solid;
  position: relative; overflow: hidden;
  transition: background 0.25s, border-color 0.4s;
}

body.dark-mode .social-card  { border-color: rgba(0,234,255,0.08); }
body.light-mode .social-card { border-color: rgba(2,132,199,0.08); }

.social-card:last-child { border-right: none; }
.social-card:hover { background: var(--cyan-dim); }

body.light-mode .social-card:hover { background: rgba(2,132,199,0.05); }

.social-icon {
  width: 18px; height: 18px; flex-shrink: 0; transition: color 0.4s;
}

body.dark-mode .social-icon  { color: var(--cyan); }
body.light-mode .social-icon { color: #0284c7; }

.social-card span:not(.sc-arrow) {
  font-family: 'Space Mono', monospace; font-size: 0.62rem; letter-spacing: 0.06em;
  transition: color 0.4s;
}

body.dark-mode .social-card span  { color: #64748b; }
body.light-mode .social-card span { color: #64748b; }

.sc-arrow {
  position: absolute; top: 8px; right: 8px; font-size: 0.65rem;
  opacity: 0; transform: translateX(-4px);
  transition: opacity 0.2s, transform 0.2s;
}

body.dark-mode .sc-arrow  { color: var(--cyan) !important; }
body.light-mode .sc-arrow { color: #0284c7 !important; }

.social-card:hover .sc-arrow { opacity: 1; transform: translateX(0); }

/* ─── RESPONSE CARD */
.rc-body { padding: 14px 16px; }

.rc-bar-wrap {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;
}

.rc-label { font-family: 'Space Mono', monospace; font-size: 0.65rem; transition: color 0.4s; }

body.dark-mode .rc-label  { color: #475569; }
body.light-mode .rc-label { color: #64748b; }

.rc-val {
  font-family: 'Orbitron', monospace; font-size: 0.85rem; font-weight: 700;
  transition: color 0.4s;
}

body.dark-mode .rc-val  { color: var(--cyan); }
body.light-mode .rc-val { color: #0284c7; }

.rc-track {
  height: 3px; border-radius: 100px; overflow: hidden; margin-bottom: 10px;
  transition: background 0.4s;
}

body.dark-mode .rc-track  { background: rgba(255,255,255,0.06); }
body.light-mode .rc-track { background: rgba(0,0,0,0.06); }

.rc-fill {
  display: block; height: 100%; width: 92%;
  background: linear-gradient(90deg, var(--cyan), var(--magenta));
  border-radius: 100px;
  animation: fillBar 1.4s ease both;
  transform-origin: left;
}

body.light-mode .rc-fill { background: linear-gradient(90deg, #0284c7, #7c3aed); }

@keyframes fillBar {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

.rc-note { font-size: 0.75rem; line-height: 1.6; margin: 0; transition: color 0.4s; }

body.dark-mode .rc-note  { color: #475569; }
body.light-mode .rc-note { color: #64748b; }

/* ─── RESPONSIVE */
@media (max-width: 960px) {
  .contact-grid { grid-template-columns: 1fr; }
  .info-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; }
  .col-label { grid-column: 1 / -1; }
}

@media (max-width: 640px) {
  .contact-page { padding: 100px 0 60px; }
  .field-row    { grid-template-columns: 1fr; }
  .info-col     { grid-template-columns: 1fr; }
  .page-inner   { gap: 40px; }
}
</style>