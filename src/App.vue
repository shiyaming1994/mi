<template>
  <div id="app">
    <transition name="headerFade">
        <header-nav v-show="$store.getters.header">{{ $store.getters.headerTitle }}</header-nav>
    </transition>

    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    
    <transition name="footerFade">
      <footer-nav v-show="$store.getters.footer"></footer-nav>
    </transition>
  </div>
</template>

<script>
import footerNav from './components/nav/footerNav'
import headerNav from './components/nav/headerNav'
export default {
  data(){
    return {
        msg:'',
        show: false
    }
  },
  methods:{
    goBack(){
        this.$router.go(-1)
    }
  },
  methods:{

  },
  // watch:{
  //     '$route.path': function (newVal, oldVal){
  //        console.log(newVal+'=========='+oldVal);
  //   }
  // },
  components:{
    headerNav,
    footerNav
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

.footerFade-enter-active {
  animation-name: footerFade-in;
  animation-duration: .35s;
}
.footerFade-leave-active {
  animation-name: footerFade-out;
  animation-duration: .35s;
}
@keyframes footerFade-in {
  to {
    bottom: 0rem;
  }
  from {
    bottom: -1rem;
  }
}
@keyframes footerFade-out {
  to {
    bottom: -1rem;
  }
  from {
    bottom: 0rem;
  }
}

.headerFade-enter-active {
  animation-name: headerFade-in;
  animation-duration: .35s;
}
.headerFade-leave-active {
  animation-name: headerFade-out;
  animation-duration: .35s;
}
@keyframes headerFade-in {
  to {
    top: 0rem;
  }
  from {
    top: -1rem;
  }
}
@keyframes headerFade-out {
  to {
    top: -1rem;
  }
  from {
    top: 0rem;
  }
}

</style>
