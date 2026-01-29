/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumber() {
  yield 1;
  // alert("hello after yield 1");
  console.log("hello after yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumber();

console.log(typeof generator);
console.log(generator);

console.log("*************");

// console.log(generator.next());
console.log(generator.next().value);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


for (let value of generateNumber()) {
  console.log(value);
}

for (let value of generator) {
  console.log(value);
}
