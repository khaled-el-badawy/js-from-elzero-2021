let myEle = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myTxt = document.createTextNode("Product One");
let myComment = document.createComment("this is div");

myEle.className = "product";
myEle.setAttributeNode(myAttr);
myEle.setAttribute("data-test", "testing");

// Append Comment To Element
myEle.appendChild(myComment);

// Append Text To Element
myEle.appendChild(myTxt);

// Append Element To Body
document.body.appendChild(myEle);

console.log(myEle);
