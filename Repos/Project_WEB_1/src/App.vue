<template>
  <div>
    <header>
      <Navbar />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </header>
  </div>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar';
export default {
  name: 'app',
  components: {
    Navbar
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
}

header {
  width: 100vw;
  background-color: #2222;
  padding: 15px;
}
</style>
