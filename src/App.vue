<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{
   requireLogin(){
    if (this.isWechat()) {
            var openId = this.$getCookie('open_id');
            console.log(openId);
            if (!openId) {
                var url = '/app/Wchat/getWechatId?redirect=' +location.href;
                this.$setCookie('url_z',location.href,7);
                location.href=url;
            }
            return openId;
        }else{
          this.$toast('请在微信中登录！');
          return false;
        }
   },
   isWechat(){
     var ua = window.navigator.userAgent.toLowerCase();

        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
   },
 
  },
  // watch:{
  //   '$router'(to,from){
  //      console.log(to)
  //      console.log(from)
  //      if(from=='/orderlist'||from=='/metaItems'){
  //         this.$router.push({'path':'/myCenter'})
  //      }
  //   }
  // },
  mounted(){
 
           
          //  this.$overscroll(document.querySelector('.scroll')); //哪里需要可以局部滚动，添加一个“scroll”的class



  },
  created(){
    console.log('this.$route')
    //this.$route.meta.title = '111'
  
    
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;  
  font-size: .2rem;
  width: 100%;
  height: 100%;
  position: relative;
  /* min-height: 100%; */
  overflow: scroll;
  }
  *{
    margin: 0;
    padding: 0;
  }
  body{
    position: relative;
  }

   body,html{/*-webkit-overflow-scrolling: touch;-webkit-user-select:text;-moz-user-select:text; -webkit-tap-highlight-color: rgba(0,0,0,0); */
  user-select:text;-webkit-overflow-scrolling: touch; font-family: -apple-system-font, "Microsoft Yahei", sans-serif; background:#fff; color:#464646; margin:0;padding:0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;width: 100%;height: 100%;}
dd,dl,dt,li,p,ul,h2,h3,h4{margin:0;padding:0;list-style:none;}
body,html{height:100%;overflow: hidden;}
html{
  position: fixed;
  top: 0;
}
.scroll{
  overflow-y: scroll;
  height: 100%;
}
ul{list-style:none;}
img{height:auto;vertical-align:middle;width: 100%}
a{color:#333;text-decoration:none;}
a:link{-webkit-tap-highlight-color:transparent;-moz-tap-highlight-color:transparent;-webkit-touch-callout:none;-moz-touch-callout:none;}
a,img{-webkit-touch-callout:none;-moz-touch-callout:none;}
b,em,i{font-style:normal;}
button,input,textarea{outline:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;appearance:none;-webkit-appearance:none;-moz-appearance:none; margin:0;padding:0;border: 0;}
h1,h2,h3{font-weight:400;}
p{margin:0;padding:0;}
strong{font-weight:normal;}
select{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:#fff;}
 .clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
 .fl{float: left;}
  .fr{float: right;}
.hide{
  display: none;
}  
  .ellipsis {          /*省略 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
  .borderb{
    border-bottom: 1px solid #eee;
  }

  /* color */
 .bg1{
   background: #9edae5
 }
 .bg2{
   background: #e6e4d7
 }
 .bg3{
   background: #bccfcd
 }
 .bg4{
   background: #d4e3e6
 }
 .colorw{
   color: #fff
 }
 .color3{
   color: #333
 }
 .colorA{
   color: #29aae1
 }
 .noData{
  font-size: .35rem;
 }
 
  /* reset */
  .weui-cells:before,.weui-search-bar:before{
     border: 0!important;
  }
  .weui-cells::after,.weui-search-bar:after{
     border: 0!important;
  }
  div.vux-tab{
    background-color:transparent;
  }
  .weui-search-bar,.weui-search-bar__form{
      background-color: rgba(0, 0, 0, 0)!important;
      }
      label.weui-search-bar__label{
        text-align: left;
      }
      div.vux-search-fixed{
        background:rgba(0, 0, 0, 0); 
      }
  .weui-search-bar__label span,.weui-search-bar__label .weui-icon-search{
  margin-top: 4px
}   
input.vux-number-input{
  font-size: .32rem;
}
 a.vux-number-selector-plus{
    padding: 3px 3px;
  }
  a.vux-number-selector-sub{
    padding: 4px 3px 2px;
  }
  .search_btn .weui-cell{
   padding: 0;
   margin-top: -1px;
  }
  .search_btn .weui-input{
   height: .5rem;
   
  }

  .datebox.vux-button-group > a.vux-button-group-current{
    background: #29aae3;
  }
  .datebox.vux-button-group > a.vux-button-tab-item-middle:after{
    border-right: 1px solid #29aae3;
    border-top: 1px solid #29aae3;
    border-bottom: 1px solid #29aae3;
    border-left: none;
    color: #29aae3;
  }
  .datebox.vux-button-group > a.vux-button-tab-item-first:after{
    border: 1px solid #29aae3;
  }
  .datebox.vux-button-group > a.vux-button-tab-item-last:after{
    border: 1px solid #29aae3;
  }
  .mycenter .infoItem_group .vux-no-group-title,.mycenter .infoItem_group .weui-cells{
   margin-top: 0
 }
 .mycenter .infoItem_group .weui-cells{
   margin-top: .2rem;
 }
 .orderSure .item .weui-input{
    border: 1px solid #999;
    border-radius: .1rem;
    text-indent: .1rem;
    width: 88%;
 }
 .orderSure .item .weui-cell__hd{
   width: 1.5rem;
 }
.orderSure .item .user_info .weui-input{
    border: 0;
    border-radius: .1rem;
    text-indent: .1rem;
    width: 100%;
 }
  .orderSure .item .user_info .weui-cell__hd{
   width:0;
 }
 .borderRed{
   border-color: #CE3433!important;
 }
 .indexbackIcon{
    position: relative;
    top: 1px;
    display: inline-block;
    width: .2rem;
    height: .2rem;
    border-width: 1px;
    border-style: solid;
    border-color: #007bed #fff #fff #007bed;
    transform: rotate(-45deg);
    }
</style>
