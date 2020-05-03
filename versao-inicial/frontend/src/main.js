import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import $ from 'jquery'
import store from './config/store'
import router from './config/router'


Vue.config.productionTip = false

//TEMPORARIO!!!!!!!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIiwiZW1haWwiOiJsZW9uYXJkb0BscnNvbGFuby5jb20iLCJhZG1pbiI6MSwiaWF0IjoxNTg4NDMyNDMxLCJleHAiOjE1ODg2OTE2MzF9.TTZPdkm7olUlQUmSUhfvtUPHEtKtFfjpDTjBsCK-WQU'

new Vue({
  $,
  router,
  store,
  render: h => h(App)
}).$mount('#app')