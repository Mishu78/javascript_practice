//Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors['golden rod']);

//For this object below add a property named passenger capacity with value 5
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["passenger capacity"]=5;
console.log(car);

//Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);

//count the number of properties.

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const count=Object.keys(student1).length;
console.log(count);

//Loop through an object and print the key-value pairs with their types
let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

for(let keys in myObject){
    console.log(keys , ':' , myObject[keys] , '|', "type:", typeof(myObject[keys]));
}

//Count how many times a string has the letter a

let myName="mahajabin KhannA";
let count1=0;
for(let char of myName){
    if(char === 'a'){
        count1++;
    }
   
}
 console.log(count1);

 //Count how many times a string has the letter a or A
let count2=0;
 for(let char1 of myName){
    if(char1 === 'a' || char1==='A'){
        count2++;
    }
 }
 console.log(count2);

 //Check whether a string contains all the vowels a, e, i, o, u
 let string="I am learning web development"
let vowel=['a','e','i','o','u'];
    if(string.toLowerCase().includes('a'))
    {
        if(string.toLowerCase().includes('e')){
            if(string.toLowerCase().includes('i')){
                if(string.toLowerCase().includes('o')){
                    if(string.toLowerCase().includes('u')){
                        console.log("this string contains all the vowel");
                    }
                }
            }
        }
    }
    else{
        console.log("doesn't contain all the vowel");
}


 