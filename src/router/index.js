import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { headerOffset, prefersReducedMotion } from '@/composables/navigation'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // Rotas antigas agora são seções da página única
    { path: '/about', redirect: { path: '/', hash: '#sobre' } },
    { path: '/techs', redirect: { path: '/', hash: '#stack' } },
    { path: '/contacs', redirect: { path: '/', hash: '#contato' } },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: headerOffset(), behavior: prefersReducedMotion() ? 'auto' : 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
