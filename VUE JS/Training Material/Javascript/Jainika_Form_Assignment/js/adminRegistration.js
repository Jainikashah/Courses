import User from "../models/User.js";
import * as msg from '../constants/messages.js';
import * as page from '../constants/pagesUrl.js';


// getting HTML elements:
const username = document.getElementById("username");
const password = document.getElementById("password");
const number = document.getElementById("number");
const email = document.getElementById("email");
const submitButton = document.getElementById("submitButton");
const maleRadioBtn = document.getElementById("maleBtn");
const femaleRadioBtn = document.getElementById("femaleBtn");
const loginBtn = document.getElementById('loginBtn');
let gender = null;


// storing data in local storage:
const storeData = () => {
    if (maleRadioBtn.checked) {
      gender = "Male";
    } else if (femaleRadioBtn.checked) {
      gender = "Female";
    }
  
    const user = new User({  
      userName: `${username.value}`,
      password: `${password.value}`,
      email: `${email.value}`,
      number: `${number.value}`,
      gender: gender,
      key : Math.random(),
      admin : true,
      status : 'Active',
      currentDt : Date.now()
    });
    const toStoreData = [];
    toStoreData.push(user);
    let prevData =  localStorage.getItem('userDetails');

    if(prevData){
        prevData = JSON.parse(prevData);
        toStoreData.push(...prevData);
    }

    localStorage.setItem("userDetails", JSON.stringify(toStoreData)); 
    alert(msg.registrationSuccessMsg);
};


// validates all the input fields:
const areInputsEmpty = () => {
    return isNotEmpty(username) && isNotEmpty(password) && isNotEmpty(number) && isNotEmpty(email) ? false :  true; 
}

const areInputsValid = () => {
  return isPasswordValid(password) && isNumberValid(number) && isEmailValid(email)  ? true : false;
}



// checks if the field is empty or not:
const isNotEmpty = (inputField) => {

  if (inputField.value.trim() == "") {
      document.querySelector(`#${inputField.id} + p`).innerHTML = msg.notEmptyMsg
      inputField.setCustomValidity("Invalid field.");
      return false;
  } else {
      document.querySelector(`#${inputField.id} + p`).innerHTML = "";
      inputField.setCustomValidity("")
      return true;
  }

};



// checks if the password field is valid or not:
const isPasswordValid = (password) => {
  if(password.value.length < 6){
    document.querySelector(`#${password.id} + p`).innerHTML = msg.passwordErrorMsg;
    password.setCustomValidity("Invalid field.");
    return false;
  }else{
    document.querySelector(`#${password.id} + p`).innerHTML = '';
    password.setCustomValidity('');
    return true;

  }
}


// checks is number field is valid or not:
const isNumberValid = (number) => {
  if(number.value.length > 10 || number.value.length < 10){
    document.querySelector(`#${number.id} + p`).innerHTML = msg.numberErrorMsg;
    number.setCustomValidity("Invalid field.");
    return false;

  }else{
    document.querySelector(`#${number.id} + p`).innerHTML = '';
    number.setCustomValidity('');
    return true;

  }
}


// checks if email field is valid or not:
const isEmailValid = (email) => {
  if(email.checkValidity()){
    document.querySelector(`#${email.id} + p`).innerHTML = '';
    email.setCustomValidity('');    
    return true;
 
  }else{
    document.querySelector(`#${email.id} + p`).innerHTML = msg.emailErrorMsg;
    email.setCustomValidity("Invalid field.");
    return false;
  }
}


// checks all the data, if Ok then user logs in:
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
 
  if(!areInputsEmpty())
  {
      areInputsValid() ? storeData() : false;   
      window.location.href="./adminLogin.html"
  }else{
      areInputsEmpty();
  }
});



// event listeners:
username.addEventListener('keyup', e => {
  isNotEmpty(username, 'Username');
});

password.addEventListener('keyup', e => {
  isNotEmpty(password, 'Password');
  isPasswordValid(password);
})

number.addEventListener('keyup', e => {
  isNotEmpty(number, 'Contact No.');
  isNumberValid(number);
})

email.addEventListener('keyup', e => {
  isNotEmpty(email, 'Email ID');
  isEmailValid(email);
})


userBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = page.userRegistrationPage;
})

loginBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  window.location.href = page.adminLoginPage;
})