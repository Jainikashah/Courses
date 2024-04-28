<template>
    <div>
        <navbar :navbarType="'default'"/>
    <base-message v-if="showMsg" :msgType="'success'" :msg="messages.USER_REGISTERED"></base-message>

         <div class="registration-container">
      <base-header>
        <template #heading> {{headings.REGISTRATION_HEADING}} </template>
        <template #description> {{headings.REGISTRATION_DESC}} </template>
      </base-header>

      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username"> {{labels.USERNAME}}</label>
            <input
              type="text"
              autocomplete="off"
              placeholder="username"
              v-model="user.username"
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

          <div class="form-group">
            <label for="password">{{labels.PASSWORD}}</label>
            <input
              type="password"
              autocomplete="off"
              v-model="user.password"
              placeholder="password"
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

          <div class="form-group">
            <label for="userType">{{labels.USER_TYPE}} </label>
            <div class="dropdowns">
              <b-form-select
                v-model="user.userType"

                :options="userTypeOptions"
                size="sm"
                class="mt-3 dp"
              ></b-form-select>
            </div>
          </div>

          <div class="form-group">
            <label for="email">{{labels.EMAIL}}</label>
            <input
              type="email"
              autocomplete="off"
              v-model="user.email"
              placeholder="email"
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
            <label for="gender">{{labels.GENDER}}</label>
            <div class="radio-inputs">
              <b-form-radio
                class="radio-input"
                v-model="user.gender"
                name="fgender"
                value="male"
              >
                Male
              </b-form-radio>
              <b-form-radio
                class="radio-input"
                v-model="user.gender"
                name="fgender"
                value="female"
              >
                Female
              </b-form-radio>
            </div>
          </div>

          <div class="form-group">
            <label for="state">{{labels.LOCATION}} </label>
            <div class="dropdowns">
              <b-form-select
                :class="{
                  'is-invalid': submitted && $v.user.state.$error,
                }"
                v-model="user.state"
                :options="stateOptions"
                size="sm"
                class="mt-3 dp"
              ></b-form-select>
              <b-form-select
                :class="{
                  'is-invalid': submitted  && $v.user.country.$error,
                }"
                v-model="user.country"
                :options="countryOptions"
                size="sm"
                class="mt-3 dp"
              ></b-form-select>

              <div
                v-if="submitted && !$v.user.state.required"
                class="invalid-feedback"
              >
               {{validations.REQUIRED_FIELD('Location')}}
              </div>
              <div
                v-else-if="submitted && !$v.user.country.required"
                class="invalid-feedback"
              >
               {{validations.REQUIRED_FIELD('Location')}}
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="number">{{labels.NUMBER}} </label>
            <input
              type="number"
              onkeypress='return event.charCode >= 48 && event.charCode <= 57'
              autocomplete="off"
              placeholder="contact no."
              v-model="user.number"
              id="number"
              name="number"
              class="form-control"
              :class="{
                'is-invalid': submitted && $v.user.number.$error,
              }"
            />
            <div
              v-if="submitted && !$v.user.number.required"
              class="invalid-feedback"
            >
            {{validations.REQUIRED_FIELD('Contact No.')}}

            </div>
            <div
              v-else-if="submitted && !$v.user.number.invalid"
              class="invalid-feedback"

            >
          {{validations.NUMBER_LENGTH_ERROR}}
            </div>
          </div>

          <div class="buttons">
            <b-button class="custom-btn" variant="primary" @click="submitForm"
              >Register</b-button
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
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import {mapActions} from 'vuex';
import User from '../models/user';
import {headings,messages, validations, ddlData, labels} from "../utils/constants"
export default {
  name : 'Registration',
     components: { 
      BaseHeader: () => import("./base/BaseHeader.vue"),
      BaseMessage: () => import("./base/BaseMessage.vue"),
      Navbar: () => import("./navs/Navbar.vue"), 
    },
  data() {
    return {
      messages, headings, labels,validations, ddlData,
      showMsg:false,
      navItems: ["Login"],
      user: new User(),
      submitted: false,
      stateOptions: ddlData.stateOptions,
      countryOptions: ddlData.countryOptions,
      userTypeOptions: ddlData.userTypeOptions,
    };
  },
  validations: {
    user: {
      username: { required },
      password: { required, minLength: minLength(6) },
      email: { required, email },
      number: { required, minLength: minLength(10), maxLength: maxLength(10) },
      state: { required },
      country: { required },
    },
  },
  methods:{
    ...mapActions('users',['addUser']),
    resetForm() {
      (this.user = {
        username: "",
        password: "",
        number: null,
        email: "",
        state: null,
        country: null,
        userType: "FE Trainee",
        gender: null,
      }),
        (this.submitted = false);
    },
    submitForm(){
       this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }else{
        
        this.addUser({
          status: 'Active',
          createdAt : new Date(),
          id: this.user.username,
          ...this.user
        })
        this.resetForm();
        this.showMsg = true;
      }
    }
  }
}
</script>


<style scoped>
.registration-container {
  width: 100vw;
  height: 100vh;
  margin-top: 2.9rem;
}
.form-container {
  width: 35%;
  margin: auto;
  margin-top: 2.2rem;
}
input {
  height: 1.8rem;
  width: 70%;
  display: inline;
  margin-left: 1rem;
}
.radio-input,
.radio-inputs {
  display: inline;
}
.radio-inputs {
  margin-left: 1rem;
}
.radio-input {
  margin-left: 1rem;
}

.dropdowns {
  margin-left: 1rem;
  display: inline;
}
.dropdowns .mt-3 {
  margin-top: 0rem !important;
}
.dp {
  width: 9rem;
  border: 1px solid #ced4da;
  margin-right: 0.6rem;
  font-size: 0.9rem;
}
label {
  min-width: 7rem;
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
  text-align: right;
}
.invalid-feedback {
  margin-left: 8rem;
}
.btn-primary {
  color: whitesmoke;
  background-color: rgb(46, 96, 144);
  border-color: rgb(46, 96, 144);
}
a{
  color: whitesmoke;
}
</style>
