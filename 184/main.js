/*
  Promise
  - All
  - All Settled
  - Race
*/
const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("iam first promise");
  }, 5000);
});
const mySecundPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("iam secund promise");
  }, 1000);
});
const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("iam third promise");
  }, 2000);
});

//لو كلهم ريزولف كلهم يرجعوا
//لو واحد فيهم ريجيكت هيرجع الريجيكت فقط

Promise.all([myFirstPromise, mySecundPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValues) => console.log(`rejected ${rejectedValues}`),
);

// هيرجع مصفوفة بكب النتايج علي حد سواء
Promise.allSettled([myFirstPromise, mySecundPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValues) => console.log(`rejected ${rejectedValues}`),
);

// هيرجع الي هيقابلة اول واحد سواء ريسولف او ريجيكت
//سباق
Promise.race([myFirstPromise, mySecundPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValues) => console.log(`rejected ${rejectedValues}`),
);
