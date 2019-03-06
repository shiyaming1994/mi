import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import distinguish from '@/components/distinguish/distinguish'
import shoppingCart from '@/components/cart/shoppingCart'
import user from '@/components/user/user'
import detail from '@/components/commodity/detail'
import submit from '@/components/cart/submit'
import order from '@/components/user/order'
import addressList from '@/components/address/addressList'
import addAddress from '@/components/address/addAddress'
import editAddress from '@/components/address/editAddress'

Vue.use(Router)

export default new Router({
	mode: 'hash',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {path: '/',redirect: '/index'},
    // 首页
    {path: '/index',name: 'index',component: index},
    // 分类
    {path: '/distinguish',name: 'distinguish',component: distinguish},
    // 购物车
    {path: '/shoppingCart',name: 'shoppingCart',component: shoppingCart},
    // 个人
    {path: '/user',name: 'user',component: user},
    // 商品详情
    {path: '/commodity/detail/:id',name: 'detail',component: detail},
    // 提交订单
    {path: '/cart/submit',name: 'submit',component: submit},
    // 我的订单
    {path: '/user/order',name: 'order',component: order},
    // 收货地址列表
    {path: '/address/addressList/:type',name: 'addressList',component: addressList},
    // 增加收货地址
    {path: '/address/addAddress',name: 'addAddress',component: addAddress},
    // 修改收货地址
    {path: '/address/editAddress',name: 'editAddress',component: editAddress}
  ]
})
