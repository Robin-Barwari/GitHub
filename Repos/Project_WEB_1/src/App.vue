<script setup>
import Navbar from './components/Navbar.vue';
import TheHome from './views/TheHome.vue';
</script>

<template>
  <Navbar />
  <RouterView></RouterView>
  <footer>
    <p>{{ footerText}}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerText: 'Random text for footer yes, no, maybe'
    }
  }
};
</script>

<style>
footer {
  background-color: rgb(0, 0, 0);
  padding: 10.5px;
  text-align: center;
  width: 100%;
  height: 50px;
  color: white;
}
</style>
