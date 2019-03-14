<template>
	<div class="user">
		<div class="header">
			<div class="header-img">
				<img src="" alt="">
			</div>
			<div class="header-name">154548787</div>
		</div>
		<router-link class="order" to="/user/order">
			<div class="my-order">我的订单</div>
			<div class="all-order">全部订单</div>
		</router-link>
		<ul class="state">
			<li>
				<i class="iconfont icon-gouwuche1"></i>
				<span>待付款</span>
			</li>
			<li>
				<i class="iconfont icon-wodeyouhuiquan"></i>
				<span>优惠劵</span>
			</li>
			<li>
				<i class="iconfont icon-collection_fill"></i>
				<span>收藏</span>
			</li>
		</ul>
		<ul class="items">
			<li>
				<i class="iconfont icon-jushoucang"></i>
				<div class="items-info">会员中心</div>
			</li>
			<router-link to="/address/addressList/user" tag="li">
				<i class="iconfont icon-shouhuodizhi"></i>
				<div class="items-info">收货地址</div>
			</router-link>
		</ul>
		<ul class="items">
			<router-link to="/user/xscroll" tag="li">
				<i class="iconfont icon-wodeyouhuiquan"></i>
				<div class="items-info">我的优惠</div>
			</router-link>
			<li>
				<i class="iconfont icon-wodefankui"></i>
				<div class="items-info">我的意见</div>
			</li>
		</ul>
		<ul class="items">
			<li>
				<i class="iconfont icon-shijian"></i>
				<div class="items-info">浏览记录</div>
			</li>
		</ul>
		<ul class="items">
			<li>
				<i class="iconfont icon-erweima"></i>
				<div class="items-info">我的名片</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data(){
		return {}
	},
	created(){
		// this.$store.commit('footerShow',true)
  //       this.$store.commit('headerShow',{header:false})
	},
	methods:{},
	computed:{},
	components:{

	}
}
</script>
<style scoped>
.user {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #f5f5f5;
}
.header {
    padding: .32rem 0;
    background-color: #f37d0f;
    display: flex;
    align-items: center;
}
.header-img {
	margin: 0 .16rem 0 .32rem;
    width: .96rem;
    height: .96rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid hsla(0,0%,100%,.4);
    text-align: center;
}
.header-name {
	color: #fff;
    font-size: .28rem;
    text-align: left;
}
.order {
	background-color: #fff;
    height: 1rem;
    border-bottom: 1px solid rgba(0,0,0,.15);
    color: rgba(0,0,0,.54);
    position: relative;
    padding-right: .56rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.my-order {
	font-size: .3rem;
    padding: 0 0 0 .32rem;
    color: rgba(0,0,0,.87);
}
.all-order {
	font-size: .24rem;
    color: rgba(0,0,0,.87);
}
.order::after {
	content: "";
    position: absolute;
    right: 5.12px;
    right: .32rem;
    top: 50%;
    width: 3.2px;
    width: .2rem;
    height: 3.2px;
    height: .2rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.state {
	padding: 0 .8rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.state li {
    text-align: center;
    padding: .5rem 0;
}
.state i, .state span {
	display: block;
}
.state i {
	font-size: .4rem;
}
.state span {
	font-size: .25rem;
}
.items {
	margin-top: .25rem;
	background-color: #fff;
}    
.items li {
	position: relative;
	padding-left: 1.12rem;
}
.items li>div { 
    height: 1.04rem;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: justify;
    -webkit-box-pack: justify;
    color: currentColor;
    border-bottom: 1px solid rgba(0,0,0,.15);
}
.items li:last-child>div {
	border-bottom: none;
}

.items li>div::after {
    content: "";
    position: absolute;
    right: 5.12px;
    right: .32rem;
    top: 50%;
    width: 3.2px;
    width: .2rem;
    height: 3.2px;
    height: .2rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.items i {
	position: absolute;
	top: 50%;
	margin-top: -.2rem;
	left: .35rem;
	font-size: .5rem;
	color: #ff6600;
}
</style>
