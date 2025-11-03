let price = 100;
let discount = false;
let discountAmount = 30;
let country = "syria"

if (discount === true) {
    price-=discountAmount
} else if(country === "Egypt") {
    price-=discountAmount * 2 
    
}else if (country ==="syria") {
    price-=discountAmount * 3 
} else {
    price-= 10
}
console.log(price)

