<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} details </button>
        <ul v-if="detailsAreVisible">
            <li>Phone no : {{friend.phone}}</li>
            <li>Email : {{friend.email}}</li>
        </ul>
    </li>
</template>




<script>

// friend-contact
export default {
    data(){
        return {
            detailsAreVisible: false,
            friend : {
                 id : 'manuel',
                 name : 'Manuel lorenz',
                 phone : 2323371991,
                 email : 'm@g.com'}    
        }
    },
    methods : {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
}
</script>