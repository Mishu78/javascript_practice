/*function takes an array as parameter give me the average of the odd numbers in the array*/ 
function oddAvrg(numbers){
    let sum=0;
    const odds=[]
for(const number of numbers){
    if(number%2===1){
        odds_array=odds.push(numbers);
        console.log("odd numbers",odds_array);
    }
    else{
        console.log("even numbers",number);
    }
}
for(const odds of numbers){
    const count=odds.length;
sum=sum+number;
const avg=sum/count;
}
return avg;
}
const odd_num=[12,13,15,11,2,5,56,44,33,35,91,38,7]
const odd=oddAvrg(odd_num);
console.log(odd);