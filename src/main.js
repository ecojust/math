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




// mathjax
// let isMathjaxConfig = false; // 防止重复调用Config，造成性能损耗

// const initMathjaxConfig = () => {
//   if (!window.MathJax) {
//     return;
//   }
//   window.MathJax.Hub.Config({
//     showProcessingMessages: false, //关闭js加载过程信息
//     messageStyle: "none", //不显示信息
//     jax: ["input/TeX", "output/HTML-CSS"],
//     tex2jax: {
//       inlineMath: [["$", "$"], ["\\(", "\\)"]], //行内公式选择符
//       displayMath: [["$$", "$$"], ["\\[", "\\]"]], //段内公式选择符
//       skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"] //避开某些标签
//     },
//     "HTML-CSS": {
//       availableFonts: ["STIX", "TeX"], //可选字体
//       showMathMenu: false //关闭右击菜单显示
//     }
//   });
//   isMathjaxConfig = true; // 
// };

// if (isMathjaxConfig === false) { // 如果：没有配置MathJax
//   initMathjaxConfig();
// }

// 如果，不传入第三个参数，则渲染整个document
// 因为使用的Vuejs，所以指明#app，以提高速度
// window.MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById('app')],()=>{});
// setTimeout(() => {
//   window.MathJax && window.MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName('mj')],function(){
//       //to do something   公式重新渲染完成后执行这个回调函数
//   });
// },0)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

