// console.log(this);
// console.log(this === window);

// myVar = 100;

// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello() {
//   console.log(this);
//   return this;
// }

// console.log(sayHello() === window); // true return

// document.getElementById("cl").onclick = function () {
  //   console.log(this); //تعود علي المالك
  // };
  
  // ----------
  // age = 500
  let user = {
    age: 21,
    ageInDays: function () {
      // return user.age * 365;
      return this.age * 365;
  },
};

console.log(user.age)
console.log(user.ageInDays())
