<template>
  <div class="show-users-container">
    <div class="nav">
      <navbar :navbarType="userType"></navbar>
    </div>


    <b-overlay :show="show" rounded="sm">
      <section class="table-section">
        <table>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>User Type</th>
            <th>Created At.</th>
            <th>Updated At.</th>
            <th>Actions</th>
            <th>Status</th>
          </tr>

          <!-- <component v-if="showEditPage" :is="EditBtn" /> -->

          <tr v-for="item in userData" :key="item.id">
            <template v-if="userData.indexOf(item) < usersCounter">
              <td>{{ item.username }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.userType }}</td>
              <td>{{ item.createdAt | dateTimeFormat('dateFormat') }} </td>
              <td>{{ item.updatedAt | checkNull | dateTimeFormat }}</td>
              <td>
                <p>
                  <i :class=" item.username == getLoggedInUser.username ? 'disabled' : ''"
                    @click="editUser(item)"
                    class="fas fa-pen"
                  ></i>
                  <i @click="deleteUser(item)"
                    :class="item.username == getLoggedInUser.username ? 'disabled' : '' "
                    class="fas fa-trash"
                  ></i>
                </p>
              </td>
              <td>
                <div class="form-group">
                  <div class="dropdowns">
                    <b-form-select
                      :value="item.status"
                      :options="userStatusOptions"
                      @change="onStatusChange($event, item.id)"
                      size="sm"
                      class="mt-3 dp"
                    ></b-form-select>
                  </div>
                </div>
              </td>
            </template>
          </tr>
        </table>
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
        messages,
      show: false,
      EditBtn: "EditForm",
      usersCounter: values.USERS_COUNTER,
      counterStep: values.COUNTER_STEP,
      userStatusOptions: ddlData.userStatusOptions
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
  created(){
    if(this.userData.length > 5){
      this.usersCounter = 5
    }else{
      this.usersCounter = this.userData.length
    }

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
      console.log(item.username, this.getLoggedInUser.username);
      if (item.username != this.getLoggedInUser.username) {
        this.userData.forEach((elm, index) => {
          if (elm.id == item.id) {
            this.userData.splice(index, 1);
            this.toast('b-toaster-top-right', messages.SUCCESS,messages.USER_DELETE)
          }
        });
      }
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
};
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