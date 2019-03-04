<template>
	<div>
		<div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='100'>
          <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
          <input class="mui-numbox-input" type="number" @change="countChange" ref="numbox"/>
          <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
        </div>
	</div>
</template>
<script>
import mui from '../../../static/mui/dist/js/mui.min.js'
export default {
	data(){
		return {}
	},
	mounted(){
        mui('.mui-numbox').numbox()
    },
	methods:{
		countChange(){
			this.$emit("getCount",parseInt(this.$refs.numbox.value))
		}
	}
}
</script>
<style scoped>

</style>