let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = (e) => {
  let userValid = false;
  let ageValid = false;

  console.log(userInput.value);
  console.log(userInput.value.length);

  if (userInput.value !== "" && userInput.value.length <= 10) {
    console.log("valid");
    userValid = true;
  }
  if (ageInput.value !=="") {
ageValid = true    
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[0].onclick = (event) => {
  console.log(event);
  // remove event method
  event.preventDefault();
};
