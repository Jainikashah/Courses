// 1) program to list the properties of a JavaScript object.
var user = {
    username : 'Jainika',
    lastname : 'Shah'
}
console.log("1. Listing properties of Object : " ,  Object.keys(user));



// 2) Create a username property inside person object
var person = { 
    firstName: "James", 
    lastName: "Bond", 
    age: 25, 
};

person['username'] = "James25";
console.log('2. Adding username property : ', person);



// 3) Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

console.log('3. Before deleting rollno : ', student);
delete student['rollno'];
console.log(' After deleting rollno : ', student);



// 4) Get the length of a JavaScript object

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

console.log('4. Length of Student : ', (Object.keys(student)).length);



// 5) Write a JavaScript program to display the reading status.
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

var readingStatus = library.map((libraryItem) => {
    return libraryItem.readingStatus;
})   
console.log('5. Displaying reading status: ',readingStatus);   
   