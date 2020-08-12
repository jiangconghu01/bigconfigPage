import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('pages/generate.index.vue'),
    },
    {
      path: '/fixed1page/:id',
      name: 'fixed1page',
      component: () => import('pages/generate/generatetemplate/fixed.layout.common.vue'),
    },
    {
      path: '/freepage/:id',
      name: 'freepage',
      component: () => import('pages/generate/generatetemplate/free.layout.common.vue'),
    },
  ],
})
// let f = ''
// router.beforeEach((to, from, next) => {
//   const item = JSON.parse(Vue.ls.get('current_page'))
//   console.log(item)
//   if (f) {
//     next()
//   } else {
//     next()
//   }
// })
export default router
