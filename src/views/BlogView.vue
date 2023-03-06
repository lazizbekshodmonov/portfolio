<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
</script>
<template>
    <main class="main ">
        <h1>Blog page</h1>
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


