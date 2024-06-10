import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: HomeView
    }
    // Example dynamic route
    // {
    //   path: '/another',
    //   name: 'another',
    //   component: () => import('@/views/AnotherView.vue')
    // }
  ]
})

export default router
