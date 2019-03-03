import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import orderFoot from '@/page/orderFoot'
import more from '@/page/more'
import login from '@/page/login'
import findpassword from '@/page/findPsd'
import register from '@/page/register'


import {AlertPlugin} from 'vux'

Vue.use(AlertPlugin)
Vue.use(Router)

export default new Router({
   mode:'history',
   base:'/',
// base:'/',
  routes: [
     {
       path:'/orderFoot',
       meta:{
         title:'下单',
         aling:'center',        
       },
       component:orderFoot,

     },{
      path:'/more',
      meta:{
        title:'更多玩法',
        aling:'center',        
      },
      component:more,

    },{
      path:'/login',
      meta:{
        title:'登陆',
        aling:'center',        
      },
      component:login,

    },{
      path:'/findpassword',
      meta:{
        title:'忘记密码',
        aling:'center',        
      },
      component:findpassword,

    },{
      path:'/register',
      meta:{
        title:'注册',
        aling:'center',        
      },
      component:register,

    }
    
  ]
})
