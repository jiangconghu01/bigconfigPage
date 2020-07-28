import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  month: '',
}
const getters = {
  month(state) {
    return state.month
  },
}
const mutations = {
  setMonth(state, param) {
    state.month = param
  },
}
const actions = {
  monthAction(context, param) {
    context.commit('setMonth', param)
  },
}
var vuexStore = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})
export default vuexStore
