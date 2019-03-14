<template>
    <div class="index">
        <div class="Notice">
            <i class="iconfont icon-sousuo"></i>
            <div class="Notice-list" :class="{marquee_top:animate}">
                <p v-for="(item,index) in list">{{ item.title }}</p>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    data(){
        return {
            animate:false,
            list:[{"title":"公告11111111111111111111"},{"title":"公告22222222222222222"},{"title":"公告33333333333333333333333"}]
        }
    },
    created(){
        this.$store.commit('headerShow',{header:true,slot:'测试'})
        setInterval(this.showMarquee, 3000)
    },
    methods:{
        showMarquee() {
            this.animate = true;
                setTimeout(()=>{
                    this.list.push(this.list[0]);
                    this.list.shift();
                    this.animate = false;
            },1000)
        }
    },
    computed:{},
    components:{}
}
</script>
<style scoped>
.index {
    padding-top: 2rem;
}
.marquee_top {
    transition: all 1s;
    margin-top: -1rem
}
.Notice {
    background-color: #f5f5f5;
    height: 1rem;
    position: relative;
    overflow: hidden;
}
.icon-sousuo {
    position: absolute;
    left: .3rem;
    top: .3rem;
}
.Notice-list {
    margin-left: 1rem;
    height: 1rem; 
    padding-right: .5rem;
}
.Notice-list p {
    height: 1rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
}
</style>