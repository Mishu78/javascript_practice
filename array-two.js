const friends=['Elon','Mark','Bill','Waren'];
for(const friend of friends){
    console.log(friend);
}
for(let i=0;i<friends.length;i++){
    console.log(i);
    console.log(friends[i]);
}
const numbers=[12,233,45,3,4,5,6,213,8,87,56,45];
for(let i=0;i<numbers.length;i++){
    console.log(i);
    console.log("using for loop:", numbers[i]);
}
let i=0;
while(i<numbers.length){
    console.log("using while loop:", numbers[i]);
    i++;
}