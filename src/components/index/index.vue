<template>
	<div class="index">
		<div class="header">
  			<div class="user"></div>
  			<div class="search">
  				<div class="search-inp">
  					<i class="iconfont icon-sousuo"></i>
  				</div>
  			</div>
  		</div>
      <div class="swiper">
        <swiper :rotationChart="rotationChart"></swiper>
      </div>
		<div class="index-nav-list">
			<ul class="clearfix">
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-wodeyouhuiquan"></i>
						<span>icon1</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-wodefankui"></i>
						<span>icon2</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-jushoucang"></i>
						<span>icon3</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-erweima"></i>
						<span>icon4</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<i class="iconfont icon-createtask"></i>
						<span>icon5</span>
					</a>
				</li>
			</ul>
  		</div>
  		<div class="line"></div>
  		<div class="goods clearfix">

        <mt-loadmore ref="loadmore">
            <ul>
                <router-link tag="li" class="goods-list" v-for="(item,index) in list" :to="'/commodity/detail/'+item.id" :key="index">
                    <div class="goods-list-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="goods-list-info">
                        <div class="goods-list-name">{{ item.name }}</div>
                        <div class="goods-list-content">{{ item.content }}</div>
                        <div class="goods-list-price">￥{{ item.price }}</div>
                    </div>
                </router-link>
            </ul>
        </mt-loadmore>	
  		</div>
	</div>
</template>
<script>
import swiper from '../swiper/swiper'
export default {
	data(){
		return {
			list:[],
            rotationChart:[]
		}
	},
	created(){
        this.getList()
		this.getWheel()
        this.$store.commit('footerShow',true)
        this.$store.commit('headerShow',{header:false})
	}, 
	methods:{
		getList(){
            this.$http.get("https://shiyaming1994.github.io/mi/static/homeGoods.json")
                .then(res=>{
                    this.list = res.data
                }).catch(function(error){
                    console.log("error init."+error)
                })
        },
        getWheel(){
            this.$http.get("https://shiyaming1994.github.io/mi/static/rotationChart.json")
                .then(res=>{
                    this.rotationChart = res.data
                }).catch(function(error){
                    console.log("error init."+error)
                })
        },
        // loadBottom(){
        //     this.allLoaded = true;
        //     this.$refs.loadmore.onBottomLoaded();
        // }
	},
	computed:{},
	components:{
		swiper
	}
}
</script>
<style scoped>
.index {
  padding-bottom: 1rem;
}
.header {
	 display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    height: 1.3rem;
    background: #f2f2f2;
    color: #666;
    padding: 0;
}  
.swiper {
  height: 3.75rem;
}
.search {
    font-size: .3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin-right: .5rem;
    width: 4.5rem;
    height: .6rem;
}
.search-inp {
	display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    border: 1px solid #e5e5e5;
    text-align: left;
    width: 100%;
    height: .6rem;
    color: rgba(0,0,0,.3);
    background-color: #fff;
    border-radius: .5rem;
}
.search-inp i {
	margin-left: .3rem;
	font-size: .35rem;
}
.user {
	width: .8rem;
	height: .8rem;
	margin-left: .4rem;
	border-radius: 50%;
	overflow: hidden;
	display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: skyblue;
}
.index-nav-list ul li {
    float: left;
    width: 20%;
    height: 1.5rem;
    font-size: .2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.index-nav-list ul li a {
    display: block;
    color: #000;
}
.index-nav-list ul li i {
    display: block;
    font-size: .4rem !important;
}
.line {
	background-color: #f5f5f5;
	height: .2rem;
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