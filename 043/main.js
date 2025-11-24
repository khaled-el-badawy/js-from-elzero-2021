let myfriends = ["ahmed", "mohamed", "sayed", "alaa" , "ahmed"];


console.log(myfriends);
console.log(myfriends.indexOf("ahmed"));
console.log(myfriends.indexOf("ahmed" , 2));

console.log(myfriends.lastIndexOf("ahmed"));
console.log(myfriends.lastIndexOf("ahmed", -2));


// -------------------

console.log(myfriends.includes("ahmed"));

console.log(myfriends.includes("ahmed", 2));

// ------------
if (myfriends.indexOf("karim") === -1) {
    console.log("not found")
}
console.log(myfriends.indexOf("karim") === -1);