<script setup>
import Navbar from './components/Navbar.vue';
import { RouterLink, RouterView } from 'vue-router';
import Carousel from './components/Carousel.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
  <Carousel :slides="slides" :interval="6000" controls indicators></Carousel>
</template>

<script>
export default {
  name: 'App',
  components: { Carousel },
  data: () => ({
    slides: [
      "/overwatch.jpeg",
      "/csgo.webp",
      "/hogwarts.jpeg",
      "/r6s.jpeg",
      "/rocket.jpeg",
      "/Valorant.webp",

    ],
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
  background-color: rgb(241, 130, 45);
}

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}

img {
  width: 100%;
}
</style>
