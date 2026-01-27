const age=20;
if(age>=18){
//     console.log("you can vote");
// }
// else{
//     console.log('jao ghumao');
//  condition ? do something when true : do something when false
age>=18 ? console.log('vote dio') : ('ghumao');
}
let price =500;
const isLeader=true;

// if(isLeader === false){
//     price=0;
// }
// else{
//     price=price+100;
// }

price = isLeader === true ? 0 : price+100;
console.log(price);
let price2=2000;
if(isLeader ===true){
    if(price2>1000){
        price2=price2/2;
    }
    else{
      price2=0;  
    }
}
else{
    price2=price2+1000;
}

price= isLeader === true ? price>1000 ? price2/2 : 0 : price2+1000

console.log(price2);
