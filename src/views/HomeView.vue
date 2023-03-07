<script setup lang="ts">
import Services from '@/components/Services.vue';
import AboutMe from '@/components/AboutMe.vue'
import { onMounted } from 'vue';
import PricePlans from '@/components/PricePlans.vue';
import Recomendation from '@/components/Recomendation.vue';

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
</script>
<template>
  <div class="main flex flex-col">
    <AboutMe class="mb-35" />
    <Services class="mb-18" />
    <PricePlans class="mb-18" />
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
