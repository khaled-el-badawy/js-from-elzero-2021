let myEle = document.querySelector(".js")

//----Get----

console.log(myEle.innerHTML) //كل الي جوة التاج
//javaScript <span>Div</span> &lt;span&gt;


console.log(myEle.textContent) //
//javaScript Div <span>


//----Set----
myEle.innerHTML = "text form <span> main.js </span>";
//span as HTML

myEle.textContent = "text form <span> main.js </span> txt con";
//span as text

//-----------------
document.images[0].src = "https://google.com"
document.images[0].alt = "google"
document.images[0].title = "khaled img"
document.images[0].id = "pic"
document.images[0].className = "picClass"

//--------------------
let myLink = document.querySelector(".link")
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

//--------add attr---------
myLink.setAttribute("href","https://khaled.com");