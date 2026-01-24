// set
window.localStorage.setItem("color", "red");
window.localStorage.fontWEIGHT = "bold";
window.localStorage["fontsize"] = "20px";

// get
window.localStorage.getItem("color");
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// set color in page
document.body.style.backgroundColor = window.localStorage.getItem("color");

//removeItem
window.localStorage.removeItem("fontWEIGHT");
//removeItem ALL\
// window.localStorage.clear()

// get key
console.log(window.localStorage.key(0));
