let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "bool"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMap);
console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("#######");
console.log(myMap.has(false)); //true
console.log(myMap.has("name")); //false n
console.log(myMap.has("Name")); //true N
console.log("#######");

console.log(myMap.size); //3
console.log(myMap.delete("Name")); // true (item is deleted)
console.log(myMap.size); //2

myMap.clear();
console.log(myMap.size); //0


