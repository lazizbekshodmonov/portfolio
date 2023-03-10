<template>
    <div>
        <h2 class="title">{{ title }}</h2>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
}>()

</script>

<style scoped lang="scss">
.title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 123.6%;
    /* identical to box height, or 40px */

    text-transform: capitalize;

    /* Black */

    color: #2B2B2B;
}
</style>