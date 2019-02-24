<template>
	<div>
		<input type="text" v-model="$store.state.count">

		<mt-button type="primary" @click="remove">-</mt-button>
		<mt-button type="primary" @click="add">+</mt-button>
		<mt-button type="primary" size="large">加入购物车</mt-button>
		<div>{{ $store.getters.optCount }}</div>
	</div>
</template>

<script>
export default {
	data(){
		return {}
	},
	methods: {
		add(){
			this.$store.commit("shoppingCartAdd")
		},
		remove(){
			this.$store.commit("shoppingCartRemove")
		}
	}
}
</script>