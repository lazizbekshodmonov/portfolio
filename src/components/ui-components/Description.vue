<template>
    <div class="main">
        <p class="description">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    description: string
}>()
</script>

<style scoped lang="scss">
.main {
    width: 100%;
    display: flex;
    justify-content: center;

    .description {
        width: 50%;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        text-transform: capitalize;
        font-feature-settings: 'calt' off, 'kern' off;
        color: #767676;

    }
}
</style>