let myNum = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i = 0; i < myNum.length; i++) {
//   newArray.push(myNum[i] + myNum[i])
// }

// console.log(newArray)

// Map

// let addSelf = myNum.map(function (element, index, array) {
//     // console.log(`current Element => ${element}`)
//     // console.log(`current index => ${index}`)
//     // console.log(`array => ${array}`)
//     // console.log(`This => ${this}`)
//     return element + element
// }, 10)

// console.log(addSelf)

// --------------------------

// let addSelf = myNum.map((element) => element + element);

// console.log(addSelf);

// --------------------------

function addition(ele) {
  return ele + ele;
}

let add = myNum.map(addition);
console.log(add);
