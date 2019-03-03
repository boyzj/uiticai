<template>
    <div class="loginbox clearfix main">
       <img src="" class="topimg" alt="">
        <!-- <alert v-model="show" :title="alerttext"></alert> -->
       <div class="clearfix">
         <!-- <span>
            <img src="../../static/img/login/user.png" alt="" class="icon">
           <input type="text" name='tel' class="tel" v-model="tel" placeholder="请输入您的手机号" maxlength="11">
         
         </span> -->
   
          <group>
              <x-input v-model="tel" mask='99999999999' type='text' placeholder="请输入手机号" is-type="china-mobile" :max='11' required >
              <img slot="label" class="icon" src="../../static/img/login/user.png" >
      </x-input>
          </group>
           <group class="borderb">
              <x-input v-model="password" type='password'  placeholder="请输入密码" required  :min="6">
              <img slot="label" class="icon"  src="../../static/img/login/password.png" >
            </x-input>
          </group>
      
         <x-button  type="primary" :disabled='isdisabled'  :show-loading='btnload'  class='btn'  @click.native="login">登陆</x-button>
        
         <span class="other clearfix">
           <router-link to="/register"  class="fl">注册</router-link>
           <router-link to="/findpassword" class="fr">忘记密码</router-link>
         </span>
       </div>
      
 
    </div>
</template>

<script>
import {login} from '../api/api';
import { AlertModule ,XInput} from 'vux'
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      password:'',
      tel:'',
      show:true,           
      btnload:false,       //btn load
      isdisabled:false,  //false 可点击  true 可点击
      // registPassword:function(val){
      //   return {
      //     valid: val>6,
      //     msg: '密码长度大于6'
      //   }
      // }
    }
  },
  components:{
     Alert:alert,
     XInput
  },
  methods:{
   login(){
  
     if(!this.$regTel(this.tel)){
         return false;
     }
    //  if(!this.tel){
    //      this.$showalert('请输入手机号')
    //     return false;
    //   }
      if(!this.password){
          this.$showalert('请输入密码')
         return false;
      }
      this.btnload = true
      
      let para = {
        account:this.tel,
        password:this.password
      }
      this.isdisabled = true;
      login(para).then((res) => {
         if(res.status==0){
           if(res.data.id){
              localStorage.removeItem('token')
              localStorage.setItem('token',res.data.token)
             // localStorage.setItem('userInfo',JSON.stringify({userId:res.data.id,userRole:res.data.role}));
             
           }
           this.$toast('登陆成功')
           setTimeout(() => {
            this.$router.push({path:'/orderFoot'})  
           },2000)
         }else{
           this.$toast(res.message)
         }
         this.isdisabled = false;         
      })
      
    },
    registPassword(){
       if(this.password!==1){
          
       }
    } 
  },
  mounted(){
       
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loginbox .topimg{
   margin-bottom: 1.5rem;
   width: 100%;
   height: 3rem;
   background: red;
   display: inline-block;
  }
  group{
    border-top: 0;
  }
  .loginbox{
    height: 100%;
    background: #fff;
  }
  .loginbox>div{
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
  }
  span{
    display: inline-block;
    margin: .2rem 0;
    width: 100%;
    height: .7rem;
  
    border-bottom: 1px solid #eee;
    font-size: .3rem;
  }
  span.other{
    width: 60%;
    border: 0;
    color: #999;
    font-size: .15rem;
  }
  span input{
    text-align: left;
    text-indent: .5rem;
    float: left;
    line-height: .7rem;
  }
  .btn{
    /* background: url('../../static/img/login/1-13.png')no-repeat center; */
    background: red;
    width: 90%;
    height: .8rem;
    border-radius:.5rem;
    margin-top: 1rem; 
  }
  .icon{
    float: left;
    width: .5rem;
    margin-right: .5rem;
  }
</style>