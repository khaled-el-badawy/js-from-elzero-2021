/*
  Constructor Function
  - static Properties
*/

class User {
  //static Properties
  // count = 0;
  static count = 0;
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++ //كل يورز "اويجيكت" هتضيفة يزود رقم واحد 
  }
  //static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Khaled", 5000);
let userThree = new User(102, "ali", 4000);

console.log(userOne.u); //Elzero
console.log(userTwo.u); //Khaled

console.log(userOne.count); //undefined (with static key word)
console.log(User.count); //undefined (without static key word)

// console.log(userOne.sayHello()); //Hello From Class (without static key word)
console.log(User.sayHello()); //Hello From Class (with static key word)

console.log(User.countMembers());
