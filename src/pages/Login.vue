<!--
 * @Author: 桔子桑
 * @Date: 2019-12-08 02:50:27
 * @FilePath: /robot/src/pages/Login.vue
 * @Description: 文件描述
-->

<template>
  <div class="Login">
    <h2>实数</h2>
    <h4>表示</h4>
      <p>为了讨论的需要，将有限小数（包括整数）表示为无限小数，如下所示（以下两式表达的值视为相等）</p>
      $$X_n = a_0.a_1a_2a_3....a_n   (4.444)$$
      $$X_n = a_0.a_1a_2a_3....(a_n - 1)999....(4.4439999999...)$$
    <h4>$$X、X_n、\bar{X_n}之间的关系$$</h4>
      $$X = a_0.a_1a_2a_3....a_n....（a_* > 0）$$
      $$X的n位不足近似：X_n = a_0.a_1a_2a_3....a_n$$
      $$X的n位过剩近似：\bar{X_n} = X_n + \frac{1}{10^n}$$
      <p>图示如下：</p>
      <img class="eg_img" src="../../static/images/xnxbx.png" alt="">




  </div>
</template>

<script>
import Bus from '../utils/bus'

export default {
  name: 'login',
  data() {
    return {
      data:"",
    }
  },
  mounted() {
window.MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById('app')],()=>{});

  },
  computed: {
    id() {
      return this.$store.state.id
    },

  },
  created(){
    
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/public/less.less';
.Login{
  position: relative;

}
</style>
