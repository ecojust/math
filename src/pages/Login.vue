<!--
 * @Author: 桔子桑
 * @Date: 2019-12-08 02:50:27
 * @FilePath: /robot/src/pages/Login.vue
 * @Description: 实数集与函数
-->

<template>
  <div class="Login">
    <GeminiScrollbar >
    <h3>实数</h3>
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


    <h3>数集 <b>·</b> 确界原理</h3>
    <h4>$$邻域(\delta>0)$$</h4>
      $$点a的\delta邻域：U(a;\delta) = \lbrace x \mid    |x - a| < \delta \rbrace = (a - \delta,a+\delta)$$
      <img class="eg_img" src="../../static/images/yu.jpeg" alt="">
      $$点a的空心\delta邻域：U^\circ(a;\delta) = \lbrace x \mid   0 < |x - a| < \delta \rbrace = (a - \delta,a) \quad \bigcup \quad (a,a+\delta)$$
      <img class="eg_img" src="../../static/images/yu2.png" alt="">
      $$点a的\delta左邻域：U_-(a;\delta) = [a - \delta,a)$$
      $$点a的\delta右邻域：U_+(a;\delta) = (a,a + \delta]$$
      $$点a的空心\delta左邻域：U^\circ_-(a;\delta) = (a - \delta,a)$$
      $$点a的空心\delta右邻域：U^\circ_+(a;\delta) = (a,a + \delta)$$
    <h4>有界集</h4>
      <p>集合S为R中的一个数集，若存在数M/L，使得：</p>
      $$对于一切 x \in S,恒有 x \leq M,或者 x \geq L $$
      <p>则称S为有上界/下界的数集,M/L为S的一个上界/下界，若数集S既有上界又有下界，则称S为有界集，若S不是有界集，则称其为无界集。</p>
      $$上确界：\eta = sup S$$
      $$下确界：\xi = inf S$$
      <img class="eg_img" src="../../static/images/dataarray.png" alt="">
    <!-- <h4>确界原理(确界原理是极限理论的基础，应给予充分的重视)</h4> -->

    <h3>函数</h3>
    <h4>函数定义</h4>
      <p>定义域D和值域M，若有对应法则f，使得D内每一个x,都有M内的唯一一个y与之对应，则称f是定义在数集D上的函数，记作：</p>
      $$f:D \to M,$$
      $$x \to y$$
      $$也可记作：x \to f(x)$$
      $$常用表示：y = f(x),x \in D$$
    <h4>反函数</h4>
      <p>函数f有反函数，意味着f是D与M之间的一个一一映射，我们称：</p>
      $$f^{-1} 为映射f的逆映射$$
      $$y = f^{-1}(x),x \in f(D)$$


    




    </GeminiScrollbar>
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
