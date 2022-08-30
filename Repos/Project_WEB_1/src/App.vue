<script setup>
import Navbar from './components/Navbar.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Navbar />
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    };
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
  background-color: rgb(240, 130, 45);
}

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}
</style>
