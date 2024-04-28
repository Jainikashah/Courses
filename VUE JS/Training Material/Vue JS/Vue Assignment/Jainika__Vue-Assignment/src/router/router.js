import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);


export const router = new VueRouter({
  mode: 'history',
  routes :  [
  
    {name: 'registration', path:'/registration', alias : '/',
     component: () => import('../components/Registration.vue')},

    {name:'homeRoute', path: '/'},

    {name: 'login', path:'/login', 
    component: () => import('../components/Login.vue')},

    {name: 'dashboard', path:'/dashboard',
    component: () => import('../components/Dashboard.vue')},

    {name: 'showProfile', path:'/show-profile', 
    component:  () => import('../components/ShowProfile.vue')},

    {name: 'editProfile', path:'/edit-profile', 
    component:  () => import('../components/EditProfile.vue')},

    {name: 'showUsers', path:'/show-users', 
    component:  () => import('../components/ShowUsers.vue')},

    {name: 'editUsers', path:'/edit-users', 
    component:  () => import('../components/EditUsers.vue')},

  //   {name : 'test', path: '/test',
  // component : () => import('../components/test.vue')},

    // {name: 'editUsers', path:'/edit-users', 
    // component:  () => import('../components/b-table.vue')},

    {name: 'addUser', path:'/add-user', 
    component:  () => import('../components/AddUser.vue')},

    {name: 'forgotPassword', path: '/forgot-password', 
    component:  () => import('../components/ForgotPassword.vue')},

    {name: 'pageNotFound', path: '/:notFound(.*)', 
    component:  () => import('../components/PageNotFound.vue')},
]
})



