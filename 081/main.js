let available = true; // in global
let user = {
  name: "kahled",
  age: 21,
  skills: ["html", "css", "js"],
  available: false,
  addrsess: {
    ksa: "Makkah",
    egypt: {
      one: "Mansoura",
      two: "Cairo",
    },
  },
  checkAv: function () {
    console.log(user.available);
    if (this.available === true) {
      return `open to work`;
    } else {
      return `hired`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // access

console.log(user.addrsess); 
console.log(user.addrsess.ksa); 
console.log(user.addrsess.egypt); 
console.log(user.addrsess.egypt.one); 
console.log(user["addrsess"].egypt.two); 
console.log(user["addrsess"]["egypt"]["one"]); 


// ----
console.log(user.checkAv())
 
