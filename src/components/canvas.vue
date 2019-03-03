<template>
  <div class="hello">

 
   <!-- <img v-bind:src="url" alt="">
   <input type="file" accept="image/*" multiple="multiple" ref='sign' @change="changeImg($event)">  -->
   <div>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo"
        :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}"
        hide-on-blur>
        <div class="img-box">
           
          <canvas id="canvas" width="300" height="400">Canvas画板</canvas>
          <div class="canvasbar clearfix">
          <button @click="save">保存</button>   
          <button type=""  @click="clear">清除</button>
          </div>
          
        </div>
        <div @click="showHideOnBlur=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

  </div>
 
</template>

<script>
let draw;
let isMove;
let preHandler = function(e){e.preventDefault();}
class Draw {
    constructor(el) {
        this.el = el
        this.canvas = document.getElementById(this.el)
        this.cxt = this.canvas.getContext('2d')
        this.stage_info = canvas.getBoundingClientRect()
        this.path = {
            beginX: 0,
            beginY: 0,
            endX: 0,
            endY: 0
        }
    }
    init(btn) {
        var that = this; 
        
        this.canvas.addEventListener('touchstart', function(event) {
            document.addEventListener('touchstart', preHandler, false); 
            that.drawBegin(event)
        })
        this.canvas.addEventListener('touchend', function(event) { 
            document.addEventListener('touchend', preHandler, false); 
            that.drawEnd()
            
        })
        this.clear(btn)
    }
    drawBegin(e) {
        var that = this;
        window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty()
        this.cxt.strokeStyle = "#000"
        this.cxt.beginPath()
        this.cxt.moveTo(
            e.changedTouches[0].clientX - this.stage_info.left,
            e.changedTouches[0].clientY - this.stage_info.top
        )
        this.path.beginX = e.changedTouches[0].clientX - this.stage_info.left
        this.path.beginY = e.changedTouches[0].clientY - this.stage_info.top
        canvas.addEventListener("touchmove",function(){
            isMove = true;
            that.drawing(event)
        })
    }
    drawing(e) {
        this.cxt.lineTo(
            e.changedTouches[0].clientX - this.stage_info.left,
            e.changedTouches[0].clientY - this.stage_info.top
        )
        this.path.endX = e.changedTouches[0].clientX - this.stage_info.left
        this.path.endY = e.changedTouches[0].clientY - this.stage_info.top
        this.cxt.stroke()
    }
    drawEnd() {
        document.removeEventListener('touchstart', preHandler, false); 
        document.removeEventListener('touchend', preHandler, false);
        document.removeEventListener('touchmove', preHandler, false);
        //canvas.ontouchmove = canvas.ontouchend = null
    }
    clear(btn) {
        isMove = false
        this.cxt.clearRect(0, 0, 300, 600)
    }
    save(){
        
       return canvas.toDataURL("image/png")
    }
}
import {multiUploadFile} from '@/api/api';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      val:true,
      url:"",
      signurl:'',
      showHideOnBlur:true
    }
  },
  mounted() {
      draw=new Draw('canvas');
      draw.init();
      this.$toast("请签名")
  },
  methods:{
    clear:function(){
        draw.clear();
        
    },
   
        convertBase64UrlToBlob(urlData){  

    var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte  

    //处理异常,将ascii码小于0的转换为大于0  
    var ab = new ArrayBuffer(bytes.length);  
    var ia = new Uint8Array(ab);  
    for (var i = 0; i < bytes.length; i++) {  
        ia[i] = bytes.charCodeAt(i);  
    }  

      return new Blob( [ab] , {type : 'image/png'});  
} ,
    save:function(){
        var data=draw.save();
       //组装formdata  
       let fd = new FormData();  
       fd.append("file_upload", this.convertBase64UrlToBlob(data));//fileData为自定义  
       fd.append("fileName", "签名");//fileName为自定义，名字随机生成或者写死，看需求 
       fd.append("type", "sign");
       multiUploadFile(fd).then((res)=>{
           console.log(res)
           if(res.code==0){
            //  sessionStorage.setItem('signUrl',res.data.file_path);
             // let _path = sessionStorage.getItem('path')
            //  console.log(_path)
              this.$toast("签名成功")
              this.$emit('saveCanvs',res.data.file_path)
               
            //  let  isStatReg = JSON.parse(sessionStorage.getItem("isStatReg")) || '';
          //    sessionStorage.setItem('ischeck',true);
            //   setTimeout(()=>{
            //    this.$router.push({path:_path})   
            //   },2000)
              
           }else{
               this.$toast(res.msg)
           }
       })
       
        
        //this.showHideOnBlur =  false;
        console.log(this.url)
    },
  } 
} 
</script> 
 <!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped> 
h1, h2 { font-weight: normal; } 
ul { list-style-type: none; padding: 0; } 
li { display: inline-block; margin: 0 10px; } 
a { color: #42b983; } #canvas { background: #fff; cursor: default; } 
#keyword-box { margin: 10px 0; }

.canvasbar button{
    float: right;
    margin-right: .75rem;
    padding: .1rem .5rem;
    margin-top: .3rem;
}
.canvasbar button:nth-child(1){
    background: #42b983;
    color: #fff;
}
</style>