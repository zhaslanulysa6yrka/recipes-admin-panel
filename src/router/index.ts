import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATHS } from '@/constants'
import { HomePage, CategoriesPage, RecipePage } from '@/pages'

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
    {
      path: ROUTER_PATHS.RECIPE,
      name: 'recipe',
      component: RecipePage,
    },
  ],
})

export default router
