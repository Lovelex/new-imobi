import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import firebase from './firebase/loader'
import snack from './snack/loader'
import modules from './modules/loader'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    ...firebase,
    ...snack,
    ...modules
  }
})
