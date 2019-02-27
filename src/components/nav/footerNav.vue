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
			<li>
				<router-link to='/shoppingCart'>
					<i class="iconfont icon-gouwuche1"></i>
					<span>购物车</span>
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
	padding-bottom: 1rem;
}
ul {
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
</style>