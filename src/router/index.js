import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import TechView from '@/views/TechView.vue'
import SolutionsView from '@/views/SolutionsView.vue'
import ContatsView from '@/views/ContatsView.vue'
import BudgetView from '@/views/BudgetView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
      name: 'sobre',
      component: AboutView
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: SolutionsView
    },
    {
      path: '/budget',
      name: 'budget',
      component: BudgetView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView
    }
  ]
})

export default router
