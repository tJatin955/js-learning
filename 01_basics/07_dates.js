//   DATES

let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.toDateString());

let newDate = new Date()   // takes 0 => January, 1 => February .... and so on
//console.log(newDate.toString())

let myTimeStamp = Date.now();       // Give time in milliseconds
//console.log(Math.floor(myTimeStamp/1000))

console.log(newDate.getDate())
console.log(newDate.getFullYear())