let mapUser = { theName: "khaled" };

let myMap = new Map();

myMap.set(mapUser, "object Value");

console.log(myMap);

mapUser = null; // ولا اي اندهاش

console.log(myMap);

//---------------
console.log("#".repeat(20));

let weakMapUser = { theName: "khaled" };

let myWeakMap = new WeakMap();
// myWeakMap.set("Name", "Value"); //erorr
myWeakMap.set(weakMapUser, "object Value");

console.log(myWeakMap);

weakMapUser = null

console.log(myWeakMap);