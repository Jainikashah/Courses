// // typeof:
// const username = 'Max';
// console.log(username);

// type username = typeof username


// const userSettings = {
//     difficulty: 'easy',
//     minLevel: 10,
//     players: ['John', 'Jane'];
// }

// type settings = typeof userSettings;
// // otherwise I'd have to write the entire type definition. this looks at userSettings variable and automatically based on the values, derives their datatype and assign it to our type settings variable. hover over settings to see.

// function loadsetting(s: typeof userSettings){}
// // we can also use it with function args.


// // eg with function:

// function sum(a: number, b: number){
//     return a + b;
// }

// function sub(a: number, b: number){
//     return a - b;
// }

// type sumFn = typeof sum;
// type subFn = typeof sub;
// function match(cb: sumFn | subFn){
//     // come code
// }




// keyof
// type user = { name: string, age: number }
// type userKeys = keyof user;

// let validKey: userKeys;
// validKey = 'age';
// validKey = 'name';
// validKey = 'anuthingelse' // error


// // realworld use case of keyof

// function utilityFun<T extends object, U extends keyof T>(obj: T, key: U){
//     // some utility function, tht takes an object an arg1 and a key of that object as arg2.
//     // eg: 
//     // { name: 'jane', age: 25}, T can be this objec and key can be either name or age.
// }

// utilityFun({
//     name: 'jane',
//     age: 13
// }, 'name'); // here, it allows me to add either name or age only

// utilityFun({
//     id: 12,
//     data: 'hello',
//     name: 'jane',
// }, 'data'); // either id, data or name.



// indexed access types:
// type AppUser = {
//     name: 'string';
//     permissions: {
//         id: string,
//         name: string,
//         desc: string
//     }[];
// } // {}[] - this denotes the variable is an array of objects.

// type perms = AppUser['permissions'];  // this holds an array of objects, permissions.
// type perm = perms[number]; // this holds the exact permission object only.

// // can also do:
// type names = string[]; // holds an array of strings
// type name = names[number]; // name will hold a string



// // Mapped typeS:
// type Operations = {
//     add: (n: number, n1: number) => number;
//     sub: (n: number, n1: number) => number;
// }

// // type Results = {  // holds the result of operations type, and since their return value is number, we added no. here
// //     add: number,
// //     sub: number
// // }



// // better way of doing above code. as operations and results type are related, as results hold the return value of operations, and so the keys are same. we can do mapped-types
// type Results<T> = {
//     [key in keyof T] : number // can be union also, like number | string, whatever results might come.
// }

// // above code basically tells that, results take a dynamic T, and whatever the T is, I want all the keys that are isnside the T object and their return type would be same, number. This is called mapped types.



// let mathOperations: Operations = {
//     add(n: number, n1: number) {
//         return n + n1
//     },
//     sub(n: number, n1: number) {
//         return n - n1
//     }
// }

// let mathResults: Results = {
//     add: mathOperations.add(10, 20),
//     sub: mathOperations.sub(20, 10) 
// }

// let mathResultsMappedType: Results<Operations> = {
//     add: mathOperations.add(10, 20),
//     sub: mathOperations.sub(20, 10) 
// }


// // Adding constraints like readonly & optional with mapped types:
// type Operations = {
//     add: (n: number, n1: number) => number;
//     sub: (n: number, n1: number) => number;
// }

// // the basic one, will copy the same as it is in oprations type.
// type Results<T> = {
//     [key in keyof T] : number 
// }



// // make results keys optional.
// type Results1<T> = {
//     [key in keyof T]? : number 
// }



// // remove the optionals if if its in Operations type
// type Operations2 = {
//     add?: (n: number, n1: number) => number;
//     sub?: (n: number, n1: number) => number;
// }

// type Results2<T> = {
//     [key in keyof T]-? : number 
// }
// // -? is a syntax that says, that add & sub both are mandatory. if we dont add it, it inherits from the above object and make it optional as we have added ?.




// // add readonly flag
// type Operations3 = {
//     add: (n: number, n1: number) => number;
//     sub: (n: number, n1: number) => number;
// }

// type Results3<T> = {
//     readonly [key in keyof T] : number 
// }
// // this makes our properties of results3 object, as readonly, if we try to change it, it'll throw error.



// // remove readonly if already defined 
// type Operations4 = {
//     readonly add: (n: number, n1: number) => number;
//     readonly sub: (n: number, n1: number) => number;
// }

// type Results4<T> = {
//     -readonly [key in keyof T] : number 
// }

// -readonly will remove the readonly flag from the results type
//NOTE: these are all for mapped types only. this flexibility is given so that wehn we mapped-type a variable, it gives us the flags to make it more dynamic.



// // template literal types:
// type ReadPermissions = 'no-read' | 'read'
// type WritePermissions = 'no-write' | 'write'

// // now lets say I have a filepermissions, that requires both the above read&write permissions type, as follows:
// // I want to achieve below thing. rem, as its union, it combines all the permutations possible
// // type Fp = "no-read-no-write" | "no-read-write" | "read-no-write" | "read-write"
 
// // with template string, we can achieve above type as below: hover over to see.
// type Filepermissions = `${ReadPermissions}-${WritePermissions}`


// // one more usecase of template literal:
// type Obj1 = {
//     objKey1: string,
//     objkey2: number
// }
// type updatedCombined = `${keyof Obj1}updated`
// type merged = {
//     [key in updatedCombined]: string | number
// }
// // for above we get merged obj as below on hover:
// // type merged = {
// //     objKey1updated: string | number;
// //     objkey2updated: string | number;
// // }