// console.log(Array.from("khaled"));
// console.log(Array.from("12345"));
// console.log(Array.from("12345", (n) => +n + +n));

//----------
// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);
// console.log(mySet);
// console.log(Array.from(mySet));

//  //----spread oprator-------
// console.log([...new Set(myArray)]);

function testArgs(k,o) {
    return Array.from(arguments);
}

console.log(testArgs("khaled","osama","ali",1,2,3,4,5))