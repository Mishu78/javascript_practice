var name="mishu";
console.log(name);
var subject="cse";
var passed=true;
console.log(subject , passed);

var num=10;
//var num=num+10;
num += 30;

console.log(num);
var ispassed=false;

if(ispassed){
    console.log("you are passed");
}
else{
    console.log("you are failed");
}
let payAmount = 600;
let discountPrice = 100;

if(payAmount>=discountPrice){
    discountPrice=(payAmount*10)/100;
    currentAmount=payAmount-discountPrice;
    console.log("payAmount After discount" ,currentAmount);
}
else{
    console.log("work hard");
}

const money=100;
if(money>200){
    console.log("bro you are rich");
    if(money <700){
        console.log("okay no problem");
    }
}
else{
    if(money == 400){
      console.log("money is not 400taka");
    }
    else{
        console.log("you are very poor");
    }
}





