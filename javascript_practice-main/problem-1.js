function newPrice(currentPrice , discount ) {
    if(typeof(currentPrice)!='number' || typeof(discount)!='number' || (discount<0 || discount>100)){
       return "Invalid";
    }
    else{
 let discountPrice=(currentPrice*discount)/100;
   let newPrice=parseFloat(currentPrice-discountPrice);
   return newPrice.toFixed(3);
    }
   
}
const price=newPrice(2000.34,10.34);
console.log(price);