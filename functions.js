const price=45;
function fanOffKor(){
    console.log("bosha theke uthe dara");
    console.log("walk toward the switch");
    console.log("click the switch");
}
function brushTeeth(){
 console.log('pick up the brush');
console.log("add paste");
}

fanOffKor();


function square(number){
console.log(number);
const borgo=number*number;
console.log(borgo);
}
square(4);
function add(num1,num2){
    const sum=num1+num2;
    console.log(sum);
}
add(4,5);

function doubled (number){
    const doubled=number*2;
    console.log(number,doubled);
}
doubled(15);
//console.log(number);
const num=44;
doubled(num);
const number=55;
doubled(number);

function difference(num1,num2){
    const diff=num1-num2;
    console.log(num1,num2,"diff is-",diff);
}
difference(43,34);
const fatherAge=40;
const myAge=10;
difference(fatherAge,myAge);

/*return*/
function tenTimes(number){
    const result=number*10;
    return result;
}

function cutHalf(number){
const half=number/2;
return half;

}

const output=tenTimes(500);
console.log("output",output);

const output2=cutHalf(10);
console.log(output2);

function add2(price1,price2){
    const total=price1+price2;
return total;
}
const bill=add2(20,40);
console.log(bill);

function doMath(num1,num2){
    const sum=num1+num2;
    const diff=num1-num2;
    const multiply=sum*diff;
    const result=multiply/2;
    return result;
}
const result=doMath(10,5);
console.log(result);

function isEven(number){
    if(number%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(100));

function isOdd(number){
     if(number%2===1){
        return true;
    }
        return false;
}

console.log(isOdd(5));
console.log(isOdd(100));

/*for a given string tell me whether it has even number of characters or not*/
function evenSizedString(str){
    const size=str.length;
    console.log(str,size);
    if(str%2===0){
        console.log("even size");
        return true;
    }
    else{
        console.log("odd size");
  return false;
    }
      
}
evenSizedString('Dhaka');
evenSizedString('Dhaka city');
function doubleOrTripple(number,doDouble){
    if(doDouble ===true){
        const result=number*2;
        return result;
    }
    else{
        const result =number*3;
        return result;
    }
}
console.log(doubleOrTripple(5,true));
console.log(doubleOrTripple(5,false));

function numberOfElements(numbers){
    return numbers.length;
}
console.log(numberOfElements([12,43,25,78,54,56,76,23]));