<template>
    <div class="index" style="background:#fff;">
     <div class="scroll">
      <div class="tophead">
      <div class="header clearfix">
        <div class="fl qr_head" @click="scanQRCode"> 
          <img src="../../static/img/common/sao.png"  alt="">
          <p>扫一扫</p>
           </div> 
        <div class="search_mock fl" @click="gosearch">
          <x-icon type="ios-search" class="search_icon" size=".55rem"></x-icon>
          <label>搜一搜更多精彩</label>
        </div>
         <router-link class="fl" to="/news"><i class="icon_news"></i></router-link>
      </div>
      <div class='banner'>
               <swiper  auto :loop='true' style="width:100%;margin:0 auto;" 
                        height="310px"  dots-class="custom-bottom" dots-position="right">
                 <swiper-item v-for="(item,i) in banner" :key="i"  class="black">
                     <a :href='item.adv_url'>
                       <img :src="imgbaseUrl+item.adv_image" :alt="item.adv_title" style="height:100%">
                     </a>
                  </swiper-item>       
              </swiper>
      </div>
     </div>
      <div class="content">
      <div class="hot" style="margin-top:.2rem">
        <div class="titlebox clearfix">
          <h1 class="hottitle title fl"><label class="title_line"></label>热门分类</h1> 
        </div>
        
        <ul class="hotItems clearfix" v-if='hotlist.length>0'>
              <!-- <li v-for ='(item,index) in hotlist' :key='index' class="hot_item">
                    <router-link :to='"/goodsItems/"+item.id' class='link'>
                         {{item.short_name}}
                    </router-link>
             </li>  -->
            <li class="hotItem_two">
                <div class="paddb bg1">
                  <router-link :to='"/goodsItems/"+hotlist[2].id' class='link'>{{hotlist[2]['short_name']}}</router-link>
                </div>
                <div class="padds bg3">
                  <router-link :to='"/goodsItems/"+hotlist[0].id' class='link'>{{hotlist[0]['short_name']}}</router-link>
                </div>
            </li>
             <li class="hotItem_two">
                <div class="padds bg2">
                  <router-link :to='"/goodsItems/"+hotlist[3].id' class='link'>{{hotlist[3]['short_name']}}</router-link>
                </div>
                <div class="paddb bg4">
                  <router-link :to='"/goodsItems/"+hotlist[1].id' class='link'>{{hotlist[1]['short_name']}}</router-link>
                </div>
            </li>
            <li class="hotItem_one bg1">
              <router-link :to='"/goodsItems/"+hotlist[4].id' class='link'>{{hotlist[4]['short_name']}}</router-link>
            </li>
            <li class="hotItem_one bg2">
              <router-link :to='"/goodsItems/"+hotlist[5].id' class='link'>{{hotlist[5]['short_name']}}</router-link>
            </li>
      </ul>
      </div>
       <div class="dissertation">
        <div class="titlebox clearfix">
          <h1 class="disstitle title fl"><label class="title_line"></label>专题推荐</h1> 
           <router-link to="/topicItems" class="fr mroe">更多&nbsp;></router-link>
        </div>
        
        <ul class="dissertationItems clearfix">
         <li class="dissertationItem" v-for='item in topiclist' :key="item.id">
           <router-link :to="'topic/'+item.id">
            <img :src="imgbaseUrl+item.image" :alt="item.title"  onerror='javascript:this.src="./static/img/default.png";'>
            <h3>{{item.title}}</h3>
           </router-link>
         </li>
        
       
      </ul>
      </div>
     </div>

     </div>
       <Foot footShow="index" v-if='show' ref="foot"></Foot>
    </div>
</template>

<script>
import Foot from '@/components/footer';

import {} from '@/api/api'
import { Flexbox, FlexboxItem,Swiper,SwiperItem,Search} from 'vux'
import { setTimeout } from 'timers';

export default {
  name: 'index',
  data () {
    return {
      
      results:[],
      test:'',
      showtoast:false,
      text:'',
      bg:'#000',
      show:true,
      cancelColor:'#000',

      imgbaseUrl:this.$imgbaseUrl,
      banner:[],
      hotlist:[],
      topiclist:[],
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
    scanQRCode(){
  let self = this;
        this.$wechat.scanQRCode({
                      // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
                      needResult : 1,
                      desc : 'scanQRCode desc',
                      scanType : [ "qrCode", "barCode" ],
                      success : function(res) {
                          //扫码后获取结果参数赋值给Input
                         let code = res.resultStr || '';
                         // self.$toast(code)
                          //商品条形码，取","后面的
                          if(code){
                            OrderInfo({order_id:code}).then((data) => {
                                if(data.code==0){
                                  let userInfo = self.$getCookie('userRole');
                                    userInfo = userInfo.split('a');
                                  if(userInfo.indexOf('2',0)>=0 && data.data.order_status==1){
                                    self.$router.replace({path:'/orderCheck/'+code})
                                  }else if(userInfo.indexOf('10119',0)>=0 && data.data.order_status==5){
                                    self.$router.replace({path:'/orderCheck/'+code})
                                  }else if(userInfo.indexOf('10120',0)>=0 && data.data.order_status==6){
                                    self.$router.replace({path:'/orderCheck/'+code})
                                  }else if(userInfo.indexOf('10121',0)>=0 && data.data.order_status==7){
                                    self.$router.replace({path:'/orderCheck/'+code})
                                  }else{
                                    self.$router.replace({path:'/orderInfo/'+code})
                                  }
                                }else{
                                   self.$toast(res.msg)
                                }
                            })
                              
                            return false;
                          }
                      },
                      fail:function(error){
                      //  self.$toast('fail')
                        
                      }
                  });
   
      
                
    },
    gosearch(){
      this.$router.replace({path:'/search'})
    },
    // onBlur(){
    //  //  this.show=true;
    // },
    // onCancel () {
    //   console.log('on cancel')
    // },
    getdata(){
      this.$loadshow()
       index().then((res) => {
        console.log(res)
        if(res.code==0){
            this.banner = res.data.platform;
            this.hotlist = res.data.category_list;
            this.topiclist = res.data.topic_list;
        }else{
           this.$toast(res.msg)
        }
        setTimeout(() => {
          this.$loadhide()
        },400)
        
      })
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.icon_news{
    // position: fixed;
    // top:.8rem;
    // right: .4rem;
    display: inline-block;
    width: .5rem;
    height: .5rem;
    margin-top: .4rem;
    background: url('../../static/img/common/icon-13.png')no-repeat center;
    background-size:100% 100%; 
  }
  .index{
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .hot_item{
     float: left;
     
  }
  .scroll{
    overflow-y: scroll;
    height: 100%;
  }
  .tophead{
    overflow: hidden;
    position: relative;
  }
  .qr_head{
    width: 1rem;
    margin-top: .25rem;
    margin-right: .2rem;
    color:#fff;
    font-size: .2rem;
    text-align: center;
    line-height: .25rem;
    img{
      width:60%
    }
  }
  
  .header{
    position: absolute;
    top: 0;
    width: 90%;
    left: 5%;
    z-index: 6;
  }

  .search_mock{
    width: 65%;
    margin-top: .3rem;
    margin-right: .6rem;
    height: .6rem;
    border: 1px solid #eee;
    border-radius: 1.2rem;
    text-align: left;
    text-indent: .2rem;
    position: relative;
    label{
          position: absolute;
          top: -0.1rem;
          left: .8rem;
          color: #fff;
          font-size: .26rem
    }
  }
 .search_icon{
   fill:#999;
   margin-top: .02rem
 }
.content{
  width: 90%;
  margin: 0 auto 1.4rem;
}
.titlebox{
  line-height: .5rem;
  height: .8rem;
  overflow: hidden;
}
.hotItem{
  height: 100%;
}
 .title{
   font-size: .35rem;
   color: #666;
 }
 .title_line{
   width: 0;
   height: 100%;
   border-left:.08rem solid #2aabe4;
   margin-right:.2rem; 
 }
 .hotItems{
   margin: .2rem 0;
   overflow: hidden;
   height: 3rem;
   li{
     float: left;
     
     margin-left: 1%;
     text-align: center;
     color: #fff;
     font-size: .22rem;
      .link{
        color: #fff;
        display: inline-block;
        width: 75%;
      }
      div:nth-child(1){
        margin-bottom: .1rem;
      }
      .bg1{
         background: #94d6e2;
      }
      .bg2{
         background: #e3e0d1;
      }
      .bg3{
         background: #b4c8c7;
      }
      .bg4{
         background: #cbdfe0;
      }
     

   }
   li:nth-child(1){
     margin-left: 0;
   }
   .hotItem_two{
     width: 28.5%;
     .link{
       width:70%
     }
   }
   .hotItem_one{
     padding-top:1.3rem;
     height: 1.7rem; 
     width: 20%;
     .link{
       width: 75%;
     }
   }
   .paddb{
     height: 1.1rem;
     padding-top:.6rem;
   }
   .padds{
     height:.8rem ;
     padding-top:.4rem;     
   }
 }
 .hotItem{
   float: left;
   width: 32%;
   margin-right: 2%;
   height: 100%;
     overflow: hidden;
     position: relative; 
 }
 .hotItem:nth-last-child(1){
     margin-right: 0;
 }
 .hotItem>div{
    position: absolute;
    width: 100%;
    text-align: center;
    color: #fff;
    padding: .05rem 0;
 }
 .hotItem>div.bgs{
      height: 27%;
    padding-top: 23%;
}
 .hotItem>div .hotline{
    width: 80%;
    height: 0;
    margin: .1rem auto;
    border-bottom: 2px solid #fff;
 }
 .hotItem>div h3{
   font-size: .28rem;
   color: #fff;
 }
 .hotItem>div h1{
   color: #fff;
 }
 .hotItem>div>.link{
   overflow: hidden;
 }
.hotItem>div .mroe{
  color: #fff;
}
.dissertation{
  margin-bottom: .2rem;
  margin-top: .5rem;
}
.dissertation .mroe{
  line-height: 1rem;
  display: inline-block;
  height: 100%;
  font-size: .2rem;
}
.dissertationItem{
  background: #f2f2f2;
  overflow: hidden;
  margin-bottom: .2rem;
}
.dissertationItem img{
  width: 100%;
}
.dissertationItem h3{
  line-height: .8rem;
  font-size: .35rem;
  text-align: left;
  text-indent: .01rem;
}
</style>
