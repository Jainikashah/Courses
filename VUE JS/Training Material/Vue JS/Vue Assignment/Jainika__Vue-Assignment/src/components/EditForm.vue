<template>
  <div>
   
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username"> {{labels.USERNAME}} </label>
          <input
            type="text"
            autocomplete="off"
            v-model="user.username"
            id="username"
            name="username"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="userType"> {{labels.USER_TYPE}} </label>
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
          <label for="email">{{labels.EMAIL}} </label>
          <input
            type="email"
            autocomplete="off"
            v-model="user.email"
            id="email"
            name="email"
            class="form-control"
            
          />
        
        </div>

        <div class="form-group">
          <label for="gender"> {{labels.GENDER}}</label>
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
            ></b-form-select>
            <b-form-select
              
              v-model="user.country"
              :options="countryOptions"
              size="sm"
              class="mt-3 dp"
            ></b-form-select>

           
          </div>
        </div>

        <div class="form-group">
          <label for="number">{{labels.NUMBER}} </label>
          <input
            type="number"
            autocomplete="off"
            v-model="user.number"
            id="number"
            name="number"
            class="form-control"
         
          />
        
        </div>

        <div class="buttons">
          <b-button class="custom-btn" variant="primary" @click="submitForm">Edit</b-button>

          <b-button
            aria-describedby="cancel-label"
            class="custom-cancel-btn"
            variant="danger"
            @click="cancelBtn"
            >Cancel</b-button>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import {ddlData, labels} from '../utils/constants';

export default {
  name : 'EditForm',
  emits: ["hide","updateDetails"],
  props: ["item"],
  computed: {
    ...mapState('userData',['userData']),
  },

  data() {
    return {
      labels,
      user: {
        username: this.item.username,
        number: this.item.number,
        email: this.item.email,
        state: this.item.state,
        country: this.item.country,
        gender: this.item.gender,
        id: this.item.id,
        userType: this.item.userType
      },
      submitted: false,
       stateOptions : ddlData.stateOptions,
      countryOptions : ddlData.countryOptions,
      userTypeOptions : ddlData.userTypeOptions
    };
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

  methods: {
  cancelBtn(){
    this.$emit('hide',false);
  },

    submitForm() {
      this.$emit('updateDetails',this.user);
      this.submitted=true;
      this.$emit('hide', true);
},
  },
};
</script>



<style scoped>
.edit-btn {
  width: 100vw;
  height: max-content;
}
form {
  width: 40vw;
}
.custom-cancel-btn {
  background-color: rgb(228, 83, 83);
}

.form-container {
  position: relative;
  top: -4rem;
  width: max-content;
  margin: auto;
  background-color: whitesmoke;
  padding-top: 5rem;
  padding: 3rem;
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
  background-color: rgb(46, 96, 144);
}
.buttons {
  text-align: right;
}
.invalid-feedback {
  margin-left: 8rem;
}
.menu-items {
  display: flex;
  margin-left: auto;
}
</style>