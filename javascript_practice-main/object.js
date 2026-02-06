const age=25;
const school="Ideal school and college";
const isPassed=true;
let isDeveloper;
const bottol={
    name:"mum",
    liquid:"water",
    Price:20,
    isClean: false,
}
//non-primitive:mixed values here
const subject={
    name:"chemistry",
    price:170,
    class:{
        section:'A',
        shift:"day",
    }
}
console.log(bottol);
console.log(subject);

const person={
    name:"mishu",
    age: 25,
    profession:"developer",
    married:false,
    salary:"30k",
    identity:"bangladeshi",
    address: "dhaka",
    blood_group:"o+",
    fav_place:['bandarban','saintmartin','kuakata','america','poland','newzeland'],
}
console.log(person.married);
console.log(person["age"]);
console.log(person.fav_place);
person.salary=35000;
console.log(person);
const bloodName="blood_group";
person[bloodName] ="A+";
console.log(person);