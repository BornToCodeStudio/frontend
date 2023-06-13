<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SignInView from './views/SignInView.vue'
</script>

<template>
  <main class="d-flex flex-column">
    <NavBar />
    <SignInView class="r" />
  </main>
</template>

<style scoped lang="scss">
.r {
  height: 80vh;
}
</style>
