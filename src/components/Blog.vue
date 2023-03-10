<script setup lang="ts">
import { ref } from 'vue';
import type { Blog } from '@/types';
import BlogItem from './ui-components/BlogItem.vue';
import Title from './ui-components/Title.vue';
import Description from './ui-components/Description.vue';
import img1 from '/src/image/portfolio/Image.jpg'
import img2 from '/src/image/portfolio/Image (1).jpg'
import img3 from '/src/image/portfolio/Image (2).jpg'
const blogs = ref<Blog[]>([])
blogs.value = [
    {
        img: img1,
        title: 'How to make web tempates',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        img: img2,
        title: 'How to make Flyer Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        img: img3,
        title: 'make Business card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        img: img3,
        title: 'make Business card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        img: img1,
        title: 'How to make web tempates',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        img: img2,
        title: 'How to make Flyer Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        img: img3,
        title: 'make Business card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        img: img3,
        title: 'make Business card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
]
</script>

<template>
    <Title :title="'Blog'" class="text-center mb-8 mt-18" />
    <Description class="mb-12"
        :description="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'" />

    <div class="blog_container flex justify-start flex-wrap gap-3 mb-18">
        <BlogItem :blog-item="item" v-for="item in blogs" class="mb-2" />
    </div>
</template>


<style scoped lang="scss"></style>