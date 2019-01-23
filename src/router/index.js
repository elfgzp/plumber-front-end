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
      path: '/users/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/users/signUp',
      name: 'signUp',
      component: () => import('@/pages/login')
    }
  ]
})
