<template>
	<div class="cart">
		<header-nav>购物车</header-nav>
		<div class="nologin">
			<a href="javascript:;">
				<span>登录后享受更多优惠</span>
				<em>去登录</em>
			</a>
		</div>
		<div class="noitems">
			<a href="javascript:;">
				<span data-v-5c6b2c62="">购物车还是空的</span>
				<em data-v-5c6b2c62="">去逛逛</em>
			</a>
		</div>
		<div class="recommend-top-img">
			<img src="http://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
		</div>
		<div class="goods clearfix">
  			<div class="goods-list" v-for="(item,index) in list">
  				<div class="goods-list-img">
  					<img :src="item.img" alt="">
  				</div>
  				<div class="goods-list-info">
  					<div class="goods-list-name">{{ item.name }}</div>
  					<div class="goods-list-content">{{ item.content }}</div>
  					<div class="goods-list-price">￥{{ item.price }}</div>
  				</div>
  			</div>
  		</div>
		<footer-nav></footer-nav>
	</div>
</template>
<script>
import headerNav from '../nav/headerNav'
import footerNav from '../nav/footerNav'
export default {
	data(){
		return {
			list:[]
		}
	},
	created(){
		this.getList()
	},
	methods:{
		getList(){
            this.$http.get("../../../static/homeGoods.json")
                .then(res=>{
                    this.list = res.data
                    console.log(this.list);
                }).catch(function(error){
                    console.log("error init."+error)
                })
        }
	},
	computed:{},
	components:{
		headerNav,
		footerNav
	}
}
</script>
<style scoped>
.cart {
	padding-top: 1rem;
}
.nologin>a {
	height: 1.3rem;
    padding: 0 .56rem 0 .32rem;
    position: relative;
    color: rgba(0,0,0,.54);
    display: flex;
	align-items: center;
    justify-content: space-between;
  }
.nologin span {
    font-size: .35rem;
    color: rgba(0,0,0,.87);
    display: block;
    text-align: left;
    float: left;
}
.nologin em {
    font-style: normal;
    font-size: .28rem;
    text-align: right;
    float: right;
}
.nologin>a::after {
    content: "";
    position: absolute;
    right: 5.12px;
    right: .32rem;
    top: 50%;
    width: 2.88px;
    width: .18rem;
    height: 2.88px;
    height: .18rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.noitems {
	background: #ebebeb;
    padding: .2rem;
}
.noitems>a {
    height: 1rem;
    font-size: .3rem;
    text-decoration: none;
    text-align: center;
    display: flex;
	justify-content: center;
	align-items: center;
}
.noitems>a span {
    display: inline-block;
    line-height: .8rem;
    background-size: auto 100%;
    /* padding: 0 .16rem 0 .96rem; */
    color: rgba(0,0,0,.27);
}
.noitems>a em {
    display: inline-block;
    border: 1px solid rgba(0,0,0,.15);
    box-sizing: border-box;
    height: .5rem;
    line-height: .5rem;
    padding: 0 .24rem;
    color: rgba(0,0,0,.87);
    font-style: normal;
    margin-left: .2rem;
}
.recommend-top-img img {
	width: 100%;
	display: block;
}
.goods {
	font-size: .3rem;
}
.goods-list {
	width: 3.7rem;
	float: left;
}
.goods-list:nth-child(2n) {
	margin-left: .1rem
}
.goods-list-img {
	width: 3.7rem;
	height: 3.7rem;
}
.goods-list-img img {
	display: block;
	width: 100%;
}
.goods-list-info {
	padding: .2rem;
	text-align: left;
}
.goods-list-name {
	font-size: .35rem;
    color: rgba(0,0,0,.87);
}
.goods-list-content {
	margin-top: .06rem;
    font-size: .25rem;
    line-height: .3rem;
    color: rgba(0,0,0,.54);
}
.goods-list-price {
	font-size: .3rem;
    color: #ea625b;
    height: 1.5em;
    line-height: 1.5em;
}
</style>