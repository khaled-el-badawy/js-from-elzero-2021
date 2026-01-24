const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "black",
  skills: {
    html: 70,
    css: 80,
  },
};

//change var name
const {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "Red",
  skills: { html: h, css },
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);

//--------

console.log(`my HTML Skill Progress is ${h}`);
console.log(`my CSS Skill Progress is ${css}`);

//------
const { html: skillOne, css: skillTwo } = user.skills

console.log(`my HTML Skill Progress is ${skillOne}`);
console.log(`my CSS Skill Progress is ${skillTwo}`);