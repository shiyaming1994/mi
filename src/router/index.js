import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import distinguish from '@/components/distinguish/distinguish'
import shoppingCart from '@/components/cart/shoppingCart'
import user from '@/components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/index'},
    {path: '/index',name: 'index',component: index},
    {path: '/distinguish',name: 'distinguish',component: distinguish},
    {path: '/shoppingCart',name: 'shoppingCart',component: shoppingCart},
    {path: '/user',name: 'user',component: user}
  ]
})
