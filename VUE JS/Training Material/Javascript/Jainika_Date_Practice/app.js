//get Date
const date = new Date();
console.log(date);

console.log(date.getFullYear());

console.log(date.getMilliseconds());

console.log(date.getTimezoneOffset());

console.log(date.getUTCDate());




// set date
const date2 = new Date();

date2.setFullYear(2020);
console.log(date2);

date2.setDate(20);
console.log(date2);


// difference between dates
const today=new Date();
const someDay = new Date(2021, 8 ,1);
console.log(today.getDate() - someDay.getDate());


// formats
let d = new Date('01/5/2020');
console.log(d);


d = new Date("Jan 12 2020");
console.log(d);

console.log(Date.parse(d));


// // get in formats
// let now2 = new Date();
// let fullForm = moment(now2).format('YYYY-MM-DD');
// console.log(fullForm);


let now = new Date();
console.log(now.toLocaleDateString("en-US"));

console.log(now.toLocaleDateString("en-US", {month:'short', weekday:"short", year:'2-digit'}));




// Get USA's Timezone-
const dateTimezone = new Date()
console.log(dateTimezone.toLocaleString("en-us",{timeZone: "America/Chicago"}))