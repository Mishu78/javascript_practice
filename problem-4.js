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
        else{
            console.warn(`Invalid vote:"${vote}"`);
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
const vote=gonoVote(["ha","na","ha"]);
console.log(vote);