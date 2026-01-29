/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("Oct 25,82");
let dateDiff = dateNow - birthday

console.log(dateDiff / 1000 /60/60/24/365);
////
console.log(dateNow.getTime());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getMonth()); //by index 1 --> 0
console.log(dateNow.getDay()); //by index
console.log(dateNow.getHours()); 
console.log(dateNow.getMinutes()); 
console.log(dateNow.getSeconds()); 
