// type sepData1 = {
//     path: string;
//     content: string;
// }

// type sepData2 = {
//     path: string;
//     content: string;
// }

// type sharedData = {
//     data: string[];
// }

// type combinedDat1 = sepData1 & sharedData;
// type combinedDat2 = sepData2 & sharedData;



// // same with interfaces:
// interface sepinterface1 {
//     path: string;
//     content: string;
// }

// interface sepinterface2 {
//     path: string;
//     content: string;
// }

// interface sharedinterface {
//     interface: string[];
// }

// interface combinedInt1 extends sepinterface1, sharedinterface {};
// interface combinedInt2 extends sepinterface2, sharedinterface {};


// => Predicate function 
function isString(value: any): value is string {
    return typeof value === 'string';
    }

    function processValue(value: string | number) {
        if (isString(value)) {
            // TypeScript knows that 'value' is a string here
            console.log(value.toUpperCase());
            return;
        }
        // TypeScript knows that 'value' is a number here
        console.log(value.toFixed(2));
        return;
    }



// Function overloads:

// function getLength(val: string | any[]){
//     if(typeof val === 'string'){
//         return `${ val.split(' ').length } words`;  // this I want to split words to get the length
//     }
//     return val.length // this exists on array 
// }

// const noOfWords = getLength("Hello world");
// // noOfWords.length  // this.exists on string, but not on number. hence throwing error
// const arrayLength = getLength(['1', '2', '3']);



// function getLength(val: string): string;
// function getLength(val: any[]): number;
// function getLength(val: string | any[]){
//     if(typeof val === 'string'){
//         return `${ val.split(' ').length } words`;  // this I want to split words to get the length
//     }
//     return val.length // this exists on array 
// }

// const noOfWords = getLength("Hello world");
// noOfWords.length  // this.exists on string, but not on number. hence throwing error
// const arrayLength = getLength(['1', '2', '3']);



// as const:
    // let roles = ['admin', 'guest', 'normal'];
    // roles.push("giberishRole") // here I can push anything. But I only want push opertaion, instead just defining the array. even with const varible, push is allow on arrays.

    // // we can do this, hover over roles2 and you'd see readonly. Thats what as const do 
    // let roles2 = ['admin', 'guest', 'normal'] as const;
    // // roles2.push("giberishRole")  // error;
    // roles[0] // accessible and knows its gonna be admin always.



// satisfies:
    // const obj = {
    //     prop1: 'hello',
    //     prop2: 'world'
    // }

    // console.log(obj.prop3) // thows error saying prop3 doesnt exist.


    // const obj: Record<string, string> = {
    //     prop1: 'Hello',
    //     prop2: 'World'
    // }

    // console.log(obj.prop3)  // no error is throws as record<string, string> doesnt check for properties if exists or not, it only checks for type.

    // fix: 
    // const obj = {
    //     prop1: 'Hello',
    //     prop2: 'World'
    // } satisfies Record<string, string>

    // console.log(obj.prop3)  // now throws error as thats what we wanted
