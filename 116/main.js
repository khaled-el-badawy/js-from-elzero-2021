let myFrinds = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["shady", "amr", ["mohamed", "gamal"]],
];

// console.log(myFrinds[3][2][1])

let [, , , [a, , [, b]]] = myFrinds;

console.log(a);
console.log(b);
