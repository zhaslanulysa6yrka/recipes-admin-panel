import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATHS } from '@/constants'
import CategoriesPage from '@/pages/CategoriesPage.vue'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATHS.HOME,
      name: 'home',
      component: HomePage,
    },
    {
      path: ROUTER_PATHS.CATEGORIES,
      name: 'categories',
      component: CategoriesPage,
    },
  ],
})

export default router
