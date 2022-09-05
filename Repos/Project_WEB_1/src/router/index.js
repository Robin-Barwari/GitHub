import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'
import CarryVue from '../views/CarryVue.vue'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "home",
      component: TheHome
    },
    {
      path: '/CarryVue',
      name: "carry",
      component: CarryVue
    },
  ]
})

// export default router
