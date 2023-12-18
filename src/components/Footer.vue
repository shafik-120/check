<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'
const date = new Date();
const currentYear = date.getUTCFullYear()
</script>

<template>
    <div class="">
        <footer class="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
          <div class="container">
            <p class="text-center py-6 text-gray-lite dark:text-color-910 ">© All Rights Reserved 2021 - {{ currentYear }} | <a
                class="hover:text-[#FA5252] duration-300 transition" href="#"
                target="_blank" rel="noopener noreferrer">Md Shafikul Islam</a>.</p>
          </div>
        </footer>
    </div>
</template>

<style scoped>
 
</style>