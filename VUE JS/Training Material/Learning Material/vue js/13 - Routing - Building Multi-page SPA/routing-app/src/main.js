import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import App from './App.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        { name:'teams', path: '/', redirect: '/teams'},
        { name:'teams', path : '/teams', components: {default : TeamList, footer : TeamsFooter}, children:[
            { name:'teamMembers', path: ':teamId', component: TeamMembers, props:true}
        ]},
        { path : '/users', components: {default : UserList, footer : UsersFooter},
        //  beforeEnter(to, from, next){
        //     console.log(to, from);
        //     next(false);
        // }
        meta : {needsAuth : true}
    },
        { path:'/:notFound(.*)' , component: NotFound}
    ],
    scrollBehavior(_, _2, savedPosition){
        // console.log(to, from, savedPosition);
        if(savedPosition){
            return savedPosition;
        }
        return { left: 0, top: 0}
    }
});

router.beforeEach(function(to, from, next){
    console.log(to, from);
    if(to.meta.needsAuth){
        console.log('authenticate the user');
    }
    // if(to.name === 'teamMembers'){
    //     next();
    // }else{
    //     next({name : 'teamMembers', params: {teamId: 't2'}})
    // }
    next();

})

const app = createApp(App)
app.use(router);
app.mount('#app');
