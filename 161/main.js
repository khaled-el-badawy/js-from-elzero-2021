/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow = new Date();

console.log(dateNow);
console.log("#".repeat(50));

dateNow.setTime(0)
console.log(dateNow);
console.log("#".repeat(50));

dateNow.setTime(10000)
console.log(dateNow);
console.log("#".repeat(50));

////////////////////////////////////

dateNow.setDate(1)
console.log(dateNow);
console.log("#".repeat(50));

dateNow.setDate(0)
console.log(dateNow);
console.log("#".repeat(50));

////////////////////////

dateNow.setFullYear(2038,2)
console.log(dateNow);
console.log("#".repeat(50));

dateNow.setMonth(2, 11);
console.log(dateNow);
console.log("#".repeat(50));

///////////////////////////////
