let span2 = document.querySelector(".two")

//الشقيق التالي ايا كان
console.log(span2.nextSibling)

//الشقيق التالي نفس النوع
console.log(span2.nextElementSibling)
//الشقيق السابق
console.log(span2.previousElementSibling)
//ex
// console.log(span.nextElementSibling.remove())

//الاب
console.log(span2.parentElement);

//ex
span2.onclick = () => {
    // span.parentElement.remove()

    // span2.style.opacity= "0"
    
}

