<template>
    <div class="mycenter">
     
      <group class="infoItems">
        <x-input title="原密码"  text-align='left' class="items" type="password" required placeholder="请输入原密码" v-model="password"></x-input>
        <x-input title="新密码"  text-align='left' class="items" type="password" required placeholder="请输入新密码" v-model="password1"></x-input>
        <x-input title="确认新密码"  text-align='left' class="items" type="password" required placeholder="请再次输入新密码" v-model="password2"></x-input>
      </group>
       
     <x-button  @click.native="fixPassword" :show-loading='show'>修改密码</x-button>
    </div>
</template>

<script>
import {modifyPassword} from '../api/api';
import Foot from '@/components/footer';
import {XInput,XButton } from 'vux';
export default {
  name: 'mycenter',
  data () {
    return {
        password:'',
        password1:'',
        password2:'',
       show:false,
       imgbaseUrl:this.$imgbaseUrl,
       
    }
  },
  
  components:{
    XInput,Foot
  },
  methods:{
    fixPassword(){
        let password = this.password;
        let password1 = this.password1;
        let password2 = this.password2;
       if(!password){
          this.$toast('请输入原密码');
           return false;
       }
       if(!password1){
           this.$toast('请输入新密码');
           return false;
       }
      if(!password2){
           this.$toast('请再次输入新密码');
           return false;
       }
       if(password1!=password2){
           this.$toast('俩次密码不相同');
           return false;
       }
       this.show=true;
       let parm = {old_password:password,password:password1};
      modifyPassword(parm).then((res) => {
          if(res.code==0){
              this.$toast("修改成功")
              this.show=false;
              setTimeout(()=>{
                  this.$router.push({path:'/user'})
              },2000)
          }else{
              this.$toast(res.msg)
          }
      })
    }
  },
  mounted(){
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .infoItems{
      font-size: .35rem;
  }
  button{
    margin-top:1rem;
    width: 80%;
    line-height: 1rem;
    background: url('../../static/img/index/sure.png')no-repeat center;
    background-size:100%; 
    font-size: .4rem;
    color: #ffffff;
  }
  
</style>