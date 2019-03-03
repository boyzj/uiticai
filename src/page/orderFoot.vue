<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .action{
    background: #CE3433!important;
    border-color: #CE3433!important;
    color: #fff!important;
  }
  .orderItems{
    height: 100%;
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    .orderItem{
      width: 100%;
      overflow: hidden;
      margin-top: 15px;
      .orderLeft{
        width: 20%;
        float: left;
        margin-right:2%; 
        padding-top: .6rem;
        .more{
          font-size: 12px;
          color: #54aadd;
         display: inline-block;
         border: 1px solid #54aadd;
         border-radius: 1px;
          padding: 1px .1rem;
        }
         .No{
           font-size: 12px;
           color: #999;
         }
         .type{
           color: #fff;
           padding: 2px .1rem;
           background: deeppink;
           border-radius: 2px;
           margin: 3px auto;
           width: .6rem;
           display: block;
         }
         .time{
           color: #333;
         }
      }
      .orderRight{
        width: 78%;
        overflow: hidden;
       .nameTitle{
         width: 100%;
         line-height: .6rem;
         font-weight: 600;
       }
       .checkItem{
          box-sizing: border-box;
          // border:1px solid #54aadd;
          border: 1px solid #54aadd;
          font-size: 12rpx;
          width: 32%;
          float: left;
          height: 35px;
          vertical-align: middle;
          margin-right: 2%;
          margin-bottom: .2rem;
         }
         .checkItem:nth-child(3n){
           margin-right: 0;
         }
        .flex{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap:wrap; 
         }
        .checkItem::after{
          content:'';
          overflow: hidden;
          height: 100%;
          width: 0;
        }
        // .checkItem:nth-last-child(1),.checkItem:nth-last-child(2),.checkItem:nth-last-child(3){
         
        // }
        // .checkItem:nth-child(3n){
        
        // }
       
      }
    }
  }
</style>
<template>
    <div class="orderF" style="background:#fff;">
      
        <div class="orderItems">
           <div class="orderItem" v-for='(item,i) in list' :key='i'>
            
              <div class="orderLeft">
                <p class="No">{{item.num}}</p>
                <span class='type'>{{item.l_cn_abbr}}</span>
                <!-- <p class="time">{{item.match_time}}</p>  -->
                <p class="more" @click="more(i)">更多</p>
              </div>
              <div class="orderRight">
                <div class="nameTitle">
                  {{item.h_cn_abbr}} vs {{item.a_cn_abbr}}
                </div>
                <div v-if='item.had' style="overflow:hidden">
                 <div class="checkItem" @click="choose(i,n,'had')"  :class="[ite.choose?'action':'']"  v-for='(ite,n) in item.had.data' :key='n'>
                   <p>{{ite.score}}</p>
                   <p>{{ite.odds}}</p>
                 </div>
                </div>
                <div>

                </div>
                  
                 <div v-if='item.hhad' style="overflow:hidden">
                    <div class="checkItem flex"  @click="choose(i,n,'hhad')"  :class="[ite.choose?'action':'']" v-for="(ite,n) in item.hhad.data" :key='n'>
                    
                      <p>主{{item.hhad.fixedodds}}{{ite.score}}{{ite.odds}}</p>
                    </div>
                 </div>
                
                
              
              </div>
           </div>
           
        </div> 
       
    </div>
</template>

<script>
import Foot from '@/components/footer';

import {orderFootList} from '@/api/api'
import { Flexbox, FlexboxItem,Swiper,SwiperItem,Search} from 'vux'
import { setTimeout } from 'timers';

export default {
  name: 'test',
  data () {
    return {
      test:'',
      list:[],
      had:{
        list:[{'name':'主',odds:'2'},{name:'平',odds:''},{'name':'负'}]
      },
      hhad:{
        fixedodds:'-1',
        list:[{'name':'主',odds:'2'},{name:'平',odds:''},{name:'负'}]
      },
      ttg:{
        list:[{name:'0球',odds:'7.5'},{name:'1球',odds:'4.5'}]
      },
      hafu:{
         list:[{ad:'胜胜',odds:'10.50'}]
      },
      crs:{
        fixedodds:'',
        single:'1',
        list1:[{rage:'1:0',odds:'6.50'},{rage:'2:0',odds:'6.50'},{rage:'2:1',odds:'6.50'}],
        list2:[{rage:'0:0',odds:'6.50'},{rage:'1:1',odds:'6.50'},{rage:'2:2',odds:'6.50'}],
        list3:[{rage:'0:1',odds:'6.50'},{rage:'0:2',odds:'6.50'},{rage:'1:2',odds:'6.50'}],
      }
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
    choose(i,n,key,type){  //type crs 分类
      if(!type){
        console.log(this.list[i][key]['data'][n])
        this.list[i][key]['data'][n].choose = !this.list[i][key]['data'][n].choose
      }else{

      }
    },
     getdata(){
       orderFootList({type:1}).then((res) => {
          if(res.status==0){
            let data =[]
               for(var key in res.data){
                    data.push(res.data[key])
               }
              data.forEach((item,i) => {
                
                item.had.data.forEach((ite,j) => {
                  ite.choose = false;
                })
                item.hhad.data.forEach((ite,j) => {
                  ite.choose = false;
                })
                item.hafu.data.forEach((ite,j) => {
                  ite.choose = false;
                })
                item.ttg.data.forEach((ite,j) => {
                  ite.choose = false;
                })
                item.crs.lose.forEach((ite,j) => {
                  ite.choose = false;
                })
                item.crs.win.forEach((ite,j) => {
                  ite.choose = false;
                })
                item.crs.peace.forEach((ite,j) => {
                  ite.choose = false;
                })

              })
               this.list = data;
               console.log(this.list)
            
          }else{

          } 
       })
     },
     more(index){
       
         sessionStorage.setItem('rateInfo',JSON.stringify({index:index,data:this.list[index]}))
         this.$router.push({path:'/more'});
       
     }
  },
  
   mounted(){
    //this.clientHeight = document.documentElement.clientHeight;
    const that = this;
   // this.$overscroll(document.querySelector('.scroll'));
    //this.$isLogin() 
  },
  created(){
     this.getdata()
    

    
     
   }
}

</script>

 <!-- <div class="orderItems">
           <div class="orderItem" v-for='(item,i) in list' :key='i'>
              <div class="orderLeft">
                <p class="No">{{item.num}}</p>
                <span class='type'>{{item.l_cn_abbr}}</span>
                <p class="time">{{item.match_time}}</p> 
                <p class="more">更多</p>
              </div>
              <div class="orderRight">

                 <div class="checkItem" v-if='item.had.h'>
                   <p>{{item.h_cn_abbr}}</p>
                   <p>{{item.had.h}}</p>
                 </div>

                  <div class="checkItem" v-if='item.had.d'>
                   <p>平</p>
                   <p>{{item.had.d}}</p>
                 </div>
                  <div class="checkItem" v-if='item.had.a'>
                   <p>{{item.a_cn_abbr}}</p>
                   <p>{{item.had.a}}</p>
                 </div>
                 <div class="checkItem" :class="[item.had.h?'flex':'',]">
                   <p v-if='!item.had.h'>{{item.h_cn_abbr}}</p>
                   <p>主{{item.hhad.fixedodds}}胜{{item.hhad.h}}</p>
                 </div>
                 <div class="checkItem" :class="item.had.h?'flex':''">
                 
                   <p>平{{item.hhad.d}}</p>
                 </div>
                 <div class="checkItem" :class="item.had.h?'flex':''">
                   <p v-if='!item.had.a'>{{item.a_cn_abbr}}</p>
                   <p>负{{item.hhad.a}}</p>
                 </div>
              
              </div>
           </div>
           
        </div> -->
