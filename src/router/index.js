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

import xscroll from '@/components/user/xscroll'

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
    {path: '/index',name: 'index',component: index,meta: { keepAlive: true,headerShow:false,footerShow:true }},
    // 分类
    {path: '/distinguish',name: 'distinguish',component: distinguish,meta: { keepAlive: true,headerShow:true,title:'分类',footerShow:true}},
    // 购物车
    {path: '/shoppingCart',name: 'shoppingCart',component: shoppingCart,meta: { keepAlive: false,headerShow:true,title:'购物车',footerShow:true }},
    // 个人
    {path: '/user',name: 'user',component: user,meta: { keepAlive: true,headerShow:false,footerShow:true }},
    // 商品详情
    {path: '/commodity/detail/:id',name: 'detail',component: detail,meta: { keepAlive: false,headerShow:false,footerShow:false }},
    // 提交订单
    {path: '/cart/submit',name: 'submit',component: submit,meta: { keepAlive: true,headerShow:true,title:'用户结算',footerShow:false }},
    // 我的订单
    {path: '/user/order',name: 'order',component: order,meta: { keepAlive: true,headerShow:true,title:'我的订单',footerShow:false }},
    // 收货地址列表
    {path: '/address/addressList/:type',name: 'addressList',component: addressList,meta: { keepAlive: false,headerShow:true,title:'收货地址',footerShow:false }},
    // 增加收货地址
    {path: '/address/addAddress',name: 'addAddress',component: addAddress,meta: { keepAlive: true,headerShow:true,title:'新增收货地址',footerShow:false }},
    // 修改收货地址
    {path: '/address/editAddress',name: 'editAddress',component: editAddress,meta: { keepAlive: true,headerShow:true,title:'编辑收获地址',footerShow:false }},
    // x轴滚动
    {path: '/user/xscroll',name: 'xscroll',component: xscroll}
  ]
})
