// 1) Create and Initializ Arrays In Javascript.
const numbersArray = new Array([1,2,3,4,5]);
console.log('1. Initialized Array : ' , numbersArray);



// 2) Create a multidimensional Arrays In Javascript.
const multidimensionalArray = [
    [1,2,3],
    ['a','b','c'],
    [true, false]
];
console.log('2. Multi-dimensional Array : ', multidimensionalArray);



// 3) Adding an element to the end and the beginning of an array.
const names = ['Jainika', 'Krishna'];
names.push('Rohan');
names.unshift('Sandeep');
console.log('3. Added elements Array : ',  names);



// 4) Removing an element from the end and the beginning of an array.
names.shift();
names.pop();
console.log('4. Removed elements Array : ' , names);



// 5) Finding an index of 'North Sea' in the array.
const seaNames = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
console.log('5. Index of North sea element : ' , seaNames.indexOf('North Sea'));



// 6) Check if an 'Caribbean Sea' value is an array
console.log('6. Is Caribbean Sea in array ? ', seaNames.includes('Caribbean Sea'));



// 7) Calculate the net amount to be given to the employees with help of map()
const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];
const netAmount = employees.map((employee) => {
    let empNetAmount = employee.salary + employee.bonus - employee.tax;
    return {name : employee.name, netAamount : empNetAmount}
});
console.log('7. Net amount of employees: ', netAmount);



// 8) Find the output [9, 12, 15, 18] from map().
const nos = [3, 4, 5, 6];
const result = nos.map((no) => {
    return no * 3;
})
console.log('8. Output array : ',result);



// 9) Find the output ["Susan Steward", "Daniel Longbottom", "Jacob Black"] from map().
const users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];
const nameOfUsers = users.map((user) => {
    let name = user.firstName + ' ' + user.lastName;
    return name;
})
console.log('9. Name of Users', nameOfUsers);



// 10) Find the the square roots of array value [16, 25, 36] from map().
const values = [16,25,36];
const squareRoots = values.map((no) => {
    return Math.sqrt(no);
});
console.log('10. Square Root Of Nos : ' , squareRoots);
