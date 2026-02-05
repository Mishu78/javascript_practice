const heights=[60,72,58,52,63,70];
function getMax(numbers){
    let max=numbers[0];
    for(const number of numbers){
        if(number>max){
            max=number;
        }
console.log(number);
    }
    return max; 
}
const max=getMax(heights);
console.log("max value is",max); 
