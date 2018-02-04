//let and const scope are block scope
//let can only be defined once within a scope unlike var
//const cannot be updated
const key = 'abc123';

//This is not possibl
//key = 'testetest'
let points = 50;
//this is scoped within the window
let winner = false;

if(points > 40){
    console.log("it ran")
    //scoped within the if block
    let winner = true
}
//Will display false
console.log(winner)

