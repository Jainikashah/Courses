import * as msg from '../constants/messages.js';
import * as page from '../constants/pagesUrl.js';

// getting html elements:
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('contact');
const gender = document.getElementById('gender');
const changePasswordBtn = document.getElementById('passwordBtn');
const editProfile = document.getElementById('editProfile');
const deleteAcc = document.getElementById('deleteAcc');
 

// event listeners:
editProfile.addEventListener('click', () => {
    window.location.href = page.editProfilePage;
})

changePasswordBtn.addEventListener('click', () => {
    window.location.href = page.changePasswordPage;
})


// delete button functionality:
deleteAcc.addEventListener('click',()=>{
    const resp = confirm(msg.confirmDeleteMsg);
    if(resp){
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        const LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));

        const toAdd = userDetails.filter((item) => {
            return item.key != LoggedInUser.key
        })

        localStorage.setItem('userDetails', JSON.stringify(toAdd));
        localStorage.setItem('LoggedInUser',null);
        alert(msg.deleteSuccessMsg);
        window.location.href = page.userLoginPage;   
    }
})


const loggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));

let td = document.createElement('TD');
td.innerHTML = loggedInUser.username;
username.appendChild(td);

td = document.createElement('TD');
td.innerHTML = loggedInUser.email;
email.appendChild(td);

td = document.createElement('TD');
td.innerHTML = loggedInUser.number;
number.appendChild(td);

td = document.createElement('TD');
td.innerHTML = loggedInUser.gender;
gender.appendChild(td);
