import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Agreement from './views/SalesAgreement.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: Agreement
    },
    {
      path: '/selling',
      name: 'selling',
      component: () => import('./views/Selling.vue')
    }
    ,
    {
      path: '/buying',
      name: 'buying',
      component: () => import('./views/Buying.vue')
    }
    ,
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: () => import('./views/HowItWorks.vue')
    }
  ]
})
