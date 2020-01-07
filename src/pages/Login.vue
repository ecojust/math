<!--
 * @Author: 桔子桑
 * @Date: 2019-12-08 02:50:27
 * @FilePath: /robot/src/pages/Login.vue
 * @Description: 文件描述
-->

<template>
  <div class="Login">
    <div class="Loginform">
      <div class="logo">
        <img :src="logo" alt="">
        <span class="title">TurboConnect</span>
      </div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button size="large" type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
    </div>
  </div>
</template>

<script>
import Bus from '../utils/bus'
import img from '../../static/images/logo.png'
import * as api from '@/assets/api/system'
var md5 = require('md5')


export default {
  name: 'login',
  data() {
    return {
      logo:img,
      formInline: {
          user: 'ZS001',
          password: 'Password'
      },
      ruleInline: {
          user: [
              { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
              { required: true, message: 'Please fill in the password.', trigger: 'blur' },
              { type: 'string', min: 1, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
      }
    }
  },
  mounted() {},
  computed: {
    id() {
      return this.$store.state.id
    },

  },
  created(){
    window.addEventListener('keydown',e=>{
        if(e.keyCode==13){
         this.handleSubmit('formInline')
        }
    })
  },
  methods: {
    handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                var md5pwd = md5(this.formInline.user+'_'+this.formInline.password).toUpperCase();
                var data = {
                  empId:this.formInline.user,
                  password:md5pwd
                }
                api.login(data).then(res=>{
                  this.$Message.success('Success!');
                  var userinfo = {
                    name:this.formInline.user
                  };
                  localStorage.setItem('token',res.data.Token);
                  Bus.$emit('updateuser',userinfo);
                  var redirect = this.$route.query.redirect;
                  if(redirect){
                    this.$router.push({
                      path:'/' + redirect
                    })
                  }else{
                    this.$router.push({
                      path:'/WorkShop'
                    })
                  }
                })
            } else {
                this.$Message.error('Fail!');
            }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/public/less.less';
.Login{
  position: relative;
    .Loginform{
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 430px;
      width: 450px;
      background-color: @wtrgb;
      border-radius: 10px;
      box-shadow: 0px 0px 10px  0  #888888;
      text-align:center;
      padding:75px 40px;
    }
    .logo{
      margin-bottom:40px;
      img{
        height:80px;
      }
      .title{
        display: inline-block;
        height:80px;
        line-height: 80px;
        vertical-align: top;
        font-size:32px;
        font-weight:700;
      }
    }
  }
</style>
