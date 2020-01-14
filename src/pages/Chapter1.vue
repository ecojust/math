<!--
 * @Author: 桔子桑
 * @Date: 2019-12-08 02:50:27
 * @FilePath: /robot/src/pages/Login.vue
 * @Description: 实数集与函数
-->

<template>
  <div class="Chapter1">
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
    <h4>有界函数</h4>
      <p>设f为定义在D上的函数，若存在数M/L，使得对于D内的每一个x，恒有：</p>
      $$f(x) \leq M \; (f(x) \geq L)$$
      <p>则称f为D上的有上(下)界函数，M(L)称为f在D上的一个上(下)界</p>
    <h4>单调函数</h4>
      <p>设f为定义在D上的函数，若：</p>
      $$对于x_1,x_2 \in D,当x_1 < x_2 时，总有$$
      $$f(x_1) \leq f(x_2)$$
      <p>则称f为D上的增函数，特别当：</p>
      $$f(x_1) < f(x_2)成立时$$
      <p>则称f为D上的严格增函数</p>
      <p>相反的，若：</p>
      $$对于x_1,x_2 \in D,当x_1 < x_2 时，总有$$
      $$f(x_1) \geq f(x_2)$$
      <p>则称f为D上的减函数，特别当：</p>
      $$f(x_1) > f(x_2)成立时$$
      <p>则称f为D上的严格减函数</p>
      <p>我的记忆规则：<b>同增异减</b></p>
    <h4>奇函数和偶函数</h4>
      <p>设D为对称于原点的数集，f为定义在D上的函数：</p>
      $$对于每一个x \in D有：f(-x) = - f(x) \; 或者 \; f(-x) = f(x)$$
      <p>则称f为D上的奇(偶)函数</p>
    <h4>周期函数</h4>
      <p>设f为定义在数集D上的函数，若存在σ > 0，使得</p>
      $$对于每一个x \in D有：f(x  \pm \sigma) = f(x)$$
      <p>则称f为周期函数，σ称为f的一个周期，若σ为最小周期，则称σ为f的基本周期，或简称周期</p>


      


    




    </GeminiScrollbar>
  </div>
</template>

<script>
import Bus from '../utils/bus'

export default {
  name: 'Chapter1',
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
.Chapter1{
  position: relative;

}
</style>
