let mydata = [1, 1, 1, 2, 3,"K"];
console.log(mydata);

//---add-----

// let myUniqueData = new Set([1, 1, 1, 2, 3]);
//----
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
//----
let myUniqueData = new Set();
myUniqueData.add(1).add(1).add(1).add(2).add(3);
myUniqueData.add(2).add(3).add("K");
//----
console.log(myUniqueData);
console.log(myUniqueData.size);

//---delete-----
// myUniqueData.delete(2);
//---delete all-----
// myUniqueData.clear();

// let myUniqueData = new Set(mydata);
console.log(myUniqueData);
console.log(myUniqueData.size);

//----has----
console.log(myUniqueData.has("K"));
console.log(typeof true);