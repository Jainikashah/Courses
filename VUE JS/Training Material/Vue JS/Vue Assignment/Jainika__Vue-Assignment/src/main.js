import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './utils/filter';
import {router} from './router/router';
import store from './store/index';

Vue.config.productionTip = false;
export const bus = new Vue();
Vue.use(Vuelidate)
Vue.use(BootstrapVue)


router.beforeEach((to, from, next) => {
  if(to.name == 'registration' || to.name == 'login' || to.name == 'forgotPassword'){
    next()
  }else if(store.state.auth.loggedInUser) 
  {
    next()}
  else {
    alert('Kindly login first!')
    next({name : 'login'})
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

