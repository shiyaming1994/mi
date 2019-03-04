<template>
  <div id="app">
    <!-- <header class="nav-header" v-if="show">
      <div>
        <div class="nav-header-goback" @click="goBack">
          <i class="iconfont icon-return1"></i>
        </div>
      </div>
      <div class="nav-header-title">{{ msg }}</div>
      <div>
        <div class="nav-header-search">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
    </header> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
        msg:'',
        show: false
    }
  },
  created(){},
  methods:{
    goBack(){
            this.$router.go(-1)
        }
  },
  watch:{
      // '$route.path': function (newVal, oldVal){
      //    console.log(newVal+'=========='+oldVal);
      
      // if (newVal == "/distinguish" || ) {
      //   this.show = false
      // }
      // if (to.path == "/user") {
      //   this.show = false
      // }
      // if (to.path == "/distinguish") {
      //   this.show = true
      //   this.msg = "分类"
      // }
      // if (to.path == "/distinguish") {
      //   this.show = true
      //   this.msg = "分类"
      // }
      // if (to.path == "/distinguish") {
      //   this.show = true
      //   this.msg = "分类"
      // }
    // }
  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  background-color: #fff;
  height: 100%;
  width: 100%;
}
ul,li {
    list-style: none;
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
p {
    margin: 0;
    padding: 0;
}
.left {
  float: left;
}
.right {
  float: right;
}
.clearfix:after {
    content:"";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
}
.clearfix {
    *zoom:1;
}
.nav-header {
  position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1rem;
    background: #f2f2f2;
    color: #666;
    padding: 0;
    -webkit-transition: -webkit-transform .2s ease-out;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out,-webkit-transform .2s ease-out;
}
.nav-header>div {
  display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  justify-content: center;
  align-items: center; 
}
.nav-header-goback, .nav-header-search {
    width: 1rem;
    height: 1rem;
    display: flex;
  justify-content: center;
  align-items: center;
}  
.nav-header-title {
  font-size: .35rem;
} 
.nav-header i {
  font-size: .35rem;
}
</style>
