<template>
    <div class="services flex flex-col items-center">
        <Title class="text-center" :title="'my services'" />
        <Description class="description text-center mb-12"
            :description="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'" />
        <div class="services flex flex-wrap gap-3">
            <Servicevue :item="item" v-for="item in boundedArray" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Service } from '@/types';
import { ref } from 'vue';
import Description from './ui-components/Description.vue';
import Servicevue from './ui-components/Service.vue';
import Title from './ui-components/Title.vue';
const services = ref<Service[]>([])

services.value = [
    {
        icon: "/src/assets/icons/coding.svg",
        name: 'web development',
        description: 'Blog, E-Commerce'
    },
    {
        icon: '/src/assets/icons/illustration.svg',
        name: 'web development',
        description: 'Blog, E-Commerce'
    },
    {
        icon: '/src/assets/icons/Microphone.svg',
        name: 'web development',
        description: 'Blog, E-Commerce'
    },
    {
        icon: '/src/assets/icons/game-development.svg',
        name: 'web development',
        description: 'Blog, E-Commerce'
    },
    {
        icon: '/src/assets/icons/Photographer.svg',
        name: 'web development',
        description: 'Blog, E-Commerce'
    },
    {
        icon: '/src/assets/icons/Photographer.svg',
        name: 'web development',
        description: 'Blog, E-Commerce'
    }

]
const boundedArray = ref<Service[]>([])
const active = ref(false)
if (services.value.length > 5) {
    active.value = true
    boundedArray.value = services.value.slice(0, 5)
    boundedArray.value.push({
        icon: '',
        name: 'advertising',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. '
    })
} else {
    active.value = true
    boundedArray.value = services.value
}
</script>

<style scoped lang="scss">
.services {
    width: 100%;

    .description {
        width: 50%;
    }
}
</style>