<script setup>
import TheWelcome from './views/HomeView.vue'
</script>

<template>
  

  <main class="flex justify-center items-center">
    <div class="gradient  p-12 bg-gray-light rounded-xl shadow-md">
      <TheWelcome />
    </div>
  </main>
</template>

<style scoped>
main{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3em;
}
</style>
