let myArray = [10, 20, 30, 40, 50, "A", "B"];

console.log(myArray);

// myArray.copyWithin(3)//  [10, 20, 30, 10, 20, 30, 40]



// myArray.copyWithin(4)//  [10, 20, 30, 40, 10, 20, 30]


myArray.copyWithin(4,6,7)//  [10, 20, 30, 40, "B", "A", "B"]


console.log(myArray);
