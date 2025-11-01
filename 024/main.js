// console.log((100).toString());
// console.log(100..toString())
// console.log(100.0.toString())

// console.log(100.555555.toFixed(2));

console.log(parseInt("100 khaled")); //100

console.log(parseInt("Khaled 100 khaled")); //NaN
console.log(+"100 khaled"); //NaN
console.log(Number("100 khaled")); //NaN


console.log(parseInt("100.500 khaled")); //100
console.log(parseFloat("100.500 khaled")); //100.5


console.log(Number.isInteger("100")); //false
console.log(Number.isInteger(100.500)); //false
console.log(Number.isInteger(100)); //true

console.log(Number.isNaN("khaled")); //false "String" NAN like (khaled / 20)
console.log(Number.isNaN("khaled" / 20)); //true "String" NAN like (khaled / 20)
