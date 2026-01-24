console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

//----
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArray = [...myArray1, ...myArray2];
console.log(allArray);

//------
let copiedArray = [...myArray1];

console.log(copiedArray);

//--------
let allFriends = ["osama", "sara", "sayed"];
let newFriends = ["nada", "ali"];

allFriends.push(...newFriends);

console.log(allFriends);

//------------
let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

let objOne = {
  a: 1,
  b: 2,
};

let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });
