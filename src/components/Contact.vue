<script setup lang="ts">
import type { ContactInfo } from '@/types';
import { ref } from 'vue';
import ContactInfoItem from './ui-components/ContactInfoItem.vue';
import Title from './ui-components/Title.vue';

const contactInfoList = ref<ContactInfo[]>([])

contactInfoList.value = [
    {

        icon: 'icon-location',
        items: [
            {
                key: 'Country:',
                value: 'Bangladesh',
            },
            {
                key: 'City:',
                value: 'Dhaka',
            },
            {
                key: 'Streat:',
                value: '35 vhatara, Badda',
            },
        ]
    },
    {

        icon: 'icon-mail',
        items: [
            {
                key: 'Email:',
                value: 'youremail@gmail.com',
            },
            {
                key: 'Skype:',
                value: '@yourusername',
            },
            {
                key: 'Telegram:',
                value: '@yourusername',
            },
        ]
    },
    {

        icon: 'icon-Mobile',
        items: [
            {
                key: 'Support services:',
                value: '15369',
            },
            {
                key: 'Office:',
                value: '+58 (021)356 587 235',
            },
            {
                key: 'Personal:',
                value: '+58 (021)356 587 235',
            },
        ]
    },

]
</script>

<template>
    <div class="contact_container flex justify-between gap-4 mt-18">
        <div class="message">
            <Title class="mb-12" :title="'Leave us your info'" />
            <div class="message_item ">

                <form class="bg-white flex flex-col justify-between p-6" @submit.prevent>
                    <div class="full_name flex flex-col justify-start">
                        <label for="fullname" class="mb-2">Your Full Name ( Required)</label>
                        <input type="text" name="fullname" id="fullname">
                    </div>
                    <div class="email flex flex-col justify-start">
                        <label for="email" class="mb-2">Your Email ( Required)</label>
                        <input type="text" name="email" id="email">
                    </div>
                    <div class="subject flex flex-col justify-start">
                        <label for="subject" class="mb-2">Subject</label>
                        <input type="text" name="subject" id="subject">
                    </div>
                    <div class="your_message flex flex-col justify-start">
                        <label for="message" class="mb-2">Your Message</label>
                        <textarea id="your_message" name="your_message" rows="5" cols="33">
                                                                                                                                                                                                                                                                                                                                </textarea>
                    </div>
                    <button @submit.prevent type="submit" class="button cursor-pointer">
                        Send message
                    </button>
                </form>
            </div>
        </div>
        <div class="contact_info">
            <Title class="mb-12" :title="'Contact information'" />

            <div class="contact_info_item flex justify-between flex-col">
                <ContactInfoItem v-for="item in contactInfoList" :contactItem="item" />
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.contact_container {

    .message {
        width: 60%;

        .message_item {
            form {

                height: 670px;
            }

            .full_name,
            .email,
            .subject,
            .your_message {
                label {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 123.6%;
                    text-transform: capitalize;
                    color: #767676;
                }

                input,
                textarea {
                    width: 100%;
                    height: 50px;
                    margin-bottom: 23px;
                    border: none;
                    background: #F0F0F6;
                }

                textarea {
                    min-height: 210px;
                }
            }

            .button {
                width: 159px;
                height: 35px;
                border: none;
                background: #FFB400;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                /* identical to box height */

                text-transform: uppercase;

                /* Black */

                color: #2B2B2B;
            }
        }
    }

    .contact_info {
        width: 40%;

        .contact_info_item {
            height: 670px;
        }
    }
}
</style>