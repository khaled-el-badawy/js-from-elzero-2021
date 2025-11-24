function showInfo(us = "Un", age = "Un", rt = 0, show = "y", ...sk) {
  document.writeln(`<div>`);
  document.writeln(`<h2>Welcome, ${us}</h2>`);
  document.writeln(`<p>Age: ${age}</p>`);
  document.writeln(`<p>Hour Rate: $${rt}</p>`);
  if (show === "y") {
    if (sk.length > 0) {
      document.writeln(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.writeln("Skills:no skills");
    }
  } else {
    document.writeln(`<p>Skills is Hidden</p>`);
  }
  document.writeln(`</div>`);
}
showInfo("khaled", 21, 20, "y", "html", "css", "js", "tailwind");
