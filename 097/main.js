let element = document.getElementById("my-div");

let createdP = document.createElement("p");

//add before element
element.before("Hello from ebfore JS");
//add after element
element.after("Hello from after JS");

//add in the frist
element.prepend("Hello from js");
//add in the end
element.append("Hello from js");

//----- ----- -----
element.prepend(createdP);
//----- -- remove  alt display: none ; (recomended)--- -----
element.remove();
