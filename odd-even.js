/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
/*programming hero*/


for(let i=61;i<=100;i++){
    if(i%2===1){
        console.log("odd number is:",i);
    }
}

for(let i=61;i<=100;i++){
    if(i%2===0){
        console.log("even number is:",i);
    }
}

let n=61;
while(n<=100){
    if(n%2===1){
        console.log("odd number is by while loop:",n);
    }
    n++;
}