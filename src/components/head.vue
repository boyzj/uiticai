<template>
      <div class="head">
           <div class="header clearfix">
               <ul>
                   <li v-if='left'>
                       《&nbsp;返回
                    </li>
                    <li v-else>
                      &nbsp;
                    </li>
                   <li>{{center}}</li>
                   <li>
                     <img v-if='right=="icon"' src="../../static/img/common/icon-13.png" alt="" class="iconEdit">
                     <label v-else>{{right}}</label>
                  </li>
               </ul>
               
           </div>
       </div>
</template>

<script>

export default {
  name: 'head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['left','center','right'],
  methods:{
changUrl(_url){
       this.$router.push({path:'/'+_url})
     }
  },
  mounted(){
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .head{
       height: 1rem;
   }
        .header{
            padding-top:.2rem; 
            position: fixed;
            top: 0%;
            width: 100%;
        
            height: .8rem;
            line-height: .8rem;
            text-align: center;
            font-size: .3rem;
            color: #fff;
            z-index: 9;
        }
        .header ul{
            display: flex;
            width: 90%;
            margin: 0 auto;
            justify-content: space-between;
        }
        .header ul .iconEdit{
            width: .4rem;
         }
</style>