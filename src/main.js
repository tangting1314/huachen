// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
Vue.prototype.axios = axios

Vue.use(ElementUI);




Vue.config.productionTip = false


axios.interceptors.request.use(
    config => {
       /* var token = '63350a93c8c70c91bff9c8140d7c9c56'
        if (token) {
            config.headers.token = `${token}`
        } */
        return config
    },
    err => {
        return Promise.reject(err)
    })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//请求返回拦截，把数据返回到页面之前做些什么...
axios.interceptors.response.use((response) => {
  if (response.data.code == -2) {
  

  }else{
    return response;

  }

});
