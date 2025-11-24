function calc(n1, n2) {
  return n1 + n2;
}

console.log(calc(50, 60));

// --------------------------


let calculator = function (n1, n2) {
  return n1 + n2;
};

console.log(calculator(5, 6)); 

function sayHello() {
    alert("Hi!")
}
document.getElementById("show").onclick = sayHello;

// --------EX----------

// document.getElementById("show").onclick = function () {
//     alert("Hi!")
// }

// ----------------

// setTimeout(() => {
//     alert("")
// }, 2000);