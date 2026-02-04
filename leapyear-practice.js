// function isLeapYear(year){
//     if(year % 4===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const isLipi=isLeapYear(2000);
// console.log(isLipi);

function isLeapYear(year){
    if(year%100!==0 && year%4===0){
        return true;
    }
    if(year%100===0 && year%400===0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi=isLeapYear(2052);
console.log(isLipi);