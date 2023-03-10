<script setup lang="ts">
import { onMounted } from 'vue';
import Contact from '@/components/Contact.vue';
import Map from '@/components/Map.vue';
onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
</script>
<template>
    <main class="main">
        <Contact class="mb-18" />
        <Map />
    </main>
</template>
  
<style lang="scss" scoped>
.main {
    width: 66%;

}

@media screen and (max-width: 1200px) {
    .main {
        background: red;
        width: 60%;
        margin: 0 auto;
    }
}
</style>