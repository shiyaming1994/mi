<template>
  	<div class="footer">
		<ul class="clearfix">
			<li>
				<router-link to='/index'>
					<i class="iconfont icon-shouye"></i>
					<span>首页</span>
				</router-link>
			</li>
			<li>
				<router-link to='/distinguish'>
					<i class="iconfont icon-fenlei"></i>
					<span>分类</span>
				</router-link>
			</li>
			<li class="cart">
				<router-link to='/shoppingCart'>
					<i class="iconfont icon-gouwuche1"></i>
					<span>购物车</span>
					<span class="cartnum" v-if="$store.getters.getAllCount != 0">{{ $store.getters.getAllCount }}</span>
				</router-link>
			</li>
			<li>
				<router-link to='/user'>
					<i class="iconfont icon-geren"></i>
					<span>个人</span>
				</router-link>
			</li>
		</ul>
  	</div>
</template>

<script>

</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border-top: 1px solid #ccc;
    z-index: 99;
}
ul li {
    float: left;
    width: 25%;
    height: 1rem;
    font-size: .2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
ul li a {
    display: block;
    color: #000;
}
ul li i {
    display: block;
    font-size: .4rem !important;
}
.router-link-active {
	color: skyblue;
}
.cart {
	position: relative;
}
.cartnum {
	position: absolute;
    min-width: .35rem;
    line-height: .35rem;
    height: .35rem;
    box-sizing: border-box;
    padding: 0 .05rem;
    font-size: .24rem;
    overflow: hidden;
    text-align: center;
    border-radius: .28rem;
    background: #ed4d41;
    color: #fff;
    top: 0;
    left: 50%;
    -webkit-transform: translate3d(.1rem,-20%,0);
    transform: translate3d(.1rem,-20%,0);
    font-style: normal;
}
</style>