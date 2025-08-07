// class User {
//     username: string = "Default"
//     age: number;
//     constructor(name: string, age: number){
//         this.username = name;
//         this.age = age;
//     }
// }

// new User('Jainika', 25);


// class User {
//     constructor(public name: string, public age: number){
//     }
// }

// new User('Jainika', 25);


// =>public & private
// class User {
//      hobbie: string[] = [];
//     constructor(public name: string, public age: number){
//         this.sayHello();
//     }
//     sayHello(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// const me = new User('Jainika', 25);
// me.sayHello() // not allowed 
// me.hobbie.push('Sports');



// // => readonly
// class User {
//     public readonly name: string = "Jainika";
//     private readonly age: number = 23;
//     readonly hobbie: string[] = [];
// }

// let me = new User();
// me.name = "hello" // not allowed
// me.age = 36 // not allowed
// me.hobbie.push('Sports'); // pushing is allowed



// => Getter 
// class User {
//     constructor(private name: string, private lastname: string){}
//     get fullName(){
//         this.name = "hello"  // this is still allowed but not recommended.
//         return this.name + " " + this.lastname
//     }
// }
// const u1 = new User('jainika', 'shah')
// console.log(u1.fullName);


// // => Setter
// class User {
//     private name: string = 'Jainika';
//     set username(name: string){
//         // can check some validation
//         this.name = name
//     }
// }

// const u1 = new User()
// u1.username = 'newJainika'


// Static
// class User {
//     static age: number = 23;
//     static getAge(){
//         return this.age
//     }
// }
// User.age = 10;
// console.log(User.getAge())
// console.log(User.age);



// INHERITANCE
// class Person {
//     name: string = "";
//     public age: number = 0;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     getName(){
//         console.log(this.name)
//         return this.name
//     }
// }

// class employee extends Person{
//     salary: number = 0;
//     constructor(name: string, age: number, salary: number){
//         super(name, age);  // it is mandatory, even if we dont have a constructor in parent, its still mandatory to call the base call constructor from child
//         super.getName();
//         this.salary = salary;
//     }
//     work(){
//         this.name = "hello"
//         console.log(this.name)
//     }
// }

// const e1 = new employee("Jainika", 25, 10000);
// e1.work()
// console.log(e1);
// const p1 = new Person("J2", 21);
// console.log(p1)




// // ABSTRACT 
// class UIELEMENT {
//     constructor(id: number | string){}
// }

// class HtmlElement extends UIELEMENT {
//     constructor(id: number | string){
//         super(id)
//     }
// }



// INTERFACES:
// interface Person {
//     name: string;
//     age: number;

//     walk(arg1: string):void
//     run(arg1: string):number
// }

// Its just like giving a definition of what actual class would be like. we dont put login in here, just the types definition of arguments, properties, return types, etc.

// implemneting interface via object
// let user: Person = {
//     name: "Jainika",
//     age: 25,
//     walk(arg1: string): void {
//         console.log("I am walking") // here goes our logic
//     },
//     run(arg1: string): number {
//         return 20;
//     },
// }



// // DECALARATION MERGING:
// interface Person {
//     gender?: 'male' | 'female';
// }


// // implementing interface via class
// class Users implements Person {
//     constructor(public name: string, public age: number, public otherProps: string){}
//     walk(){
//         return "I am walking"
//     }
//     run(){
//         return 20; // asit takes number return type
//     }
// }


// // extedning interfaces
// interface LivingCreatures extends Person, Animal {
//     role: 'user' | 'animal'
// }


type sumFn = (a:number) => number;

interface sumFn2 {
    (a: number): number
}
