<template>
	<div class="address">
		<header-nav>编辑收货地址</header-nav>
		<div class="address-info">
			<ul>
				<li>
					<div class="address-name">姓名:</div>
					<div class="ul-input">
						<input type="text" placeholder="真实姓名" v-model="editAddress.name">
					</div>
				</li>
				<li>
					<div class="address-name">手机号码:</div>
					<div class="ul-input">
						<input type="text" placeholder="手机号码" v-model="editAddress.phone">
					</div>
				</li>
				<li>
					<div class="address-name">所在地区:</div>
					<div class="ul-input">
						<input type="text" placeholder="省 市 区 街道信息" v-model="editAddress.address_region">
					</div>
				</li>
				<li>
					<div class="address-name">详细地址:</div>
					<div class="ul-input">
						<input type="text" placeholder="详细地址" v-model="editAddress.address_info">
					</div>
				</li>
				<li>
					<div class="address-name">设置为默认地址</div>
					<div>
						<input type="checkbox" v-model="editAddress.checked">
					</div>
				</li>
			</ul>
		</div>
		<div class="btn" @click="edit">保存修改</div>
	</div>
</template>
<script>
import headerNav from '../nav/headerNav'
export default {
	data(){
		return {
			id:this.$route.query.id,
			editAddress:[]
		}
	},
	created(){
		this.getAddress()
	},
	methods:{
		getAddress(){
            let address = this.$store.state.address
            address.forEach(item => {
				if(item.id == this.id){
					this.editAddress = item
				}
			})
        },
        edit(){
			this.$store.commit('editAddress',this.editAddress)
			this.$router.push('/address/addressList/user')
		}
	},
	computed:{},
	components:{
		headerNav
	}
}
</script>
<style scoped>
.address {
	padding-top: 1rem;
}
.address-info li {
	border-bottom: 1px solid #f5f5f5;
    font-size: .28rem;
    overflow: hidden;
    background: #fff;
    padding: .2rem .3rem;
    display: flex;
    align-items: center;
}
.address-name {
	padding: 0 .3rem;
}
.ul-input {
	border: 0;
    overflow: hidden;
    font-size: .24rem;
    width: 5rem;
}
.ul-input input {
	margin-bottom: 0;
	padding: .18rem .3rem;
    width: 100%;
    box-sizing: border-box;
    font-size: .28rem;
    border: 0;
    text-decoration: none;
    outline: 0;
    vertical-align: middle;
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