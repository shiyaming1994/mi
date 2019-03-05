<template>
<div class="search">
    <!-- 搜索导航 -->
    <header-nav>分类</header-nav>
    <div class="shop">
    <!-- 左边 -->
        <div class="menu-wrapper">
            <ul>
                <li class="menu-item" v-for="(goods,index) in searchgoods" :key="index" :class="{current: index === currentIndex}" @click="clickList(index)" ref="menuList">
                    <span>{{goods.left}}</span>
                </li>
            </ul>
        </div>
    <!-- 右边 -->
        <div class="shop-wrapper">
            <ul ref="itemList">
                <li class="shops-li" v-for="(right, index1) in searchgoods" :key="index1">
                    <div v-for="(items, index) in right.info">
                        <div class="itemList-img">
                            <img :src="items.title_img" alt="">
                        </div>
                        <div class="itemList-title">
                            <span>{{ items.title }}</span>
                        </div>
                        <div class="item-list">
                            <ul class="clearfix">
                                <li v-for="(item, index) in items.list">
                                    <div class="item-list-img">
                                        <img :src="item.img" alt="">
                                    </div>
                                    <div class="item-list-name">{{ item.name }}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="more">查看更多</div>
                </li>
            </ul>
        </div>
    </div>
    <footer-nav></footer-nav>
</div>
</template>

<script>
import headerNav from '../nav/headerNav'
import footerNav from '../nav/footerNav'
import BScroll from 'better-scroll'
export default {
  name: 'chat',
  data () {
    return {
        scrollY: 0, //右侧列表滑动的y轴坐标
        rightLiTops:[], //所有分类头部位置
        searchgoods:[]
    }
  },
  computed: {
    //动态绑定class类名
    currentIndex(index) {
      const {scrollY,rightLiTops} = this;
      return rightLiTops.findIndex((tops,index )=>{
        this._initLeftScroll(index);
        return scrollY >= tops && scrollY < rightLiTops[index + 1]
      })
    }
  },
  mounted() {
    this.getList()
  },
  components: {
    footerNav,
    headerNav
  },
  watch:{
    searchgoods(){
      //监听数据
      this.$nextTick(() =>{
        //左右两边滚动
        this. _initBScroll();
        //右边列表高度
        this._initRightHeight();
      })
    }
  },
  methods:{
    getList(){
        this.$http.get("../../../static/data.json")
            .then(res=>{
                this.searchgoods = res.data
            }).catch(function(error){
                console.log("error init."+error)
            })
    },
    _initBScroll() {
      //左边滚动
      this.leftBscroll = new BScroll('.menu-wrapper',{ mouseWheel: true, click: true, tap: true });
      //右边滚动
      this.rightBscroll = new BScroll('.shop-wrapper',{
        probeType:3,
        mouseWheel: true, 
        click: true, 
        tap: true
      });
      //监听右边滚动事件
      this.rightBscroll.on('scroll',(pos) => {
        this.scrollY = Math.abs(pos.y);
        // console.log(this.scrollY)
      })
    },
    //求出右边列表的高度
    _initRightHeight(){
        let itemArray=[]; //定义一个伪数组
        let top = 0;
        itemArray.push(top)
        //获取右边所有li的礼
        let allList = this.$refs.itemList.getElementsByClassName('shops-li');
        //allList伪数组转化成真数组
        Array.prototype.slice.call(allList).forEach(li => {
          top += li.clientHeight; //获取所有li的每一个高度
          itemArray.push(top)
        });
        this.rightLiTops = itemArray;
        // console.log(this.rightLiTops)
    },
    //点击左边实现滚动
    clickList(index){
        console.log(1)
        this.scrollY = this.rightLiTops[index];
        console.log(this.scrollY)
        this.rightBscroll.scrollTo(0,-this.scrollY,200,)
    },
    //左右联调 
    _initLeftScroll(index){
      let menu = this.$refs.menuList;
      let el = menu[index];
      this.leftBscroll.scrollToElement(el,300,0,-300)
    }
  }
}
</script>

<style scoped>
.search {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
}
.shop {
    display: flex;
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    width: 100%;
    overflow: hidden;
}
.menu-wrapper {
    background-color: #e0e0e0;
    width: 1.8rem;
    flex: 0 0 1.8rem;
}
.menu-item {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: lighter;
    color: #666;
    position: relative;
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
    right: 0;
}
.shop-wrapper {
    flex: 1;
    background: #fff;
}
.shops-title {
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    height: 200px;
    line-height: 200px;
    border: 1px solid #ccc;
    align-items: center;
    justify-content: space-between;
    color: #9999;
}
.shops-items {
    display: flex; 
    flex-wrap: wrap;
}   
.shop-wrapper {
    padding: 0 .3rem;
}  
.shops-li {
    /*min-height: 15rem;*/
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
    width: 33.3%;
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
    margin: .15rem auto;
    text-align: center;
    height: .8rem;
    line-height: .8rem;
    color: #aea38d;
    background-color: #f9f5e6;
}
.shop-wrapper .shops-li:last-child {
    min-height: -webkit-calc(100vh - .1rem);
    min-height: calc(100vh - .1rem);
}
</style>