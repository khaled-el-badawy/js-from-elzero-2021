let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let count = products.length;

document.writeln(`<h1>Show ${count} Products</h1>`);

for (let i = 0; i < count; i++) {
  document.writeln(`<hr>`);
  document.writeln(`<div>`);
  document.writeln(`<h3> [${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.writeln(`<p>${colors[j]}</p>`);
  }
  document.writeln(`<p>${colors.join(" | ")}</p>`);
  document.writeln(`</div>`);
}
