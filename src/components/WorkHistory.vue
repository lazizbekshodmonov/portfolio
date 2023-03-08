<script setup lang="ts">
import type { Work } from '@/types';
import { ref } from 'vue';
import Title from './ui-components/Title.vue';
import WorkItem from './ui-components/WorkItem.vue'
import Description from './ui-components/Description.vue';

const works = ref<Work[]>([])

works.value = [
    {
        jobName: "Lead Web Designer",
        durationOfActivity: { start: new Date(), end: new Date() },
        runtimeType: "Full-time",
        company: "Com Data Center.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    },
    {
        jobName: "Junior Web Designer",
        durationOfActivity: { start: new Date(), end: new Date() },
        runtimeType: "Part-time",
        company: "Deep Tech",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    },
    {
        jobName: "Senior Web Designer",
        durationOfActivity: { start: new Date(), end: new Date() },
        runtimeType: "Remoute",
        company: "ITBoss",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    },
]
</script>

<template >
    <div class="">
        <Title :title="'Work History'" class="text-center mb-6" />
        <Description class="mb-12"
            :description="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'" />
        <div class="education bg-white pl-9 pr-9">
            <WorkItem v-for="work in works" :work="work" />
        </div>
    </div>
</template>



<style scoped lang="scss">
.education {
    width: 100%;
    box-sizing: border-box;

}
</style>