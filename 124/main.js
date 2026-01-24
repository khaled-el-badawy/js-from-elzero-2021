//Type of data
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

//Size
console.log(`size of elements inside is : ${mySet.size}`);
//---------------

//values & keys

// let iterator = mySet.values()
let iterator = mySet.keys();
console.log(iterator); //SetIterator {1, 2, 3, 'A'}

console.log(iterator.next()); //{value: 1, done: false}
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // A
//the end
console.log(iterator.next().value); // undefined
console.log(iterator.next()); //{value: undefined, done: true}

//--------

//forEach
mySet.forEach((el) => {
    console.log(el);
});

//-----Weak Set-----


//Type of data
let myWeakSet = new WeakSet([{A:1, B:2}]);

console.log(myWeakSet);


//No values & No keys

//No forEach



