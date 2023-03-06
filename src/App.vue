<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Saidbar from './components/Saidbar.vue';
</script>

<template>
  <div class="main flex justify-between">
    <Saidbar />
    <RouterView />
    <Navbar />
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 1200px) {}
</style>
