<script setup lang="ts">
import PricePlan from '@/components/ui-components/PricePlan.vue'
import Title from './ui-components/Title.vue';
import Description from './ui-components/Description.vue';
import { ref } from 'vue';
import type { Price } from '../types/index'
const plans = ref<Price[]>()

plans.value = [
    {
        definition: 'Silver',
        price: 0.00,
        description: 'For most businesses that want to optimize web queries',
        services: [
            {
                type: true,
                name: 'UI Design'
            },
            {
                type: true,
                name: 'web development'
            },
            {
                type: false,
                name: 'logo design'
            },
            {
                type: false,
                name: 'seo optimization'
            },
            {
                type: false,
                name: 'wordPress integration'
            },
            {
                type: false,
                name: '5 Websites'
            },
            {
                type: false,
                name: 'unlimited user'
            },
            {
                type: false,
                name: '20 gB bandwith'
            },
        ]
    },
    {
        definition: 'Gold',
        price: 50.00,
        description: 'For most businesses that want to optimize web queries',
        services: [
            {
                type: true,
                name: 'UI Design'
            },
            {
                type: true,
                name: 'web development'
            },
            {
                type: true,
                name: 'logo design'
            },
            {
                type: true,
                name: 'seo optimization'
            },
            {
                type: false,
                name: 'wordPress integration'
            },
            {
                type: false,
                name: '5 Websites'
            },
            {
                type: false,
                name: 'unlimited user'
            },
            {
                type: false,
                name: '20 gB bandwith'
            },
        ]
    },
    {
        definition: 'Dimond',
        price: 80.00,
        description: 'For most businesses that want to optimize web queries',
        services: [
            {
                type: true,
                name: 'UI Design'
            },
            {
                type: true,
                name: 'web development'
            },
            {
                type: true,
                name: 'logo design'
            },
            {
                type: true,
                name: 'seo optimization'
            },
            {
                type: true,
                name: 'wordPress integration'
            },
            {
                type: true,
                name: '5 Websites'
            },
            {
                type: true,
                name: 'unlimited user'
            },
            {
                type: true,
                name: '20 gB bandwith'
            },
        ]
    },
]
</script>

<template>
    <div class="priceplans flex flex-col items-center">
        <Title class="text-center" :title="'Price plans'" />
        <Description class="mb-12"
            :description="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'" />
        <div class="plans flex justify-between">
            <PricePlan v-for="plan in plans" :plan="plan" />
        </div>
    </div>
</template>



<style scoped lang="scss">
.priceplans {
    width: 100%;

    .description {
        width: 50%;
    }

    .plans {
        width: 100%;
    }
}
</style>