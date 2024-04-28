
const app = Vue.createApp({
    data : () => {
        return { 
            heading : 'Basics:',
            courseGoal : 'Finishing the course and learn all about VUE.',
            courseGoal2 : '<h5>Inside heading tag</h5>',
            vueLink : 'https://vue.js.org/',
            counter : 2,
            name : '',
            fullname : '',
            confirmName : '',
            inputName : '',
            displayValue : ''
        };
    },

    computed : {
        computedMethod(){
            console.log('runs once.');
            this.displayValue = "Computed Method"
        }
    },

    watch : {
        counter(newValue, oldValue){
            console.log('watch counter : '+ newValue, oldValue)
        }
    },

    methods : {
        randomNo() {
            const randomNo = Math.random();
            return randomNo;
        },
        outputGoal() {
            return this.courseGoal;
        },
        outputGoal2() {
            return this.courseGoal2;
        },
        add() {
            this.counter = this.counter + 1;
        },
        subtract(num){
            this.counter = this.counter-num;
        },
        setName(event){
            this.name = event.target.value;
        },
        setfName(event, lname){
            this.fullname = event.target.value + ' ' + lname;
        },
        submitForm(event){
            event.preventDefault();
        },
        submitForm2(){

        },
        confirmInput(){
            this.confirmName = this.name;
        },
        resetInput(){
            this.inputName = '';
        },
        setInputName(){
            this.inputName = event.target.value;
        },
        normalMethod(){
            console.log('runs everytime');
            this.displayValue ="Normal method";
        }

    }

});

app.mount('#user-goal');



