<script setup>
import Navbar from './components/Navbar.vue';
// import { RouterLink, RouterView } from 'vue-router';
import Home from './components/Routers/Home.vue';
import Carousel from './components/Carousel.vue'
</script>

<template>
  <Navbar />
  <Carousel :slides="slides" :interval="6000" controls indicators></Carousel>

  <Home />
</template>

<script>
export default {
  name: 'App',
  components: { Carousel },
  data: () => ({
    slides: [
      "../public/overwatch.jpeg",
      "../public/csgo.webp",
      "../public/hogwarts.jpeg",
      "../public/r6s.jpeg",
      "../public/rocket.jpeg",
      "../public/Valorant.webp",

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
