// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

let myFrinds = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a, b, c, d, e = "osama"] = myFrinds;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(myFrinds[4]);

//-------
let [, y, , z] = myFrinds;

// console.log(x);
console.log(y);
console.log(z);
