const country="bangladesh";
const division="dhaka";
const district=`B-baria`;
const thana= new String('sobujbag');
console.log(typeof thana);
const capital ='dhaka city';
console.log(capital.length);
const capital2='cumilla city';
console.log(capital2[4]);
//string is immutable
//capital2[7]='q';

const school="ideal school and college";
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const drink='water';
const liquid='  water ';

if(drink ===liquid.trim()){
    console.log("pani khabo");
}
else{
    console.log("pani khabo na");
}

const address="baganbari";
const part=address.slice(3,6);
console.log(part);
const person="I am a good and hardworking person";
console.log(person.split(``));
console.log(person.split(` `));
console.log(person.split(`a`));

const friendsStr="rahim,karim,fahim,sahim,lam";
const friends=friendsStr.split(',');
console.log(friends);
const realFriend =["rahim","karim","fahim","sahim","lam" ];
console.log(realFriend.join());
console.log(realFriend.join(`|`));
console.log(realFriend.join(`-`));