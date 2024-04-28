import { createApp } from 'vue';
import {createStore} from 'vuex';
import App from './App.vue';


const counterModule = {
    namespaced : true,
    state(){
    return {
        counter : 1,
    }},
    mutations :{
        increment(state){
            state.counter = state.counter +1;
        },
        increase(state, payload){
            state.counter = state.counter + payload.value
        },
    },
    actions :{
        increment(context){
            setTimeout(function(){
                context.commit('increment')
            },2000);
        },
        increase(context, payload){
            console.log('hello')
            context.commit('increase',payload);
        },
    },
    getters :{
        finalCounter(state){
            return state.counter + 2
        },
        normalizedCounter(_, getters){
            if(getters.finalCounter > 100){
                return 100;
            }else{
                return getters.finalCounter;
            }
        },
    }
}

const store = createStore({
    modules:{
        numbers: counterModule
    },
    state(){
        return {
            isLoggedIn : false
        }
    },
    mutations: {
        changeAuthStatus(state){
            state.isLoggedIn = !state.isLoggedIn
        }
    },
    actions:{
        changeAuthStatus(context){
            context.commit('changeAuthStatus')
        }
    },
    getters: {
        loggedIn(state){
            return state.isLoggedIn;
        }
    },
 
});
const app = createApp(App);
app.use(store);
app.mount('#app');
