<template>
  <div class="show-users-container">
    <div class="nav">
      <navbar :navbarType="userType"></navbar>
    </div>

      <b-overlay :show="show" rounded="sm">
      <section class="table-section">
      <b-table :per-page="usersCounter" striped hover :items="items" :fields="fields">

        <template #head(checkbox)>
          <input type="checkbox" @change="globalCheckBoxHandler($event)" :checked="globalCheckBox" >
      </template>


        <template #cell(checkbox)="data">
            <input type="checkbox" :id="data.item.id" :value="data.item.id" :checked="checkBoxes" v-model="checkBoxes">
        </template>
        
        <template #cell(createdAt) ="data">
          {{data.item.createdAt | checkNull | dateTimeFormat('dateFormat')}}
        </template>

         <template #cell(updatedAt) ="data">
          {{data.item.updatedAt | checkNull | dateTimeFormat}}
        </template>

        <template #cell(actions)="data">
           <p>
            <i
            @click="editUser(data.item)"
             :class="data.item.username == getLoggedInUser.username ? 'disabled' : ''"
              class="fas fa-pen"
            ></i>
            <i 
              @click="deleteUser(data.item)"
              :class="data.item.username == getLoggedInUser.username ? 'disabled' : '' "
              class="fas fa-trash"
            ></i>
          </p>
        </template>

        <template #cell(status) ="data">
          <div class="form-group">
            <div class="dropdowns">
              <b-form-select
                :value="data.item.status"
                :options="userStatusOptions"
                @change="onStatusChange($event, data.item.id)"
                size="sm"
                class="mt-3 dp"
              ></b-form-select>
            </div>
          </div>
        </template>
                  
      </b-table>
        <p @click="loadMoreUsers" class="load-more-btn">
          {{messages.LOAD_MORE_MSG(usersCounter, userData.length)}}
        </p>
     
        </section>
      <template #overlay>
        <div>
          <component
            :item="editUserItem"
            @updateDetails="updateDetails"
            @hide="hide"
            :is="EditBtn"
          />
        </div>
      </template>
      </b-overlay>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { messages,ddlData,values } from '../utils/constants';

export default {

 name: "EditUsers",
  components: {
    Navbar: () => import("./navs/Navbar.vue"),
    EditForm: () => import("./EditForm.vue"),
  },
    data() {
    return {
      
        globalCheckBox : false,
        userIds : [],
        checkBoxes : [],
        messages,
      show: false,
      EditBtn: "EditForm",
      usersCounter: values.USERS_COUNTER,
      counterStep: values.COUNTER_STEP,
      userStatusOptions: ddlData.userStatusOptions,
      
    
        fields: [
          {
            key : 'checkbox'
          },
          {
            key: 'username',
            sortable: true
          },
          {
            key: 'email',
            sortable: false
          },
          {
            key: 'number',
            label : 'Contact no.'
          },
          {
              key : 'gender'
          },
          { 
              key : 'userType',
              label : 'User Type'
          },
          {
              key : 'createdAt',
              label : 'Created At.'
          },
          {
              key : 'updatedAt',
              label :'Updated At.'
          },
          {
              key : 'actions'
          },
          {
              key : 'status'
          }
        ],
        items : [],
    };
  },

  computed: {
    ...mapGetters({
     getLoggedInUser : "auth/getLoggedInUser", 
     userData : "users/userData"}),

    userType() {
      return this.getLoggedInUser.userType;
    },
  },


    watch : {
        checkBoxes(){
            this.setGlobalCheckBoxValue()
        },
        usersCounter(){
            this.setUserId()
            this.setGlobalCheckBoxValue()
        }
    },

    created(){
    if(this.userData.length > 5){
      this.usersCounter = 5
    }else{
      this.usersCounter = this.userData.length
    }

  this.items = [
    ...this.userData,
    ]
     this.setUserId()
  },
   methods: {
    ...mapActions("users", ["updateUser"]),
    onStatusChange(value, itemId) {
      this.userData.forEach((elm) => {
        if (elm.id == itemId) {
          elm.status = value;
            this.toast('b-toaster-top-right', messages.SUCCESS,messages.STATUS_UPDATE)
        }
      });
    },

      toast(toaster,title, body, append = false) {
        this.counter++
        this.$bvToast.toast(body , {
          title: title,
          toaster: toaster,
          solid: true,
          appendToast: append
        })
      },

 
    hide(updated) {
      this.show = false;
      if(updated){
      this.toast('b-toaster-top-right', messages.SUCCESS,messages.USER_UPDATE)

      }
    },

    deleteUser(item) {
      if (item.username != this.getLoggedInUser.username) {
        this.userData.forEach((elm, index) => {
          if (elm.id == item.id) {
            this.userData.splice(index, 1);
            this.toast('b-toaster-top-right', messages.SUCCESS,messages.USER_DELETE)
              this.items = [
              ...this.userData,
            ]
          }
        });
      }
    },

    globalCheckBoxHandler(e){
           this.checkBoxes = e.target.checked ? [...this.userIds] : []
        },
        
        setGlobalCheckBoxValue(){
           this.globalCheckBox =  this.checkBoxes.length != this.userIds.length ? false : true
        },

        setUserId(){
            this.userIds = this.userData.filter(item => {
                if(this.userData.indexOf(item) < this.usersCounter){
                    return item;
                }
            })
            this.userIds = this.userIds.map(item => item.id);
        },

    loadMoreUsers() {
      this.usersCounter = this.usersCounter + this.counterStep;
      if (this.usersCounter > this.userData.length) {
        this.usersCounter = this.userData.length;
      }
    },

    editUser(item) {
      if (item.username != this.getLoggedInUser.username) {
        this.show = true;
        this.editUserItem = item;
      }
    },
    updateDetails(item) {

    this.updateUser({
        updatedAt: new Date() ,
        ...item,
      });
    },
  },
  
  }
</script>



<style scoped>
.show .menu-items {
  display: flex;
  margin-left: auto;
}
.table-section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
}

.mt-3 {
  margin-top: 0 !important;
}
.disabled {
  cursor: not-allowed;
}
table {
  background-color: whitesmoke;
  width: 100vw;
  border-spacing: 0;
}

.dropdowns {
  margin: 0;
  padding: 0;
  width:max-content;
}
tr {
  background-color: whitesmoke;
  border-bottom: 1px solid rgb(177, 171, 171);
}
p {
  margin: 0;
  padding: 0.4rem;
}
i {
  /* margin-top: .rem !important; */
  color: rgb(46, 96, 144);
}
td,
th {
  padding: 0.5rem 1rem;
  text-align: center;
  border: none;
}

.dp {
  border: 1px solid #ced4da;
}

.heading {
  margin: 1rem;
  font-size: 1.2rem;
  font-family: sans-serif;
  font-weight: bold;
  color: var(--text-color);
  display: inline;
}

.table-heading {
  padding: 1rem 1rem;
}
tr:nth-child(odd) {
  background-color: white;
}
input[type="checkbox"]{
  height:1rem;
  padding-bottom: 0;
  margin-bottom: 0;
}


td {
  font-size: 0.9rem;
}
.fas {
  margin: 0 0.9rem 0 0;
  cursor: pointer;
}


.disabled {
  cursor: not-allowed;
}


.body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
form {
  margin-top: 2rem;
}
label {
  display: block;
  width: 30%;
}
input {
  /* display:block; */
  padding-left: 0.3rem;
  width: 90%;
  margin: 0.4rem;
  height: 1.8rem;
  border-radius: 4px;
  border: 1px solid black;
  margin-bottom: 1rem;
}


input[type="submit"] {
  text-align: right;
  margin-top: 1.5rem;
}
.load-more-btn {
  margin: auto;
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  background-color: whitesmoke;
  width: max-content;
  padding: 0.6rem 1rem;
  border-radius: 20px;
  z-index: 1;
  cursor: pointer;
  margin-bottom: 2rem;
}

.far {
  font-size: 1rem;
  color: green;
}

.fa-times-circle {
  font-size: 1rem;
  color: red;
}
</style>