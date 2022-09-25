<script setup>
import Navbar from '../components/navbar.vue';
import { RouterLink, RouterView } from 'vue-router';
import Carousel from '../components/carousel.vue'
</script>

<template>
    <Carousel :slides="slides" :interval="6000" controls indicators></Carousel>
    <h1>Hard stuck on a rank?</h1>
    <div class="container">
        <img src="road_home.png" class="responsive-road">
        <p>
            We have a variety of player in different ranks that can help you rank up, <br>
            try our service today and wittness your rank go from wood III to diamond I
        </p>
    </div>

</template>

<script >
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

h1 {
    padding-top: 25px;
    text-align: center;
    font-weight: normal;
}

.container {
    display: flex;
    align-items: center;
}

.container img {
    width: 300px;
}
</style>