let myFriends = [1, 2, "Osama","khaled", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

for (i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
  // console.log(i)
}

// ------- ------- -------
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}
console.log(onlyNames);
