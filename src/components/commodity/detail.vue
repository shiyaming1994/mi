<template>
	<div>
		<swiper :rotationChart="rotationChart"></swiper>
		<div class="overview-goods-name">
			<div class="goods-name">{{ goodsInfo.name }}</div>
		</div>
		<div class="section-detail">
			<div class="goods-brief">全球首款压感屏幕指纹，快速解锁 / 骁龙845处理器，全面提升游戏性能表现 / 四曲面渐变镜面机身，轻薄圆润 / 960帧超慢动作 / 手持超级夜景</div>
		</div>
		<div class="goods-price">￥{{ goodsInfo.price }}</div>
		<div class="product-info">
			<div class="product-info-list" @click="getByInfo">
				<span class="product-info-list-name">已选</span>
				<div class="product-info-list-section">小米8 屏幕指纹版 8GB+128GB 透明 x 1</div>
			</div>
			<div class="product-info-list">
				<span class="product-info-list-name">送至</span>
				<div class="product-info-list-section">北京</div>
			</div>
		</div>
		<div class="product-img">
			<img src="//i8.mifile.cn/v1/a1/84269c10-cf27-5c8c-6ad8-338ae645fb6d.webp?w=1080&h=1816&bg=2C213C" alt="">
			<img src="//i8.mifile.cn/v1/a1/de2e8c3a-cf2f-60d8-f4c4-8437c9920685.webp?w=1080&h=829&bg=0D0E11" alt="">
		</div>
		<div :class="{ show: byInfo }" class="buy-info-box">
			<div class="buy-info" :class="{ 'by-animation': byInfo }">
				<div class="buy-info-guanbi">
					<i class="iconfont icon-cuowu" @click="byInfoHide"></i>
				</div>
				<div class="buy-info-goods">
					<div class="buy-info-goods-img">
						<img src="" alt="">
					</div>
					<div class="buy-info-goods-content">
						<div class="buy-info-goods-content-price">￥555</div>
						<div class="buy-info-goods-content-name">小米</div>
					</div>
				</div>
				<div class="buy-option-info">
					<div class="option-title">版本</div>
					<div class="options-group">
						<div class="option-item">
							<p>6GB+128GB</p>
							<p>2499元</p>
						</div>
						<div class="option-item">
							<p>8GB+128GB</p>
							<p>3499元</p>
						</div>
					</div>
					<div class="option-title">颜色</div>
					<div class="options-group">
						<div class="options-item-color">
							<p>白色</p>
							<p>黑色</p>
						</div>
					</div>
					<div class="option-count">
						<div class="option-count-title">购买数量</div>
					  	<div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='10'>
					  	  <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
					  	  <input class="mui-numbox-input" type="number" />
					  	  <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
					  	</div>
					</div>
				</div>
				<div class="buy-btn">加入购物车</div>
			</div>
		</div>
	</div>
</template>
<script>
import swiper from '../swiper/swiper'

export default {
	data(){
		return {
			goodsInfo:[],
			rotationChart:[],
			byInfo:false
		}
	},
	created(){
		this.getList()
	},
	methods:{
		getList(){
            this.$http.get("../../../static/homeGoods.json")
                .then(res=>{
                	let id = this.$route.params.id 
                	res.data.some(item => {
                		if(item.id == id){
                			this.goodsInfo = item
                			this.rotationChart = item.imgList
                			console.log(this.goodsInfo);
                		}
                	})
                }).catch(function(error){
                    console.log("error init."+error)
                })
        },
        getByInfo(){
        	this.byInfo = true
        },
        byInfoHide(){
        	this.byInfo = false
        }
	},
	computed:{},
	components:{
		swiper
	}
}
</script>
<style scoped>
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
	z-index: 100;
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
    z-index: 1100;
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
    border: 1px solid transparent;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    align-items: center;
}
.option-item::before {
    border-color: rgba(0,0,0,.15);
    border-radius: 2px;
}
.option-item::before {
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
}
.options-item-color>p::before {
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
}
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
.by-animation {
	animation:move 1s forwards;
}
@keyframes move{
	from {bottom:-9rem;}
	to{bottom:0rem;}
}
</style>