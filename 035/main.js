let theName = "khaled";
let theGender = "Male";
let theAge = 21 ;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// con ? iftrue : iffalse

theGender === "Male" ? console.log("mr") : console.log("mrs");

let result = theGender === "Male" ? "mr" : "mrs";

document.writeln(`hello ${result} ${theName}`);

// ------else if
theAge < 20
  ? console.log(theAge)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("larger than 60")
  : console.log("Unknown");
