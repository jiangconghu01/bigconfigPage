import 'babel-polyfill'
import Vue from 'vue'

import router from './router/config.router'
import store from './store/config.store'
import Index from './index.vue'
import http from './util/ajax'
import Echarts from 'echarts'
import Element from './util/element'

// import vdr from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import vdr from 'vue-draggable-resizable-gorkys'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'

import VueLocalStorage from 'vue-localstorage'

Vue.component('vue-draggable-resizable', vdr)
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true, //created computed members from your variable declarations
})

Vue.prototype.$http = http
Vue.prototype.$echarts = Echarts
Element(Vue)
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(Index),
})
