
//All of the string functions here are case sensistive
//new String methods
const course = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825242531RT0001';

const make = 'BMW';
const model = 'X5';
const colour = 'Royal Blue';

// .startsWith

console.log(flightNumber.startsWith('AC',3));
console.log(course.startsWith('RF'));

// ends with
console.log(flightNumber.endsWith('jz'));
console.log(accountNumber.endsWith('RT', 11))

console.log(flightNumber.includes('AC'))

//console.log("hello".repeat(100));

function leftPad(str, len = 20) {
    return `-> ${' '.repeat( len - str.length) }${str}`;
}

console.log(leftPad(make))
console.log(leftPad(model));
console.log(leftPad(colour))