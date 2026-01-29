const numbers=[1,2,3,4,5,6];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

let reversed=[];
for(const num of numbers){
    console.log(num);
    reversed.unshift(num);
}
console.log(reversed);

for(let i=0;i<numbers.length;i++){
    const num = numbers[i];
    reversed.unshift(num); 
}
console.log(reversed);

const rev_numbers=[];
for(let i=numbers.length-1; i>=0;i--){
     const num = numbers[i];
     console.log(num);
     rev_numbers.push(num);
}
console.log(rev_numbers);
