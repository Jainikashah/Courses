import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from "axios";

// base url will be binded as a prefix to every get/post call in the app.
axios.defaults.baseURL = 'https://vuejs-practice-app-default-rtdb.firebaseio.com/'

// headers.common will pass this auth property in every get/post/etc call. can check in network too.
axios.defaults.headers.common['Auth'] = 'authToken'

// headers.get will pass this accepts property in every get api call.
axios.defaults.headers.get['Accepts'] = 'application/json'

// request interceptors - are functions that runs everytime a request api call is made to server.
const reqInterceptor = axios.interceptors.request.use(config => {
  // can edit the config obj, as you want and return it.
  console.log("config", config)
  return config
})

// response interceptors - are functions that runs everytime a reponse is received from server.
axios.interceptors.response.use(res => {
  // can edit the config obj, as you want and return it.
  console.log("res", res)
  return res
})

// we can also eject interceptors, let say based on a certain condition. same can be donw for response too.
// on eject, the function will nt execute
axios.interceptors.request.eject(reqInterceptor)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
