function sayHello(userName , age) {
   if (age < 20) {
      console.log(` - App is not suitable for you`)
   } else {
      console.log(`hello ${userName}! your age is ${age}`);
   }
}
sayHello("khaled" ,21);
sayHello("sayed", 18);
sayHello("ali", 39);

// -------------

function generateYears(start, end , exclude) {
   for (i = start; i <= end; i++){
      if (i === exclude) {
         continue;
      }
      console.log(i)
   }
}
generateYears(1982, 2025 ,2020)