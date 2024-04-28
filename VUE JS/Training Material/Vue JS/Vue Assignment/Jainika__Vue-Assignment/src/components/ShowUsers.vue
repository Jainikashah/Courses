<template>
    <div class="show-users-container">
        <div class="nav">
            <navbar :navbarType="userType"></navbar>
        </div>
        <section class="table-section">   
            <table>
            <tr>
                <th><input @change="globalCheckBoxHandler($event)" :checked="globalCheckBox" type="checkbox" ></th>
                <th>Username</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Gender </th>
                <th>Location</th>
                <th>User Type</th>
                <th>Status</th>
            </tr>


            <tr v-for="item in userData" :key="item.id">
                <template v-if="userData.indexOf(item) < usersCounter">
                    <td>
                        <input type="checkbox" :id="item.id" :value="item.id" :checked="checkBoxes" v-model="checkBoxes" >
                    </td>
                    <td>{{item.username}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.number}}</td>
                    <td>{{item.gender | checkNull}}</td>
                    <td>{{item.state}}, {{item.country}}</td>
                    <td>{{item.userType}}</td>
                    <td class="status-icon" v-if="item.status == 'Inactive'"><i class="far fa-times-circle"></i></td>
                    <td class="status-icon" v-else><i class="far fa-check-circle"></i></td>
                </template>
            </tr>
        </table>
        </section>

        <p @click="loadMoreUsers" class="load-more-btn">
            {{messages.LOAD_MORE_MSG(usersCounter, userData.length)}}
        </p>
    
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {messages, values} from '../utils/constants'
export default {
    name : 'ShowUsers',
    components : {
        Navbar : () => import('./navs/Navbar.vue')
    },
    data(){
        return{
            messages,
            usersCounter : values.USERS_COUNTER,
            counterStep : values.COUNTER_STEP,

            globalCheckBox : false,
            userIds : [],
            checkBoxes : []
        }
    },
    computed : {
        ...mapGetters({
            getLoggedInUser : 'auth/getLoggedInUser',
            userData : 'users/userData'
        }),
        userType(){
            return this.getLoggedInUser.userType
        }
    },
    watch : {
        checkBoxes(){
            this.setGlobalCheckBoxValue()
        },
        usersCounter(){
            this.setUserId()
            this.setGlobalCheckBoxValue();
            this.checkBoxes = []
        }
    },
    created(){
        if(this.userData.length > 5){
            this.usersCounter = 5
        }else{
            this.usersCounter = this.userData.length
        }
        this.setUserId()
    },
   
    methods :{
        loadMoreUsers(){
            this.usersCounter = this.usersCounter + this.counterStep;
            if(this.usersCounter > this.userData.length){
                this.usersCounter = this.userData.length
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
        }
    }
}
</script>


<style scoped>
.show
.menu-items{
  display: flex;
  margin-left: auto;
}
.table-section{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--text-color);
    /* align-items: center; */
}
.load-more-btn{
    margin:auto;
    margin-top: 1rem;
    font-size: .9rem;
    text-align: center;
    background-color: whitesmoke;
    width: max-content;
    padding: .6rem 1rem;
    border-radius: 20px;
    z-index: 1;
    cursor: pointer;
    margin-bottom: 2rem;
}
table{
    background-color: whitesmoke;
    width: 100vw;
    border-spacing: 0;
}

tr{
    background-color: whitesmoke;
    border-bottom: 1px solid rgb(177, 171, 171);
}
td{
    padding:1rem !important;
}
td,th{
    padding: .5rem 1rem;
    text-align: center;
    border: none;
}
.status-icon{
    padding-left: 2rem !important;
}


.heading{
    margin:1rem;
    font-size: 1.2rem;
    font-family: sans-serif;
    font-weight: bold;
    color: var(--text-color);
    display: inline;
}

.table-heading{
    padding: 1rem 1rem;
}
tr:nth-child(odd){
    background-color: white;
}
.far{
    font-size: 1.2rem !important;
}
.btn{
    cursor: pointer;
    padding: .5rem;
    font-size: .9rem;
    height: max-content;
    width: max-content;
    text-align: center;
    background-color: darkgrey;
    color:white;
 }

 .none{
     display: none;
 }
 
td{
    font-size: .9rem;
}
 .fas{
     margin: 0 .9rem 0 0 ;
     cursor: pointer;
 }

.sort-select{
     margin-left: 1rem;
     height: 2rem;
     width: max-content;
     z-index: 1;
     position: relative;
     right:-6%;
     margin:.5rem 0 .5rem 1rem;

 } 
 .select-status{
    height: 2rem;
    width: max-content;
 }  

 .disabled{
    cursor:not-allowed;
 }

 .newUser{
     background-color: whitesmoke;
     border : 1px solid darkgrey;
     color: black;
     position: relative;
     left: 60%;
     margin:.5rem 1rem;
 }

 .blur{
    filter: blur(1.8px);
}
input[type="checkbox"]{
    height : 1rem;
}
.body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
 .edit-section{
    border-radius: 10px;
    box-shadow: 3px 3px 20px  rgba(0,0,0,.5);
     width:40vw;
    height: max-content;
    background-color:rgb(250, 246, 246);
    color: black;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem; 
    position: absolute; 
    padding-bottom: 1rem; 
    top:12%;
     left: 30%;
    z-index: 2;
    display: none;
 }
 form{
     margin-top: 2rem;
 }
 label{
     display: block;
     width: 30%;
 }
input{
    /* display:block; */
    padding-left: .3rem;
    width: 90%;
    margin: .4rem;
    height: 1.8rem;
    border-radius: 4px;
    border:1px solid black;
    margin-bottom: 1rem;
}
input[type="radio"]{
    margin: 0;
    width: min-content;
    padding: 0;
    margin: .3rem;   
    height: .8rem;
    text-align: center;
    
}

h2{
    text-align: center;
    text-transform: uppercase;
    display: inline;
}
#accType{
    display: inline;
    margin-right: 1rem;
}
#genderType{
    display: inline;
    margin-right: 1rem;
}
input[type=submit]{
    text-align: right;
    margin-top: 1.5rem;
    
}

.cross-btn{
    background-color: whitesmoke; 
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
}

.headings{
    display: flex;
    justify-content: space-between;
}
label{
    font-weight: bold;
}

.sort{   
    color: black;
    position: relative;
    left: 70%;
    display: inline;
}

.errorMsg{
    color:red;
}

.load-more-btn{
    margin:auto;
    margin-top: 1rem;
    font-size: .9rem;
    text-align: center;
    background-color: whitesmoke;
    width: max-content;
    padding: .6rem 1rem;
    border-radius: 20px;
    z-index: 1;
cursor: pointer;
margin-bottom: 2rem;
}

.far{
    font-size: 1rem;
    color: green;
}

.fa-times-circle{
    font-size: 1rem;
    color: red;
}
</style>