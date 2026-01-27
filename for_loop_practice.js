//sum of 11 to 20 by using for loop
let sum=0;
for(let i=11;i<=20;i++){
 console.log("numbers are:",i);
 sum=sum+i;
 console.log("sum",sum);
}

let num=10;
while(num>=0){
    console.log("reverse form:",num);
    num--;
}

//odd numbers

for(let i=0;i<20;i++){
    if(i%2!==0){
        console.log("odd number:",i);
    }
}

//numbers between 1-30 divisible by 5

for(let i=1;i<=30;i++){
    if(i%5==0){
        console.log("divisble by 5:",i);
    }
}
//sum of number from 1-20 divisible by 3
let sum1=0;
for(let i=0;i<=20;i++){
    if(i%3===0){
       sum1 = sum1+i;
    }
}
 console.log("numbers sum is:",sum1);