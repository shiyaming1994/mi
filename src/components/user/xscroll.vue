<template>
<div class="search">
    <!-- 搜索导航 -->
    <div class="top">
        <div class="menu-wrapper">
            <div class="clearfix menu-ul" ref="menuWidth">
                <div class="menu-item" v-for="(goods,index) in searchgoods" :key="index" ref="menuList" :class="{active:goodsIndex == index}" @click="getIndex(index)">
                    <span>{{goods.left}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="shop">
    <!-- 左边 -->
        
    <!-- 右边 -->
    
        <div class="shop-wrapper" ref="itemList">
            <!-- <transition name="fade"> -->
            <div class="shops-li" v-for="(right, index1) in searchgoods" :key="index1" v-show="index1 == goodsIndex">
                <div v-for="(items, index) in right.info">
                    <div class="itemList-img">
                        <img :src="items.title_img" alt="">
                    </div>
                    <div class="itemList-title">
                        <span>{{ items.title }}{{ index1 }}</span>
                    </div>
                    <div class="item-list">
                        <ul class="clearfix">
                            <li v-for="(item, index) in items.list">
                                <div class="item-list-img">
                                    <img v-lazy="item.img" alt="">
                                </div>
                                <div class="item-list-name">{{ item.name }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="more">查看更多</div>
            </div>
            <!-- </transition> -->
        </div>
    
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'chat',
    data () {
        return {
            searchgoods:[],
            goodsIndex:0,
            scrollX:0
        }
    },
    created(){
        this.getList()
        this.$store.commit('footerShow',true)
        this.$store.commit('headerShow',{header:false,slot:'xxx'})
    },
    methods:{
        getList(){
            this.$http.get("https://shiyaming1994.github.io/mi/static/data.json")
                .then(res=>{
                    this.searchgoods = res.data
                }).catch(function(error){
                    console.log("error init."+error)
                })
        },
        getIndex(index){
            this.goodsIndex = index
            // let scrollX = this.$refs.menuWidth.offsetWidth
        }
    }   
}
</script>

<style scoped>
.search {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
}
.active {
    color: red;
    border-bottom: 2px solid red;
}
.shop {
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.top {
    position: fixed;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
    background: #f2f2f2;
}
.menu-wrapper {
    position: relative;
    overflow: hidden;
    background-color: #fafafa;
    height: 1rem;
}
.menu-wrapper .menu-ul {
    overflow-x: auto;
    background: #f2f2f2;
    font-size: .26rem;
    white-space: nowrap;
    z-index: 2;
}
.menu-ul::-webkit-scrollbar {
    display: none;
}
.menu-item {
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    justify-content: center;
    align-items: center;
    padding: 0 .3rem;
    white-space: nowrap;
}
.current {
    color: #e02e24;
    background: #ffffff;
}
.current::before {
    content: '';
    background-color: #e02e24;
    width: 4px;
    height: 1rem;
    position: absolute;
    bottom: 0;
}
.shops-items {
    display: flex; 
    flex-wrap: wrap;
}     
.shops-li {
    position: absolute;
    top: 1.39rem;
    left: 0;
    right: 0;
    overflow: hidden;
    padding-bottom: .15rem;
    background-color: #999;
}
.itemList-img {
    height: 2.05rem;
}
.itemList-img img {
    width: 100%;
}  
.itemList-title {
    font-size: .35rem;
    text-align: center;
    height: .5rem;
    line-height: .5rem;
    margin: .2rem auto;
}    
.itemList-title span {
    position: relative;
}
.itemList-title span::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 6.4px;
    width: .4rem;
    border-top: 1px solid #e0e0e0;
    transform: translate3d(-150%,-50%,0);
    -webkit-transform: translate3d(-150%,-50%,0);
} 
.itemList-title span::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 6.4px;
    width: .4rem;
    border-top: 1px solid #e0e0e0;
    left: auto;
    right: 0;
    transform: translate3d(150%,-50%,0);
    -webkit-transform: translate3d(150%,-50%,0);
}
.item-list li {
    width: 50%;
    float: left;
    margin-top: .2rem;
}
.item-list-img {
    width: 1rem;
    height: 1rem;
    margin: auto;
}
.item-list-name {
    margin-top: .15rem;
    text-align: center;
    white-space: nowrap;
    font-size: .23rem;
    color: rgba(0,0,0,.54);
}
.item-list-img img {
    width: 100%;
}
.more {
    background-color: skyblue;
    margin: .15rem auto 0;
    text-align: center;
    height: .8rem;
    line-height: .8rem;
    color: #aea38d;
    background-color: #f9f5e6;
}
img[lazy=loading] {
  width: 1rem;
  height: 1rem;
  margin: auto;
}
</style>