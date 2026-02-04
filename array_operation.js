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
console.log(sum);
