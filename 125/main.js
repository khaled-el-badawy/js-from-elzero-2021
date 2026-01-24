let myObj = {};
let myMtObj = Object.create(null);
let myMap = new Map();

console.log(myObj);
console.log(myMtObj);
console.log(myMap);

let myNewObj = {
  10: "Num",
  "10": "string",
};

console.log(myNewObj[10]);


let myNewMap = new Map();
// myNewMap.set(Key,value);
myNewMap.set(10, "Num");
myNewMap.set("10", "string");
myNewMap.set(true, "bool");
myNewMap.set({a:1,b:2}, "Object");
myNewMap.set(function doSomething() {}, "Function");



console.log(myNewMap.get(10))
console.log(myNewMap.get("10"))
console.log("####")
console.log(myNewObj)
console.log(myNewMap)

//------------

//order












