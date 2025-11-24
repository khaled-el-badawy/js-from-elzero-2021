/*
let price = 0;
let price = null;
let price ;
let price ="";

*/
let price = "";
console.log(`price is ${price || 200}`);
console.log(`price is ${price ?? 200}`); // return 0  not undefined or null



console.log(Boolean(100)); //t
console.log(Boolean(-100)); //t

console.log(Boolean(0)); //f
console.log(Boolean("")); //f
console.log(Boolean(null)); //f

