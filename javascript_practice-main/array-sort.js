const persons =['akib','rakib','sakib','dakib'];
const sortedPerson=persons.sort();
console.log(sortedPerson);

const numbers=[4,7,5,9,1,3,4,9]
const numbers_asc=[...numbers].sort(function(a,b){return a-b});
const numbers_dsc=[...numbers].sort(function(a,b){return b-a});
console.log(numbers_asc);
console.log(numbers_dsc);

