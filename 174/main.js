/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

//////////////////
//https://developer.mozilla.org/en-US/docs/Web/API/Document
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



setTimeout(() => {
  console.log("Web API");
}, 5000);

function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}

function three() {
  two();
  console.log("three");
}

three(); // one two three
// two();// one two
// one();// one
