let myString = "AaBbcdefG123!234%^&*";

let atozSmall = /[a-z]/g;
console.log(myString.match(atozSmall));

//////////////////

let notatozCapital = /[^a-z]/g;
console.log(myString.match(notatozCapital));

//////////////////

let atozCapital = /[A-Z]/g;
console.log(myString.match(atozCapital));

//////////////////


let ىخفatozCapital = /[^A-Z]/g;
console.log(myString.match(notatozCapital));

//////////////////

let abe = /[abc]/g;
console.log(myString.match(abe));
//-------
let abc = /[abe]/g;
console.log(myString.match(abc));

///////////////


let allLetters = /[a-z]/ig;
console.log(myString.match(allLetters));
//----
let allLetters2 = /[a-zA-Z]/g;
console.log(myString.match(allLetters2));
//----
let numAndSpec = /[^a-zA-Z]/g;
console.log(myString.match(numAndSpec));
///////////////
let Specials = /[^a-z0-9]/ig;
console.log(myString.match(Specials));