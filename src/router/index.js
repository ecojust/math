/*********************
 *
 * @Author: 桔子桑
 * @Date: 2020-01-26 22:26:00
 * @FilePath: /math/src/router/index.js
 * @Description: 文件描述
 *
*********************/
/* ============================================================================= 
#
# Author: 桔子桑
# Date: 2020-01-09 12:41:28
# FilePath: /math/src/router/index.js
# Description: 
#
============================================================================= */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


var routes = [
  {
    path: '/',
    name: 'Chapter1',
    component: () => import("@/pages/Chapter1")
  },
    {
      path: '/Chapter1',
      name: 'Chapter1',
      component: () => import("@/pages/Chapter1")
    },
    {
      path: '/Chapter2',
      name: 'Chapter2',
      component: () => import("@/pages/Chapter2")
    },
    {
      path: '/Chapter3',
      name: 'Chapter3',
      component: () => import("@/pages/Chapter3")
    },
  ]

var router = new Router({
  base: '/', // 配置单页应用的基路径
  routes: routes
});

// router.beforeEach((to, from, next) => {
//   if(to.path!='/'){
//     if (localStorage.getItem('userinfo')) { // 判断缓存里面是否有 userName  //在登录的时候设置它的值
//         next();
//     } else {
//         next({
//             path: '/',
//             query: {
//                 redirect: to.fullPath.substr(1)
//             }
//         })
//     }
//   }else{
//     next();
//   }
// });





export default router;
