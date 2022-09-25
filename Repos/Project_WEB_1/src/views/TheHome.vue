<script setup>
import Navbar from '../components/navbar.vue';
import { RouterLink, RouterView } from 'vue-router';
import Carousel from '../components/carousel.vue'
</script>

<template>
    <Carousel :slides="slides" :interval="6000" controls indicators></Carousel>
    <h1>Hard stuck on a rank?</h1>
    <div class="container">
        <img src="road_home.png">
        <p>
            We have a variety of player in different ranks that can help you rank up. <br>
            Try our service today and wittness your rank go from Wood III to Diamond I
        </p>
    </div>

    <h1>2 Good 2 be carried?</h1>
    <div class="container">
        <img src="tachank_home.png">
        <p>
            With our services you can not only search for someone to carry you <br>
            but you can also help carry others to thier desired rank
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
    color: white;
}

.container {
    display: flex;
    align-items: center;
}

p {
    color: rgb(220, 220, 220);
}



@media screen and (min-width: 601px) {
    h1 {
        padding-top: 25px;
        text-align: center;
        font-weight: normal;
    }

    .container img {
        width: 300px;
    }


    .container p {
        font-size: 20px;
        padding-left: 20px;
        padding-right: 10px;
        font-weight: bold;
    }
}

@media screen and (max-width: 600px) {
    h1 {
        text-align: center;
        font-weight: normal;
    }

    .container img {
        width: 150px;
    }

    .container p {
        font-size: 15px;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: 540;
    }
}
</style>