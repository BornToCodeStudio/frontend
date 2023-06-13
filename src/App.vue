<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Profile from './views/ProfileView.vue'
</script>

<template>
  <main class="d-flex flex-column">
    <NavBar />
    <Profile />
  </main>
</template>

<style scoped lang="scss">
.r {
  height: 80vh;
}
</style>
