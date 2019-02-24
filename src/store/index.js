import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 5
	},
	mutations: {
		shoppingCartAdd(state){
			state.count++
		},
		shoppingCartRemove(state){
			state.count--
		}
	},
	getters: {
		optCount:function(state){
			return '当前值：' + state.count
		}
	}
})