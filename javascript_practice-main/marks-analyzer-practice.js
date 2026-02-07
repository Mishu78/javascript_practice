function analyzeMarks(subObj){
    let heightMarks=-Infinity;
    let lowestMarks=Infinity;
    let heightSubject=null;
    let lowestSubject=null;
console.log(subObj);
let total=0;
for(let subject in subObj){
    let mark=subObj[subject];
    total=total+mark;
    if(mark>heightMarks){
        heightMarks=mark;
        heightSubject=subject;
    }
    if(mark<lowestMarks){
lowestMarks=mark;
lowestSubject=subject;
    }
}
console.log("heightMark:",heightMarks);
console.log("lowestMark:",lowestMarks);
console.log("heightSubject:",heightSubject);
console.log("heightSubject:",lowestSubject);

let average=total/Object.keys(subObj).length;
return{
    total,average,heightSubject,lowestSubject,
}
}

const output = analyzeMarks({  math: 78,english: 65,physics: 88,bangla: 55,biology: 99, });
console.log(output);