// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CgUI from './cgCommon'
import './themes/index.less'

Vue.config.productionTip = false
Vue.use(CgUI)
// console.log(CgUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
