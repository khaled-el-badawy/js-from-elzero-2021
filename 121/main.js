const user = {
  theName: "Osama",
  theAge: 39,
  skills: ["html", "css", "JavaScript"],
  addresses: {
    egypt: "cairo",
    ksa: "mekkah",
  },
};
const {
  theName: n,
  theAge: a,
  skills: [, , three],
  addresses: { egypt: eg },
} = user;

console.log(`Your name is: ${n}`);
console.log(`Your age is: ${a}`);
console.log(`Your last skill is:  ${three}`);
console.log(`Your live in: ${eg}`);
