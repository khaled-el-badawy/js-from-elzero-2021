let user = {
  age: 20,
  doubleAge: function () {
    // بيدور علي الage الي في الprototype
    // return user.age * 2; 
    
    // بيدور علي الage الي في المالك (الي انا فية ) 
    return this.age * 2;
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());
// ----------------
let obj = Object.create({})
obj.a = 100
console.log(obj);
// -------------
let copyObj = Object.create(user);

copyObj.age = 30;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
