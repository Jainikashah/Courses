<template>
    <div>
        <button v-if="loggedIn" @click="changeAuthStatus">Logout</button>
        <button v-else @click="changeAuthStatus">Login</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    computed :{
        ...mapGetters(['loggedIn'])
    },
    methods:{
        ...mapActions(['changeAuthStatus'])
    }
}
</script>