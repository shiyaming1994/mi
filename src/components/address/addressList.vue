<template>
	<div class="address">
		<div class="address-list">
			<div class="address-manager" v-for="(item,index) in addressList">
				<ul>
					<li class="address-top">
						<span class="address-name">{{ item.name }}</span>
						<span>{{ item.phone }}</span>
						<em class="address-default" v-if="item.checked == true">[默认]</em>
						<a href="javascript:;" class="address-del" @click="remove(item.id,index)" v-if="type == 'user'">删除</a>
					</li>
                    <router-link class="address-bottom" tag="li" :to="'/cart/submit?addressid=' + item.id + '&orderid='+ orderid " v-if="type == 'cart'">
                        <p>{{ item.address_region }}</p>
                        <p>{{ item.address_info }}</p>
                    </router-link>
					<router-link class="address-bottom" tag="li" :to="'/address/editAddress?id=' + item.id" v-else>
						<p>{{ item.address_region }}</p>
						<p>{{ item.address_info }}</p>
					</router-link>
				</ul>
			</div>
		</div>
		<div class="btn" @click="add">新建地址</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
            type:this.$route.params.type,
            orderid:this.$route.query.orderid,
			addressList:[]
		}
	},
	created(){
        this.getAddress()
        this.$store.commit('footerShow',false)	
        this.$store.commit('headerShow',{header:true,slot:'收获地址'})
	},
	methods:{
		getAddress(){
            this.addressList = this.$store.state.address
        },
        // 删除
        remove(id,index){
            this.addressList.splice(index,1)
            this.$store.commit('removeAddress',id)
        },
        add(){
			this.$router.push('/address/addAddress')
		}
	},
	computed:{},
	components:{

	}
}
</script>
<style scoped>
.address {
	padding-top: 1rem;
}
.address-manager {
	border: 1px solid #eee;
    overflow: hidden;
    margin: .2rem;
    border-radius: .06rem;
    background: #fff;
    text-align: left;
}
.address-manager ul {
	position: relative;
	padding: .2rem;
}
.address-top {
	border-bottom: 1px solid #eee;
    display: block;
    font-size: .3rem;
    overflow: hidden;
    background: #fff;
    padding: .2rem .3rem;
}
.address-name {
	margin-right: .6rem;
    color: #f60;
}
.address-default {
	color: #f60;
    font-size: .24rem;
    font-style: normal;
    margin-left: .05rem;
}
.address-del {
	float: right;
    color: #999;
}
.address-bottom {
	position: relative;
    padding-right: .5rem;
    font-size: .24rem;
    padding: .2rem .3rem 0;
}
.address-bottom p {
	line-height: .36rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .28rem;
    color: #3c3c3c;
}
.address-bottom::after {
    content: " ";
    position: absolute;
    width: 2.24px;
    width: .14rem;
    height: 2.24px;
    height: .14rem;
    right: 2.24px;
    right: .14rem;
    top: 50%;
    margin-top: -1.12px;
    margin-top: -.07rem;
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
    -webkit-transform: rotate(-45deg);
}
.btn {
	position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    outline: 0;
    background: #ff6700;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: .28rem;
}
</style>