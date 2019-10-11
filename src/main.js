import Vue from 'vue'
import App from './App.vue'
import {TweenLite, TweenMax} from 'gsap'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
