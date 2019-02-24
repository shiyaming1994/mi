<template>
  	<div>
		<ul class="clearfix">
			<li>
				<router-link to='/home'>
					<i class="iconfont icon-shouye"></i>
					<span>首页</span>
				</router-link>
			</li>
			<li>
				<router-link to='/classification'>
					<i class="iconfont icon-fenlei"></i>
					<span>分类</span>
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
	

	export default {
	  data () {
	    return {}
	  }
	}
</script>

<style scoped>
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
    width: 33.3%;
    height: 1.5rem;
    font-size: .3rem;
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