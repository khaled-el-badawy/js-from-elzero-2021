/*
  Constructor Function
  -instantiate 
*/
// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

//////////////////////////////////////////////////////////

function User(id, username, salary) {
  // this.id = id
  // this.username = username
  // this.salary = salary

  //same

  this.i = id;
  this.u = username;
  this.s = salary +1000;
}

let userOne = new User(100, "Ezero", 5000);
let userTwo = new User(101, "khaled", 6000);
let userThree = new User(102, "hassan", 7000);

console.log(userOne);
console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);



console.log(userTwo);
console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);


console.log(userThree);
console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);

