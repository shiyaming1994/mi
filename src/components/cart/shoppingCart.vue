<template>
	<div class="cart">
		<div class="nologin">
			<a href="javascript:;">
				<span>登录后享受更多优惠</span>
				<em>去登录</em>
			</a>
		</div>

        <div class="item" v-for="(item,index) in cartList">
            <div class="item-inp">
                <!-- <input type="checkbox"> -->
            </div>
            <div class="item-img">
                <img :src="item.img" alt="">
            </div>
            <div class="item-info">
                <div class="item-info-name">{{ item.name }}</div>
                <div class="item-info-price">￥{{ item.price }}</div>
                <div class="item-info-count">
                    <cart-num :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></cart-num>
                    <i class="mui-icon mui-icon-trash" @click="remove(item.id,index)"></i>
                </div>
            </div>
        </div>
		<div class="noitems" v-if="$store.getters.getAllCount == 0">
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
        <div class="bottom-submit" v-if="AllCount != 0">
            <div class="bottom-box">
                <div class="price-box">
                    <div class="bottom-count">共{{ $store.getters.getAllCount }}件 金额：</div>
                    <div><span class="bottom-money">{{ $store.getters.getGoodsPrice }}</span>元</div>
                </div>
                <router-link to="/index" tag="div" class="btn gobuy">继续购物</router-link>
                <div class="btn" @click="settlement">去结算</div>
            </div>
        </div>		
	</div>
</template>
<script>
import cartNum from '../cart/cartNum'
import mui from '../../../static/mui/dist/js/mui.min.js'
export default {
	data(){
		return {
			list:[],
            cartList:[],
            AllCount:0
		}
	},
	created(){
        this.getList()
		this.getGoods()
        this.getAllCount()
        this.$store.commit('headerShow',{header:true,slot:'购物车'})
	},
    mounted(){
        mui('.mui-numbox').numbox()
    },
	methods:{
        // 推荐商品
		getList(){
            this.$http.get("https://shiyaming1994.github.io/mi/static/homeGoods.json")
                .then(res=>{
                    this.list = res.data
                }).catch(function(error){
                    console.log("error init."+error)
                })
        },
        // 获取购物车
        getGoods(){
            this.cartList = this.$store.state.car
        },
        // 购物车数量
        getAllCount(){
            this.AllCount = this.$store.getters.getAllCount
            if(this.AllCount != 0){
                this.$store.commit('footerShow',false)
            }else{
                this.$store.commit('footerShow',true)
            }
        },
        // 删除
        remove(id,index){
            let idarr = [id]
            this.cartList.splice(index,1)
            this.$store.commit('removeGoods',idarr)
            this.getAllCount()
        },
        settlement(){
            let order = {}
            let list = []
            let allCount = 0
            let allPricr = 0
            let buy = false
            let buyId = []
            // 提交到订单
            this.cartList.forEach((item,i) => {
                let obj = {}
                obj.id =  item.id,
                obj.number =  new Date().getTime(),
                obj.payment = false,
                obj.img = item.img,
                obj.name = item.name,
                obj.count = item.count,
                obj.price = item.price,
                obj.Memory = item.Memory,
                obj.color = item.color,
                allCount += item.count,
                allPricr += item.price * item.count,
                list.push(obj) 
                // 购物车ID
                buyId = buyId.concat(item.id)
            })
            order.time =  new Date().getTime()
            order.list = list
            order.allCount = allCount
            order.allPricr = allPricr
            order.buy = buy
            this.$store.commit('addOrder',order)
            // 清空购物车
            this.cartList.buy = true
            this.$store.commit('buy',this.cartList)
            this.$store.commit('removeGoods',buyId)

            this.$router.push('/cart/submit?orderid=' + order.time)
        }
	},
	computed:{},
	components:{
        cartNum
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
.item {
    display: flex;
    align-items: center;
    padding: .3rem 0;
    border-bottom: 1px solid #eee;
}
.item-img {
    display: block;
    position: relative;
    width: 2rem;
    height: 2rem;
    margin-right: .2rem;
    border: 1px solid #eee;
    border-radius: 2px; 
}
.item-img img {
    display: block;
    width: 100%;
}
.item-info {
    flex: 1 1 auto;
}
.item-inp {
    width: .5rem;
    text-align: center;
}
.item-inp input {
    width: .3rem;
    height: .3rem;
}
.item-info-name {
    width: 4rem;
    font-size: .28rem;
    line-height: .32rem;
    color: #666;
}
.item-info-price {
    font-size: .26rem;
    color: #999;
    margin: .1rem 0;
}
.item-info-count {
    display: flex;
    justify-content: space-between;
} 
.item-info-count i {
    display: block;
    height: .55rem;
    line-height: .55rem;
    width: .55rem;
    text-align: center;
    margin-right: .3rem;
}
.bottom-submit {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 998;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12); 
}
.bottom-box {
    display: flex;
    justify-content: center;
}
.price-box {
    font-size: .26rem;
    color: #999;
    width: 100%;
    text-align: center;
}
.btn {
    display: block;
    outline: 0;
    background: #ff6700;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: .28rem;
}
.gobuy {
    background-color: #f4f4f4;
    color: #333;
}
.bottom-count {
    font-size: .26rem;
    color: #999;
}
.bottom-money {
    font-size: .45rem;
        font-weight: bolder;
    color: #ff5722;
    margin-right: .2em;
}
</style>