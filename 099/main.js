// //هينقل العنصر نفسة من مكانه
// let myP = document.querySelector("p")
// let myDiv = document.querySelector("div")

// myDiv.appendChild(myP)

//------------------------------


//هياخد نسخة من العنصر

//الافتراضي هو الفولس  --بياخد العنصر من غير الي جواه 
// الترو  --بياخد العنصر بالي جواه 
let myP = document.querySelector("p").cloneNode(true)

let myDiv = document.querySelector("div")

//عشان idال ميتكررش
myP.id =`${myP.id}-clone`

myDiv.appendChild(myP)