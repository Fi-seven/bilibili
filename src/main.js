// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import './common/stylus/index.styl'
/* eslint-disable no-new */

// 以为axios不能使用Vue.use方法全局使用,所以我们可以将axios通过原型模式的方法加入Vue构造函数
// 这样我们的axios就可以直接被Vue组件使用
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
