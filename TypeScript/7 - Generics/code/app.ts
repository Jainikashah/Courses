type DataStore<T> = {
    key: T
};

let store1: DataStore<string | boolean> = {
    key: "hello",
};

let store2: DataStore<boolean> = {
    key: true
}


// with functions:
function merge<T>(a: T, b: T) {
    return [a, b]
}
const nos1 = merge<number>(1,2); // or
const nos = merge(1,2);

// like we do with generic array types, we can omit type name as ts have inferred type 
const arr = [1,2,3] // assumes its a number array



// constraints
// function mergeObj<T extends object>(a: T, b: T) {
//     return {...a, ...b}
// }
// const merged = mergeObj({a:1}, {b:2})
// // const merged2 = mergeObj(1,2) // error

// // more recommended:
// function mergeObj<T extends object, U extends object>(a: T, b: U) {
//     return {...a, ...b}
// }
// // hover over mergeObj, you'll see more simpler pairs of object compared to above one
// const merged = mergeObj({a:1}, {b:2}) 




// generic class:
class User<T> {
    // constructor(public id: string | number | object){}
    constructor(public id: T){}   
}
const u1 = new User("1")
const u2 = new User(1)
const u3 = new User({id:1})


// generic interface
interface User<T> {
    id: T
}
const u4: User<string> = {
    id: "1"
}