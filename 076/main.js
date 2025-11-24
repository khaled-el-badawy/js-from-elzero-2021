/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/
let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, cr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${cr}`);
  console.log(`=> ${acc.length > cr.length ? acc : cr} <=`);
  console.log(`################`);

  return acc.length > cr.length ? acc : cr ;
});

console.log(check);

// -----------------------------

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let remat = removeChars
//   .filter(function (e) {
//     return e !== "@";
//   })
//   .join("");

let remat = removeChars
  .filter(function (e) {
    return !e.startsWith("@");
  })
  .reduce(function (acc, cr) {
    console.log(`acc --> ${acc}
    cr --> ${cr}`);
    return `${acc}${cr}`;
  });

console.log(remat);
