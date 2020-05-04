import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import $ from 'jquery'
import store from './config/store'
import router from './config/router'
import './config/axios'
import './config/mq'


Vue.config.productionTip = false

//TEMPORARIO!!!!!!!!!


new Vue({
  $,
  router,
  store,
  render: h => h(App)
}).$mount('#app')