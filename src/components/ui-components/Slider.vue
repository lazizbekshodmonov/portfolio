<script setup lang="ts">
import type { Person } from '@/types';
import { ref } from 'vue';
import { TransitionGroup } from 'vue'
import Slide from './Slide.vue';
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
    }

]



const carusel = ref<Person[]>([...people.value])
// const style = ref(`transform: translateX(0)`)

let index: number = 0
// setInterval(() => {
//     // carusel.value.push(...people.value)
//     // style.value = `transform: translateX(-${330 * index.value}px)`

//     if (index == 3) {
//         index = 0
//     }
//     carusel.value.push(people.value[index])
//     carusel.value.splice(0, 1)
//     console.log(index);
//     index++
// }, 3000)

</script>

<template>
    <div class="main_slider">

        <div class="carusel">

            <div class="swiper slider flex  pt-2 pb-2">
                <Slide class="swiper-slide" v-for="person in carusel" :person="person" />
            </div>
        </div>
        <div class="pagination flex justify-center">
            <span class="pagination_item block bg-white cursor-pointer" :class="item == 1 ? 'pagination_item_active' : ''"
                v-for="item in (people.length - 2)">
            </span>
        </div>


    </div>
</template>



<style scoped lang="scss">
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}

.main_slider {
    width: 100%;
    height: max-content;


    .carusel {
        overflow-x: auto;
        transition: all 0.5s ease;

        &::-webkit-scrollbar {
            display: none;
        }

        .slider {
            width: max-content;
            transition: all 0.5s ease;
        }
    }

    .pagination {
        margin-top: 50px;

        .pagination_item {
            width: 10px;
            height: 10px;
            margin-right: 5px;
            margin-left: 5px;
            border-radius: 50%;
        }

        .pagination_item_active {
            background: #FFB400;

        }
    }
}
</style>