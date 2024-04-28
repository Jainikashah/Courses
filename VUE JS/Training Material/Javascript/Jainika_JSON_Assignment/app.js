const userListJson = {
    "users" : [
        {    
            "key" : 1,
            "firstName" : "Sandeep",
            "lastName" : "Ranjan",
            "age" : 25,
            "empID" : 3030,
            "dept" : "Front-end"
        },
        {    
            "key" : 2,
            "firstName" : "Jainika",
            "lastName" : "Shah",
            "age" : 20,
            "empID" : 3031,
            "dept" : "Front-end"
        },
        {
            "key" : 3,  
            "firstName" : "Krishna",
            "lastName" : "Shah",
            "age" : 20,
            "empID" : 3032,
            "dept" : "Back-end"
            
        }
    ]
}

const table = document.getElementById('user-table');

userListJson.users.map((user) => {
    const tr = document.createElement('TR');

    const td = document.createElement('TD');
    td.innerHTML = user.empID;

    const td2 = document.createElement('TD');
    td2.innerHTML = user.firstName + user.lastName;

    const td3 = document.createElement('TD');
    td3.innerHTML = user.age;

    const td4 = document.createElement('TD');
    td4.innerHTML = user.dept;

    table.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
})


