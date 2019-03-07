<template>
	<div class="header">
		<header>
			<div>
				<div class="header-goback" @click="goBack">
					<i class="iconfont icon-return1"></i>
				</div>
			</div>
			<div class="header-title"><slot></slot></div>
			<div>
				<div class="header-search">
					<i class="iconfont icon-sousuo"></i>
				</div>
			</div>
		</header>
	</div>
</template>
<script>
export default {
	data(){
		return {
			url:this.$route.path
		}
	},
	created(){},
	methods:{
		goBack(){
            this.$router.go(-1)
        }
	}
}
</script>
<style scoped>
.header {
	position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0; 
}
header {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1rem;
    background: #f2f2f2;
    color: #666;
    padding: 0;
    -webkit-transition: -webkit-transform .2s ease-out;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out,-webkit-transform .2s ease-out;
}
header>div {
	display: -webkit-box;
    display: -webkit-flex;
    display: flex;
	justify-content: center;
	align-items: center; 
}
.header-goback, .header-search {
    width: 1rem;
    height: 1rem;
    display: flex;
	justify-content: center;
	align-items: center;
}  
.header-title {
	font-size: .35rem;
} 
.header i {
	font-size: .35rem;
}
</style>