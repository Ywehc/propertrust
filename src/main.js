import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App.vue'
import store from './store/store'
import Vuex from 'vuex'
import 'es6-promise/auto'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router'

import "@/style/variables.scss";
import "@/style/global.css";

import 'es6-promise/auto'

Vue.use(BootstrapVue);
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
