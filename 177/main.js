/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

let myReq = new XMLHttpRequest();

myReq.open("GET", "https://api.github.com/users/khaled-el-badawy", true);
myReq.send();
console.log(myReq);

/////////////////////////////////////////////
myReq.onreadystatechange = function () {
  // console.log(myReq.readyState) ; //2 3 4
  // console.log(myReq.status); //200

  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
