<script setup lang="ts">
import { ref } from 'vue';
const description = ref("")
description.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.'
</script>
<template>
    <div class="about_me bg-white flex items-center">
        <div class="text_content ml-15 mt-25">
            <h1 class="name_title">
                I’m Rayan Adlrdard
            </h1>
            <h1 class="job_title mb-5"><span style="color: #FFB400;">Front-end</span> Developer</h1>
            <p class="discretion mb-7">
                {{ description }}
            </p>
            <RouterLink class="decoration-none" :to="{ name: 'Contact' }">
                <div class="btn flex justify-center items-center uppercase mb-20">Hire me</div>
            </RouterLink>
        </div>
        <div class="image_content ml-3 mt-2">
            <img src="../image/Your Image 1.png" alt="">
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
.about_me {
    width: 100%;
    height: max-content;

    .text_content {

        .name_title,
        .job_title {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 123.6%;
            color: #2B2B2B;
        }

        .discretion {
            width: 424px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            text-transform: capitalize;
            font-feature-settings: 'calt' off, 'kern' off;
            color: #767676;
        }

        .btn {
            width: 154px;
            height: 51px;
            background: #FFB400;
            border-radius: 5px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            text-align: center;

            /* Black */

            color: #2B2B2B;
        }
    }

    .image_content {
        width: 35%;

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }


}

@media screen and (max-width: 1200px) {
    .main {
        width: 60%;
        margin: 0 auto;
    }
}
</style>
