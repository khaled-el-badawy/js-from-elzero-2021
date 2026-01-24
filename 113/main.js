// window.localStorage.setItem("color", "red" );
// window.sessionStorage.setItem("color", "blue" );


//--------

document.querySelector(".name").onblur = function() {
  window.sessionStorage.setItem("inputName", this.value)
}

document.querySelector(".name").value = sessionStorage.getItem("inputName");

console.log()