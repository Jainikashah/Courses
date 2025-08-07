// uninitialzied variable are by default of any type, but its not recommended and so get a warning. Though its a valid code.
// let username;
// username = "abc";
// username = 1;
// console.log(username);
// datatypes should be all lowercase. 
// let varS:string;
// let varN:number;
// let varB:boolean;
// varS = "abc";
// varN = 1;
// varB = true;
// Javascript do keep track of data types. And thats why we can use typeOf operator, which returns the type of the variable mentioned like boolean, string, number etc. It just doesnt let us as developers, explicitly define the type. Hence, typescript is used to do so. Below is pure js code. Js allows us to switch types of variables along the way, ts doesnt.
// let a = "hello";
// console.log(typeof(a))
// a = 12;
// console.log(typeof(a))
// o/p: 
// string
// number    
// :string - this part is called type annotation or type assignment.
// here, we haven't add any type to userAge. but still we cant change the value to string later. As ts, on its own considered it as number, by assuming it by its value 10. So, when we already have a value during initalizing variables, we can skip the annotation part
// let userAge = 10;
// console.log(userAge)
// userAge = "abc";  // throws error
// console.log(userAge)
// Function:
// here also, c is by default considered as number, so we dont need to add type check for c. we can though, but its not required.
// function add(a:number, b:number, c=5){
//     return a + b
// }
// // add(1) // gives error, 2 mandatory args, 3rd one is optional   
// add(1, 2)
// add(1,2,3)
// add("1") // throws err, ofc
// ANY:
// when we dont know the type of variable, we can use any keyword. It lets us change the type of variables along the way. it should be the last, very last option as using any is like using javascript. as we are not using the benefits of ts.     
// let x:any = 35;
// x = "10"
// x = {}
// x = []
// x = true
// UNION:
// Instead of any, its recommended to use UNION. As with this, we atleast know which posible types can be assigned to the variable, unlike with any where we are just clueless.
// let x:string | number | boolean;
// x = "hello"
// x = true;
// x = 23;
// x = {} // error
// with | we can add any type, saying that x can be either of these types. For any other type, it will throw error.
// We should be as specific as possible to leverage the best of typescript world.
// ARRAY
// let hobbies = ['sports', 'cooking'];
// // hobbies.push(100)  // gives error, as ts considers it as array of string values.
// // to explictly add the type of array
// let hobbies2:string[] = ['sports', 'cooking'];  
// // this is allowed, as now type is union of string & number
// let hobbies3 = ['sports', 'cooking', 23];  
// hobbies3.push(100) // works fine
// // to predefine the type of array     
// let ages:number[];
// // To define union type of array.  
// let users: (string|number)[];
// users = [1, 2]
// users = ["a", 1]
// users = ["a", "b"]
// // To define either it should be an array of all strings or of all numbers. (p.s I found it)
// let users:number[] | string[];
// users = [1, 2]
// users = ["a", "b"]
// users = [1,"a"] // throws 
// Alternate way to define array.
// let users: Array<string | number>;
// users = ["a", "b"]
// users = [1, "a"]
// TUPLE:
// When we know the exact types of data we want to add in an array, with a specified length, we use tuple:
// let user:[string, number, boolean];
// user = ["abc", 23, true]
// // user = ["abc", 23] // throws error
// // user = ["abc", 23, true, "hello"] // throws error
// user.push(true)
// user.push("hello");
// console.log(user)
// here, push works and we get the new elements, as tuple has no check for pushing new elements. It only checks length & type during initialization of tuple. 
// OBJECT:
// let user = {
//     name: "Jainika",
//     age: 25
// };
// // user.name = 23 // throws error
// here, by writing just like this, directly, typescript will assume that name is always of string & age is always of number type (as we saw before), hence we couldnt change its types later.
// let user:{
//         name:string, 
//         age:number,
//         hobbies:string[],
//         role: {
//                 description: string,
//                 id: number
//         }
// } = {
//     name: "Jainika",
//     age: 25,
//     hobbies: ['sports'],
//     role: {
//             description: "Admin",
//             id: 1
//     }
// };
// here we first mention the definition of the object, like how many items will be in there and what type of, and then assign it. If we add anything less or more, it'll throw error.
// let user:{
//         name:string, 
//         age:number,
//         hobbies?:string[],
//         role: {
//                 description: string,
//                 id: number
//         }
// } = {
// name: "Jainika",
// age: 25,
// role: {
//         description: "Admin",
//         id: 1
// }
// };
// we just made hobbies optional, by adding a ? so we keep it or remove it as per the need.
// let user:{
//         name:string, 
//         age:number,
//         hobbies:string[],
//         role: {
//                 description: string,
//                 id: number
//         }
// };
// user = {
// name: "Jainika",
// age: 25,
// hobbies: ['sports'],
// role: {
//         description: "Admin",
//         id: 1
// }
// };
// we can define them first and initialize them later also.             
// {} - This is cool, no its not an empty object
// let val: {} = "some text" // it works, can take any other type like string, number, boolean, '', {}, [] etc
// let val2: {} = null // throws err
// let val3: {} = undefined //throws err 
// here, {} this doesnt mean empty object. It means any object(means any type other than null or undefined).
// when we have a scenario where we dont know what the type is, but sure that it is not null or undefined, we use {}
// FLEXIBLE OBJECTS:
// Typescript has a specific type called "Record". This means that the variable is an object. Idk what keys will be in there, what values. Iknow their types will string for keys, and number for values or any other datatype.
//   I know that it has to be an object. as with {} type, we can assign any other value as we saw before, other than null or undefined.
// let val1: Record<string, number>;
// val1 = {
//         name: 23,
//         // name : 'abc' // not allowed
// }
// val1 = "some data" // throws error
// // here, string type if for keys, and number for values. Like below we can have another record inside record. we can ofc have unions also. eg-      
// let val2: Record<string | number, Record<string, string>>;
// ENUMS:
// when we have to deal with a specific set of values, we can use enums. They are not part of js, but ts specific only.
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["guest"] = 1] = "guest";
    role[role["normal"] = 2] = "normal";
})(role || (role = {}));
// by default it starts with 0, 1, 2 etc. we can change it to whatever we want. 
var role2;
(function (role2) {
    role2[role2["admin"] = 1] = "admin";
    role2[role2["guest"] = 2] = "guest";
    role2[role2["normal"] = 3] = "normal";
})(role2 || (role2 = {}));
// now it will start from 1,2,3 and so on..
var role3;
(function (role3) {
    role3["admin"] = "admin";
    role3["guest"] = "guest";
    role3["normal"] = "normal";
})(role3 || (role3 = {}));
var userRole = role.admin;
userRole = role.guest;
userRole = 0; // allows 1 ,2 but not other as we have 3 values only.
console.log(userRole);
var userRole3 = role3.admin;
console.log(userRole3);
