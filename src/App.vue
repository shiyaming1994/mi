<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

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
</style>
