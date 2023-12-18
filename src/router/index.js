import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: ()=> import('@/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('@/views/ContactView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: ()=> import('@/views/PortfolioView.vue')
    },
    {
      path: '/skill',
      name: 'skill',
      component: ()=> import('@/views/SkillView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: ()=> import('@/views/ServicesView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: ()=> import('@/views/BlogView.vue')
    },
    
    
  ]
})

export default router
