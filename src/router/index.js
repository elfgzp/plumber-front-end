import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home')
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: () => import('@/pages/dashboard'),
      children: [{
        name: 'team',
        path: '/teams',
        component: () => import('@/pages/team'),
      }]
    }
  ]
})
