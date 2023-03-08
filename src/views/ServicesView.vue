<script setup lang="ts">
import { onMounted } from 'vue';
import Services from '@/components/Services.vue';
import PricePlans from '@/components/PricePlans.vue';

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
</script>
<template>
    <main class="main ">
        <Services class="mt-18 " />
        <PricePlans class="mt-18 mb-18" />

    </main>
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

// @media screen and (max-width: 1200px) {
//     .main {
//         background: red;
//         width: 60%;
//         margin: 0 auto;
//     }
// }
</style>