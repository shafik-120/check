<script setup>
import { ref, reactive } from 'vue'
import MobileNavbar from '@/components/Nav/MobileNavbar.vue';
import RightSideNavbar from '@/components/Nav/RightSideNavbar.vue';
import LeftSide from '@/components/LeftSide.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
    <section class="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark md:pb-16 w-full">

        <MobileNavbar></MobileNavbar>

        <div class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
            <div class="col-span-12 lg:col-span-4 lg:min-h-screen lg:sticky top-44">
                <LeftSide></LeftSide>
            </div>

            <div class="col-span-12 lg:col-span-8 ">
                <RightSideNavbar></RightSideNavbar>
                <div class="lg:rounded-2xl bg-white dark:bg-[#111111]">

                    <slot></slot>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>