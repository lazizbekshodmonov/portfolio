<template>
    <div class="link_child">
        <RouterLink class="link_item" :to="{ name: item?.name }">
            <span @mouseover="active = true" @mouseout="active = false" class="icon" :class="item?.icon"></span>
        </RouterLink>
        <p class="name" v-if="active" :class="active ? 'show' : 'hide'">{{ item?.name }}</p>
        <div v-else-if="active"></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { Router } from '../../types/index'
const props = defineProps<{
    item: Router
}>()
const active = ref(false)
</script>
<style scoped>
@keyframes show {
    from {
        display: block;
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes hide {
    from {
        display: block;
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.show {
    animation-duration: 0.5s;
    animation-name: show;
}

.hide {
    animation-name: hide;
    animation-duration: 0.5s;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #F0F0F6;
    border-radius: 50%;
}

.router-link-active .icon {
    background: #FFB400;
}

.link_item {
    text-decoration: none;
    color: black;
}

.icon:hover~.name {
    opacity: 1;
    transition: 0.5s;
}

.name {
    width: max-content;
    transition: 0.5s;
    position: absolute;
    bottom: 54px;
    padding: 5px 10px 5px 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    background: #2B2B2B;
    border-radius: 2px;
    z-index: 1;
}

.name::after {
    position: absolute;
    top: 10px;
    left: calc(50% - 9px);
    z-index: -1;
    content: "";
    transform: rotate(45deg);
    width: 18px;
    height: 18px;
    background: #2B2B2B;
}

.link_child {
    display: flex;
    justify-content: center;
    position: relative;
}
</style>