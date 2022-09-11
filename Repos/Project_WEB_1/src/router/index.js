import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'
import CarryVue from '../views/CarryVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: "home",
      component: TheHome
    },
    {
      path: '/carry',
      name: 'carry',
      component: CarryVue
    }
  ]
})

export default router
