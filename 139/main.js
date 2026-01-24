let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /spam/gi;
console.log(names.match(re));


let ssBre = /\bspam/gi;
console.log(names.match(ssBre));
/////
let esBre = /spam\b/gi;
console.log(names.match(esBre));
/////
let sesBre = /\bspam|spam\b/ig;
console.log(names.match(sesBre));

//------------------test----

console.log(re.test(names));
console.log(re.test("1Spam"));
console.log(re.test("Spam1"));

