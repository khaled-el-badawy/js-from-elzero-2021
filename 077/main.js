let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
allLis.forEach(function (e) {
  e.onclick = function () {
    //remove active class from all elements
    allLis.forEach(function (e) {
      e.classList.remove("active");
    });
    // After Loop finish.
    // Add active class to this element.
    this.classList.add("active");
    //
    allDivs.forEach(function (e) {
      e.style.display = "none";
    })
  };
});

// console.log(allLis)
