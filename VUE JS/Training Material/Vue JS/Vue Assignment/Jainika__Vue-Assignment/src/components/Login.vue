<template>
  <div>
    <navbar :navbarType="'default'">
      <template #navItems>
        <b-nav-item>
          <router-link :to="{name : 'registration' }"> Register </router-link>
        </b-nav-item>
      </template>
    </navbar>

    <base-message v-if="showMsg" :msgType="'error'" :msg="messages.INCORRECT_CREDENTAILS"></base-message>

    <div class="login-container">
      <base-header>
        <template #heading> {{headings.LOGIN_HEADING}} </template>
        <template #description> {{headings.LOGIN_DESC}} </template>
      </base-header>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username">{{labels.USERNAME}}</label>
            <input
              type="text"
              autocomplete="off"
              v-model="user.username"
              placeholder="username"
              id="username"
              name="username"
              class="form-control"
              :class="{
                'is-invalid': submitted && $v.user.username.$error,
              }"
            />
            <div
              v-if="submitted && !$v.user.username.required"
              class="invalid-feedback"
            >
              {{validations.REQUIRED_FIELD('User name')}}
            </div>
          </div>

          <div class="form-group custom-input">
            <label for="password">{{labels.PASSWORD }}</label>
            <input
              type="password"
              placeholder="password"
              autocomplete="off"
              v-model="user.password"
              id="password"
              name="password"
              class="form-control"
              :class="{
                'is-invalid': submitted && $v.user.password.$error,
              }"
            />
            <div
              v-if="submitted && !$v.user.password.required"
              class="invalid-feedback"
            >
              {{validations.REQUIRED_FIELD('Password')}}
            </div>
            <div
              v-else-if="submitted && !$v.user.password.invalid"
              class="invalid-feedback"
            >
              {{validations.PASSWORD_LENGTH_ERROR}}
            </div>
          </div>
         <router-link :to="{name : 'forgotPassword' }"> <p class="forgot-password">Forgot Password?</p></router-link>

          <div class="buttons">
            <b-button class="custom-btn" variant="primary" @click="submitForm"
              >Login</b-button
            >
            <b-button class="custom-btn" variant="danger" @click="resetForm"
              >Reset</b-button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import { required} from "vuelidate/lib/validators";
import {headings, messages, validations, labels} from '../utils/constants'
export default {
  name : 'Login',
  components : {
      BaseHeader: () => import("./base/BaseHeader.vue"),
      BaseMessage: () => import("./base/BaseMessage.vue"),
      Navbar: () => import("./navs/Navbar.vue"), 
  },
  data(){
      return{
        headings, labels,
        messages, validations,
          user :{
              username: '',
              password : ''
          },
          submitted :false,
          showMsg : false
      }
  },
  computed :{
      ...mapGetters({
        getLoggedInUser : 'auth/getLoggedInUser',
        userData : 'users/userData'
      })
   },
   validations:{
      user : {
          username : { required},
          password : { required },
      }
  },
  methods: {
      ...mapActions('auth',['addloggedInUser']),
       resetForm(){
          this.user  = {
              username : '',
              password:''
          }
          this.submitted = false
      },
      submitForm(){
           this.submitted = true;
           this.showMsg = false;
          this.$v.$touch();
          if (this.$v.$invalid) {
            return;
          }else{
              const loggedInUser = this.userData.find(user =>{
                  if(this.user.username == user.username && this.user.password == user.password){
                    return user;
                  }else{
                    this.showMsg = true;
                    return false;
                  }
                });
                this.addloggedInUser(loggedInUser);
                if(loggedInUser){
                    this.$router.push('/dashboard');
                }
                this.resetForm();
          }
      }
  }    
}
</script>


<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  margin-top: 2.2rem;
  /* background-color: whitesmoke; */
}
  .form-container{
        width:35%;
        margin: auto;
        margin-top: 2.2rem;
    }
    input{
        height:1.8rem;
        width:70%;
        display: inline;
        margin-left: 1rem;
    }
    .radio-input, .radio-inputs{
display: inline;    }
.radio-inputs{margin-left: 1rem;
}
.radio-input{
  margin-left:1rem;
}
.forgot-password{
  color:rgb(110, 109, 109);
  font-size: 1rem;
  text-align: right;
  margin:.2rem;
  font-weight: 600;
  margin-right: 1.3rem;
  padding: 0;
  cursor:pointer;

}

.custom-input{
  margin-bottom: 0 !important;
}
    .dropdowns{
      margin-left: 1rem;
      display: inline;    
    }
    .dp{
      width:9rem;
      margin-right:.6rem;
    }
    label{
        min-width: 7rem;
        font-size: .9rem;
        text-align: left;
        /* display:inline; */
    }
    .form-group{
        margin-bottom: 1.2rem;
    }
    .custom-btn{
        margin: 1.2rem .7rem ;
    }
    .buttons{
      text-align: right;
    }
    .invalid-feedback{
        margin-left: 8rem;
    }
    .btn-primary {
    color: whitesmoke;
    background-color:  rgb(46, 96, 144);
    border-color:  rgb(46, 96, 144);
  }
  a{
    color: whitesmoke;
  }
    
</style>