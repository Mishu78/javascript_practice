function wordCount(sentence){
let words=sentence.split(' ');
let wordscount={};
for(let word of words){
let wordLowerCase=word.toLowerCase();
console.log(wordLowerCase);

if(wordscount.hasOwnProperty(wordLowerCase)){
 wordscount[wordLowerCase]++;
}
else{
wordscount[wordLowerCase]=1;
}
}
return wordscount;
}

const output=wordCount("i love Coding and coding is fun fun");
console.log(output);