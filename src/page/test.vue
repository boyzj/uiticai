<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
<template>
    <div class="test" style="background:#fff;">
     
    </div>
</template>

<script>
import Foot from '@/components/footer';

import {index,OrderInfo} from '@/api/api'
import { Flexbox, FlexboxItem,Swiper,SwiperItem,Search} from 'vux'
import { setTimeout } from 'timers';

export default {
  name: 'test',
  data () {
    return {
     
      test:'',
     
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Foot,
    Search,
    Swiper,SwiperItem
    
  },
  methods:{
     
  },
  
   mounted(){
    //this.clientHeight = document.documentElement.clientHeight;
    const that = this;
    //this.$overscroll(document.querySelector('.scroll'));
    //this.$isLogin() 
  },
  created(){
     this.getdata()
    
   // this.$route.push({path:'/xxx',query:{id:1}});//类似get传参，通过URL传递参数
    //this.$route.push({path:'/xxx',params:{id:1}});//类似post传参
    //this.$route.query.id
    //this.$route.params.id
    
     
   }
}
</script>


