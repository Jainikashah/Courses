<template>
<div>
     <ul>
         <transition-group tag="ul" name="list">
            <li v-for=" user in users" @click="removeUser(user)" :key="user">{{user}}</li>
         </transition-group>
    </ul>
    <div>
        <input type="text" name="" id="" v-model="newUser">
        <button @click="addUser">Add user</button>
    </div>
</div>
   
</template>

<script>
export default {
    data(){
        return {
            users : ['max','leaina','juli','angela','andrei'],
            newUser : ''
        }
    },
    methods : {
        addUser(){
            if(this.newUser != ''){
                this.users.unshift(this.newUser);
                this.newUser = ''
            }
        },
        removeUser(user){
            this.users = this.users.filter(item => item != user)
        }
    }
}
</script>

<style scoped>
ul{
    list-style: none;
}

li{
    border : 1px solid lightblue;
    padding : 1rem;
    text-align: center;
}
.list-enter-from{
    opacity: 0;
    transform : translateX(-30px);
}
.list-enter-active{
    transition: all 1s ease-in-out;
}
.list-enter-to{
    opacity: 1;
    transform: translateX(0);
}

.list-leave-from{
    opacity: 1;
    transform : translateX(0px);
}
.list-leave-active{
    transition: all 1s ease-in;
    position: absolute;
}
.list-leave-to{
    opacity: 0;
    transform: translateX(30px);
}
.list-move{
    transition: all 1s ease;
}
</style>