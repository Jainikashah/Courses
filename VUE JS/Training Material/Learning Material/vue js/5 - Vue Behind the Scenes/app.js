// 1. vanilla js reactivity issue
let wish = 'Hello';
const completeWish = wish + ' world';
console.log(completeWish);

wish = "Hellooooo!";
console.log(completeWish);



// 2. template
const app = Vue.createApp({
    template : `
        <p> Tempting for Pizza </p>
    `,
    data() {return {}}
});
app.mount('#disp');



// 3. Refs
const app2 = Vue.createApp({
   
    data() {
        return {
            message : 'Hello world' 
        }
    },
    methods :{
        setText(){
            this.message = this.$refs.userText.value;
        }
    }
    
});
app2.mount('#disp2');



// 3. Lifecycle methods
const app3 = Vue.createApp({
   
    data() {
        return {
            message : 'Hello world' 
        }
    },  
    methods :{
        setText(){
            this.message = this.$refs.userText.value;
        }
    },
    beforeCreate(){
        console.log('BeforeCreate()');
    },
    created(){
        console.log('created()');
    },
    beforeMount(){
        console.log('beforeMount()');
    },
    mounted(){
        console.log('mounted()');
    },
    beforeUpdate(){
        console.log('beforeUpdate()');
    },
    updated(){
        console.log('Updated()');
    },
    beforeUnmount(){
        console.log('beforeUnmount()');
    },
    unmounted(){
        console.log('unmounted()');
    }
});
app3.mount('#disp3');

