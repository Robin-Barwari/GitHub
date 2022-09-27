<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <RouterView></RouterView>
  <Footer></Footer>
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
  padding: 10px;
  text-align: center;
  width: 100%;
  height: 50px;
  color: white;
}
</style>
