let myfriends = ["ahmed", "mohamed", "sayed", "alaa", "ahmed", "ameer"];

console.log(myfriends);
console.log(myfriends.slice(1));
console.log(myfriends.slice(1, 3));

console.log(myfriends.slice(-3));
console.log(myfriends.slice(-3, 5));

// -----------------------
console.log(myfriends);
console.log(myfriends.splice(0, 2, "jojo", "lala"));
console.log(myfriends);
