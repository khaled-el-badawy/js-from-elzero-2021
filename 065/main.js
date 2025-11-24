// Ex1
// function sayMsg(fName, lName) {
//   let massage = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     massage = `${massage} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return massage;
// }
// console.log(sayMsg("khaled", "Elbadawy"));

//----------------------------------------

// Ex2
// function sayMsg(fName, lName) {
//   let massage = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return  `${massage} ${fName} ${lName}`;
//   }

//   return concatMsg();
// }

// console.log(sayMsg("khaled", "Elbadawy"));

//----------------------------------------

// Ex3
function sayMsg(fName, lName) {
  let massage = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${massage} ${getFullName()}`;
  }

  return concatMsg();
}

console.log(sayMsg("khaled", "Elbadawy"));
