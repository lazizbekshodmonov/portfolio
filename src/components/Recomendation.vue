<script setup lang="ts">
import { ref } from 'vue';
import type { Person } from '@/types/index'
import Title from './ui-components/Title.vue';
import Description from './ui-components/Description.vue';
import Slider from './ui-components/Slider.vue';
import Talan from '/src/image/talan.png'
import Tiana from '/src/image/tiana.png'
import James from '/src/image/james.png'
const people = ref<Person[]>([])
people.value = [
    {
        quality: 'Amazing work!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
        status: 5,
        name: 'Tiana Philips',
        job: 'Photographer',
        profileImage: Talan
    },
    {
        quality: 'Great Quality!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
        status: 5,
        name: 'Talan Westervelt',
        job: 'Business man',
        profileImage: Tiana
    },
    {
        quality: 'Great Quality!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
        status: 0,
        name: 'James Gouse',
        job: 'Graphic Designer',
        profileImage: James
    },
    {
        quality: 'Amazing work!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
        status: 5,
        name: 'Tiana Philips',
        job: 'Photographer',
        profileImage: Talan
    },
    {
        quality: 'Great Quality!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
        status: 5,
        name: 'Talan Westervelt',
        job: 'Business man',
        profileImage: Tiana
    },
    {
        quality: 'Great Quality!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....',
        status: 0,
        name: 'James Gouse',
        job: 'Graphic Designer',
        profileImage: James
    },
]
console.log(people);

</script>

<template>
    <div class="recomendation flex flex-col items-center">
        <Title class="text-center" :title="'recommendations'" />
        <Description class="description text-center mb-12"
            :description="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'" />
        <div class="people">
            <Slider :people="people" />
        </div>
    </div>
</template>



<style scoped lang="scss">
.recomendation {
    width: 100%;

    .description {
        width: 50%;
    }

    .people {
        width: 100%;

        .carousel__item {
            width: 308px;
            height: 323px;
        }
    }
}


.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {

    background-color: red;

}

.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

// .carousel__track {
//     transform-style: preserve-3d;
// }

// .carousel__slide--sliding {
//     transition: 0.5s;
// }

// .carousel__slide {
//     opacity: 0.9;
//     transform: rotateY(-20deg) scale(0.9);
// }

// // .carousel__slide--active~.carousel__slide {
// //     transform: rotateY(20deg) scale(0.9);
// // }

// .carousel__slide--prev {
//     opacity: 1;
//     transform: rotateY(-10deg) scale(0.95);
// }

// .carousel__slide--next {
//     opacity: 1;
//     transform: rotateY(10deg) scale(0.95);
// }

// .carousel__slide--active {
//     opacity: 1;
//     transform: rotateY(0) scale(1.1);
// }
</style>