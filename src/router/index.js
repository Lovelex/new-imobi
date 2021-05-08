import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/main/Main'
import Admin from '@/views/admin/Admin'

import routesMain from './routesMain'
import routesAdmin from './routesAdmin'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main,
      children: routesMain
    },
    {
      path: '/admin',
      component: Admin,
      children: routesAdmin
    }
    
    
  ]
})

export default router
