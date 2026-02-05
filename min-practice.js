const price=[20000,10000,15000,30000,50000]

function getMin(numbers){
    let min=numbers[0];
for(const number of numbers){
    if(number<min){
        min=number;
    }
}
return min;
}
const min=getMin(price);
console.log("Minimum price of phone:",min);