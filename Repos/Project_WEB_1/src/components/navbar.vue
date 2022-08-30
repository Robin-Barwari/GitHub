<template>
    <nav>
        <div class="menu-item"><a href="#">Home</a></div>
        <div class="menu-item"><a href="#">About</a></div>
        <Dropdown title="Games" :items="Games" />
        <div class="menu-item"><a href="#">Contact</a></div>
    </nav>
</template>
  
<script>
import Dropdown from './Dropdown.vue';
export default {
    name: 'navbar',
    components: {
        Dropdown
    },
    data() {
        return {
            Games: [
                {
                    title: 'R6S',
                    link: '#'
                },
                {
                    title: 'Overwatch',
                    link: '#'
                },
                {
                    title: 'Valorant',
                    link: '#'
                },
                {
                    title: 'Rocket League',
                    link: '#'
                },
                {
                    title: 'Hogwarts Legacy',
                    link: '#'
                },
                {
                    title: 'CS:GO',
                    link: '#'
                }
            ]
        }
    }
}
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