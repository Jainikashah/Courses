import * as msg from '../constants/messages.js';
import * as page from '../constants/pagesUrl.js';

// getting stored data:
const LoggedInUser = JSON.parse(localStorage.getItem('LoggedInUser'));
const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

// getting html elements:
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const submitBtn = document.getElementById('submitBtn');

username.value = LoggedInUser.username;
email.value = LoggedInUser.email;
number.value = LoggedInUser.number;


// storing the updated data:
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const toAdd = {
        ...LoggedInUser,
        username : username.value,
        email : email.value,
        number : number.value
    }  
    localStorage.setItem('LoggedInUser',JSON.stringify(toAdd));

    storedUserDetails.forEach(item => {

        if(item.key == LoggedInUser.key){
            item.username = username.value;
            item.email = email.value;
            item.number = number.value;
            const options = {month:'short',day:'numeric',year:'numeric',hour: '2-digit', minute:'2-digit'}
            item.updatedDt =new Date().toLocaleString("en-US", options);
        }
    });
    localStorage.setItem('userDetails',JSON.stringify(storedUserDetails));
    alert(msg.profileUpdatedMsg);
    window.location.href = page.viewProfilePage;

})
