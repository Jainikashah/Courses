let map = new Map();

map.set('StringValue', 'Jainika shah');   
map.set(2020, 'Year');     
map.set(true, 'Boolean'); 

console.log( map.size ); 
console.log( map.get('StringValue'));


let set = new Set();
const userDetails = {
    name : 'Jainika',
    lname : 'Shah'
}
const userDetails2 = {
    name : 'Jainika',
    lname : 'Shah'
}

set.add(
   userDetails, userDetails2, userDetails
);
for(let user of set){
    console.log(user.lname);
} 