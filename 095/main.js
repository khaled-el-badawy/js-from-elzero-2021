let element = document.getElementById("my-div");
console.log(element.classList);
// console.log(typeof element.classList);
console.log(element.classList.length); // 4
console.log(element.classList.contains("khaled")); //false
console.log(element.classList.contains("one")); //true
console.log(element.classList.item("2")); //show index "secound class"

element.onclick = function () {
  element.classList.remove("one", "two");
  element.classList.add("add-one", "add-two");
  element.classList.toggle("show");
};

