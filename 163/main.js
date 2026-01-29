/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = new Date();

///opretion
for (let i = 0; i < 100000; i++) {
  // document.writeln(`<div>${i}</div>`)
  
  let div = document.createElement("div")
  div.appendChild(document.createTextNode(i))
  document.body.appendChild(div)
}

//time end
let end = new Date();

///opretion Duration
let Duration = end - start;

console.log(Duration);
