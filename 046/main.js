let myFriends = ["ahmed", "mohamed"];
let myNewFriends = ["sayed", "alaa"];
let schoolFriends = ["ahmed", "ameer"];

let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "khaled",
  [1, 2]
);

console.log(allFriends);
// -----------------------------
console.log(allFriends.join(" @ "));
console.log(allFriends.join(" @ ").toUpperCase());