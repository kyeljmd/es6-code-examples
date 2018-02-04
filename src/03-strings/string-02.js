function highlight(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
        str += string + ( values[i] || '' );
    });

    return str;
}

const name = 'Snickers';
const age = 2;

const sentence =  highlight`My Dog ${name} is age ${age} years old`;

console.log(sentence)