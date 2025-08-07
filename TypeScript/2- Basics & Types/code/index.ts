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

        
// when ts itslef assumes the type of a variable, its called = Infered type. When we specify the type of a variable, we call it type annotation. 
// eg - //
        // let b = 5 // inferred type, as ts itself assumed its type. and there's nothing wrong twith this code. and so we dont get any errors/warnings either.
        // let c : number = 5 // type annotation

        

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
//         enum role {
//                 admin,
//                 guest,
//                 normal
//         }
// // by default it starts with 0, 1, 2 etc. we can change it to whatever we want. the value while printing will be 0,1,2.. and not admin, guest, normal as they are just keyss.
//         enum role2 {
//                 admin=1,
//                 guest,
//                 normal
//         }
// // now it will start from 1,2,3 and so on..

//         enum role3 {
//                 admin="admin",
//                 guest="guest",
//                 normal="normal"
//         }

// let userRole: role = role.admin;
// userRole = role.guest;
// userRole = 0 // allows 1 ,2 but not other as we have 3 values only.
// console.log(userRole); // prints 0.

// let userRole3: role3 = role3.admin;
// console.log(userRole3);  // prints admin, 



// LITERAL TYPES
// Often arugued with enums, some prefer enums, some prefer literal types. These are nothing but a type that limits our values to be any one from the "set of values" given.

        // let userRoleType : 'admin' | 'guest' = 'admin'
        // userRoleType = 'guest'
        // userRoleType = 'hello ' //thows errro

// in our prev examples we saw, how we add type specifics to an array, with literals we can specify values also. like I only want any of these values in my array.      

        // let possibleResults : [1 | -1, 1 | -1];
        // possibleResults = [1, -1]
        // possibleResults = [-1, -1]
        // possibleResults = [1, 2] // throws error
        // possibleResults = [1, -1, 3] // throws error

// to have any length of array but should be specific values only.
        // let anyLenArray : Array<1 | -1> 
        // anyLenArray = [1, -1]
        // anyLenArray = [2,3] // throws error
        // anyLenArray = [1,-1, -1, 1, -1, 1] // works



// TYPE:
// Now, we have defined the literal types, 'admin' | 'guest' like this. but what if there are 10 more options in it. And what if, I need to check these options at multiple places in the program? Will I copy and paste it? And what will happen if I change the options? It will break the code. So, we use type.

        // type Role = 'admin' | 'guest' | 'normal'
        // let x : Role = 'admin'
        // function z(role: Role){
        //         // do something
        // }

// we can also defined arrays or objects in types
        // type user = {
        //         name: string,
        //         age: number,
        //         permissions: string[],
        //         role: Role
        // }
        // let user1 : user = {
        //         name: "Jainika",
        //         age: 24,
        //         permissions: ["read", "write"],
        //         role: "admin"
        // }

// often times, types & interfaces are confused with. we'll see what interfaces are. But one thing that we cant do in interface is, we cannot add unions or literal types in interfaces. that can be done in types only. There are other changes as well, we'll see them later when we learn abt interfaces.
// we can even add primitive types to an interface
        
        // type Mynumber = number;
        // let x : Mynumber = 10;
        



// FUNCTION RETURN VALUES:

        // function x(a: number, b: number): number{
        //         return a + b
        // }
// Ts doenst give an error, if we dont add a return type, becuase it uses inferred type to see what the function returns and use it as return type. if we hover over a function, we could see it too. 
// we can have multiple return types also, by using | 

        // function x(a: number, b: number): number | string {
        //         if(a > b) {
        //                 return 'true'
        //         }
        //         return a + b
        // }


// Void type
        // function log(msg: string):void {
        //         console.log("logging")
        // }
// when a function doesnt returns anything, its type is void. void means nothign. If nothing is returned from a  function, ts assumes it void as an inferred type.


// Never type
        // function throwError(msg: string){
        //         throw new Error(msg)
        //         return 'ehhllo' // this will never occur
        // }
// when we use throw in js, the function never reaches its return statement, as the function code crashed due to an error. and so, in such cases we use 'never' type, to specify that this function never returns. By default, ts assumes void as return type for this function, but we can override, and we should actually do so. 
        // function throwError1(msg: string):never{
        //         throw new Error(msg)
        //         // return 'ehhllo' // throws error when we specify never
        // }



// Function as types:
// one way 
        // function hello(callbackFun: Function){
        //         console.log("hello");
        //         callbackFun('heloo1');
        // }
// more recommended way when passing function as an arg
        // function hello1(callbackFun: (p: string) => void){
        //         console.log('hello2')
        //         callbackFun('p1')
        // } 
// void is the return type of our callbackFunction and p is the argument of callback function. yes, we define what kind of function we are using in as callback function.

// This same practice should be done in types, classes as well. eg:
//         type user = {
//                 name: string,
//                 greet: (p1: string) => void
//        }
//         let user1: user = {
//                 name: 'jainika',
//                 greet(par1) {
//                         return 'hello'
//                 }
//         }
//         user1.greet('yaa');



// Null & Undefined
// we can only store null in a variable if we have defined it as follows
        // let a: null;
        // a = 'string' // throws error
// same goes for undefined
        // let b: undefined;
        // b = 'hello' //thows error
// why  would you ever do thta? usually when we want to clear values of a variable, we use them, but most of the times, with unions. as below
        // let c: null | string;
        
// eg - html elements we get from document.gebi and others, have null | htmlelement type.
        // let x = document.getElementById("id");
// hover on x to see its type
// one way to check nullable values
        // console.log(x?.textContent)
// we can also do, (specific in ts)
        // let z = document.getElementById("id")!;
        // x.textContent;
// here, adding ! means, the value (doc.gebi(..)) will not return null, I'm sure about it. Here, its a dangerous operator, becuase ts will not show warning, as it will consider that the the expression will always yield a result, and never come null. if it does come null, runtime error will be thrown.


// TYPE CASTING:
// There are multiple html elements that ts gives us to put type check on, by default its HTMLElement, if my doc.gebi returns an input type, the properties of input type might not be included in htmlelement provided by ts. we have to explicitly tell ts that its an HTMLInputElement. To do so, we use 'as' operator. 
        let x = document.getElementById("id") as HTMLInputElement | null; // can also keep as number, string, any datatype ts provides.
        console.log(x?.value); // now I can use .value, otheriwse just with htmlelement, it was showing warning to me that .value doesnt exist. it only gives us the generic access to properies like textcontent, innerhtml, etc. its preferred to use null as union.
// Do use this with caution, as we are removing the inferred type from the variable i.e htmlelement, and giving it ours. its our responsibility to assure that this doc.gebi will return an input element. Any error in this will be runtime error, not compile time error. 


// UNKNOWN:
// When we dont know what the type of a varibale is. its mostly use with functions, wherein lets say, something comes from the backend or thid party api, we might not knwo the type of it. at that time we use unknown. 
// cant we use any?
// ofc. but with any, we can do anything. its like native js. no matter what, it wont give us error.
        // function process (val: any){
        //         val.log() // any doesnt throw error
        //         val++; // take as number also
        // }  

//  with unknown, we can do this, but need to check it, a lot of if conditions, to tell typescript that it will work fine.
        // function process(val: unknown){
        //         if(typeof val == 'object' && val !== null && 'log' in val && typeof val.log == 'function'){
        //                 val.log()
        //         }
        // }
// know that, unknown means we dont know what it could consist. hence, we have to add these typechecks to avoid runtime error. 



// OPTIONALS:
        // function x1(opparam? :string){
        //         console.log("hello")
        // }
        // x1()
        // x1("hi") 
        // // both works

// same can be achieved with type, interface, etc 


// Nullish Coalescing:
// If I want to check whether a value is null or undefined, I can use ?? operator.
        // let a = null; 
        // console.log(a ?? 'itsme') // o/p: itsme
        // let a = 0 //or "", or false, or any falsy value other than null and undefined.
        // console.log(a ?? 'itsme')  // o/p: 0
// here if var is null or undefined that only it goes to second expression, otherwise returns the first