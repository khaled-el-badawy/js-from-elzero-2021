/*
  Modules
  - Import And Export
*/
let a = 10;
let arr = [1, 2, 3, 4];
function sayHello() {
  return `Hello`;
}

//طريقة تانية للتصدير لو عاوز تجمع الكل في مكان واحد

export { a as varA, arr, sayHello };

////////////////////////////////////////////////////
  
// export default function sayWelcome() {
//   return `welcome`
// }

export default function () {
  return `welcome`
}