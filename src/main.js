// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {WechatPlugin,AjaxPlugin,Msg,Group,XButton,InlineLoading,Loading,XDialog ,Spinner ,Toast, Tab, TabItem ,DatetimePlugin} from 'vux'

import Toast1 from '@/components/toast'
import load from '@/components/load'
import {} from '@/api/api'
//import Calendar from 'vue-mobile-calendar'

import pdf from '@/components/pdf'
Vue.use(pdf)

Vue.use(Toast1)
Vue.use(load)
//Vue.use(IScrollView,IScroll)
Vue.use(WechatPlugin)

Vue.component('msg',Msg)
Vue.component('group', Group)
Vue.component('x-button', XButton)
Vue.component('x-dialog', XDialog)
Vue.component('inline-loading', InlineLoading)
Vue.component('loading', Loading)
Vue.component('spinner', Spinner)
Vue.component('toast', Toast)

Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.use(require('vue-wechat-title'))
Vue.use(DatetimePlugin)
//Vue.use(Calendar)
Vue.config.productionTip = false
//Vue.prototype.$imgbaseUrl = 'http://yinchuanhitech.com/';
//Vue.prototype.$imgbaseUrl = '/';
Vue.prototype.$imgbaseUrl = 'http://elec.meishifulu.cn/';
//公用函数;


Vue.prototype.$regTel = function(tel){
  var reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
   if(!tel){
     this.$toast('请填写手机号');
     return false;
   }
   if(!reg.test(tel)){
    this.$toast('输入的手机号有误');
     return false;
   }
   return true;
  
}
Vue.prototype.$setCookie = function(cname,cvalue,exdays){
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname+"="+cvalue+"; "+expires+";path=/";
},
Vue.prototype.$getCookie = function(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
  }
  return "";
},
Vue.prototype.$getUrlParam = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg);  //匹配目标参数
  if (r != null) return unescape(r[2]); return null; //返回参数值
},

Vue.prototype.$isLogin = function(requieLogin) {   
   if(!requieLogin){
    
   // if(window.confirm('是否去登陆')){
      this.$toast("未登录，即将前往登陆界面")
      setTimeout(() => {
        router.push({path:'/login'})
      }, 2000);
   // }
     
   }
}
// Vue.prototype.$toast = function(text,pos){
//   if(!pos){
//      pos='middle';
//   }
//   this.$vux.toast.text({
//     text,
//     position:pos
//   })
// }

Vue.prototype.$showalert = function(title,content,show,hide){   
    this.$vux.alert.show({
      title: title,
      content: content,
      onShow () {
        if(show){
           show()
        }
        
      },
      onHide () {
        if(hide){
          hide()
        }
        
      }
    })
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

