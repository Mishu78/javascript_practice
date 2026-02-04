/*function takes an array as parameter give me the average of the odd numbers in the array*/ 
function oddAvrg(numbers){
    const odds=[]
for(const number of numbers){
    if(number%2===1){
        odds.push(numbers);
        console.log("odd numbers",number);
    }
    else{
        console.log("even numbers",number);
    }
}
}
const odd_num=[12,13,15,11,2,5,56,44,33,35,91,38,7]
const odd=oddAvrg(odd_num);
console.log(odd);