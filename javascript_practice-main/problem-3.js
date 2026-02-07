function finalScore (omr) {
if(omr.right+omr.wrong+omr.skip!=100){
    return "Invalid";
}
let finalscore=(omr.right*1)-(omr.wrong*0.5);
score=Math.round(finalscore);
    return score;
}
const output=finalScore(["Raj"]);
console.log(output)


