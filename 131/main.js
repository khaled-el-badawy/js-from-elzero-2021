//every

const locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locArray = Object.keys(locations);

console.log(locArray); //['10', '20', '30', '40']

let locArrayNum = locArray.map((n) => +n);

console.log(locArrayNum); //[10, 20, 30, 40]

let check = locArrayNum.every(function (e) {
  console.log(e);
  return e > this;
}, mainLocation);

console.log(check);
