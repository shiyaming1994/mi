import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/index/home'
import classification from '@/components/index/classification'
import user from '@/components/index/user'
import order from '@/components/order/order'
import details from '@/components/details/detailsInfo'
import buyInfo from '@/components/details/buyInfo'
import ShoppingCart from '@/components/Shopping/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: home
    },
    {
      path: '/home',
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
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    },
    { path: '/buyInfo/:id',name: 'buyInfo',component: buyInfo },
    { path: '/Shopping/ShoppingCart',name: 'ShoppingCart',component: ShoppingCart }
  ]
})
