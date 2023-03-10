<script setup lang="ts">
import type { ContactInfo } from '@/types'

const props = defineProps<{
    contactItem: ContactInfo
}>()
</script>

<template>
    <div class="info_item bg-white p-6 flex items-center justify-between flex-col">
        <div class="icon flex items-center justify-center">
            <span :class="contactItem.icon"></span>
        </div>
        <div class="items flex justify-between" v-for="item in contactItem.items">
            <p>{{ item.key }}</p>
            <p>{{ item.value }}</p>

        </div>
    </div>
</template>



<style scoped lang="scss">
.info_item {
    height: 210px;

    .icon {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background: #FFB400;
    }

    .items {
        width: 100%;

        p {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 123.6%;
            text-transform: capitalize;
            color: #767676;
        }
    }

}
</style>