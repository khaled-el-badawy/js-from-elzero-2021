let element = document.getElementById("my-div");

element.style.color = "red";
element.style.backgroundColor = "black";
element.style.fontWeight = "bold";

//overRide
element.style.cssText =
  "  font-weight: bold; color: green; background-color: brown;";

//-----------------
element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");
//remove probrty from main.css
document.styleSheets[0].rules[0].style.removeProperty("line-height");
//add probrty from main.css
document.styleSheets[0].rules[0].style.setProperty(
  "background-color",
  "red",
  "important"
);
