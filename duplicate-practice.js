const biriyanikhor=['abul','babul','chabul','babul'];
const numbers=[1,5,61,5,5,7,67,98,54,67,34,90,34,23,58,90];

function noDuplicate(array){
    //console.log(array);
    const unique=[];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray=noDuplicate(numbers);
console.log(uniqueArray);



