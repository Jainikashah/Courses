import User from "../models/User.js";
import * as msg from "../constants/messages.js";

let userDetails = JSON.parse(localStorage.getItem("userDetails"));
let LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));

let userDetailsLength = userDetails.length;
let noOfRows = 10;
let stepOver = 10;
let rowsLeft = userDetailsLength - noOfRows;


const creatingGridLayout = (admin=false) => {
    document.getElementById("table").remove();
    document.getElementById("load-more").remove();
    
  const body = document.getElementsByTagName("body")[0];
  const table = document.createElement("table");
  table.setAttribute("id", "table");
  body.appendChild(table);

  const headerTr = document.createElement("TR");
  headerTr.setAttribute("class", "headers");
  const usernameTh = document.createElement("TH");
  usernameTh.innerHTML = "Username";
  headerTr.appendChild(usernameTh);

  const Email = document.createElement("TH");
  Email.innerHTML = "Email ID";
  headerTr.appendChild(Email);

  const contactNo = document.createElement("TH");
  contactNo.innerHTML = "Contact No.";
  headerTr.appendChild(contactNo);

  const gender = document.createElement("TH");
  gender.innerHTML = "Gender";
  headerTr.appendChild(gender);

  const accountType = document.createElement("TH");
  accountType.innerHTML = "Account type";
  headerTr.appendChild(accountType);

  const createdAt = document.createElement("TH");
  createdAt.innerHTML = "Created At";
  headerTr.appendChild(createdAt);

  const updatedAt = document.createElement("TH");
  updatedAt.innerHTML = "Updated At";
  headerTr.appendChild(updatedAt);

  if(admin){
    const actions = document.createElement("TH");
  actions.innerHTML = "Actions";
  headerTr.appendChild(actions);
  }

  const status = document.createElement("TH");
  status.innerHTML = "Status";
  headerTr.appendChild(status);


  table.appendChild(headerTr);

  return table;
}

const setDates = (item, date, updatedDt) =>{
  
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDate = new Date(item.currentDt).toLocaleString(
    "en-US",
    options
  );
  date.innerHTML = formattedDate;

  if (item.updatedDt && item.updatedDt != "-") {
    const formattedUpdatedDt = new Date(item.updatedDt).toLocaleString(
      "en-US",
      options
    );
    updatedDt.innerHTML = formattedUpdatedDt;
  } else {
    updatedDt.innerHTML = "-";
  }
}

const AdminGrid = (details) => {

  const table = creatingGridLayout(true);
  details.map((item, index) => 
  {
    if (index < noOfRows) {

      const username = document.createElement("TD");
      const email = document.createElement("TD");
      const number = document.createElement("TD");
      const gender = document.createElement("TD");
      const type = document.createElement("TD");
      const date = document.createElement("TD");
      const updatedDt = document.createElement("TD");

      const key = document.createElement("TH");
      key.setAttribute("class", "none");

      const tr = document.createElement("TR");
      const deleteAccount = document.createElement("TD");
      const select = document.createElement("select");
      const option = document.createElement("option");
      option.innerHTML = "Active";
      const option2 = document.createElement("option");
      option2.innerHTML = "Inactive";
      select.setAttribute('class', 'select-status');
      select.appendChild(option);
      select.appendChild(option2);
      select.value = item.status;

      table.appendChild(tr);
      tr.appendChild(username);
      tr.appendChild(email);
      tr.appendChild(number);
      tr.appendChild(gender);
      tr.appendChild(type);
      tr.appendChild(date);
      tr.appendChild(updatedDt);
      tr.appendChild(deleteAccount);
      tr.appendChild(key);
      tr.appendChild(select);

      const delIcon = document.createElement("I");
      const editIcon = document.createElement("I");

      const i = deleteAccount.appendChild(delIcon);
      i.setAttribute("class", "fas fa-trash");

      const i2 = deleteAccount.appendChild(editIcon);
      i2.setAttribute("class", "fas fa-pen");

      username.innerHTML = item.username;
      email.innerHTML = item.email;
      number.innerHTML = item.number;
      gender.innerHTML = item.gender;

      setDates(item, date, updatedDt); 

      if (item.admin) {
        type.innerHTML = "Admin";
      } else {
        type.innerHTML = "User";
      }

      key.innerHTML = item.key;
      onStatusChanged(select);
      if (key.textContent == LoggedInUser.key) {
        delIcon.disabled = true;
        delIcon.setAttribute("class", "fas fa-trash disabled");
        editIcon.disabled = true;
        editIcon.setAttribute("class", "fas fa-pen disabled");
      } else {
        onDelete(deleteAccount, delIcon);
        onEdit(deleteAccount, editIcon);
      }
    }
  });


loadMoreBtn(true);

};

const onStatusChanged = (select) => {
  select.addEventListener("change", () => {
    const key = select.previousElementSibling;
    userDetails.forEach((item) => {
      if (item.key == key.textContent) {
        item.status = select.value;
        return 0;
      }
    });
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  });
};

const loadMoreBtn = (admin=false) => {
  
  const p = document.createElement("P");

  if(noOfRows >= userDetailsLength){
    p.innerHTML = `showing ${userDetailsLength} out of ${userDetailsLength}.`;
  }else{
    p.innerHTML = `showing ${noOfRows} out of ${userDetailsLength}. Click to load more..`;
  }

  p.setAttribute("class", "load-more-btn");
  p.setAttribute("id", "load-more");
  document.getElementsByTagName('body')[0].appendChild(p);


  p.addEventListener('click',() => {
    if(stepOver < rowsLeft){
      noOfRows += stepOver;
      admin ? AdminGrid(userDetails):userGrid(userDetails);
    }else{
      noOfRows += rowsLeft;
      admin ? AdminGrid(userDetails):userGrid(userDetails);
    }
  })

}

const userGrid = (details) => {
  const table = creatingGridLayout();

  details.map((item, index) => {
    if(index < noOfRows){
      const username = document.createElement("TD");
      const email = document.createElement("TD");
      const number = document.createElement("TD");
      const gender = document.createElement("TD");
      const type = document.createElement("TD");
      const date = document.createElement("TD");
      const updatedDt = document.createElement("TD");

      const tr = document.createElement("TR");
      const status = document.createElement("TD");

      table.appendChild(tr);
      tr.appendChild(username);
      tr.appendChild(email);
      tr.appendChild(number);
      tr.appendChild(gender);
      tr.appendChild(type);
      tr.appendChild(date);
      tr.appendChild(updatedDt);
      tr.appendChild(status);
  
      username.innerHTML = item.username;
      email.innerHTML = item.email;
      number.innerHTML = item.number;
      gender.innerHTML = item.gender;
      status.innerHTML = item.status;

      if(!item.status ||item.status == 'Inactive'){
        status.innerHTML = '<i class="far fa-times-circle"></i>'
      }else{
        status.innerHTML = '<i class="far fa-check-circle"></i>'
      }

      setDates(item, date, updatedDt);
  
      if (item.admin) {
        type.innerHTML = "Admin";
      } else {
        type.innerHTML = "User";
      }
    }
    });
    
    loadMoreBtn();
 
};


const showEditCard = () => {
  const tableSection = document.getElementById("table-section");
  tableSection.classList.add("blur");

  const editSection = document.getElementById("edit-section");
  editSection.style.display = "block";

  const closeBtn = document.getElementById("closeBtn");
  closeBtn.addEventListener("click", () => {
    editSection.style.display = "none";
    tableSection.classList.remove("blur");
  });
};

const showEditUserDetails = (deleteAccount) => {
  const toEditKey = deleteAccount.nextElementSibling.textContent;

  userDetails.forEach((item) => {
    if (item.key == toEditKey) {
      document.getElementById("username").value = item.username;
      document.getElementById("email").value = item.email;
      document.getElementById("number").value = item.number;
      if (item.admin) {
        document.getElementById("admin").checked = true;
      } else {
        document.getElementById("user").checked = true;
      }
    }
    return toEditKey;
  });
  const saveBtn = document.getElementById("saveProfileBtn");
  saveBtn.addEventListener("click", () => {
    storeUpdatedDetails(toEditKey);
  });
};

const storeUpdatedDetails = (toEditKey) => {
  userDetails.forEach((item) => {
    if (item.key == toEditKey) {
      item.username = document.getElementById("username").value;
      item.email = document.getElementById("email").value;
      item.number = document.getElementById("number").value;
      item.updatedDt = Date.now();
      if (document.getElementById("user").checked) {
        item.admin = false;
      } else {
        item.admin = true;
      }
    }
  });
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  alert("Account updated!");

};

const onEdit = (deleteAccount, editIcon) => {
  editIcon.addEventListener("click", () => {
    showEditCard();
    showEditUserDetails(deleteAccount);
  
  });
};




const onDelete = (deleteBtn, delIcon) => {
  delIcon.addEventListener("click", () => {
    const resp = confirm(msg.confirmDeleteMsg);

    if (resp) {
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));
      const parent = deleteBtn.parentElement;
      parent.setAttribute("class", "none");

      const getKey = deleteBtn.nextElementSibling;

      const toAdd = userDetails.filter((item) => {
        return item.key != getKey.textContent;
      });

      localStorage.setItem("userDetails", JSON.stringify(toAdd));
      alert(msg.deleteSuccessMsg);
    }
  });
};

const sort = document.getElementById("sort");
sort.addEventListener("change", () => {
  const selectedValue = sort.value;
  let temp = [];

  temp = userDetails.map((item) => {
    return item;
  });
  console.log(userDetails);
  if (selectedValue == "Ascending") {
    temp.sort((a, b) => {
      let fa = a.username.toLowerCase(),
        fb = b.username.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    if (LoggedInUser.admin){
      AdminGrid(temp);
    }else{
      userGrid(temp);
    }
    
  } else if (selectedValue == "Descending") {
    temp.sort((a, b) => {
      let fa = a.username.toLowerCase(),
        fb = b.username.toLowerCase();

      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    });

    
    if (LoggedInUser.admin){
      AdminGrid(temp);
    }else{
      userGrid(temp);
    }
  } else {
    
    if (LoggedInUser.admin){
      AdminGrid(userDetails);
    }else{
      userGrid(userDetails);
    }
  }
});

const storeNewUser = () => {
  const username = document.getElementById("new_username");
  const password = document.getElementById("new_password");
  const number = document.getElementById("new_number");
  const email = document.getElementById("new_email");
  const maleRadioBtn = document.getElementById("new_maleBtn");
  const femaleRadioBtn = document.getElementById("new_femaleBtn");
  let gender = null;

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
      key: Math.random(),
      status: "Active",
      currentDt: Date.now(),
      updatedDt: "-",
    });

    const toStoreData = [];
    toStoreData.push(user);
    let prevData = localStorage.getItem("userDetails");

    if (prevData) {
      prevData = JSON.parse(prevData);
      toStoreData.push(...prevData);
    }

    localStorage.setItem("userDetails", JSON.stringify(toStoreData));
    alert(msg.registrationSuccessMsg);
  };

  const areInputsEmpty = () => {
    return isNotEmpty(username) &&
      isNotEmpty(password) &&
      isNotEmpty(number) &&
      isNotEmpty(email)
      ? false
      : true;
  };
  const areInputsValid = () => {
    return isPasswordValid(password) &&
      isNumberValid(number) &&
      isEmailValid(email)
      ? true
      : false;
  };

  const isNotEmpty = (inputField) => {
    if (inputField.value.trim() == "") {
      document.querySelector(`#${inputField.id} + p`).innerHTML =
        msg.notEmptyMsg;
      inputField.setCustomValidity("Invalid field.");
      return false;
    } else {
      document.querySelector(`#${inputField.id} + p`).innerHTML = "";
      inputField.setCustomValidity("");
      return true;
    }
  };

  const isPasswordValid = (password) => {
    if (password.value.length < 6) {
      document.querySelector(`#${password.id} + p`).innerHTML =
        msg.passwordErrorMsg;
      password.setCustomValidity("Invalid field.");
      return false;
    } else {
      document.querySelector(`#${password.id} + p`).innerHTML = "";
      password.setCustomValidity("");
      return true;
    }
  };

  const isNumberValid = (number) => {
    if (number.value.length > 10 || number.value.length < 10) {
      document.querySelector(`#${number.id} + p`).innerHTML =
        msg.numberErrorMsg;
      number.setCustomValidity("Invalid field.");
      return false;
    } else {
      document.querySelector(`#${number.id} + p`).innerHTML = "";
      number.setCustomValidity("");
      return true;
    }
  };

  const isEmailValid = (email) => {
    if (email.checkValidity()) {
      document.querySelector(`#${email.id} + p`).innerHTML = "";
      email.setCustomValidity("");
      return true;
    } else {
      document.querySelector(`#${email.id} + p`).innerHTML = msg.emailErrorMsg;
      email.setCustomValidity("Invalid field.");
      return false;
    }
  };

  const submitButton = document.getElementById("saveUserBtn");
  submitButton.addEventListener("click", () => {
    if (!areInputsEmpty()) {
      areInputsValid() ? storeData() : false;
    } else {
      areInputsEmpty();
    }
  });

  username.addEventListener("keyup", (e) => {
    isNotEmpty(username, "Username");
  });

  password.addEventListener("keyup", (e) => {
    isNotEmpty(password, "Password");
    isPasswordValid(password);
  });

  number.addEventListener("keyup", (e) => {
    isNotEmpty(number, "Contact No.");
    isNumberValid(number);
  });

  email.addEventListener("keyup", (e) => {
    isNotEmpty(email, "Email ID");
    isEmailValid(email);
  });
};

const showUserCard = () => {
  const tableSection = document.getElementById("table-section");
  tableSection.classList.add("blur");

  const newUserSection = document.getElementById("add-user-section");
  newUserSection.style.display = "block";

  const userCloseBtn = document.getElementById("UsercloseBtn");
  userCloseBtn.addEventListener("click", () => {
    newUserSection.style.display = "none";
    tableSection.classList.remove("blur");
  });
};

if (LoggedInUser.admin) {

  // creating add-new-user button.
  const newUserBtn = document.createElement("BUTTON");
  newUserBtn.setAttribute("class", "btn newUser");
  const section = document.getElementById("details");
  newUserBtn.innerHTML = "Add User";
  section.appendChild(newUserBtn);


  // new user button's functionality:
  newUserBtn.addEventListener("click", () => {
    showUserCard();
  });
  storeNewUser();
  AdminGrid(userDetails);

} else {
  userGrid(userDetails);
}
