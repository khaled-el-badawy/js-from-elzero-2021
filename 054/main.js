let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;
while (i < 10) {
  console.log(i);
  i += 1;
  if (i === 3) {
    break;
  }
}
// ---------------------
let j = 0;
while (j < products.length) {
  console.log(products[j]);
  j += 1;
  if (j === products.length) {
    break;
  }
}
