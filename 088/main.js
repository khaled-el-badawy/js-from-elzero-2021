console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  console.log("found");
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "newValue");
  }
} else {
  console.log("Not found");
}
// -------------
if (myP.hasAttributes()) {
    console.log(`has attr`)
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`has attr`);
} else {
    console.log(`has no attr`);
}