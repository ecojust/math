<!--
 * @Author: 桔子桑
 * @Date: 2019-12-08 02:50:27
 * @FilePath: /robot/src/pages/Login.vue
 * @Description: 实数集与函数
-->

<template>
  <div class="Chapter2">
    <GeminiScrollbar >
    <h3>数列极限</h3>
    <h4>概念</h4>
      <p>一般地说：</p>
      $$对于数列\lbrace a_n \rbrace,当n无限增大时a_n能无限地接近一个常数a$$
      $$则称此数列为收敛数列,否则称为发散数列;常数a称为它的极限,也称数列\lbrace a_n \rbrace收敛于a,记作$$
      $$\lim_{n \to +\infty} a_n = a \; 或 \; a_n \to a (a \to \infty)$$
      $$读作“当n趋于无穷大时,a_n的极限等于a \; 或 \;a_n 趋于 a”$$


      


    




    </GeminiScrollbar>
  </div>
</template>

<script>
import Bus from '../utils/bus'

export default {
  name: 'Chapter2',
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
.Chapter2{
  position: relative;

}
</style>
