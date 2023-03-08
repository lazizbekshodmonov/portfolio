<script setup lang="ts">
import Title from './ui-components/Title.vue';
import Description from './ui-components/Description.vue';
import Slider from './ui-components/Slider.vue';




</script>

<template>
    <div class="recomendation flex flex-col items-center">
        <Title class="text-center" :title="'recommendations'" />
        <Description class="mb-12"
            :description="'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'" />
        <div class="people">
            <Slider />
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