//use var for global scope
//in practice it is better use let, and const
function setWidth(){
    var width = 100;
    console.log(width);
}

var age = 13;

//const is for contant fields. It is also within the block scope
//Not global scope
const MULTIPLIER = 7

if(age > 12){
    //use let for local/ within scope definitions
    let dogYears =  age * MULTIPLIER;
    console.log('You are '+ dogYears +'dog years old');
}

//Let is use ful for block scope
//console.log(dogYears)