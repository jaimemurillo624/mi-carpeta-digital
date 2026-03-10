<script setup>
import { ref, watch } from "vue"
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

const darkMode = ref(localStorage.getItem("theme") === "dark")

watch(darkMode, (value) => {
  if (value) {
    document.body.classList.add("dark-mode")
    document.body.classList.remove("light-mode")
    localStorage.setItem("theme", "dark")
  } else {
    document.body.classList.add("light-mode")
    document.body.classList.remove("dark-mode")
    localStorage.setItem("theme", "light")
  }
}, { immediate: true })
</script>

<template>
  <Navbar :darkMode="darkMode" @toggleTheme="darkMode = !darkMode" />

  <main>
    <router-view />
  </main>
  <Footer></Footer>
</template>