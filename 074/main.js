// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let fillterWord = sentence
  .split(" ")
  .filter(function (e) {
    return e.length <= 4;
  })
  .join(" ");
console.log(fillterWord);

// -------------------

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
  .split("")
  .filter((e) => isNaN(parseInt(e)))
  .join("");

console.log(ign);

// -------------------

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixNum = mix
  .split("")
  .filter((e) => !isNaN(parseInt(e)))
  .map((e) => e * e)
  .join("");

console.log(mixNum);
