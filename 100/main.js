// //----------------------------------------------------
// let myP = document.querySelector("p");
// // myP.onclick = function () {
//     //     console.log("helloFromOnclick!")
// // }

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("helloFromOnclick 1!");
// }
// function two() {
//   console.log("helloFromOnclick 2!");
// }

// window.onload = "khaled"

// myP.addEventListener("click", function () {
//     console.log("helloFromAddEventListener");
// })

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// // myP.addEventListener("click", "khaled string"); //error

// //----------------------------------------------------

let myP = document.querySelector("p");

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};


document.addEventListener("click", function (e) {
    if (e.target.className==='clone') {
        console.log("i'm cloned")
    }
});
