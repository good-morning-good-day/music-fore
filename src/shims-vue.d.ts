//declare声明宣告， 声明一个ambient module(即:没有内部实现的 module声明) 
declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
  }
   
   
  declare module 'vue-awesome-swiper'
  declare module 'vue-seamless-scroll'
  // xx即你包不能找到声明的包名