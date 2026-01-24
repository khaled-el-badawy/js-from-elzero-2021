document.getElementById("register").onsubmit = () => {
  let phoneInput = document.getElementById("phone").value;
  // let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let vR = phoneRe.test(phoneInput);
  console.log(vR);
  if (vR === false) {
    return false;
    
  }
  return true;
}
