<script setup lang="ts">
import type { Course } from '@/types';
import { ref } from 'vue';
import Title from './ui-components/Title.vue';
import EducationItem from './ui-components/EducationItem.vue'
import Description from './ui-components/Description.vue';

const educations = ref<Course[]>([])

educations.value = [
    {
        schoolName: "University of Toronto",
        studyDate: { start: new Date(), end: new Date() },
        degree: "Student",
        certificate: "Certificate of web training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    },
    {
        schoolName: "Programming Course",
        studyDate: { start: new Date(), end: new Date() },
        degree: "Student",
        certificate: "Certificate of web training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    },
    {
        schoolName: "Web developer courses",
        studyDate: { start: new Date(), end: new Date() },
        degree: "Student",
        certificate: "Certificate of web training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
    }
]
</script>

<template >
    <div class="">
        <Title :title="'Education'" class="text-center mb-6" />
        <Description class="mb-12"
            :description="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'" />
        <div class="education bg-white pl-9 pr-9">
            <EducationItem v-for="course in educations" :course="course" />
        </div>
    </div>
</template>



<style scoped lang="scss">
.education {
    width: 100%;
    box-sizing: border-box;

}
</style>