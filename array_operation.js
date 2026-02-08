function sumOfNumbers(numbers){
    let sum=0;
    for(const number of numbers){
console.log(number);
sum=sum+number;
    }
    return sum;
}
const nums=[54,63,12,6];
const sum=sumOfNumbers(nums);
console.log('sum:',sum);

/*create a function that will return only the even numbers,return the sum of even numbers*/

function evenNumbersOnly(numbers){
    let sum=0;
    const evens=[];
    for(const number of numbers){
        if(number%2===0){
            console.log("even :",number);
            evens.push(number);
            sum=sum+number;
        }
        else{
            console.log("odd:",number);
        } 
    }
   // return evens;
    return {sum,evens} ;
}
const numbers=[12,34,23,67,46,87];
const evens=evenNumbersOnly(numbers);
console.log("sum of even numbers:",evens);

