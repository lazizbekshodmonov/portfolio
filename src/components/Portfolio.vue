<script setup lang="ts">
import { ref } from 'vue';
import type { Portfolio } from '@/types/index'
import Title from './ui-components/Title.vue';
import Description from './ui-components/Description.vue';//images

import img1 from '/src/image/portfolio/Image.jpg'
import img2 from '/src/image/portfolio/Image (1).jpg'
import img3 from '/src/image/portfolio/Image (2).jpg'
import img4 from '/src/image/portfolio/Image (3).jpg'
import img5 from '/src/image/portfolio/Image (4).jpg'
import img7 from '/src/image/portfolio/Image (5).jpg'
import img8 from '/src/image/portfolio/Image (6).jpg'
import img6 from '/src/image/portfolio/Image (7).jpg'
import img9 from '/src/image/portfolio/Image (8).jpg'

const portfolio = ref<Portfolio[]>([])
portfolio.value = [
    {
        type: 'Web template',
        image: img1,
        description: 'Description',
        url: '#'
    },
    {
        type: 'Branding',
        image: img2,
        description: 'Description',
        url: '#'
    },
    {
        type: 'Logo',
        image: img3,
        description: 'Description',
        url: '#'
    },
    {
        type: 'UI Design',
        image: img4,
        description: 'Description',
        url: '#'
    },
    {
        type: 'Logo',
        image: img5,
        description: 'Description',
        url: '#'
    },
    {
        type: 'Branding',
        image: img6,
        description: 'Description',
        url: '#'
    },
    {
        type: 'Logo',
        image: img7,
        description: 'Description',
        url: '#'
    },
    {
        type: 'UI Design',
        image: img8,
        description: 'Description',
        url: '#'
    },
    {
        type: 'Branding',
        image: img9,
        description: 'Description',
        url: '#'
    },
]


const filteringCategories = ref<Portfolio[]>([])
const active = ref<'All' | 'UI Design' | 'Web template' | 'Logo' | 'Branding'>('All')

filteringCategories.value = portfolio.value
function filterHandler(type: 'All' | 'UI Design' | 'Web template' | 'Logo' | 'Branding'): void {
    if (type === 'All') {
        filteringCategories.value = portfolio.value
    } else {
        filteringCategories.value = portfolio.value.filter((item) => item.type == type)
    }
    active.value = type
}
</script>

<template>
    <div class="portfolio_container flex flex-col justify-center">
        <Title :title="'Portfolio'" class="text-center mb-6" />
        <Description class="mb-12"
            :description="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'" />
        <div class="filter_categories flex justify-center gap-6">

            <button @click="filterHandler('All')" :class="active === 'All' ? 'active' : ''" class="filter_btn">All
                Categories</button>
            <button @click="filterHandler('UI Design')" :class="active === 'UI Design' ? 'active' : ''"
                class="filter_btn">UI Design</button>
            <button @click="filterHandler('Web template')" :class="active === 'Web template' ? 'active' : ''"
                key="Web template" class="filter_btn">Web Lemplates</button>
            <button @click="filterHandler('Logo')" :class="active === 'Logo' ? 'active' : ''"
                class="filter_btn">Logo</button>
            <button @click="filterHandler('Branding')" :class="active === 'Branding' ? 'active' : ''"
                class="filter_btn">Branding</button>

        </div>
        <div class="categories flex flex-wrap gap-3 mt-12">
            <div class="categories_item" v-for="item in filteringCategories">
                <img :src="item.image" alt="">
                <a :href="item.url" class="decoration-none description flex justify-center items-center cursor-pointer">
                    <p>{{ item.description }}</p>
                </a>

            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.portfolio_container {
    .filter_categories {
        .filter_btn {
            border: none;
            outline: none;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 123.6%;
            text-transform: capitalize;
            color: #2B2B2B;
            background: transparent;
            cursor: pointer;
        }

        .active {
            color: #FFB400;
        }
    }

    .categories {
        .categories_item {
            position: relative;
            width: calc(100% / 3 - 10px);
            height: 300px;

            img {
                width: 100%;
            }

            &:hover .description {
                height: 71px;
                transition: 0.5s;
            }

            .description {
                position: absolute;
                bottom: 22px;
                width: 100%;
                height: 0;
                background: #FFB400;
                overflow: hidden;
                transition: 0.5s;
                opacity: 0.9;

                p {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 100.9%;
                    color: #2B2B2B;
                }
            }
        }
    }
}
</style>