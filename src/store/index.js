import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

export default new Vuex.Store({
	state: {
		car:car
	},
	mutations: {
		// shoppingCartAdd(state){
		// 	state.count++
		// },
		// shoppingCartRemove(state){
		// 	state.count--
		// },
		addGoCart(state,goodsInfo){
			let flag = true
			// 判断购物车有没有相同数据
			state.car.some(item => {
				if(item.id == goodsInfo.id){
					item.count += parseInt(goodsInfo.count)
					flag = false
					return true
				}
			})
			if(flag){
				state.car.push(goodsInfo)
			}
			localStorage.setItem('car',JSON.stringify(state.car))
		},
		// 删除
		removeGoods(state,id){
			state.car.some((item,i) => {
				if(item.id == id){
					state.car.splice(i,1)
					return true
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car))
		}
	},
	getters: {
		getAllCount(state){
			let count = 0
			state.car.forEach(item => {
				count += item.count
			})
			return count
		},
		getGoodsCount(state){
			let goodsCount = {}
			state.car.forEach(item => {
				goodsCount[item.id] = item.count
			})
			return goodsCount
		}
	}
})