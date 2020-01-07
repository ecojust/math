/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-11-11 22:19:26
 * @FilePath: /math/src/router/index.js
 * @Description: 文件描述
 *
*********************/
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


var routes = [
    {
      path: '/',
      name: 'Login',
      component: () => import("@/pages/Login")
    },
  ]

var router = new Router({
  base: '/', // 配置单页应用的基路径
  routes: routes
});

router.beforeEach((to, from, next) => {
  if(to.path!='/'){
    if (localStorage.getItem('userinfo')) { // 判断缓存里面是否有 userName  //在登录的时候设置它的值
        next();
    } else {
        next({
            path: '/',
            query: {
                redirect: to.fullPath.substr(1)
            }
        })
    }
  }else{
    next();
  }
});





export default router;
