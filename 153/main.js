/*
  Class
  - Inheritance
*/

// Parent Class
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Class
class Admin extends User {
  constructor(id, username, premission) {
    super(id, username);
    this.p = premission;
  }
}

class superman extends Admin {
  constructor(id, user, premission, ability) {
    super(id, user, premission);
    this.a = ability;
  }
}

let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "host", 1);
let superOne = new superman(150, "aya", 1, 1);
console.log(userOne.u);
console.log(userOne.sayHello());
//////////////////////////////////////////////////
console.log(adminOne.i); //110
console.log(adminOne.p); // 1
console.log(adminOne.sayHello()); //hello mahmoud
//////////////////////////////////////////////////
console.log(superOne.i); //
console.log(superOne.u); //
console.log(superOne.p); //
console.log(superOne.a); //
console.log(superOne.sayHello()); //Hello aya
