<script setup>
import Navbar from '../components/navbar.vue';
import { RouterLink, RouterView } from 'vue-router';
import Carousel from '../components/carousel.vue'
</script>

<template>
    <Carousel :slides="slides" :interval="6000" controls indicators></Carousel>
    <router-view />

</template>

<script>
export default {
    name: 'App',
    components: { Carousel },
    data: () => ({
        slides: [
            "/overwatch.jpeg",
            "/csgo.webp",
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