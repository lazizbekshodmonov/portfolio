<script setup lang="ts">
import RouterLinkComponent from './ui-components/RouterLinkComponent.vue';

const items = [
    {
        name: "Home",
        icon: "icon-Home"
    },
    {
        name: "Services",
        icon: "icon-Services"
    },
    {
        name: "Education",
        icon: "icon-cv"
    },
    {
        name: "Portfolio",
        icon: "icon-Portfolio"
    },
    {
        name: "Blog",
        icon: "icon-Blog"
    },
    {
        name: "Contact",
        icon: "icon-Contact"
    }
]
</script>
<template>
    <div class="main bg-white">
        <nav class="navbar ">
            <ul class="link_list mt-60 flex justify-center flex-col items-center">
                <li class="link_item  list-none mb-11" v-for="item in items">
                    <RouterLinkComponent :item="item" />
                </li>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
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

.main {
    width: 108px;

    .navbar {
        .link_list {
            .link_item {
                position: relative;

                .icon {
                    width: 40px;
                    height: 40px;
                    background: #FFB400;
                    border-radius: 50%;
                }


                .link_name {
                    position: absolute;
                    bottom: 52px;
                    right: calc(50% - 32.5px);
                    width: 65px;
                    height: 24px;
                    background: #2B2B2B;
                    border-radius: 2px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 15px;
                    color: #FFFFFF;
                    text-align: center;
                    z-index: 999;
                    opacity: 0;

                    &::after {
                        display: block;
                        position: absolute;
                        z-index: -1;
                        top: 10px;
                        content: '';
                        width: 18px;
                        height: 18px;
                        background: #2B2B2B;
                        transform: rotate(45deg);
                    }
                }

                .show {
                    animation-duration: 0.5s;
                    animation-name: show;
                    animation-fill-mode: forwards;
                }

                .hide {
                    animation-name: hide;
                    animation-duration: 0.5s;
                }
            }
        }
    }
}

@media screen and (max-width: 1200px) {}
</style>


