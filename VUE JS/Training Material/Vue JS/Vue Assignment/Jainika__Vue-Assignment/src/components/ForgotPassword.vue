<template>
  <div>
    <navbar :navbarType="'default'">
      <template #navItems>
        <b-nav-item>
          <router-link :to="{name : 'login' }"> Login </router-link>
        </b-nav-item>
      </template>
    </navbar>

<base-message v-if="showMsg == 'success' " :msg="messages.PASSWORD_UPDATE" msgType="success"/>    
<base-message v-if="showMsg == 'error'" :msg="messages.INCORRECT_EMAIL" msgType="error"/>    

    <div class="pass-container">
        <base-header class="header">
      <template #heading> {{messages.FORGOT_PASSWORD_HEADING}} </template>
      <template #description>{{messages.FORGOT_PASSWORD_DESC}}</template>
    </base-header>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">{{labels.EMAIL}} </label>
            <input
              type="email"
              autocomplete="off"
              v-model="user.email"
              id="email"
              name="email"
              class="form-control"
              :class="{
                'is-invalid': submitted && $v.user.email.$error,
              }"
            />
            <div
              v-if="submitted && !$v.user.email.required"
              class="invalid-feedback"
            >
              {{validations.REQUIRED_FIELD('Email')}}
            </div>
            <div
              v-else-if="submitted && !$v.user.email.invalid"
              class="invalid-feedback"
            >
              {{validations.INVALID_FIELD('Email')}}
            </div>
          </div>

          <div class="form-group">
            <label for="password">{{labels.NEW_PASSWORD}}</label>
            <input
              type="password"
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
              {{validations.REQUIRED_FIELD('New Password')}}
            </div>
            <div
              v-else-if="submitted && !$v.user.password.invalid"
              class="invalid-feedback"
            >
             {{validations.PASSWORD_LENGTH_ERROR}}
            </div>
          </div>

          <div class="form-group">
            <label for="confirmPassword">{{labels.CONFIRM_PASSWORD}} </label>
            <input
              type="password"
              autocomplete="off"
              v-model="user.confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              class="form-control"
              :class="{
                'is-invalid': submitted && $v.user.confirmPassword.$error,
              }"
            />
            <div
              v-if="submitted && !$v.user.confirmPassword.required"
              class="invalid-feedback"
            >
             {{validations.REQUIRED_FIELD('Confirm Password')}}
            </div>
            <div
              v-else-if="submitted && !$v.user.confirmPassword.sameAsPassword"
              class="invalid-feedback"
            >
              {{validations.SAME_AS_PASSWORD}}
            </div>
          </div>
           <div class="buttons">
            <b-button class="custom-btn" variant="primary" @click="submitForm"
              >Change Password</b-button
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import {mapGetters} from 'vuex';
import {messages, validations, headings, labels } from '../utils/constants'
export default {
  name : 'ForgotPassword',
  components: { 
      BaseHeader: () => import("./base/BaseHeader.vue"),
      BaseMessage: () => import("./base/BaseMessage.vue"),
      Navbar: () => import("./navs/Navbar.vue"), 
   },
  data() {
    return {
      headings,
      labels,
      validations,
      messages,
        showMsg:false,
      user: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
    };
  },
  computed: {...mapGetters('users',['userData'])
  },
  validations: {
    user: {
      password: { required, minLength: minLength(6) },
      email: { required, email },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
      resetForm(){
          this.user.email = "";
          this.user.password = "";
          this.user.confirmPassword = ""
          this.submitted = false;
      },
    submitForm() {
        this.submitted = true;
        
        this.$v.$touch();
        if (this.$v.$invalid) {
            return;
        }
        else{
          let emailFound = false
            this.userData.forEach(elm => {
                if(elm.email == this.user.email){
                    elm.password = this.user.password;
                    emailFound = true
                    return 0;
                }
            })
            if(emailFound){
              console.log('found')
                  this.showMsg='success';
                  this.resetForm();
                  return 0;
            }else{
              console.log('err')
              this.showMsg='error';
              this.resetForm();
            }          
        }
    },
  },
};
</script>

<style scoped>
.pass-container {
  width: 100vw;
  height: 100vh;
  margin-top: 2.2rem;
  text-align: center;
}
.form-container {
  width: 45%;
  margin: auto;
  margin-top: 2.2rem;
}
h2 {
  margin-top: 3rem !important;
}
input {
  height: 1.8rem;
  width: 50%;
  display: inline;
  margin-left: 1rem;
}

label {
  min-width: 8rem;
  font-size: 0.9rem;
  text-align: left;
  /* display:inline; */
}
.form-group {
  margin-bottom: 1.2rem;
}
.custom-btn {
  margin: 1.2rem 0.7rem;
}
.buttons {
    width: 53%;
    margin-left: auto;
    display: flex;
  text-align: right;
}
.invalid-feedback {
    text-align: left;
  margin-left: 14.2rem;
}
.btn-primary {
  color: whitesmoke;
  background-color: rgb(46, 96, 144);
  border-color: rgb(46, 96, 144);
}
a {
  color: whitesmoke;
}
</style>