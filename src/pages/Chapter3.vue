<!--
 * @Author: 桔子桑
 * @Date: 2019-12-08 02:50:27
 * @FilePath: /robot/src/pages/Login.vue
 * @Description: 实数集与函数
-->

<template>
  <div class="Chapter3">
    <GeminiScrollbar >
    <h3>函数极限</h3>
    <h4>概念</h4>
      <p>函数f当x趋于正无穷时以A为极限，记作：</p>
      $$\lim_{x \to +\infty} f(x) = A \; 或 \; f(x) \to A (x \to \infty)$$
    <h4>迫敛性(夹逼准则)</h4>
      $$设\lim_{x \to x_0} f(x)  = \lim_{x \to x_0} g(x) = A,且在某U^\circ(x_0;{\sigma}^\prime)内有：$$
      $$f(x) \leq h(x) \leq g(x) ，$$
      $$则\lim_{x \to x_0} h(x) = A$$
      <p class="eg">$$求\lim_{x \to 0} x \left[ \frac1x \right]$$</p>
      $$解:当x>0时有：$$
      $$1-x <  x\left[ \frac1x \right] \leq 1,$$


      


    




    </GeminiScrollbar>
  </div>
</template>

<script>
import Bus from '../utils/bus'

export default {
  name: 'Chapter3',
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
    var arr = [
      {
        id:1,
        name:'aaa'
      },
      {
        id:1,
        name:'bbb'
      },
      {
        id:2,
        name:'cccc'
      }
    ]
    this.category(arr);
  },
  methods: {
    category(arr){
      var map = new Map();
      arr.map((item)=>{
        if(map.has(item.id)){
          map.get(item.id).push(item);
        }else{
          map.set(item.id,[]);
          map.get(item.id).push(item);
        }
      })
      console.log(map);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/public/less.less';
.Chapter3{
  position: relative;

}
</style>
