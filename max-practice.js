const disha=56;
const salman=43;
if(disha>salman){
    console.log("disha will get the strawberry")
}

function getMax(num1,num2){
  if(num1>num2){
   return num1;
  }
  else{
    return num2;
  }
}
const max1=getMax(60,40);
const max2=getMax(50,80);
const ultimateMax=getMax(max1,max2);
console.log(ultimateMax);

const jim=56;
const sim=30;
const mim=70;
if(jim>sim && jim>mim){
    console.log('jim is the ultimate boss');
}
else if(sim>jim && sim>mim){
    console.log('sim is the boss');
}
else{
    console.log('mim is the boss');
}

function maxOfThree(jim,sim,mim){
if(jim>sim && jim>mim){
   return {message:'jim is the boss',jim};
}
else if(sim>jim && sim>mim){
    return {message:'sim is the boss',sim};
}
else{
    return {message:'mim is the boss',mim};
}
}
const max4 = maxOfThree(59,58,56);
console.log("The boss is who have the highest mark:",max4);
const max=Math.max(23,56,12,90,56,78,100,123,45,324,56);
console.log(max);