import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about', 
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/service',
      component: ()=> import ('@/views/ServicesView.vue')
    },
    {
      path: '/pricing',
      component: ()=> import ('@/views/PricingView.vue')
    },
    {
      path: '/contact',
      component: ()=> import ('@/views/ContactView.vue')
    }
  ]
})

export default router
