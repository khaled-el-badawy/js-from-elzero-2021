/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = ["osama"];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("Users not Found");
//     }
//   });
// }

// getData().then(
//   (resV) => console.log(resV),
//   (rejV) => console.log(rejV),
// );
// ///////////////////////////////////

// function getData() {
//   let users = ["khaled"];
//   if (users.length > 0 && users[0] !== "" ) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("Users not Found");
//   }
// }

// getData().then(
//   (resV) => console.log(resV),
//   (rejV) => console.log(rejV),
// );

///////////////Async////////////////////

async function getData() {
  let users = ["khaled"];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("Users not Found");
    // return "Users not Found";
  }
}

console.log(getData());

getData().then(
  (resV) => console.log(resV),
  (rejV) => console.log(rejV),
);
