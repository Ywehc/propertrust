import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App.vue'
import store from './store/store'
import Vuex from 'vuex'
import 'es6-promise/auto'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VCalendar from 'v-calendar';
import router from './router'

import "@/style/variables.scss";
import "@/style/global.scss";

import 'es6-promise/auto'

Vue.use(BootstrapVue);
Vue.use(Vuex)

Vue.use(VCalendar, {
  componentPrefix: 'vc'              // ...other defaults
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
