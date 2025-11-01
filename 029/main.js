let a = "Elzero Web School";
console.log(a.length); //17

console.log(a.substring(2)); //zero Web School
console.log(a.substring(2, 6)); //zero
console.log(a.substring(6, 2)); //zero

console.log(a.substring(-10)); //Elzero Web School
console.log(a.substring(-10, 6)); //Elzero 0 - 6

console.log(a.substring(17)); //
console.log(a.substring(a.length - 1)); // l
console.log(a.substring(a.length - 5)); // chool
console.log(a.substring(a.length - 5, a.length - 3)); // ch

//-------------
console.log(a.substr(0)); //Elzero Web School
console.log(a.substr(6)); //Web School
console.log(a.substr(-5, 2)); //ch

console.log(a.substr(a.length)); //
//---------------
console.log(a.includes("khaled")); //false

console.log(a.includes("Web")); //true
console.log(a.includes("Web", 8)); //false //start search from char 8

// -----------
console.log(a.startsWith("E")); //true
console.log(a.startsWith("E", 2)); //false
console.log(a.startsWith("zero", 2)); //true

//-----------
console.log(a.endsWith("o", a.length)); //false //true Elzero Web Schoo'l'
console.log(a.endsWith("l", a.length)); //true //Elzero Web Schoo'l'

console.log(a.endsWith("o")); //false //Elzero Web Schoo'l'
console.log(a.endsWith("o", 6)); //false //Elzer'o'
