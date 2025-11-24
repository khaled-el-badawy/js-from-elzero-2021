let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];

let colors = ["Red", "Green", "Black"];

// ---breack---
/*
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);

  if (products[i] === "Pen") {
    break;
  }
}
  */

// ---continue---
mainLoop: for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);

  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}
