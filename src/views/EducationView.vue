<script setup lang="ts">
import { onMounted } from 'vue';
import Education from '@/components/Education.vue';

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
</script>
<template>
    <main class="main ">
        <Education class="mt-18" />
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