let a = "Elzero Web School"

console.log(a.indexOf("Web"))
console.log(a.indexOf("Web", 8)) //start from index 8

console.log(a.indexOf("o"))
console.log(a.lastIndexOf("o")) //revers search and get index from lest
// ----------------
console.log(a.slice(0)) //Elzero Web School
console.log(a.slice(2)) //zero Web School
console.log(a.slice(2, 6)) //zero //not incloudin the end

console.log(a.slice(-5)) //chool
console.log(a.slice(-5,-3)) //ch
//-----------------
console.log(a.repeat(5)); 
//----------------
console.log(a.split("")); // all letters
console.log(a.split(" " , 2)); // limet 2
console.log(a.split(" ")); //Elzero Web School


