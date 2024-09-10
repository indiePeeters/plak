import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const ROUTES = {
  home: 'home',
  project: 'project'
} 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.home,
      component: HomeView
    },
  ]
})

export default router
