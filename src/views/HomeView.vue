<script setup>
import { onMounted } from 'vue';
import MainView from './MainView.vue';

import Typed from 'typed.js';

onMounted(() => {
  const options = {
    // Typed.js options go here
    strings: ['Web designer!', 'web developer!', 'frontend developer!', 'youtuber!'],
    typeSpeed: 50,
    loop: true
    // Add other options as needed
  };

  const typed = new Typed('#your-element-id', options);
});

</script>

<template>
    <div class="">
         <MainView>
            <div class="container px-4 sm:px-5 md:px-10 lg:px-14">
                <div class="py-12">
                    <h2 class="HeadingFontStyle text-[2.5rem] font-bold capitalize animate-text">I Am A  <span id="your-element-id"></span></h2>
                    <div class="mt-4">
                      <h3 class=" dark:text-white text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-1px]  HeadingFontStyle">I Build & Develop Web Applications.</h3>
                      <p class=" dark:text-white HeadingFontStyle pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg  lg:text-left ">I will put my sincere effort to do my best in the technology domain with state of art Excellency. I am hard-working in the individual phase with proficiency in using different technology. I am to learn and determined to find core engineering beauty at best.</p>
                    </div>
                </div>
            </div>
         </MainView>
    </div>
</template>

<style scoped>

#custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
}

</style>