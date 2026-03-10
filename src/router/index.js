import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/Home.vue"
import Vida from "../pages/Vida.vue"
import Hobbies from "../pages/Hobbies.vue"
import Contacto from "../pages/Contacto.vue"
import Proyectos from "../pages/Proyectos.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/vida", component: Vida },
  { path: "/hobbies", component: Hobbies },
  { path: "/contacto", component: Contacto },
  { path: "/proyectos", component: Proyectos }
]

const router = createRouter({
  history: createWebHistory(),

  // 👇 hace que cada página empiece arriba
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

export default router