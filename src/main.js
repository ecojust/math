/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-11-09 02:58:56
 * @FilePath: /math/src/main.js
 * @Description: 文件描述
 *
*********************/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import echarts from 'echarts'


import config from '../static/config'
import socket from './utils/socketEngine'


import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(GeminiScrollbar)

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);


//iconfont
import './assets/iconfont/iconfont.css'



Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.prototype.$config = config;
//引擎socket服务
Vue.prototype.$socket = socket;

Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

