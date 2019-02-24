<template>
	<div>
		id:<span>{{ commodity.id }}</span><br>
		价格: <span>{{ commodity.price }}</span><br>
		数量:<input type="text" v-model="count"><br>
		<mt-button type="primary" @click="remove">-</mt-button>
		<mt-button type="primary" @click="add">+</mt-button>
		<mt-button type="primary" size="large" @click="addCart">加入购物车</mt-button>
		<div>购物车总数量{{ $store.getters.getAllCount }}</div>
		<mt-button type="primary" size="large" @click="goCart">前往购物车</mt-button>
	</div>
</template>

<script>
export default {
	data(){
		return {
			commodity:{
				id:1121,
				price:6999
			},
			goodsInfo:{},
			count:1
		}
	},
	methods: {
		add(){
			this.count++
		},
		remove(){
			this.count--
		},
		addCart(){
			let goodsInfo = {
				id: this.commodity.id,
				count:this.count,
				selected :true
			}
			this.$store.commit('addGoCart',goodsInfo)
		},
		goCart(){
			this.$router.push("/Shopping/ShoppingCart")
		}
	}
}
</script>