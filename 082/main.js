// let user = {age: 18,};
// same but by new object method
let user = new Object();

console.log(user);

user.age = 21;
user["country"] = "egypt";

// ------------------
user.sayHello = function () {
  return "Hello!";
};

console.log(user);
console.log(user.sayHello());
