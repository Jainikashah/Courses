// class User {
//     username: string = "Default"
//     age: number;
//     constructor(name: string, age: number){
//         this.username = name;
//         this.age = age;
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = "";
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        console.log(this.name);
        return this.name;
    };
    return Person;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this; // it is mandatory, even if we dont have a constructor in parent, its still mandatory to call the base call constructor from child
        _this.salary = 0;
        _super.prototype.getName.call(_this);
        _this.salary = salary;
        return _this;
    }
    employee.prototype.work = function () {
        this.name = "hello";
        console.log(this.name);
    };
    return employee;
}(Person));
var e1 = new employee("Jainika", 25, 10000);
e1.work();
console.log(e1);
var p1 = new Person("J2", 21);
console.log(p1);
