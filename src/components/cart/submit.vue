<template>
	<div class="submit">
		<router-link class="address" :to="'/address/addressList/cart?orderid='+ orderid" tag="div">
			<div class="address-name">{{ address.name }}&nbsp;&nbsp;&nbsp;&nbsp;{{ address.phone }}</div>
			<div class="address-info">{{ address.address_region }}&nbsp;&nbsp;{{ address.address_info }}</div>
		</router-link>
		<div class="ui-line"></div>
		<div class="payment">
			<ul>
				<li>
					<div class="payment-list">
						<div class="payment-list-img">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551718666083&di=69d44bf61cfd6d78e3c3bbe3f7b1ec9c&imgtype=0&src=http%3A%2F%2Fpic.962.net%2Fup%2F2017-1%2F2017110923134788.png" alt="">
						</div>
						<div class="payment-list-name">微信支付</div>
						<div class="payment-list-checked">
							<input type="radio" name="payment" checked>
						</div>
					</div>
				</li>
				<li>
					<div class="payment-list">
						<div class="payment-list-img">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551718640798&di=0c5c95f7158311ba1f868878b0157a31&imgtype=0&src=http%3A%2F%2Fpic.uzzf.com%2Fup%2F2017-11%2F20171124847476033.png" alt="">
						</div>
						<div class="payment-list-name">支付宝支付</div>
						<div class="payment-list-checked">
							<input type="radio" name="payment">
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="ui-line"></div>
		<div class="goods">
			<div class="goods-info" v-for="(item,index) in cartList.list">
				<div class="goods-info-img">
					<img :src="item.img" alt="">
				</div>
				<div class="goods-info-name">{{ item.name }} {{ item.Memory }} {{ item.color }}*{{ item.count }}</div>
				<div class="goods-info-price"><strong>{{ item.price }}</strong></div>
			</div>
		</div>
		<div class="ui-line"></div>
		<div class="allPrice">
			<p><strong>商品价格：</strong>{{ cartList.allPricr }}</p>
			<p><strong>已优惠：</strong>0</p>
			<p><strong>配送费用：</strong>0</p>
		</div>
		<div class="ui-line"></div>
		<div class="footer">
			<div class="footer-address">配送至：{{ address.address_region }}&nbsp;&nbsp;{{ address.address_info }}</div>
			<div class="footer-submit">
				<div class="footer-submit-price">共{{ cartList.allCount }}件 合计: <strong>{{ cartList.allPricr }}</strong></div>
				<div class="footer-submit-payment" @click="submit">去付款</div>
			</div>
		</div>
	</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
	data(){
		return {
			orderid:this.$route.query.orderid,
			addressid:this.$route.query.addressid,
			cartList:[],
			address:[]
		}
	},
	created(){
		this.getGoods()
		this.getAddress()
        // this.$store.commit('footerShow',false)
        // this.$store.commit('headerShow',{header:true,slot:'用户结算'})
	},
	methods:{
		submit(){
			MessageBox.confirm('确定要支付吗?').then(action => {
				Toast({
				  	message: '支付成功',
				  	iconClass: 'mui-icon mui-icon-checkmarkempty',
				  	duration: 1000
				})
				this.cartList.buy = true
				this.$store.commit('buy',this.cartList)
				this.$router.push('/user')
			},action => {

			})
		},
		// 获取购物车
        getGoods(){
            this.$store.state.order.forEach(item => {
            	if(this.orderid == item.time) {
            		this.cartList = item
            	}
            })
        },
        // 获取地址
        getAddress(){ 
            this.$store.state.address.some(item => {
            	if(this.addressid){
            		if(item.id == this.addressid) {
            			this.address = item
            		}
            	}else{
            		if(item.checked == true){
						this.address = item
					}
            	}
            	
				
			})
        }
	},
	computed:{},
	components:{

	}
}
</script>
<style scoped>
.submit {
	padding-top: 1rem;
}
.address {
	background: url('../../../static/images/bd1.png') 0 0 repeat-x;
    background-size: .52rem .08rem;
    padding: .4rem .4rem .3rem;
    position: relative;
}
.address-name {
	font-size: .32rem;
    font-weight: 700;
    margin-bottom: .2rem;    
}
.address-info {
	line-height: .3rem;
    color: #757575;
    margin-right: .3rem;
    font-size: .28rem;
}
.address::after {
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
.ui-line {
	border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    height: .2rem;
    background: #f5f5f5;
    overflow: hidden;
    clear: both;
}
.payment li {
	margin: 0 .4rem;
    border-bottom: 1px solid #eee;
    font-size: .28rem;
    line-height: .5rem;
    padding: .2rem 0 .2rem .7rem;
    color: #333;
    position: relative;
}
.goods {
	box-sizing : border-box;
	border-bottom: 1px solid #eee;
}
.goods-info {
	display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    line-height: .3rem;
    margin: 0 .4rem;
    padding: .14rem 0;
    border-bottom: 1px solid #eee;
    font-size: .28rem;
}
.goods-info-img {
	width: 1rem;
	height: 1rem;
	margin-right: .2rem;
}
.goods-info-img img {
	width: 100%;
	height: 100%;
}
.goods-info-name {
	-webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin-right: .6rem;
    color: #3c3c3c;
}
.goods-info-price {
	font-size: .3rem;
}
.allPrice {
	padding: .26rem .4rem;
    background: #fff;
}
.allPrice p {
	margin-top: .2rem;
}
.allPrice p:nth-child(1) {
	margin-top: 0;
}
.allPrice strong {
	color: #3c3c3c;
}
.footer {
	transform: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid #e0e0e0;
}
.footer-address {
	background: #fbf3c4;
    color: #b57842;
    padding: .12rem .2rem;
    opacity: .7;
    font-size: .24rem;
}
.footer-submit {
	display: flex;
	-webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.footer-submit-price {
	font-size: .35rem;
    color: #ff4d14;
    width: 100%;
    text-align: center;
}
.footer-submit-payment {
	width: 100%;
    background-color: #ff5722;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    border: 1px solid #ff5722;
    font-size: .35rem;
    color: #fff;
}
.payment-list-img {
	float: left;
	width: .5rem;
	height: .5rem;
	margin-left: -.7rem;
}
.payment-list-img img {
	width: 100%;
	height: 100%;
	display: block;
}
.payment-list-checked {
	position: absolute;
	top: .2rem;
	right: .3rem;
}
</style>