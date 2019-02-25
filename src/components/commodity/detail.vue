<template>
	<div>
		<swiper :rotationChart="rotationChart"></swiper>
		<div class="overview-goods-name">
			<div class="goods-name">小米8 屏幕指纹版</div>
		</div>
		<div class="section-detail">
			<div class="goods-brief">全球首款压感屏幕指纹，快速解锁 / 骁龙845处理器，全面提升游戏性能表现 / 四曲面渐变镜面机身，轻薄圆润 / 960帧超慢动作 / 手持超级夜景</div>
		</div>
		<div class="goods-price">￥2899</div>
		<div class="product-info">
			<div class="product-info-list">
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
	</div>
</template>
<script>
import swiper from '../swiper/swiper'
export default {
	data(){
		return {
			rotationChart:[]
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
                			this.rotationChart = item.imgList
                		}
                	})
                }).catch(function(error){
                    console.log("error init."+error)
                })
        },
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
</style>