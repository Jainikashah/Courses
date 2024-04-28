<template>
<button @click="confirmInput">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      changesSaved : false
    }
  },
  methods: {
    confirmInput(){
      //do something
      this.$router.push('/teams');
    }
  },
  // beforeRouteEnter(to, from, next){
  //   console.log(to, from)
  //   next(false);
  // },
  beforeRouteLeave(to, from, next){
    console.log(to, from);
    if(this.changesSaved){
      next();
    }else{
      const userWantsToLeave = confirm('There are unsaved changes, Do you still want to leave the page?');
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>