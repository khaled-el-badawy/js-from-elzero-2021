/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";

//normal  limited
// console.log(txt.replace("@","java"));
// console.log(txt.replaceAll("@", "java"));


//RE
let re = /@/ig
console.log(txt.replaceAll(re, "JS"));




