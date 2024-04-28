import * as msg from "../constants/messages.js";
import * as page from "../constants/pagesUrl.js";

// getting html elements:
const submitBtn = document.getElementById("submitBtn");
const currentPasswordError = document.getElementById("currentPasswordError");
const newPasswordError = document.getElementById("newPasswordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const userCurrentPassword = document.getElementById("currentPassword");
const userNewPassword = document.getElementById("newPassword");
const userConfirmPassword = document.getElementById("confirmPassword");


// checking if fields are valid or not:
const isCurrentPasswordEmpty = () => {
    if (userCurrentPassword.value == "") {
        currentPasswordError.innerHTML = msg.notEmptyMsg;
    }
     else {
        currentPasswordError.innerHTML = "";
      }
}

const isNewPasswordEmpty = () => {
    if (userNewPassword.value == "") {
        newPasswordError.innerHTML = msg.notEmptyMsg;
      }
      else {
        newPasswordError.innerHTML = "";
      }
}

const isPasswordValid = () => {
    if(userNewPassword.value.length < 6){
        newPasswordError.innerHTML = msg.passwordErrorMsg;
        return true;
    }
    return false; 
}

const isConfirmPasswordEmpty = () => {
    if (userConfirmPassword.value == "") {
        confirmPasswordError.innerHTML =
          msg.notEmptyMsg;
      } else {
        confirmPasswordError.innerHTML = "";
      }
}

// resetting values after password is changed:
const resetValues = () => {
    userCurrentPassword.value = "";
    userNewPassword.value = "";
    userConfirmPassword.value = "";
  
}


// validating all and on confirm, storing updated password:
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  const storedPassword = loggedInUser.password;
  const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

  if (!(userCurrentPassword.value == "" || userNewPassword.value == "" ||userConfirmPassword.value == "" || isPasswordValid())) 
  {
    if (storedPassword == userCurrentPassword.value) {
      if (userNewPassword.value == userConfirmPassword.value) {
        const toAdd = {
          ...loggedInUser,
          password: userNewPassword.value,
        };
        localStorage.setItem("LoggedInUser", JSON.stringify(toAdd));

        storedUserDetails.forEach((item) => {
          if (item.key == loggedInUser.key) {
            item.password = userNewPassword.value;
          }
        });
        localStorage.setItem("userDetails", JSON.stringify(storedUserDetails));
        alert(msg.passwordChangeMsg);
        resetValues();
    
        window.location.href = page.viewProfilePage;
      }
       else {
        alert(msg.passwordUnmatchError);
        resetValues();
      }
    } 
    else {
      alert(msg.incorrectCurrentPassword);
        resetValues();
    }
  } 

  else {
    isCurrentPasswordEmpty();
    isNewPasswordEmpty();
    isConfirmPasswordEmpty();
    isPasswordValid();
  }

});


// event listeners:
userCurrentPassword.addEventListener("keyup", (event) => {
    isCurrentPasswordEmpty();
});

userNewPassword.addEventListener("keyup", (event) => {
    isNewPasswordEmpty();
    isPasswordValid();
});

userConfirmPassword.addEventListener("keyup", (event) => {
    isConfirmPasswordEmpty();
});

