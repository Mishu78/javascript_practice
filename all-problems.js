function newPrice(currentPrice , discount ) {
    if(typeof(currentPrice)!='number' || typeof(discount)!='number' || (discount<0 || discount>100)){
       return "Invalid";
    }
    else{
 let discountPrice=(currentPrice*discount)/100;
   let newPrice=currentPrice-discountPrice;
   return newPrice.toFixed(3);
    }
   
}



//problem-2

function validOtp(otp) {
    if(typeof(otp)!=="string"){
        return "Invalid";
    }
    else if(otp.length!==8 || !otp.startsWith("ph-")){
    return false;
    }
    else{
        return true;
    }
}



//problem-3

function finalScore (omr) {
if(typeof(omr)!=="object" || Array.isArray(omr) || omr===null){
    return "Invalid";
}
if(omr.right+omr.wrong+omr.skip!=100){
    return "Invalid";
}
if(typeof omr.right !== "number" || typeof omr.wrong !== "number" || typeof omr.skip !== "number"){
    return "Invalid";
}
let finalscore=(omr.right*1)-(omr.wrong*0.5);
let score=Math.round(finalscore);
    return score;
}




//problem-4

function gonoVote(array) { 
    
    if(!Array.isArray(array)){
        return "Invalid";
    }
    let haCount=0;
    let naCount=0;
    for(let voteCount of array){
        if(voteCount==="ha"){
      haCount++;
        }
        else if(voteCount==="na"){
            naCount++;
        }
    }

    if(haCount>naCount){
        return true;
    }
    else if(haCount===naCount){
        return "equal";
    }
    else{
        return false;
    }
}



//problem-5

function analyzeText(str) {
 if(typeof str !=="string" || str.trim()===""){
    return "Invalid"
 }
 let totalCharacter=str.split(" ").join("").length;

 const words= str.split(" ");
 let longest=words[0];
 for(let i=1;i<words.length;i++){
    if(words[i].length>longest.length){
        longest=words[i];
    }
 }
 return{
    longwords:longest,
    token:totalCharacter,
 }
}
