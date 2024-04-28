// 1) Find the output with help of Map & ForEach.
// Arr: [['Sara', 12], ['Bob', 11], ['Jill', 15], ['Bruce', 14]]

const arr = new Map([['Sara', 12], ['Bob', 11], ['Jill', 15], ['Bruce', 14]]);
console.log('1. Outputting map elements:');
for (let user of arr.entries()){
    console.log(user);
}


	 
// // 2)Get the Output with help of Map.
// // o/p: 
//  const details = {
//    1 : {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    2: {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    3 : {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }   
// }
const details = new Map();
details.set( 
	{
		1 : {
			author: 'Bill Gates',
			title: 'The Road Ahead',
			readingStatus: true
		},
		2: {
			author: 'Steve Jobs',
			title: 'Walter Isaacson',
			readingStatus: true
		},
		3 : {
			author: 'Suzanne Collins',
			title:  'Mockingjay: The Final Book of The Hunger Games', 
			readingStatus: false
		}
	}
);

console.log('2. Outputting map: ')
for (let user of details.entries()){
    console.log(user);
}





// // 3) Find the size with help of Map & WeakMap

const user1 = {
	"name" : "David Rayy",
	"sclass" : "VI",
	"rollno" : 12 
}

const user2 = {
	"name" : "David ",
	"sclass" : "I",
	"rollno" : 2 
}
const map = new Map();
const weakMap = new WeakMap();

map.set(user1);
map.set(user2);
weakMap.set(user1);

console.log("3. Size of Map: ", map.size);
console.log("3.1 Size of Weakmap: ",weakMap.size);



// 4) Delete name key with help of Map.

const userData = new Map();

userData.set("name" , "David Rayy");
userData.set("sclass" , "VI");
userData.set("rollno" , 12);
console.log("3. Deleting name field: ", userData.delete('name'))




// // 5) Find the value with help of Map
// // {0 => 'Jhon', 1 => 'Bob'}
const names = {
	0: 'John',
	1: 'Bob'
}
const namesMap = new Map();
namesMap.set(
	0, 'John'
);
namesMap.set(
	1, 'Bob'
)
console.log('5. Finding value : ', namesMap.get(0))

