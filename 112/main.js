let lis = document.querySelectorAll("ul li");
let box = document.querySelector(".experiment");

box.style.backgroundColor = window.localStorage.getItem("bgColor");

lis.forEach(function (li) {
  li.classList.remove("active");
  li.getAttribute("data-color") == window.localStorage.getItem("bgColor")
    ? li.classList.add("active")
    : null;
});

lis.forEach(function (li) {
  li.addEventListener("click", function () {
    window.localStorage.setItem("bgColor", li.getAttribute("data-color"));
    box.style.backgroundColor = window.localStorage.getItem("bgColor");

    lis.forEach(function (el) {
      console.log(el);
      el.classList.remove("active");
    });
    li.classList.add("active");
  });
});
