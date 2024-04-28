<template>
  <div>
    <b-navbar class="custom-navbar" type="dark" variant="dark">
      <b-navbar-nav class="custom-nav">
        <b-nav-item class="dashboard-title light-text" href="#">
         {{labels.PROJECT_NAME}}
         </b-nav-item>
        
        <div class="menu-item">
          <slot name="navItems">
            <b-nav-item v-if="navbarType=='default'" class="nav">
              <router-link :to="{name : 'login'}"> {{labels.LOGIN}} </router-link>
            </b-nav-item>

            
          <div class="menu-items" v-else-if="navbarType=='Admin'">
            <b-nav-item-dropdown class="light" text="Profile" right>
              <b-dropdown-item href="#"  class="dark-text">
                <router-link :to="{name : 'showProfile'}"> {{labels.SHOW_PROFILE}} </router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#"  class="dark-text">
                <router-link :to="{name : 'editProfile'}"> {{labels.EDIT_PROFILE}}</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="light" text="Users" right>
              <b-dropdown-item href="#"  class="dark-text">
              <router-link :to="{name: 'showUsers'}">{{labels.SHOW_USERS}}</router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#"  class="dark-text">
              <router-link :to="{name : 'editUsers'}"> {{labels.EDIT_USERS}}</router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#"  class="dark-text">
              <router-link :to="{name : 'addUser'}"> {{labels.ADD_USER}}</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#" @click="signOut">{{labels.SIGN_OUT}}</b-nav-item>
          </div>

          <div class="menu-items" v-else>
            <b-nav-item-dropdown class="light" text="Profile" right>
              <b-dropdown-item href="#" class="dark-text">
                <router-link :to="{name : 'showProfile'}" > {{labels.SHOW_PROFILE}} </router-link>
              </b-dropdown-item>
              <b-dropdown-item href="#"  class="dark-text">
                <router-link :to="{name: 'editProfile'}"> {{labels.EDIT_PROFILE}} </router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="light" text="Users" right>
              <b-dropdown-item href="#"  class="dark-text">
                <router-link :to="{name : 'showUsers'}"> {{labels.SHOW_USERS}} </router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#" @click="signOut">
              {{labels.SIGN_OUT}}
              </b-nav-item> 
        
          </div>
             
          </slot>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {labels} from '../../utils/constants'
export default {
  name:'Navbar',
  props: {
    navbarType : {
      type : String
    }
  },
  data(){
    return {
      labels
  }},
  methods :{
    ...mapActions('auth',['addloggedInUser']),
    signOut(){
      this.addloggedInUser(null);
      this.$router.push('/login');
  }
  }
};
</script>

<style scoped>
.bg-dark {
  background-color: rgb(46, 96, 144) !important;
  color: whitesmoke;
}
.navbar-dark .navbar-nav .nav-link {
  color: whitesmoke;
}
.dashboard-title {
  text-transform: uppercase;
  font-size: 1.2rem;
}
.menu-items{
  color:whitesmoke;
  z-index:1
}
ul {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}
.menu-items {
  display: flex;
  margin-left: auto;
}
.dark-text a{
  color: black;
}
a{
  color: whitesmoke
}
/* .nav{
  height: 9rem;
} */

</style>
