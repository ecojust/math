<template>
  <div class="layout">
        <div class="sidemenu">
            <div class="logo">
                <img :src="logo" alt="">
            </div>
            <GeminiScrollbar class="scroll">
                <Col span="24">
                    <Menu ref="menus" :theme="theme2" :active-name="activename" :open-names="opennames">
                        <div v-for="(item,index) in menu" :key="index">
                            <MenuItem :to="item.to" v-if="item.type=='singlemenu'" class="singlemenu" :name="item.title">
                                <!-- <Icon type="ios-paper" /> -->
                                {{item.title}}
                            </MenuItem>
                            <Submenu v-else :name="item.title">
                                <template slot="title">
                                    <!-- <Icon type="ios-paper" /> -->
                                    {{item.title}}
                                </template>
                                <MenuItem  :to="it.to" v-for="(it,idx) in item.children" :key="idx" :name="it.to">{{it.title}}</MenuItem>
                            </Submenu>
                        </div>
                    </Menu>
                </Col>
            </GeminiScrollbar>
        </div>
        <div class="header">
            <Breadcrumb>
                <BreadcrumbItem @click.native="componentsinit" :to="activename">{{breadcrumb.ftitle}}</BreadcrumbItem>
                <BreadcrumbItem v-if="breadcrumb.stitle">{{breadcrumb.stitle}}</BreadcrumbItem>
            </Breadcrumb>
        </div>
        
  </div>
</template>

<script>
import Bus from '../utils/bus'
import breadcrumb from "@/assets/map/breadcrumb";
import img from '../../static/images/logo.png'

export default {
  name: 'layout',
  components:{
      
  },
  data() {
    return {
        logo:img,
        theme2: 'light',
        activename:'workshop',
        opennames:['数学分析'],
        breadcrumb:{
            'ftitle':'',
            'stitle':''
        },
        menu:[
            {
                type:'',
                title:'数学分析',
                // category:
                children:[
                    {
                        title:'实数集与函数',
                        to:'Chapter1'
                    },
                    {
                        title:'数列极限',
                        to:'Chapter2'
                    },
                    {
                        title:'函数极限',
                        to:'Chapter3'
                    }
                ]
            },
            // {
            //     type:'singlemenu',
            //     title:'任务分配',
            //     to:'TaskAssign'
            // },
            
        ]

    }
  },
  created(){
      Bus.$on('childbreadcrumb',(name)=>{
          this.$set(this.breadcrumb,'stitle',name)
      })
  },
  mounted() {},
  computed: {
    id() {
      return this.$store.state.id
    },
  },
  watch:{
    '$route'(to,from){
        this.activename = this.$route.path.substr(1);
        if(this.activename){
            this.breadcrumb = this.findbreadcrumb(this.menu);
        }
        this.$nextTick(()=>{
            this.$refs.menus.updateOpened();
        })
    },
  },
  methods: {
      /**
       * 递归查询当前路由所属父路由(或者本身就是父路由)的title，供面包屑使用
       * @param:arr 路由数组
       * @param:title 父路由title
       */
      findbreadcrumb(arr,title){
        for(var i = 0,size = arr.length;i<size;i++){
            if(arr[i].to==this.activename){
                // this.opennames = [].concat(title?title:arr[i].title)
                return title?{'ftitle':title,'stitle':arr[i].title}:{'ftitle':arr[i].title};
            }else if(arr[i].children){
                var finaltitle = this.findbreadcrumb(arr[i].children,arr[i].title);
                if(finaltitle){
                    return finaltitle;
                }
            }
        }
      },
      /**
       * 带子路由的页面，路由初始化
       */
      componentsinit(){
          var path = this.$route.path.substr(1);
          if(breadcrumb.has(path)){
            Bus.$emit('componentinit');
          }
      }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/public/less.less';
.layout{
    position:absolute;
    width:100%;
    height:100%;
    .logo{
        height:60px;
        background:white;
        border-bottom:1px solid @blue;
        line-height:60px;
        img{
            height:58px;
        }
    }
    .sidemenu{
        width:240px;
        height:100%;
        border-right:1px solid @blue;
        position:absolute;
        top:0;
        left:0;
        .ivu-menu{
            color:white;
            // >div{
            //     border-top:1px solid @gray;
            // }
            // >div:nth-child(1){
            //     border:none;
            // }
        }
        background:@blue;
        .scroll{
            height:calc(100% - 61px);
        }
        .ivu-menu-vertical.ivu-menu-light:after{
            display:none;
        }
        .ivu-menu-light{
            background: @blue;
        }
        .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
            background: @lightblue;
            color:@white;
        }
        .ivu-menu-submenu-title,.singlemenu{
            text-align: left;
            font-size:16px;
            padding-left:60px;
        }
        .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after{
            display:none;
        }
        .singlemenu{
            i{
                margin-right:13px;
            }
        }
        
    }
    .header{
        width:calc(100% - 240px);
        height:60px;
        line-height:60px;
        position:absolute;
        right:0;
        top:0;
        border-bottom:1px solid @blue;
        background:@white;
        text-align:left;
        padding:0 20px;
    }
}
</style>
