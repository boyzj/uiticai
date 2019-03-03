<template>
     <div class="footer">
       <ul class="footerItems clearfix">
         <li class="footerItem" @click="changUrl('index')">
            <img  v-if="footShow=='index'" src="../../static/img/common/footer_index.png" alt="">
            <img  v-else src="../../static/img/common/footer0_index.png" alt="">
             <p :class="[footShow=='index' ? 'aabe5' :'']">首页</p>  
         </li>
         <li class="footerItem" @click="changUrl('type')">
           <img v-if="footShow=='type'" src="../../static/img/common/footer_type.png" alt="">
           <img  v-else src="../../static/img/common/footer0_type.png" alt="">
            <p :class="[footShow=='type' ? 'aabe5' :'']">分类</p>
         </li>
         <li class="footerItem" @click="changUrl('cart')">
           <img v-if="footShow=='cart'" src="../../static/img/common/footer_cart.png" alt="">
            <img  v-else src="../../static/img/common/footer0_cart.png" alt="">
             <p :class="[footShow=='cart' ? 'aabe5' :'']">购物车</p>
         </li>
         <li class="footerItem" @click="changUrl('user')">
           <img v-if="footShow=='user'" src="../../static/img/common/footer_user.png" alt="">
            <img  v-else src="../../static/img/common/footer0_user.png" alt="">
             <p :class="[footShow=='user' ? 'aabe5' :'']">我的</p>
         </li>
        
       </ul>
    </div>
</template>

<script>

export default {
  name: 'foot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['footShow'],
  methods:{
changUrl(_url){
       if(_url == 'cart'){

       }
       this.$router.push({path:'/'+_url})
     }
  },
  mounted(){
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .footer{
       background: #000;
    overflow: hidden;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 1.35rem;
 }
 .footerItems{
   width: 90%;
   margin: .2rem auto;
   color:#fff;
   text-align: center;
  
 }
 
.footerItems img{
  width: .5rem;
  height: .5rem;
  margin-bottom:.2rem;
}
.footerItem{
    float: left;
    width: 25%;
 }
 .aabe5{
   color: #2aabe5;
 }
</style>