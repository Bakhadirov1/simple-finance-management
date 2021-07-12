import Vue from 'vue'
import Vuex from 'vuex'
import customer from './customer'
import operation from './operation'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    customer,
    operation
  }
})
