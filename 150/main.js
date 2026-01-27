/*
  Constructor Function
  - Deal With Properties And Methods
*/

class User {
  constructor(id, username, salary) {
    //////////// Properties///////////////
    this.i = id;
    this.u = username || "Unkhown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  /////////// Methods////////////////
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}(method)`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.writeMsg());

console.log(userTwo.u);
console.log(userTwo.s);
console.log(userTwo.msg); // Native Code
console.log(userTwo.msg());
console.log(userTwo.writeMsg); // Native Code
console.log(userTwo.writeMsg());
