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
const output=analyzeText("hello  world");
console.log(output);