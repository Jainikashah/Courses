<template>
    <div>
        <div class="nav">
            <navbar :navbarType="userType"></navbar>
        </div>

        <base-message v-if="showMsg" msgType="success" :msg="messages.PROFILE_UPDATE" />
         
         <div class="edit-container">
            <base-header>
        <template #heading> {{headings.EDIT_PROFILE_HEADING}}  </template>
        <template #description> {{headings.EDIT_PROFILE_DESC}} </template>
      </base-header>
   
        <div class="form-container">
          
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username"> {{labels.USERNAME}}</label>
          <input
            type="text"
            autocomplete="off"
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
          {{ validations.REQUIRED_FIELD('User name')}}
          </div>
        </div>

        <div class="form-group">
          <label for="email">{{labels.EMAIL}}</label>
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
{{ validations.REQUIRED_FIELD('Email')}} 
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
             
              v-model="user.state"
              :options="stateOptions"
              size="sm"
              class="mt-3 dp"
               :class="{
                'is-invalid': submitted && $v.user.state.$error,
              }"
            ></b-form-select>
            <b-form-select
              
              v-model="user.country"
              :options="countryOptions"
              size="sm"
              class="mt-3 dp"
               :class="{
                'is-invalid': submitted && $v.user.country.$error,
              }"
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
          <label for="number">{{labels.NUMBER}}</label>
          <input
            type="number"
            autocomplete="off"
            v-model="user.number"
            id="number"
            name="number"
            class="form-control"
            :class="{
              'is-invalid': submitted && $v.user.number.$error,
            }"
          />
             <div
              v-if="submitted && !$v.user.state.required"
              class="invalid-feedback"
            >
              {{validations.REQUIRED_FIELD('Contact No.')}}
            </div>
              <div
              v-else-if="submitted && !$v.user.number.invalid"
              class="invalid-feedback">
              {{validations.NUMBER_LENGTH_ERROR }}
            </div>
      
        </div>

        <div class="buttons">
          <b-button class="custom-btn" variant="primary" @click="submitForm"
            >Edit</b-button>
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
import {mapGetters, mapActions} from 'vuex';
import {headings, ddlData, validations, labels,messages} from '../utils/constants';

export default {
  name : 'EditProfile',
  components: { 
    BaseHeader: () => import("./base/BaseHeader.vue"),
    BaseMessage: () => import("./base/BaseMessage.vue"),
    Navbar: () => import("./navs/Navbar.vue"), 
  },
  data(){
      return {
        labels,
        headings,
        messages,
        validations,
        showMsg : false,
        
          submitted: false,
          stateOptions : ddlData.stateOptions,
          countryOptions : ddlData.countryOptions
      }
  },
  computed:{
      ...mapGetters('auth',['getLoggedInUser']),
        userType(){
          return this.getLoggedInUser.userType
      },
  },
  created(){
     this. user = {
      username: this.getLoggedInUser.username,
      number: this.getLoggedInUser.number,
      email: this.getLoggedInUser.email,
      state: this.getLoggedInUser.state,
      country: this.getLoggedInUser.country,
      gender: this.getLoggedInUser.gender,
      id : this.getLoggedInUser.id,
      userType : this.getLoggedInUser.userType
    }
  },
  validations: {
  user: {
    username: { required },
    email: { required, email },
    number: { required, minLength: minLength(10), maxLength: maxLength(10) },
    state: { required },
    country: { required },
  },
  },
  methods :{
    ...mapActions('users',['updateUser']),
    submitForm(){
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }else{
      this.updateUser({
        updatedAt : new Date(),
        ...this.user
      })
        this.showMsg=true;
      }
    }
  }  
}
</script>



<style scoped>

form{
  width:40vw
}

.form-container {
  width: 35%;
  margin: auto;
  margin-top: 2.2rem;
}
.edit-container{
    margin-top: 2.9rem;
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
.dp {
  width: 9rem;
  margin-right: 0.6rem;
   border: 1px solid #ced4da;
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
  background-color:  rgb(46, 96, 144)
}
.buttons {
  text-align: right;
}
.invalid-feedback {
  margin-left: 8rem;
}
.menu-items{
  display: flex;
  margin-left: auto;
}
</style>