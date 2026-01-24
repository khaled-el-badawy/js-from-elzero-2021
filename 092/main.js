let myBtn = document.getElementById("btn")

myBtn.onclick = () => { 
    console.log("onclick from main js")
}

//right click
myBtn.oncontextmenu = () => { 
    console.log("oncontext menu from main js")
}

//mouse enter
myBtn.onmouseenter = () => { 
    console.log("mouse enter")
}

//mouse leave
myBtn.onmouseleave = () => { 
    console.log("mouse leave")
}

//scroll page
window.onscroll = () => {
    console.log("scrolling down")
}


//resize page
window.onresize = () => {
    console.log("resize page");
}
 //------------------------
/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/