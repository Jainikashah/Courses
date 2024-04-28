<template>
  <div class="not-found-container">
    <b-jumbotron
      header="Page Not Found :("
      lead="Oops! The page you are looking for, no longer exists.">
      <p class="text"> {{messages.PAGE_NOT_FOUND_TEXT}} </p>
   <router-link :to="{name :'login'}"> <b-button class="custom-btn">Login</b-button></router-link>
    </b-jumbotron>
  </div>
</template>
<script>
import {messages} from '../utils/constants';
export default {
  name : 'PageNotFound',
  data(){
    return {
      messages
    }
  }
}
</script>
<style scoped>
.not-found-container{
  height : 100vh;
  width: 100vw;
    background-color: rgb(188, 212, 243);
    padding:3rem
}
.custom-btn {
  margin: 1.2rem 0.7rem;
  background-color:  rgb(46, 96, 144)
}
.text{
    display: inline;
}
</style>