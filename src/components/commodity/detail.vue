<template>
	<div>
		<div class="swiper">
			<swiper :rotationChart="rotationChart"></swiper>
		</div>
		<div class="header-btn" @click="goBack">
			<i class="iconfont icon-return1"></i>
		</div>
		<div class="overview-goods-name">
			<div class="goods-name">{{ goodsName }}</div>
		</div>
		<div class="section-detail">
			<div class="goods-brief">{{ goodsInfo.info }}</div>
		</div>
		<div class="goods-price">￥{{ goodsInfo.price }}</div>
		<div class="product-info">
			<div class="product-info-list" @click="getByInfo">
				<span class="product-info-list-name">已选</span>
				<div class="product-info-list-section">{{ goodsName }} {{Memory}}  x {{count}}</div>
			</div>
			<div class="product-info-list">
				<span class="product-info-list-name">送至</span>
				<div class="product-info-list-section">北京</div>
			</div>
		</div>
		<div class="product-img">
			<img :src="item.img" v-for="(item,index) in goodsInfo.info_img">
		</div>
		<div :class="{ 'show': byInfo }" class="buy-info-box"></div>
		<div :class='{"by-animation-hide":infoShow,"by-animation-show":byInfo}' class="buy-info">
			<div class="buy-info-guanbi">
				<i class="iconfont icon-cuowu" @click="byInfoHide"></i>
			</div>
			<div class="buy-info-goods">
				<div class="buy-info-goods-img">
					<img :src="Memory_img" alt="">
				</div>
				<div class="buy-info-goods-content">
					<div class="buy-info-goods-content-price">￥{{ edition_price }}</div>
					<div class="buy-info-goods-content-name">{{ goodsInfo.name }}  {{ Memory }} {{ color_list }}</div>
				</div>
			</div>
			<div class="buy-option-info">
				<div class="option-title">版本</div>
				<div class="options-group">
					<div class="option-item" v-for="(item,index) in goodsInfo.edition" :key="item.Memory" :class="{active : Memory == item.Memory}" @click="selected(item.Memory,item.edition_price)">
						<p>{{ item.Memory }}</p>
						<p>{{ item.edition_price }}元</p>
					</div>
				</div>
				<div class="option-title">颜色</div>
				<div class="options-group">
					<div class="options-item-color">
						<p v-for="(item,index) in editionColor" :key="item.color_list" :class="{active : color_list == item.color_list}" @click="selected_color(item.color_list)">{{ item.color_list }}</p>
					</div>
				</div>
				<div class="option-count">
					<div class="option-count-title">购买数量</div>
				  	<num-box @getCount="getCount"></num-box>
				</div>
			</div>
			<div class="buy-btn" @click="addCart">加入购物车</div>
		</div>
		<div class="btn-show-buy">
			<router-link class="btn-show-buy-left left" to='/index'>
				<i class="iconfont icon-shouye"></i>
				<span>首页</span>
			</router-link>
			<div class="btn-show-buy-left left" @click="goCart">
				<i class="iconfont icon-gouwuche1"></i>
				<span>购物车</span>
				<span class="cartnum" v-if="$store.getters.getAllCount != 0">{{ $store.getters.getAllCount }}</span>
			</div>
			<div class="btn-show-buy-right-box">
				<div class="btn-show-buy-right right" @click="getByInfo">加入购物车</div>
			</div>
		</div>
	</div>
</template>
<script>
import swiper from '../swiper/swiper'
import numBox from '../cart/numBox'
import mui from '../../../static/mui/dist/js/mui.min.js'
export default {
	data(){
		return {
			id:this.$route.params.id,
			// 商品内容
			goodsInfo:[],
			// 轮播图
			rotationChart:[],
			// 是否显示购物车
			byInfo:false,
			// 滑动显示
			infoShow:false,
			// 名称
			goodsName:'',
			// 版本详情
			editionList:[],
			// 版本颜色
			editionColor:[],
			// 版本
			Memory:'',
			// 颜色
			color_list:'',
			// 版本img
			Memory_img:'',
			// 价格
			edition_price:'',
			// 加入购物车
			buyGoodsInfo:[],
			// 数量
			count:1
		}
	},
	created(){
		this.getList()
	},
	methods:{
		getList(){
            this.$http.get("https://shiyaming1994.github.io/mi/static/homeGoods.json")
                .then(res=>{
                	let id = this.$route.params.id 
                	res.data.some(item => {
                		if(item.id == id){
                			this.goodsInfo = item
                			this.goodsName = item.name
                			this.rotationChart = item.imgList
                			this.editionList = item.edition
                			this.Memory = this.editionList[0].Memory
                			this.edition_price = this.editionList[0].edition_price
                			this.editionColor = this.editionList[0].color
                			this.color_list = this.editionList[0].color[0].color_list
                			this.Memory_img = this.editionList[0].color[0].img
                			// this.Memory = item.edition[0].Memory
                			// this.edition_price = item.edition[0].edition_price
                			// this.edition_price = item.edition[0].color.color_list
                			// console.log(this.editionList);
                		}
                	})
                }).catch(function(error){
                    console.log("error init."+error)
                })
        },
        // 弹框显示
        getByInfo(){
        	this.byInfo = true
        	this.infoShow = false
        },
        // 弹框消失
        byInfoHide(){
        	this.infoShow = true
        	this.byInfo = false
        },
        // 选择版本
        selected(Memory,edition_price){
   			this.Memory = Memory;
   			this.edition_price = edition_price;
   			this.editionList.some(item => {
				if(item.Memory == this.Memory){
					this.editionColor = item.color
					this.color_list = item.color[0].color_list
					this.Memory_img = item.color[0].img
					return true
				}
			})
		},
		// 选择颜色
		selected_color(color_list){
			this.color_list = color_list;
			
			this.editionColor.some(item => {
				if(item.color_list == this.color_list){
					this.Memory_img = item.img
					return true
				}
			})
		},
		// 加入购物车（id，版本颜色,数量）
		addCart(){
			var buyGoodsInfo = {
				id:this.id,
				count:this.count,
				Memory:this.Memory,
				color:this.color_list,
				price:this.edition_price,
				img:this.Memory_img,
				name:this.goodsName
			}
			this.$store.commit('addGoCart',buyGoodsInfo)
			this.byInfoHide()
		},
		// 去购物车
		goCart(){
			this.$router.push("/shoppingCart")
		},
		getCount(count){
			this.count = count
		},
		goBack(){
            this.$router.go(-1)
        }
		
	},
	computed:{},
	components:{
		swiper,
		numBox
	}
}
</script>
<style scoped>
.active {
	color: #f56600;
	border: 1px solid #f56600 !important;
}
.active p {
	color: #f56600;
}
.mui-icon-checkmarkempty {
	font-size: .5rem;
}
.swiper {
  height: 8.25rem;
}
.header-btn {
	position: absolute;
	top: .3rem;
	left: .2rem;
	display: block;
    width: .6rem;
    height: .6rem;
    margin: 0 .2rem;
    color: #ddd;
    background: rgba(0,0,0,.6);
    border-radius: 50%;
    z-index: 999;
}
.header-btn i {
	font-size: .5rem;
	line-height: .6rem;
}
.buy-info-goods-img img {
	width: 100%;
	height: 100%;
}
.btn-show-buy {
	position: fixed;
	bottom: .3rem;
	left: .25rem;
	right: .25rem;
	width: 7rem;
    height: 1rem;
    border: 1px solid #e5e5e5;
    border-radius: .16rem;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
    display: flex;
	align-items: center;
}
.btn-show-buy-left i {
	display: block;
	font-size: .4rem;
}
.btn-show-buy-left span {
	display: block;
	font-size: .25rem;
}
.btn-show-buy-left {
	margin-left: .3rem;	
	text-align: center;
	position: relative;
}
.cartnum {
	position: absolute;
    min-width: .3rem;
    line-height: .3rem;
    height: .3rem;
    box-sizing: border-box;
    padding: 0 .05rem;
    font-size: .2rem;
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
.btn-show-buy-right-box {
	text-align: right;
	flex-grow: 2;
}
.btn-show-buy-right {
	background-color: #f56600;
	border-radius: .3rem;
	overflow: hidden;
	color: #fff;
	height: .7rem;
	line-height: .7rem;
	text-align: center;
	width: 3rem;
	margin-right: .3rem;
}
.goods-name {
	font-size: .5rem;
	padding: .32rem .32rem 0;
	background: #fff;
    text-align: left;
    line-height: 1.5em;
}
.section-detail {
	padding: 0 .32rem;
	background: #fff;
    text-align: left;
}
.goods-brief {
	line-height: 1.5em;
    word-break: break-all;
    color: rgba(0,0,0,.54);
    font-size: .26rem;
}
.goods-price {
	padding: .2rem .32rem 0;
	color: #ff6700;
    font-size: .48rem;
}
.product-info {
	background-color: #fafafa;
    border-radius: .16rem;
    overflow: hidden;
    margin: .16rem .32rem 0;
    font-size: .26rem;
}
.product-info-list {
	display: flex;
	align-items: center;
	padding: .24rem .32rem;
	position: relative;
}
.product-info-list::after {
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
.product-info-list::before {
    height: 1px;
    content: "";
    width: 100%;
    border-top: 1px solid #999;
    position: absolute;
    top: 100%;
    right: 0;
    transform: scaleY(.5);
    -webkit-transform: scaleY(.5);
}
.product-info-list-name {
	color: rgba(0,0,0,.54);
    margin-right: .35rem;
    min-width: .5rem;
}
.product-img {
	margin-top: 1rem;
}
.product-img img {
	display: block;
	width: 100%;
}  
.buy-info-box {
	display: none;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	background-color: rgba(0, 0, 0, .8);
	z-index: 99;
}
.buy-info {
	position: fixed;
	bottom: -9rem;
	left: 0;
	right: 0;
	height: 9rem;
	background-color: #fff;
	border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
    z-index: 100;
    padding: 0 .32rem 1.27rem;
    font-size: .25rem;
} 
.buy-info-goods {
	padding: .2rem 0 .2rem;
	display: flex;
	justify-content: center;  /*水平居中*/
	align-items: center;  /*垂直居中*/
}
.buy-info-goods-img {
	position: relative;
	width: 2rem;
    height: 2rem;
    text-align: center;
    background: #fff;
    overflow: hidden;
}
.buy-info-goods-content {
	position: relative;
    width: 4.5rem;
    margin: .32rem .16rem;
    text-align: left;
}
.buy-info-goods-img::before {
    content: "";
    pointer-events: none;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
    border: 1px solid #999;
    -webkit-transform: scale(1);
    -webkit-transform-origin: 0 0;
    transform: scale(1);
    transform-origin: 0 0;
}
.buy-info-goods-content-price {
	font-size: .5rem;
}
.buy-info-goods-content-name {
	font-size: .3rem;
    color: rgba(0,0,0,.87);
    line-height: .4rem;
    margin-top: .5em;
}
.option-title {
	position: relative;
    padding-top: .32rem;
    padding-bottom: .16rem;
    line-height: .24rem;
    font-size: .24rem;
    color: rgba(0,0,0,.87);
}
.option-item {
	position: relative;
    padding: .24rem .32rem !important;
    height: .72rem;
    line-height: .72rem;
    min-width: 1.45rem;
    box-sizing: border-box;
    padding: 0 .08rem;
    text-align: center;
    margin: .16rem 0 0 0;
    overflow: visible;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #999;
    box-sizing : border-box;
}
.option-item::before {
    border-color: rgba(0,0,0,.15);
    border-radius: 2px;
}
/* .option-item::before {
    content: "";
    pointer-events: none;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
    -webkit-transform: scale(1);
    -webkit-transform-origin: 0 0;
    transform: scale(1);
    transform-origin: 0 0;
} */
.options-item-color {
	position: relative;
    padding: .24rem .32rem !important;
    min-width: 1.45rem;
    box-sizing: border-box;
    padding: 0 .08rem;
    overflow: visible;
    border: 1px solid transparent;
}
.options-item-color>p {
	position: relative;
	display: inline-block;
	height: .72rem;
    line-height: .72rem;
    text-align: center;
    padding: 0 .3rem;
    margin-right: .16rem;
    border: 1px solid #999;
    box-sizing : border-box;
}
/* .options-item-color>p::before {
    border-color: rgba(0,0,0,.15);
    border-radius: 2px;
}
.options-item-color>p::before {
    content: "";
    pointer-events: none;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
    border: 1px solid #999;
    -webkit-transform: scale(1);
    -webkit-transform-origin: 0 0;
    transform: scale(1);
    transform-origin: 0 0;
} */
.option-count {
	display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    align-items: center;
    margin-top: .5rem;
}
.buy-option-info {
	overflow: scroll;
	height: 5rem;
	padding-bottom: .5rem;
}
.buy-btn {
    height: .64rem;
    line-height: .64rem;
    border-radius: .4rem;
    background: #ff6700;
    color: #fff;
    display: block;
    text-align: center;
    width: 100%;
    font-size: .28rem;
}
.buy-info-guanbi {
	margin-top: .3rem;
	text-align: right;
}
.show {
	display: block;
}
.by-animation-show {
	animation:moveShow .5s forwards;
}
@keyframes moveShow {
	from {bottom:-9rem;}
	to{bottom:0rem;}
}
.by-animation-hide {
	animation:moveHide .5s forwards;
}
@keyframes moveHide {
	from {bottom:0rem;}
	to{bottom:-9rem;}
}
.btn-show-buy {
    animation:btnShow .35s forwards;
}
@keyframes btnShow {
    from {bottom: -1rem;}
    to{bottom: .3rem;}
}
</style>