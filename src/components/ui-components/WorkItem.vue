<script setup lang="ts">
import { defineProps } from 'vue';
import type { Work } from '@/types/index'
const props = defineProps<{
    work: Work
}>()
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
</script>

<template>
    <div class="work_container pt-12">
        <div class="work_item flex mb-3 bg-white">
            <div class="work_info">
                <h3 class="school_name">
                    {{ work.jobName }}
                </h3>
                <div class="degree_and_date flex mt-7">
                    <p class="degree mr-5">{{ work.runtimeType }}</p>
                    <div class="date flex items-center pt-1 pb-1 pl-2 pr-2">
                        <p class="date_item">{{ months[work.durationOfActivity.start.getMonth()] + ' ' +
                            work.durationOfActivity.start.getFullYear() }}
                            -
                            {{ months[work.durationOfActivity.end.getMonth()] + ' ' +
                                work.durationOfActivity.end.getFullYear() }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="course_info">
                <h3 class="company">
                    {{ work.company }}
                </h3>
                <p class="description mt-7">
                    {{ work.description }}
                </p>
            </div>

        </div>
        <div class="line"></div>
    </div>
</template>



<style scoped lang="scss">
.work_container {
    height: max-content;

    .line {
        width: 100%;
        height: 1.5px;
        background: #F0F0F6;
    }

    .work_item {


        .work_info {
            width: 40%;

            .school_name {
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

            .degree_and_date {
                .degree {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                    /* identical to box height, or 160% */

                    text-transform: capitalize;
                    font-feature-settings: 'calt' off, 'kern' off;
                    color: #2B2B2B;
                }

                .date {
                    width: max-content;
                    background: #FFB400;
                    border-radius: 1px;
                    box-sizing: border-box;

                    .date_item {
                        // padding-bottom: 2px;
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 10px;
                        // line-height: 100.9%;
                        color: #FFFFFF;
                    }

                }
            }
        }

        .course_info {
            width: 50%;

            .company {
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
        }
    }
}
</style>