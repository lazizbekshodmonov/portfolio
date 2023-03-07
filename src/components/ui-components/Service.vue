<template>
    <div class="main bg-white   flex flex-col items-center">
        <img class="icon mt-5 " v-if="item.icon !== ''" v-bind:src="item?.icon" alt="icon">
        <h3 class="name mt-6">{{ item.name }}</h3>
        <p class="description mb-10 mt-4" :class="item.icon == '' ? 'mb-4' : 'mb-10'">{{ item.description }}</p>
        <RouterLink v-if="item.icon == ''" :to="{ name: 'Services' }" class="order_now decoration-none">
            ORDER NOW >
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import type { Service } from '@/types';
const props = defineProps<{
    item: Service
}>()
</script>

<style scoped lang="scss">
.main {
    width: calc(100% / 3 - 10px);
    max-width: 310px;



    .icon {
        min-width: 68px;
        min-height: 68px;
    }

    .name {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 123.6%;
        text-transform: capitalize;
        color: #2B2B2B;
    }

    .order_now {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        /* identical to box height */


        /* Yellow */

        color: #FFB400;
    }

    .description {
        width: 80%;
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