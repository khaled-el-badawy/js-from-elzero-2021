let tld = "Com Net Org Info Code Io";
console.log(tld);

let tldRe = /(info|org|io)/i;
console.log(tldRe);

console.log(tld.match(tldRe));

let tldRe1 = /(org|info|io)/gi;
console.log(tld.match(tldRe1));

//-------range-------
let nums = "12345678910";
let numsRe = /[0-2]/g;

console.log(nums.match(numsRe));

//----

let notNums = "abc12345678910";
let notNumsRe = /[^0-9]/g;

console.log(notNums.match(notNumsRe));

//----

let spicialNums = "123!456#$^&*78910";
let spicialNumsRe = /[^0-9]/g;

console.log(spicialNums.match(spicialNumsRe));

//----

let practice = "Os1 Os10s Os2 Os8 Os8Os ";
let practiceRe = /os[5-9]os/gi;

console.log(practice.match(practiceRe)); //['Os8Os']

//------------------
