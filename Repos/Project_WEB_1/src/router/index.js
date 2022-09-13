import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'
import CarryVue from '../views/CarryVue.vue'
import Form from '../views/Form.vue'

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
    },
    {
      path: '/contact',
      name: 'contact',
      component: Form
    }
  ]
})

export default router
