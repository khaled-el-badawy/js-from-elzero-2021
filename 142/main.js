/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString));//t
console.log(/^we/ig.test(myString));//t
console.log(/lz$/ig.test(myString)); //f
console.log(/^d/ig.test(myString));//f

/////////////////
console.log(names.match(/\d\w{5}(?=z)/ig));
console.log(names.match(/\d\w{8}(?!z)/ig));

