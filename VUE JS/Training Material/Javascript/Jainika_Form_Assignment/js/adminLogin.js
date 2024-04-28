import * as msg from '../constants/messages.js';
import * as page from '../constants/pagesUrl.js';

let LoggedInUserDetails = null;
const submitButton = document.getElementById('submitButton');
const registerBtn = document.getElementById('registerBtn');


// checks the username, password field
const checkUser = (event) =>{
    event.preventDefault();

    const userName = document.getElementById('username');
    const password = document.getElementById('password');

    
    // getting local storage data:
    const storedDetails = JSON.parse(localStorage.getItem('userDetails'));


    // checking and alerting the user:
    for(var i=0; i<storedDetails.length; i++){

        if(storedDetails[i].username == userName.value && storedDetails[i].password == password.value){
            alert(msg.loginSuccessMsg);
            LoggedInUserDetails = storedDetails[i];
            localStorage.setItem('LoggedInUser', JSON.stringify(storedDetails[i]));
            window.location.href =page.dashboardPage;
            return 0;
        }
    }

    alert(msg.invalidDetailsMsg);
  
    // resetting the values:
    userName.value = "";
    password.value = "";
}


submitButton.addEventListener('click',checkUser);

userBtn.addEventListener('click',(e) => {
    e.preventDefault();
    window.location.href = page.userLoginPage;
})

registerBtn.addEventListener('click', e =>{
    e.preventDefault();
    window.location.href = page.adminRegistrationPage;
})