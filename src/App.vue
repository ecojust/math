<!--
 * @Author: 桔子桑
 * @Date: 2019-11-09 02:58:56
 * @FilePath: /math/src/App.vue
 * @Description: 文件描述
-->
<template>
  <div id="app">
    <Layout v-show="showlayout"></Layout>
    <router-view id="maincontent" class="maincontent" :style="{'width':size.width,'height':size.height}" />
  </div>
</template>

<script>
import Bus from './utils/bus'
import Layout from './components/Layout'
export default {
  name: 'App',
  components:{
    Layout
  },
  data(){
    return  {
      size:{
        width:'calc(100% - 240px)',
        height:'calc(100% - 60px)'
      },
      showlayout:false
    }
  },
  watch:{
    '$route'(to,from){
      // if(to.path =='/'){
      //   this.size = {
      //     width:'100%',
      //     height:'100%'
      //   };
      //   this.showlayout = true;
      // }else{
        this.size = {
          width:'calc(100% - 240px)',
          height:'calc(100% - 60px)'
        };
        this.showlayout = true;
      // }
    }
  },
  created() {
  },
  mounted() {

  },
  methods: {}
}
</script>

<style lang='less'>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;

  #maincontent,.maincontent {
    position: absolute;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    padding:20px;
    right:0;
    bottom:0;
    background-color: transparent;
    // border:1px solid;
    // background: gainsboro;
    h1,h2,h3,h4,h5,h6{
      text-align:left !important;
      >span{
      text-align:left !important;
      text-indent:15px
      }
    }
    
    h5,h4,h3{
      color:red;
      text-indent:15px
    }
    p{
      text-indent:25px;
      text-align:left;


    }
  }
}
/* MathJax v2.7.5 from 'cdnjs.cloudflare.com' */
.mjx-chtml {
  outline: 0;
}
.MJXc-display {
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
