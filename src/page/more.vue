<style scoped lang="less">
      .action{
            background: #CE3433!important;
            border-color: #CE3433!important;
            color: #fff!important;
            label{
              color: #fff!important;
            }
          }
    header{
     position: fixed;
     top: 0;
     width: 100%;
     line-height: .8rem;
     height: .8rem;
     border-bottom: 1px solid #eee;
     box-shadow: 1px 1px 1px 1px #f2f2f2;
     background: #fff;
     z-index: 1;
     display: flex;
     justify-content: space-around;
     align-items: center;
     font-size: .36rem;
    }
    .lineTitle{
      text-align: center;
      display: inline-block;
      width: 100%;
      line-height: .8rem;
      color: #999;
      border-bottom: 1px solid #eee;
      margin-top: .9rem;
    }
    .moreItem{
      clear: both;
      .moreTitle{
        line-height: .6rem;
        border-bottom: 1px solid  #eee;
        text-align: left;
        text-indent: .4rem;
        color: #999;
        font-size: .24rem;
        label{
          font-size: .32rem;
          color: #333;
        }
      }      
    }
    .WinLos{
      width: 100%;
      padding: .2rem;
      border-bottom: 1px solid #eee;
      .had{
        width: 70%;
        margin-left: 20%;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: .1rem;
        .radiu{
          display: inline-block;
          width: .3rem;
          height: .3rem;
          font-size: .22rem;
          border: 1px solid #999;
          border-radius: 50%;
          margin-right: .2rem;
          text-align: center;
          line-height: .3rem;
        }
        .side{
          font-size: .24rem;
          padding: .2rem .15rem;
          border: 1px solid #eee;
          border-radius: .1rem;
          margin-right: .2rem;

        }
        .side:nth-child(4){
          margin-right: 0;
        }
  
      }
    }
    .subTitle{
      clear: both;
      line-height: .6rem;
      font-weight: 600;
    }
    .sideItems{
      width: 70%;
      margin-left: 20%;
      .side{
        width: .8rem;
        height: .8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border: 1px solid #eee;
        float: left;
        margin-right: .2rem;
        border-radius: .1rem;
        margin-bottom: .1rem;
        label:nth-child(1){
          color: #000;  
        }
        label:nth-child(2){
          color: #999;
        }
      }
      .bigSide{
        width: 1.5rem;
      }
      .side:nth-last-child(1){
        clear: both;
        width: 3.2rem;
      }
    }
</style>
<template>
    <div class="more" style="background:#fff;">
        <header>
            <div @click="black(-1)">
              <em class="indexbackIcon"></em>
            </div>
            <div>{{list.h_cn_abbr}}VS{{list.a_cn_abbr}}</div>
            <div></div>
        </header>
        <p class="lineTitle">红框选项可投单关</p>
            
          <div class="moreItem">
              <p class="moreTitle"><label>胜负/让分胜负</label>(-为主队让球，+为客队让球)</p>
          </div>
          <div class="WinLos">
             <div class="had" v-if='list.had'>
               <div class="radiu">0</div>

               <div class="side clearfix" :class="[item.choose?'action':'',list.had.single==1?'borderRed':'']" @click="choose(i,'had')" v-for='(item,i) in list.had.data' :key='i'>{{item.score}}&nbsp;{{item.odds}}</div>

               <!-- <div class="side">平&nbsp;1.63</div>
               <div class="side">负&nbsp;1.63</div> -->
             </div>
             <div class="had" @click="choose()" v-if='list.hhad'>
               <div class="radiu" style="color:red">{{list.hhad.fixedodds}}</div>
                <div class="side clearfix" @click="choose(i,'hhad')" :class="[item.choose?'action':'',list.hhad.single==1?'borderRed':'']" v-for='(item,i) in list.hhad.data' :key='i'>{{item.score}}&nbsp;{{item.odds}}</div>
               <!-- <div class="side action">胜&nbsp;1.63</div>
               <div class="side">平&nbsp;1.63</div>
               <div class="side">负&nbsp;1.63</div> -->
             </div>
          </div>
           <div class="moreItem" v-if='list.crs'>
              <p class="moreTitle"><label>比分</label>(90分钟内，两队的比分)</p>
          </div>
          <div v-if='list.crs'>
             <p class="subTitle">主队&nbsp;&nbsp;胜比分</p>
             <div class="sideItems">
                <div class="side" @click="choose(i,'crs','win')" :class="[item.choose?'action':'',list.crs.single==1?'borderRed':'']" v-for="(item,i) in list.crs.win" :key='i'>
                  <label>{{item.score}}</label><label>{{item.odds}}</label>
                </div>
                <!-- <div class="side">
                  <label>1:0</label><label>6.50</label>
                </div>
                <div class="side">
                  <label>1:0</label><label>6.50</label>
                </div>
                <div class="side">
                  <label>1:7</label><label>60.50</label>
                </div>
                <div class="side">
                  <label>1:0</label><label>6.50</label>
                </div>
                <div class="side">
                  <label>1:0</label><label>6.50</label>
                </div> -->
             </div>
             <p class="subTitle">平比分</p>
             <div class="sideItems">
                <div class="side" @click="choose(i,'crs','peace')" :class="[item.choose?'action':'',list.crs.single==1?'borderRed':'']" v-for="(item,i) in list.crs.peace" :key='i'>
                  <label>{{item.score}}</label><label>{{item.odds}}</label>
                </div>
                
              </div>  
             <p class="subTitle">主队&nbsp;&nbsp;负比分</p>
             <div class="sideItems">
                <div class="side" :class="[item.choose?'action':'',list.crs.single==1?'borderRed':'']"  @click="choose(i,'crs','lose')" v-for="(item,i) in list.crs.lose" :key='i'>
                  <label>{{item.score}}</label><label>{{item.odds}}</label>
                </div>
              </div> 
          </div>
           <div class="moreItem" v-if='list.ttg'>
              <p class="moreTitle"><label>总进球</label>(90分钟内，两队的总进球)</p>
              <div class="sideItems" style="margin-top:.1rem">
                <div class="side"  @click="choose(i,'ttg')" :class="[item.choose?'action':'',list.ttg.single==1?'borderRed':'']" v-for="(item,i) in list.ttg.data" :key='i'>
                  <label>{{item.score}}</label><label>{{item.odds}}</label>
                </div>
                <!-- <div class="side">
                  <label>1:0</label><label>6.50</label>
                </div> -->
              </div> 
          </div>
           <div class="moreItem" v-if='list.hafu'>
              <p class="moreTitle"><label>半全场</label>(90分钟内，主队的半场/全场的结果)</p>
              <div class="sideItems" style="margin-top:.1rem">
                <div class="side bigSide"  @click="choose(i,'hafu')" :class="[item.choose?'action':'',list.hafu.single==1?'borderRed':'']" v-for="(item,i) in list.hafu.data" :key='i'>
                  <label>{{item.score}}</label><label>{{item.odds}}</label>
                </div>
                <div class="side" style="display:none"></div>
              </div>
          </div>
    </div>
</template>

<script>
import Foot from '@/components/footer';

import {} from '@/api/api'
import {} from 'vux'
import { setTimeout } from 'timers';


export default {
  name: 'test',
  data () {
    return {
       test:'',
       index:'',
       list:{},
    }
  },
  components: {
    
    Foot,
   
  },
  methods:{
    black(){
       history.go(-1)
    },
     choose(n,key,type){  //type crs 分类
     var type = type || 'data'
       console.log(n,key,type)
        console.log(this.list[key][type][n])
        this.list[key][type][n].choose = !this.list[key][type][n].choose;
       alert(JSON.stringify(this.list[key][type][n]))
        
    }
  },
  
   mounted(){
    const that = this;
    //this.$isLogin() 
  },
  created(){
    
    let rateInfo = sessionStorage.getItem('rateInfo') || '';
      // sessionStorage.removeItem('rateInfo')
      
    if(rateInfo){
     this.list = JSON.parse(rateInfo).data
     this.index = JSON.parse(rateInfo).index
     console.log(this.list)
    }else{
      history.go(-1)
    }
    //this.$route.push({path:'/xxx',query:{id:1}});//类似get传参，通过URL传递参数
    //this.$route.push({path:'/xxx',params:{id:1}});//类似post传参
    //this.$route.query.id
    //this.$route.params.id
    
     
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

