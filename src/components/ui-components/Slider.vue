<script setup lang="ts">
import type { Person } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineProps } from 'vue';
import 'swiper/css';
const props = defineProps<{
    people: Person[]
}>()
console.log(props);


const onSwiper = (swiper: any) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>

<template>
    <swiper class="slider flex" :slides-per-view="3" :space-between="27" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="person in people" class="slider_item bg-white p-6">
            <div class="status mb-4">
                <span class="icon-Star1 mr-2" v-for="item in 5"></span>
            </div>
            <h2 class="quality text-start mb-5">{{ person.quality }}</h2>
            <p class="description mb-7">{{ person.name.length > 115 ? person.description : person.description.substring(0,
                113) + '.....' }}</p>
            <div class="profile flex items center">
                <div class="profile_image mr-6">
                    <img :src="person.profileImage" alt="">
                </div>
                <div class="profile_info flex flex-col justify-center">
                    <h3 class="name mb-1">{{ person.name.length < 14 ? person.name : person.name.substring(0, 12) + '...'
                    }}</h3>
                            <p class="job">{{ person.job }}</p>
                </div>
            </div>
        </swiper-slide>




    </swiper>
</template>



<style scoped lang="scss">
.slider {
    .slider_item {
        width: 310px;
        height: 323px;
        box-sizing: border-box;

        .quality {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 123.6%;
            /* or 22px */

            text-transform: capitalize;

            /* Black */

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

        .profile {
            .profile_image {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background: #E1E1E1;
                overflow: hidden;

                img {
                    width: 100%;
                }
            }

            .profile_info {
                .name {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 123.6%;
                    /* or 22px */

                    text-transform: capitalize;

                    /* Black */

                    color: #2B2B2B;
                }

                .job {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                    /* identical to box height, or 160% */

                    text-transform: capitalize;
                    font-feature-settings: 'calt' off, 'kern' off;

                    /* Paragraph Font */

                    color: #767676;
                }
            }
        }

    }
}
</style>