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

</style>
