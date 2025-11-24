let nums = [10, 20, 15, 30];
let add = nums.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  console.log(`Acc => ${accumulator}`);
  console.log(`Current Element => ${currentValue}`);
  console.log(`Current Element Index => ${currentIndex}`);
  console.log(`Array => ${array}`);
  console.log(`=> ${accumulator + currentValue} <=`);
  console.log(`################`);

  return accumulator + currentValue;
},
5);
console.log(add);

// -------max-------
let max = nums.reduce(function (accumulator, currentValue) {
  return accumulator > currentValue ? accumulator : currentValue;
});
console.log(max);
