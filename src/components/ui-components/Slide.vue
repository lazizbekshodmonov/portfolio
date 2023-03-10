
<script setup lang="ts">
import type { Person } from '@/types';

const props = defineProps<{
    person: Person
}>()

console.log(props.person.quality);


</script>

<template>
    <div class="slider_item block bg-white p-6">
        <div class="status mb-4">
            <span class="icon-Star1 mr-2" v-for="item in 5"></span>
        </div>
        <h2 class="quality text-start mb-5">{{ person.quality }}</h2>
        <p class="description mb-7">{{ person.name.length > 115 ? person.description :
            person.description.substring(0,
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
    </div>
</template>


<style scoped lang="scss">
.slider_item {
    width: 310px !important;
    height: 323px;
    box-sizing: border-box;
    margin-right: 10px;
    margin-left: 10px;

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
</style>
