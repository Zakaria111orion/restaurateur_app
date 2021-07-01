import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies';


import axios, { AxiosStatic } from 'axios';

axios.defaults.withCredentials = true;

Vue.prototype.$axios = axios;
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}


Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
Vue.use(VueCookies)



new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
