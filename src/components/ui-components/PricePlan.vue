<template>
    <div class="price_plan bg-white flex flex-col items-center">
        <p class="hover_active text-center mb-6">most popular</p>
        <h2 class="definition mb-4">{{ plan.definition }}</h2>
        <p class="price mb-2">
        <h2 class="price_number inline">${{ plan.price }}.00</h2> /Hour
        </p>
        <p class="description mb-5">{{ plan.description }}</p>
        <ul class="services flex flex-col items-start">
            <li class="service flex items-center list-none mb-4" v-for="service in plan.services">
                <span v-if="!service.type" class="icon-Close mr-4"></span>
                <span v-else class="icon-Check mr-4"></span>
                <p class="service_name">{{ service.name }}</p>
            </li>
        </ul>
        <button class="ordered_now mb-6 cursor-pointer">ORDER NOW</button>
    </div>
</template>

<script setup lang="ts">
import type { Price } from '@/types';

const props = defineProps<{
    plan: Price
}>()
</script>

<style scoped lang="scss">
.price_plan {
    width: calc(100% / 3 - 10px);
    max-width: 310px;

    &:hover .hover_active {
        opacity: 1;
        transition: 0.5s;
    }

    .hover_active {
        width: 100%;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        text-transform: capitalize;
        font-feature-settings: 'calt' off, 'kern' off;
        color: #2B2B2B;
        background: #FFB400;
        opacity: 0;
        transition: 0.5s;

    }

    .definition {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 123.6%;
        text-transform: capitalize;
        color: #2B2B2B;
    }

    .price {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        /* identical to box height, or 160% */

        text-transform: capitalize;
        font-feature-settings: 'calt' off, 'kern' off;

        /* Black */

        color: #2B2B2B;

        .price_number {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 123.6%;
            /* identical to box height, or 40px */

            text-transform: capitalize;

            /* Black */

            color: #2B2B2B;
        }
    }

    .description {
        width: calc(100% - 62px);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        text-transform: capitalize;
        font-feature-settings: 'calt' off, 'kern' off;
        color: #767676;
    }

    .services {
        width: calc(100% - 62px);

        .service {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
            text-transform: capitalize;
            font-feature-settings: 'calt' off, 'kern' off;
            color: #2B2B2B;

            .icon-Close {
                font-size: 24px;
                color: #767676;
            }

            .icon-Check {
                font-size: 24px;
                color: #FFB400;
            }
        }
    }

    &:hover .ordered_now {
        background: #FFB400;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
        border-radius: 30px;
        transition: 0.5s;
    }

    .ordered_now {
        width: 169px;
        height: 38px;
        background: #FFFFFF;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
        border-radius: 30px;
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        text-transform: capitalize;
        color: #2B2B2B;
        transition: 0.5s;
    }
}
</style>