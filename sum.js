/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */
/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */

let sum=0;
for(let i=91;i<=129;i++){
    if(i%2===1){
        console.log("odd numbers are:",i);
        sum=sum+i;
    }
}
console.log("sum of odd numbers:",sum);