// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import vuex from 'vuex'
import ElementUI from 'element-ui'
Vue.use(vuex)
 require('./mock.js')
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
import './common/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
