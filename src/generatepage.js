import 'babel-polyfill'
import Vue from 'vue'

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true, //created computed members from your variable declarations
})
import router from './router/generate.router'
import store from './store/generate.store'
import Index from './index.vue'
import http from './util/ajax'
import Echarts from 'echarts'
import Element from './util/element'

Vue.prototype.$http = http
Vue.prototype.$echarts = Echarts
Element(Vue)
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(Index),
})
