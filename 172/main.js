/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(myJsonObjectFromServer); //{"Username": "Osama", "Age": 39}
console.log(typeof myJsonObjectFromServer); //string

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(myJsObject); //{Username: "Osama", Age: 39}
console.log(typeof myJsObject); //object

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(myJsonObjectToServer); //{"Username":"Elzero","Age":40}
console.log(typeof myJsonObjectToServer); //string
