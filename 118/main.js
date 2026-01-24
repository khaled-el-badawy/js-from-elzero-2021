const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);

// let theName = user.theName;
// let Age = user.theAge;
// let Title = user.theTitle;
// let Country = user.theCountry;

console.log("------------");
//-----

//لو متعرفين قبل كدا
// ({ theName, theAge, theTitle, theCountry } = user);

//لو مش متعرفين قبل كدا
let {theName , theAge , theTitle , theCountry} = user
console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);
