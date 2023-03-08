<script setup lang="ts">
import AboutMe from '@/components/AboutMe.vue'
import { onMounted } from 'vue';
import Recomendation from '@/components/Recomendation.vue';
import WorkHistory from '@/components/WorkHistory.vue';

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
</script>
<template>
  <div class="main flex flex-col">
    <AboutMe class="mb-18" />
    <Recomendation class="mb-18" />
  </div>
</template>
  
<style lang="scss" scoped>
.main {
  width: 66%;
  height: 1380px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
