/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);


console.log(userOne.u);

userOne.updateName("khaled");
console.log(userOne.u);

////////////Built In Constructors//////////////////////

let strOne = "Elzaro";
let strTwo = new String("Elzaro");

console.log(typeof strOne); //string
console.log(typeof strTwo); //object

console.log(strOne instanceof String); //False
console.log(strTwo instanceof String); //True

console.log(strOne.constructor === String); //True
console.log(strTwo.constructor === String); //True

