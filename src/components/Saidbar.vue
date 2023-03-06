<script setup lang="ts">
import type { Social, Info, Languages, Skills } from '@/types'

const icons: Social[] = [
    {
        icon: 'icon-Icons-facebook',
        link: '#'
    },
    {
        icon: 'icon-Icons-instagram',
        link: '#'
    },
    {
        icon: 'icon-Icons-twitter',
        link: '#'
    },
    {
        icon: 'icon-linkedin',
        link: '#'
    },
    {
        icon: 'icon-Icons-Youtube',
        link: '#'
    },
    {
        icon: 'icon-Icons-dribbble',
        link: '#'
    },
]
const info: Info[] = [
    {
        key: 'Age:',
        value: '23'
    },
    {
        key: 'Residence:',
        value: 'BD'
    },
    {
        key: 'Freelance:',
        value: 'Available'
    },
    {
        key: 'Address:',
        value: 'Dhaka,Bangladesh'
    },
]
const languages: Languages[] = [
    {
        name: 'Bangla',
        degree: 'Native',
        scores: 100
    },
    {
        name: 'English',
        degree: 'Intermediate',
        scores: 60
    },
    {
        name: 'Russian',
        degree: 'Pre-intermediate',
        scores: 40
    },
]
const skills: Skills[] = [
    {
        name: 'HTML',
        scores: 80
    },
    {
        name: 'CSS',
        scores: 80
    },
    {
        name: 'Javascript',
        scores: 60
    },
    {
        name: 'Typescript',
        scores: 50
    },
    {
        name: 'Vue 3',
        scores: 70
    },
    {
        name: 'Pinia',
        scores: 60
    }
]
const extrSkills: string[] = [
    "Bootstrap, Materialize",
    "Stylus, Sass, Less",
    "Gulp, Webpack, Grunt",
    "GIT Knowledge"
]

</script>
<template>
    <div class="main   bg-white">
        <div class="main-container flex justify-center items-center flex-col bg-white">
            <div class="personal flex justify-center items-center flex-col mt-13 mb-6">
                <div class="profile_image mb-7">
                    <img src="../image/YourImage.png" alt="">
                </div>
                <h2 class="full_name mb-4">
                    Rayan Adlardard
                </h2>
                <p class="job mb-4">
                    Font-end Developer
                </p>
                <div class="socials flex justify-between">
                    <a :href="icon.link" class="socials_item flex justify-center items-center" v-for="icon in icons">
                        <span :class="icon.icon"></span>
                    </a>
                </div>
                <p class="line mt-6"></p>
            </div>
            <div class="personal_info mb-6">
                <div class="info_item flex justify-between" v-for="item in info">
                    <p class="key flex items-center">{{ item.key }}</p>
                    <p class="value">{{ item.value }}</p>
                </div>
                <p class="line mt-6"></p>
            </div>
            <div class="languages mb-6">
                <h2 class="title mb-4">
                    Languages
                </h2>
                <div class="language_item mb-2" v-for="item in languages">
                    <div class="language_info flex justify-between items-center mb-1">
                        <p class="name">{{ item.name }}</p>
                        <p class="degree">{{ item.degree }}</p>
                    </div>
                    <div class="scores flex items-center">
                        <p :style="{ width: `${item.scores - 1}%` }"></p>
                    </div>
                </div>
                <p class="line mt-6"></p>
            </div>
            <div class="skills languages mb-6">
                <h2 class="title mb-4">
                    Skills
                </h2>
                <div class="language_item mb-2" v-for="item in skills">
                    <div class="language_info flex justify-between items-center mb-1">
                        <p class="name">{{ item.name }}</p>
                        <p class="degree">{{ item.scores }}%</p>
                    </div>
                    <div class="scores flex items-center">
                        <p :style="{ width: `${item.scores - 1}%` }"></p>
                    </div>
                </div>
                <p class="line mt-6"></p>
            </div>
            <div class="extra_skills languages mb-6">
                <h2 class="title mb-4">
                    Skills
                </h2>
                <div class="language_item mb-2" v-for="item in extrSkills">
                    <div class="language_info flex justify-start items-center mb-1">
                        <img src="../assets/Icons.svg" alt="">
                        <p class="name ml-4">{{ item }}</p>
                    </div>

                </div>
                <p class="line mt-6"></p>
            </div>
            <div class="resume_btn mb-6">
                <a class="cv_download_btn flex justify-center items-center" href="../cv/Lazizbek Shodmonov Resume.pdf"
                    download="cv.pdf">Download cv <span class="icon-download ml-5"></span></a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.main {
    width: 305px;
    overflow: hidden;

    .main-container {
        width: 305px;

        .line {
            width: 100%;
            height: 0px;
            border: 1.5px solid #F0F0F6;
        }

        .personal {
            width: 75%;

            .profile_image {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                overflow: hidden;
                background: #F0F0F6;

                img {
                    width: 100%;
                    overflow: hidden;
                }
            }

            .full_name {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 123.6%;
                /* or 22px */

                display: flex;
                align-items: center;
                color: #2B2B2B;
            }

            .job {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 24px;
                text-transform: capitalize;
                font-feature-settings: 'calt' off, 'kern' off;
                color: #767676;
            }

            .socials {
                width: 100%;
            }

            .socials_item {
                width: 24px;
                height: 24px;
                font-size: 14px;
                background: #FFB400;
                border-radius: 50%;
                color: #fff;
                text-decoration: none;

                span {
                    color: #2B2B2B;
                }
            }
        }

        .personal_info {
            width: 75%;

            .info_item {
                width: 100%;
                margin-bottom: 9px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 24px;
                text-transform: capitalize;
                font-feature-settings: 'calt' off, 'kern' off;

                .key {
                    height: 24px;
                    background: #FFB400;
                    color: #2B2B2B;
                    padding: 0 6px 0 6px;
                }
            }

            .info_item:nth-child(3) {
                .value {
                    color: #7EB942;
                }
            }
        }

        .languages {
            width: 75%;

            .title {
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

            .language_item {

                .name,
                .degree {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 24px;
                    /* identical to box height, or 160% */

                    text-transform: capitalize;
                    font-feature-settings: 'calt' off, 'kern' off;

                    /* Paragraph Font */

                    color: #767676;
                }

                .scores {
                    width: 100%;
                    height: 4px;
                    border: 0.5px solid #FFB400;
                    border-radius: 30px;
                    padding-left: 1px;

                    p {
                        height: 2px;
                        left: 41px;
                        top: 624px;

                        /* Yellow */

                        background: #FFB400;
                        border-radius: 30px;
                    }
                }
            }
        }

        .resume_btn {
            width: 75%;

            .cv_download_btn {
                width: 100%;
                height: 40px;
                background: #FFB400;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                text-transform: uppercase;
                text-decoration: none;
                color: #2B2B2B;

                span {
                    font-weight: 600;
                }
            }
        }
    }



}

@media screen and (max-width: 1200px) {}
</style>