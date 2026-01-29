/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let DateNow = new Date();

console.log(DateNow);
console.log(Date.now()); //1000Mill = 1 Secound

let seconds = Date.now() / 1000;
console.log(seconds); //Number of secounds from 1970

let minutes = seconds / 60;
console.log(minutes);

let hours = minutes / 60;
console.log(hours);

let days = hours / 24;
console.log(days);

let Years = days / 365;
console.log(Years);