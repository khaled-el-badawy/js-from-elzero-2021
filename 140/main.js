let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails

let mailsRe = /\w@\w\w.sa/ig

console.log(mails.match(mailsRe));

let mailsRe1 = /\w+@/ig
console.log(mails.match(mailsRe1));

let mailsRe2 = /\w+@\w+/ig
console.log(mails.match(mailsRe2));

let mailsRe3 = /\w+@\w+\w+/ig
console.log(mails.match(mailsRe3));

let mailsRe4 = /\w+@\w+.(com|net)/ig
console.log(mails.match(mailsRe4));

////////////////////////////////
let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0

let numsRe = /0\d0/ig;
console.log(nums.match(numsRe)); //null 010

/////// one or more
let numsRe1 = /0\d+0/ig;
console.log(nums.match(numsRe1)); //['0110', '05120', '0560']


/////// zero or more
let numsRe2 = /0\d*0/ig;
console.log(nums.match(numsRe2)); //['0110', '05120', '0560', '00']

/////// 
let urls = "https://google.com http://www.website.net web.com"; // http + https

///////zero or more || 
let urlsRe = /https?/ig;
console.log(urls.match(urlsRe)); //['https', 'http']


///////zero or more || 
let urlsRe1 = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe1)); //["https://google.com","http://www.website.net","web.com"]