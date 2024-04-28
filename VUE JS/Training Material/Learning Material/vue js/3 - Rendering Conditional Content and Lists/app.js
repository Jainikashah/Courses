const app = Vue.createApp({
    data(){
        return {
            enteredItem : '',
            items : [],
            count : 0
        }
    },
    methods : {
        addGoal(){
            this.items.push(this.enteredItem);
            this.enteredItem = '';

        },
        removeItem(index){
            this.items.splice(index, 1)
        }
    }
})
app.mount('#todo');