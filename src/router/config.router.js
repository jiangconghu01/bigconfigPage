import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('pages/config.index.vue'),
    },
    {
      path: '/controller',
      name: 'controller',
      component: () => import('pages/config/controller.vue'),
    },
  ],
})
