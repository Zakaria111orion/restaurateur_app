import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product";
import user from "./modules/user";
import cookie from 'vue-cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    
  },
  modules: {
    product,
    user
  },
});
