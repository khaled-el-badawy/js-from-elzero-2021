let swappingCases = "elZEro";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
  .join("");

console.log(sw);

// ---------------------

let inv = invertedNumbers.map((e) => -e);
console.log(inv);

// ---------------------

let ign = ignoreNumbers
  .split("")
  .map((e) => (isNaN(parseInt(e)) ? e : ""))
  .join("");

console.log(ign);
