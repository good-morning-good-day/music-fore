import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import './plugins/element.js'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "swiper/swiper-bundle.css"
import  VueAwesomeSwiper  from 'vue-awesome-swiper'
import swiper from 'vue-awesome-swiper'
import axios from 'axios'
import vueSeamlessScroll from 'vue-seamless-scroll'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(swiper)
Vue.use(vueSeamlessScroll)
Vue.prototype.$axios = axios
// Vue.use(SwiperDlide)

// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


new Vue({
  render: h => h(App),
  router
}).$mount('#app')


