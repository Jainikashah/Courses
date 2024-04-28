const app =Vue.createApp({
    data : function(){
      return {
          username : '',
          password : '',
          passwordValidation : true
      }  
    },
    methods : {
        setUsername(event){
            this.username = event.target.value;
        },
        checkPassword(event){
            let value = event.target.value;
            if(value.length > 5){
                this.passwordValidation = false;
            }
        },
        submitForm(event){
            event.preventDefault();
            this.username='';
            this.password='';
            alert('User saved!')
        }
    }

})

app.mount('#form');