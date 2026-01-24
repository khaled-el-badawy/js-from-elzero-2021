let myString = "Hello Elzero Web School I Love elzero";

let regex = /Elzero/;
console.log(myString.match(regex)); //6

/////////////////////

let regex1 = /elzero/i;
console.log(myString.match(regex1)); //6
/////////////////////

let regex2 = /elzero/ig;
console.log(myString.match(regex2)); //
