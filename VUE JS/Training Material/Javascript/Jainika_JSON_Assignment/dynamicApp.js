// User data
const userListJson = {
    "users" : [
        {    
            "firstName" : "Sandeep",
            "lastName" : "Ranjan",
            "age" : 25,
            "empID" : 3030,
            "dept" : "Front-end"
        },
        { 
            "firstName" : "Jainika",
            "lastName" : "Shah",
            "age" : 20,
            "empID" : 3031,
            "dept" : "Front-end"
        },
        {
            "firstName" : "Krishna",
            "lastName" : "Shah",
            "age" : 20,
            "empID" : 3032,
            "dept" : "Back-end"
            
        }
    ]
}


// Functions
function createTableBody(tr,value){
    const td = document.createElement('TD');
    td.innerHTML = value;
    tr.appendChild(td);
}

function createTableHeader(tr, value){
    const th = document.createElement('TH');
    th.innerHTML = value;
    tr.appendChild(th);
}



// code-

// creating table
const table = document.createElement('TABLE');
const body = document.body;
body.appendChild(table);

table.setAttribute("cellspacing","10");
table.setAttribute("cellpadding","10");
table.setAttribute("border","2");



// creating table header
const tr = document.createElement('TR');
table.appendChild(tr);

createTableHeader(tr, 'Emp ID');
createTableHeader(tr, 'Full Name');
createTableHeader(tr, 'Age');
createTableHeader(tr, 'Dept');



// creating table body
userListJson.users.map((user) => {
    const tr = document.createElement('TR');
    table.appendChild(tr);

    createTableBody(tr, user.empID);
    createTableBody(tr, user.firstName + user.lastName);
    createTableBody(tr, user.age);
    createTableBody(tr, user.dept);

});
