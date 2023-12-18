<script setup>
import { RouterView } from "vue-router";
import { onMounted } from 'vue'

onMounted(() => {
  const cursor = document.getElementById('custom-cursor');

  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursor.style.left = `${clientX}px`;
    cursor.style.top = `${clientY}px`;
  });

})

</script>

<template>
   <div id="custom-cursor"></div>
  <router-view></router-view>
</template>

<style scoped>
#custom-cursor {
  position: fixed;
  width: 40px;
  height: 40px;
  background: radial-gradient(transparent, red, green, transparent, blue, black);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
}
</style>
