const user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);

// function showDetails(obj) {
//   console.log(`name is ${obj.theName}`)
//   console.log(`age is ${obj.theAge}`)
//   console.log(`html pro is ${obj.skills.html}`)
//   console.log(`css pro is ${obj.skills.css}`)
// }

function showDetails({ theName: n, theAge: a, skills: { html, css } } = user) {
  console.log(`name is ${n}`);
  console.log(`age is ${a}`);
  console.log(`html pro is ${html}`);
  console.log(`css pro is ${css}`);
}
