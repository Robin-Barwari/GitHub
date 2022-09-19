<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <div class="menu-item">
            <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="menu-item">
            <RouterLink to="/about">About</RouterLink>
        </div>
        <div class="menu-item">
            <RouterLink to="/carry">Carry</RouterLink>
        </div>
        <div class="menu-item">
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
    </nav>
</template>
  
<script>
</script>
  
<style>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item {
    color: rgb(255, 255, 255);
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
    background-color: #444;
    border-bottom-color: #FF5858;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}
</style>