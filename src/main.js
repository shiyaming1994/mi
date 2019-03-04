// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import '../static/currency.css'
import '../static/js/rem.js'

import '../static/mui/dist/css/mui.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false
import { Swipe,SwipeItem,Loadmore,Button,Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.component(Loadmore.name, Loadmore)
Vue.component(Button.name, Button);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // this.loding = true

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
