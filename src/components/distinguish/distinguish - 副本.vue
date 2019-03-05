<template>
	<div>
        <header-nav>分类</header-nav>
		<div class="category-info">
            <div class="category-info-left menu-wrapper">
                <ul>
                    <li v-for="(item, index) in list" :class="index == 0?'now':''" @click="clickList(index)" ref="menuList">{{ item.title }}</li>
                </ul>
            </div>
            <div class="category-info-right shop-wrapper" ref="itemList">
                <div v-for="(item, index) in list" class="shop-li">
                    <div class="category-list clearfix">
                        <div class="category-list-left left">
                            <div class="category-list-left-title">{{ item.title }}</div>
                            <div class="category-list-left-info">{{ item.info }}</div>
                            <div class="category-list-left-money clearfix">
                                <div class="category-list-left-money-new left">￥{{ item.price }}</div>
                            </div>
                        </div>
                        <div class="category-list-right right">
                            <img v-lazy="item.img" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<footer-nav></footer-nav>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
import headerNav from '../nav/headerNav'
import footerNav from '../nav/footerNav'
export default {
	data(){
		return {
			list:[],
            scrollY:0, //右侧列表滑动的y轴坐标
            rightLiTops:[] //所有分类头部位置
		}
	},
	created(){
		this.getList(0)
	},
	methods:{
		getList(id){
            this.$http.get("../../../static/data.json?id=" + id)
                .then(res=>{
                    this.list = res.data
                }).catch(function(error){
                    console.log("error init."+error)
                })
        },
        _initBScroll(){
            //左边滚动
            this.leftBscroll = new BScroll('.menu-wrapper',{});
            //右边滚动
            this.rightBscroll = new BScroll('.shop-wrapper',{
        　　　　　　probeType:3   //在滚动中触发scroll 事件
            });
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
        }
    },
    watch:{
        list(){
            //监听数据
            this.$nextTick(() =>{
                //左右两边滚动
                this._initBScroll();
                //右边列表高度
                this._initRightHeight()
            })
        },

    },
    computed: {
        //动态绑定class类名
        currentIndex(index) {
            const {scrollY,rightLiTops} = this;
            return rightLiTops.findIndex((tops,index )=>{
                this._initLeftScroll(index);  //调用左右联调滚动效果
                return scrollY >= tops && scrollY < rightLiTops[index + 1]
          })
        }
    },
	components:{
		footerNav,
        headerNav
	}
}
</script>
<style scoped>
.category-info-left {
    width: 1.9rem;
    float: left;
    
    /*position: fixed;
    top: 1rem;
    bottom: 1.5rem;
    left: 0;*/
    border-right: 1px solid #efefef;
    /*overflow: hidden;*/
}
.category-info-right {
    /*position: fixed;
    top: 1rem;
    left: 2rem;
    right: 0;
    bottom: 1.5rem;
    overflow: hidden;
    overflow-y: auto;*/
    float: left;
    
    background-color: #f6f6f6;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
}
/*.category-info-left ul {
    z-index: 90;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -.1rem;
    overflow-y: auto;
}*/
.category-info-left li {
    height: 1rem;
    font-size: .3rem;
    line-height: 1rem;
    text-align: center;
    border-top: 1px solid #ccc;
}
.category-list {
    position: relative;
    padding: .2rem;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
}
.category-list-left {
    width: 3.3rem;
    padding-right: .2rem;
}
.category-list-left-title {
    font-size: .3rem;
    overflow: hidden;
    color: #000;
    line-height: .35rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.category-list-left-info {
    font-size: .2rem;
    color: #999;
    margin-top: .1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.category-list-left-money {
    font-size: .2rem;
    position: absolute;
    bottom: .2rem;
    width: 3.3rem;
    color: #999;
    line-height: .3rem;
    padding-right: .2rem;
}
.category-list-right {
    width: 1.5rem;
    height: 1.5rem;
}
.category-list-right img {
    display: block;
    width: 100%;
    height: 100%;
}
.now {
    color: skyblue;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>