<script setup lang="ts">
import type { Service } from '@/types';
import { ref } from 'vue';
import Description from './ui-components/Description.vue';
import Servicevue from './ui-components/Service.vue';
import Title from './ui-components/Title.vue';
//Icons

import WebDevelopment from "/src/assets/icons/coding.svg"
import UIUXDesign from '/src/assets/icons/illustration.svg'
import SoundDesign from '/src/assets/icons/Microphone.svg'
import GameDesign from '/src/assets/icons/game-development.svg'
import Phtotographer from '/src/assets/icons/Photographer.svg'
const services = ref<Service[]>([])

services.value = [
    {
        icon: WebDevelopment,
        name: 'web development',
        description: 'Blog, E-Commerce'
    },
    {
        icon: UIUXDesign,
        name: 'uI/uX design',
        description: 'Mobile app, website design'
    },
    {
        icon: SoundDesign,
        name: 'sound design',
        description: 'Voice Over, Beat Making'
    },
    {
        icon: GameDesign,
        name: 'game design',
        description: 'Character Design, Props & Objects'
    },
    {
        icon: Phtotographer,
        name: 'photography',
        description: 'portrait, product photography'
    },
    {
        icon: Phtotographer,
        name: 'photography',
        description: 'portrait, product photography'
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


<template>
    <div class="services flex flex-col items-center">
        <Title class="text-center" :title="'my services'" />
        <Description class="mb-12"
            :description="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'" />
        <div class="services flex flex-wrap gap-3">
            <Servicevue :item="item" v-for="item in boundedArray" />
        </div>
    </div>
</template>



<style scoped lang="scss">
.services {
    width: 100%;

    .description {
        width: 50%;
    }
}
</style>