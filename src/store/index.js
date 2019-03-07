import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'mint-ui';
import address from '../../static/address.json'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')
var order = JSON.parse(localStorage.getItem('order') || '[]')

export default new Vuex.Store({
	state: {
		car:car,
		address:address,
		order:order,
		footerShow:false,
		headerShow:false,
		headerTitle:''
	},
	mutations: {
		// shoppingCartAdd(state){
		// 	state.count++
		// },
		// shoppingCartRemove(state){
		// 	state.count--
		// },
		// 顶部显示
		headerShow(state,status){
			state.headerShow = status.header
			state.headerTitle = status.slot
		},
		// 底部显示
		footerShow(state,status){
			state.footerShow = status
		},
		// 加入购物车
		addGoCart(state,buyGoodsInfo){
			let flag = true
			// 判断购物车有没有相同数据
			state.car.some(item => {
				if(item.id == buyGoodsInfo.id){
					item.count += parseInt(buyGoodsInfo.count)
					flag = false
					return true
				}
			})
			if(flag){
				state.car.push(buyGoodsInfo)
			}
			Toast({
			  message: '添加成功',
			  iconClass: 'mui-icon mui-icon-checkmarkempty',
			  duration: 1000
			});
			localStorage.setItem('car',JSON.stringify(state.car))
		},

		// 删除
		removeGoods(state,id){
			state.car.forEach((item,i) => {
				id.forEach(items => {
					if(item.id == items){
						state.car.splice(i,id.length)
						return true
					}
				})
			})
			localStorage.setItem('car',JSON.stringify(state.car))
		},
		// 修改购物车数量
		cartCount(state,goodsInfo){
			state.car.some(item => {
				if(item.id == goodsInfo.id){
					item.count = parseInt(goodsInfo.count) 
					return true
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car))
		},
		// 增加收货地址
		addAddress(state,addressInfo){
			state.address.forEach(item => {
				if(addressInfo.checked == true){
					item.checked = false
				}
			})
			state.address.push(addressInfo)
			Toast({
			  	message: '添加成功',
			  	iconClass: 'mui-icon mui-icon-checkmarkempty',
			  	duration: 1000
			})
		},
		// 修改收货地址
		editAddress(state,addressInfo){
			state.address.some(item => {
				if(item.id == addressInfo.id){
					if(addressInfo.checked == true){
						state.address.forEach(items => {
							items.checked = false
						})
						item = addressInfo
						item.checked = true	
					}
				}
			})
			Toast({
			  	message: '修改成功',
			  	iconClass: 'mui-icon mui-icon-checkmarkempty',
			  	duration: 1000
			})
		},
		// 删除收货地址
		removeAddress(state,id){
			state.address.some((item,i) => {
				if(item.id == id){
					state.address.splice(i,1)
					return true
				}
			})
		},
		// 生成订单
		addOrder(state,order){
			state.order.unshift(order)
			localStorage.setItem('order',JSON.stringify(state.order))
		},
		// 付款
		buy(state,order){
			state.order.some((item) => {
				if(item.id == order.time){
					item = order
					return true
				}
			})
			localStorage.setItem('order',JSON.stringify(state.order))
		}
	},
	getters: {
		getAllCount(state){
			let count = 0
			state.car.forEach(item => {
				count += parseInt(item.count)
			})
			return count
		},
		getGoodsCount(state){
			let goodsCount = {}
			state.car.forEach(item => {
				goodsCount[item.id] = item.count
			})
			return goodsCount
		},
		getGoodsPrice(state){
			let price = 0
			state.car.forEach(item => {
				price += item.price * item.count
			})
			return price
		},
		footer(state){
			return state.footerShow
		},
		header(state){
			return state.headerShow
		},
		headerTitle(state){
			return state.headerTitle
		}
	}
})