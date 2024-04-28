const app = Vue.createApp({

    // //without components- 
    // data(){
    //     return {
    //         showDetails : false,
    //         friends: [
    //             {
    //                 id : 1,
    //                 name : 'Manushi',
    //                 email : 'M@gmai.com',
    //                 number : '987663536'
    //             },
    //             {
    //                 id : 2,
    //                 name : 'Devanshi',
    //                 email : 'D@gmai.com',
    //                 number : '633866293'
    //             },

    //         ]
    //     }
    // },
    // methods : {
    //     toggleDetails(){
    //         this.showDetails = !this.showDetails;
    //     }
    // }
});

// with components
app.component('friend-contact',{
    template : `
    <li>
        <h2>{{ friend.name }}</h2>
        <button v-on:click="toggleDetails">Show Details</button>
        <ul v-if="showDetails">
            <li><strong>Phone:</strong>{{ friend.number }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
    data(){
        return {
        showDetails : false,
        friend:{
            id : 2,
            name : 'Devanshi',
            email : 'D@gmai.com',
            number : '633866293'
        } 
    }
    },
    methods : {
        toggleDetails(){
            this.showDetails = !this.showDetails;
        }
    }
})


app.mount('#app');