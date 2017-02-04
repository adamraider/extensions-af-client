// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
