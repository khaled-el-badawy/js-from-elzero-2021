let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myNumber = 10;

// let check = nums.some((e) => e > 5);

// let check = nums.some(function (e) {
//   return e > 5;
// });

let check = nums.some(function (e) {
  //   console.log(this);
  return e > this;
}, myNumber);

// console.log(nums);
// console.log(check); // T or F

//------------------------

function checkValues(arr, val) {
  return arr.some(function (e) {
    //   console.log(e);
    return e === val;
  });
}
// console.log(checkValues(nums,30)); //false
// console.log(checkValues(nums, 5)); //true

//------------
let rang = {
  min: 10,
  max: 20,
};

let checkNumberRange = nums.some(function (e) {
  // console.log(this);
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, rang);

console.log(checkNumberRange); //false
// console.log(checkRange(nums, 5)); //true
