<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SignInView from './views/SignInView.vue'
import SignUpView from './views/SignUpView.vue'
</script>

<template>
  <main class="d-flex flex-column">
    <NavBar />
    <SignUpView class="r" />
  </main>
</template>

<style scoped lang="scss">
.r {
  height: 80vh;
}
</style>
