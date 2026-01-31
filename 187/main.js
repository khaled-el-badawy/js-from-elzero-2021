/*
  Async & Await With Try, Catch, Finally
*/

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("iam the good promise");
    // reject("iam the good promise");
  }, 2000);
});

// async function readData() {
//   console.log("before promise");

//   try {
//     console.log(await mypromise);
//   } catch (reason) {
//     console.log(`The Reason is: ${reason}`);
//   } finally {
//     console.log("after promise");
//   }
// }

// readData();

////////////////////////////////////////////////////////////////

// "https://api.github.com/users/elzerowebschool/repos"

async function fetchData() {
  console.log("before fetch");

  try {
    let myData = await fetch(
      "https://api.github.com/users/elzerowebschool/repos",
    );
    console.log(await myData.json());
  } catch (reason) {
    console.log(`The Reason is: ${reason}`);
  } finally {
    console.log("after fetch");
  }
}

fetchData();
