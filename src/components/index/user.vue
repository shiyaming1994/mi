<template>
    <div class="user">
        <header-name></header-name>
        <router-link to='/order'>
            <div class="user-order">
                <div class="user-order-title">我的订单</div>
            </div>
        </router-link>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import footerNav from '../nav/footerNav'
import headerName from '../header/headerName'
export default {
  components:{
    footerNav,
    headerName
  }
}
</script>

<style scoped>
.user {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
}
.user-order {
    margin: .2rem auto; 
}
.user-order-title {
    padding: 0 .3rem;
    background-color: #fff;
    font-size: .4rem;
    height: .8rem;
    line-height: .8rem;
}
</style>
