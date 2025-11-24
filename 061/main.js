function calc(...nums) {

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  
  return `final result is ${result}`;
}

console.log(calc(10, 20, 10, 30, 500, 1000));