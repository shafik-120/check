<script setup>
import { reactive, ref } from 'vue'
import MainView from './MainView.vue';

const serviceData = reactive([
    {
        id: 1, 
        icon: '../assets/img/setting.png',
        heading: 'Front-end Development',
        paragrape: 'I am a student of BSc in Computer Science & Engineering and my studies centered on mathematics, web design, database management, coding, and of the programming software used to create websites.'
    },
    {
        id: 2, 
        icon: '',
        heading: 'Back-end Development',
        paragrape: 'I am a student of BSc in Computer Science & Engineering and my studies centered on mathematics, web design, database management, coding, and of the programming software used to create websites.'
    },
    {
        id: 3, 
        icon: '',
        heading: 'Problem Solving',
        paragrape: 'I am a student of BSc in Computer Science & Engineering and my studies centered on mathematics, web design, database management, coding, and of the programming software used to create websites.'
    },
    {
        id: 4, 
        icon: '',
        heading: 'Core Engineering',
        paragrape: 'I am a student of BSc in Computer Science & Engineering and my studies centered on mathematics, web design, database management, coding, and of the programming software used to create websites.'
    },
    {
        id: 5, 
        icon: '',
        heading: 'Responsive Website',
        paragrape: 'I am a student of BSc in Computer Science & Engineering and my studies centered on mathematics, web design, database management, coding, and of the programming software used to create websites.'
    },
    
])

</script>

<template>
<MainView>
    <div class="container px-4 sm:px-5 md:px-10 lg:px-14">
    <div class="py-12">
        <h2 class="after-effect after:left-52 HeadingFontStyle text-[2.5rem] font-bold capitalize animate-text">My Service</h2>
        <p class=" dark:text-white text-[0.9rem] HeadingFontStyle font-bold mt-2">I am hard-working in the individual phase with proficiency in using different technology. I am hungry to learn and determined to find core engineering beauty at best.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-x-6 gap-y-6 mt-[30px]">
            <div v-for="service in serviceData" :key="service.id" class="transform border border-indigo-200 hover:border-indigo-600 rounded-xl  w-100 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
                <div class=" p-7 justify-center items-center">
                    <img :src="service.icon" alt="">
                    <h2 class="HeadingFontStyle  text-[1.5rem] mb-3 font-bold capitalize animate-text">{{ service.heading }}</h2>
                    <p class="text-[0.8rem] pb-4">{{ service.paragrape }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</MainView>
</template>

<style scoped>

</style>