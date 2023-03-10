<script setup lang="ts">
import type { Blog } from '@/types';
const props = defineProps<{
    blogItem: Blog
}>()
</script>

<template>
    <div class="blog_item bg-white">
        <img :src="blogItem.img" :alt="blogItem.title" class="mb-6">
        <h4 class="title ml-6 mb-2">
            {{ blogItem.title }}
        </h4>
        <p class="description ml-6 mb-2">
            {{ blogItem.description }}
        </p>

        <p class="link ml-6 mb-4 cursor-pointer flex items-center">
            <span class="text">Learn more</span> <span class="icon-next"></span>
        </p>
    </div>
</template>


<style scoped lang="scss">
.blog_item {
    width: calc(100% / 3 - 10px);

    img {
        width: 100%;
    }

    .title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 123.6%;
        text-transform: capitalize;
        color: #2B2B2B;
    }

    .description {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        text-transform: capitalize;
        font-feature-settings: 'calt' off, 'kern' off;
        color: #767676;
    }

    .link {
        .text {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 123.6%;
            text-transform: capitalize;
            color: #FFB400;
        }

        .icon-next {
            font-size: 23px;
        }
    }
}</style>