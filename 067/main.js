var a = 1;
let b = 2;

console.log(`From global ${a}`)
console.log(`From global ${b}`)

function showText() {
    var a = 11;
    let b = 22;
    console.log(`Fun  - From global ${a}`)
    console.log(`Fun  - From global ${b}`)
}
showText()