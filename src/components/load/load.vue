<template>
     <x-dialog v-model="showloading" class="dialog-demo">
          <loading id='load' :show="show" text=""></loading>
      </x-dialog>
</template>

<script>
 import {XDialog,Loading} from 'vux';
export default {
  data() {
    return {
      showloading: false,
     show:true
    };
  },
  components:{
      XDialog ,Loading
  }
};
</script>

<style>
   div.weui-toast{
       background: rgba(0, 0, 0, 0)
   }
</style>