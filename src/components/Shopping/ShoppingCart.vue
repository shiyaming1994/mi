<template>
	<div>
		<h3>购物车</h3>
		<div v-for="(item,index) in goodsList">
			{{ item.id }}:{{ item.count }} <span @click="remove">删除</span>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			goodsList:[]
		}
	},
	created(){
		this.getGoods()
	},
	methods:{
		getGoods(){
			let idAll = []
			this.$store.state.car.forEach(item => idAll.push(item.id))
			if(idAll.length <= 0) return
			this.goodsList = this.$store.state.car
		},
		remove(id,index){
			this.goodsList.splice(index,1)
			this.$store.commit('removeGoods',id)
		}
	}
}
</script>