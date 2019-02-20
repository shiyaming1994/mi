import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/index/home'
import classification from '@/components/index/classification'
import user from '@/components/index/user'
import order from '@/components/order/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
