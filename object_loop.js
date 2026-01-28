const mobile={
    name:'redmi',
    price:15000,
    color:'sky',
    camera:"12mp",
    isNew:true,
}

//for of uses in array
//for in uses in object
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys=Object.keys(mobile);

for(const key of keys){
console.log(key, ':' , mobile[key]);
}

