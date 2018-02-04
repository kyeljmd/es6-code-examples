const names = ['wes','kait','lux']

/** 
const fullNames = names.map(function(name) {
    return name + ' bos'
});
**/
///Typical arrow function call
const fullnames0 = names.map(names => {
    return names + " bos"
})

//If you have a second parameter
const fullnames0 = names.map((names, secondParameter) => {
    return names + " bos"
})

//Implicit return
const fullnames = names.map(name => name + 'bos');

console.log(fullnames);