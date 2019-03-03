<template>
    <div class="main">
      <div class="regsittop">
        注册
      </div>
      <div class="registform">
       <group class="borderb">
            <x-input v-model="tel" mask='99999999999' maxLenght='11' type='text' placeholder="请输入手机号" is-type="china-mobile" :max='11' required >
        <img slot="label" class="icon" src="../../static/img/login/user.png" >
      </x-input>
          </group>
          <group class="borderb">
            <x-input v-model="nickname"  type='text' placeholder="请输入昵称"   required >
        <img slot="label" class="icon" src="../../static/img/login/user.png" >
      </x-input>
          </group>
            <!-- <div class="code_input borderb">
              <img slot="label" class="icon codeicon" src="../../static/img/login/password.png" >
                 <input v-model="code" class="code" type='text' placeholder="请输入验证码"  required >
                 <div class="codebox" @click='getCode'>
                    获取验证码
                </div>
            </div> -->
            
           <group class="borderb">
              <x-input v-model="code" type='text'  placeholder="图形验证码" required  >
                <img slot="label" class="icon"  src="../../static/img/login/password.png" >
              </x-input>
              <div class="imgCode" @click="getCode">
                {{showCode}}
              </div>
          </group>
          <group class="borderb">
              <x-input v-model="password" type='password'  placeholder="请输入密码" required  :min="6">
                <img slot="label" class="icon"  src="../../static/img/login/password.png" >
              </x-input>
          </group>
          <group class="borderb">
              <x-input v-model="againPwd" type='password'  placeholder="请确认密码" required  :min="6">
                <img slot="label" class="icon"  src="../../static/img/login/password.png" >
              </x-input>
          </group>
          <x-button  type="primary" :disabled='isdisabled'  :show-loading='btnload'  class='btn'  @click.native="login">注册</x-button>
      </div>
      <div>
      <!-- <confirm v-model="showCode"
      @on-cancel="onCancel"
      @on-confirm="onConfirm">
      <div class="showcode clearfix">
        <input type="text" v-model="imgCode">
        <div class="codeBox">
          <img :src="'http://gd.chinazhix.com/app/captcha/getCode?phone='+tel" v-if='imgshow' @click="showimg" alt="">
        </div>
        
      </div>
      </confirm> -->
    </div>
   </div>
</template>

<script>

import {getCode,regist} from '../api/api';
import { XInput,Confirm } from 'vux'
import { setTimeout } from 'timers';
export default {
  name: 'regist',
  data () {
    return {
     
      tel:'',
      password:'',
      againPwd:'',
      nickname:'',
      imgshow:false,
      code:'',
      imgCode:'',
      isdisabled:false,
      btnload:false,
      showCode:'',
    }
  },
  watch:{
     
  },
  methods:{
   
   login(){
     if(!this.tel){
        this.$toast('请填写手机号');
        return false ;
     }
     if(!this.nickname){ 
         this.$toast('请填写昵称')
         return false;
     }
     if(!this.code){ 
         this.$toast('请填写验证码')
         return false;
     }
      if(this.code!=this.showCode){
         this.$toast('填写的验证码错误')
         return false;
     }
     if(!this.password){
         this.$toast('请填写密码')
         return false;
     }
     if(this.password.length<6){
         this.$toast('密码长度不能小于6位数')
         return false;
     }
     if(!this.againPwd){
         this.$toast('请填写确认密码')
         return false;
     }
     if(this.password!=this.againPwd){
         this.$toast('俩次密码不同')
         return false;
     }
    
     let para = {
        nickname:this.nickname,  
        repassword:this.againPwd, 
        code:this.code,
        phone:this.tel,
        password:this.password
     };
    regist(para).then((res) => {
         if(res.status==0){
            this.$toast('注册成功')
          setTimeout(()=>{
            this.$router.push({path:'/login'})
          },2000)
         }else{
           this.$toast(res.message)
         }
    })
   },
   getCode(){
     getCode().then((res) => {
      if(res.status==0){
        this.showCode = res.data.code;
      }
    })
    
   }
  },
  components:{
     XInput,Confirm 
  },
  mounted(){
    this.getCode()
  //   JsBarcode(this.$refs.code1,"Text margin", {
	//   format: "CODE39",
  //   lineColor: "#000",
 
  //   displayValue:true,
  //   text:'111',
	//   width: 3,
  //   height: 70,
    
	//   displayValue: false
  // });
//  JsBarcode(this.$refs.code1)
//  .options({font: "OCR-B"}) // Will affect all barcodes
//   .EAN13("1234567890128", {fontSize: 18, textMargin: 0})
//   // .blank(20) // Create space between the barcodes
  
//    .render();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  overflow: hidden;
  min-height: 100%;
  background: #fff;
  
}
.borderb{
margin-bottom: .5rem;
position: relative;

}
.imgCode{
  width: 2.3rem;
  height: 100%;
  background: #eee;
  position: absolute;
  top: 0;
  right: 0;
  z-index:1;
  line-height: 1rem;
}
.registform{
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}
.goback{
  color: #fff;
  margin-left: .5rem;
}
.regsittop{
  line-height: .8rem;
  font-size: .3rem;
  color: #fff;
  width: 100%;
  /* background: url('../../static/img/login/1-13.png')no-repeat center; */
  background: red;
}
.showcode .codeBox,.showcode input{
   float: left;
   border: 1px solid #eee;
}
.showcode .codeBox{
  width: 40%;
  height: .6rem;
}
.showcode .codeBox img{
  height: 100%;
}
.showcode input{
  width: 50%;
  height: .6rem;
  line-height: .6rem;
  text-indent: .2rem;
  margin-right: 3%;
}
span{
    display: inline-block;
    margin: .2rem 0;
    width: 100%;
    height: .7rem;
  
    border-bottom: 1px solid #eee;
    font-size: .3rem;
  }
  .code_input{
    margin-top: 1.17647059em;
    background-color: #ffffff;
    line-height: 1.41176471;
    font-size: 17px;
    overflow: hidden;
    position: relative;
    padding-bottom:.2rem; 
  }
  .code_input input{
    width: 3rem;
    float: left;  
    border: 0;
    outline: 0;
    -webkit-appearance: none;
    background-color: transparent;
    font-size: inherit;
    color: inherit;
    height: 1.41176471em;
    line-height: 1.41176471;
  }
  .codebox{
    border: 1px solid #29aae1;
    color: #29aae1;
    float: right;
    padding: 0 .3rem;
    line-height:2; 
    border-radius: .2rem;
    font-size: .25rem;
  }
  
  span.other{
    width: 90%;
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
  span input.code{
    width: 2rem;
    border: 1px solid #333;
    float: left;
  }
  .btn{
    /* background: url('../../static/img/login/1-13.png')no-repeat center; */
    background: red;
    width: 90%; 
    height: .8rem;
    border-radius:.5rem;
    margin-top: 2rem; 
  }
.icon{
    float: left;
    width: .5rem;
    margin-right: .5rem;
  }
  .codeicon{
    margin-left: .25rem;
    width: .55rem
  }
</style>