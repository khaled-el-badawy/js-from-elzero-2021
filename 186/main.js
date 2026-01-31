/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("iam the good promise")
    reject(Error("iam the bad promise"));
  }, 1000);
})


async function readData() {
  console.log("before promise");
  // mypromise.then((resV) => console.log(resV));
  
  // console.log(await mypromise);
  console.log(await mypromise.catch((err)=>err));
  
  console.log("after promise");
  
}
readData()