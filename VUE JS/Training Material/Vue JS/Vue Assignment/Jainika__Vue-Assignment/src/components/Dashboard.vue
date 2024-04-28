<template>
  <div>
    <div class="nav">
      <navbar :navbarType="userType">
      </navbar>

    <div class="welcome-screen">
        <p>{{messages.WELCOME_MSG(getLoggedInUser.username) }}</p>
    </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {messages} from '../utils/constants'
export default {
  name:'Dashboard',
    components: { 
      Navbar : () => import('./navs/Navbar.vue')
     },
    data(){
        return {
          messages
        }
    },
    computed : {
    ...mapGetters('auth',['getLoggedInUser']),
    userType(){
        return this.getLoggedInUser.userType
        }
    },
}
</script>

<style scoped>
.welcome-screen {
  /* width : 100vw; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.2rem;
  font-weight: bold;
}
p{
    color: rgb(46, 96, 144);
}
.menu-items{
    display: flex;
}
.nav{
    height:12rem;
}
</style>