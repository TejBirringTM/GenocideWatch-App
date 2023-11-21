import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/:genocideContext',
      name: 'genocide-context',
      component: ()=>import("../views/GenocideContextView.vue"),
      props: true
    },
    {
      path: '/sources',
      name: 'sources',
      component: ()=>import("../views/SourcesView.vue"),
    }
  ]
})

export default router
