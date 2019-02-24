<template>
  <div id="app">
    <router-view></router-view>
    <div id="foo">加载中。。。</div>
  </div>
</template>

<script>
import rem from '../static/js/rem.js'
export default {
  name: 'App',
  data(){
    return {
      isLoading :true
    }
  },
  methods:{
    start(){
      console.log(start);
    },
    end(){
      console.log(end);
    }
  }
}

</script>

<style>
html,body {
  margin: 0;
  padding: 0;
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
#foo {
  display: none;
  background-color: rgba(0, 0, 0, .45);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 20px;
}
</style>
