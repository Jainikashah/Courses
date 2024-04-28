<template>
<div>
   <base-container title="Vuex" v-if="loggedIn">
    <h2>{{normalizedCounter}}</h2>
    <button @click="increment">Add 1</button>
    <button @click="increase({value : 10})">Add 1</button>
    <change-counter></change-counter>
  </base-container>
  <base-container :title="'Auth'">
  <user-auth>
  </user-auth>
  </base-container>
</div>
 
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import UserAuth from './components/UserAuth.vue';
export default {
  components: {
    BaseContainer,
    UserAuth,
    ChangeCounter
  },
  computed : {
    // getCounterValue(){
    //   return this.$store.getters.normalizedCounter;
    // }
    // ...mapGetters(['normalizedCounter', 'loggedIn']) 

    ...mapGetters('numbers',['normalizedCounter']),  //while using namespace
    ...mapGetters(['loggedIn'])
  },
  methods:{
    // addOne(){
    //   this.$store.dispatch('increment');
    // }
  ...mapActions('numbers',['increment', 'increase'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>