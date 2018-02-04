function sayHi(name, country) {
    console.log(`Hello ${name} of ${country}`)
}

const ar = ['Kyel', 'Philippines'];

sayHi(...ar);

const [captain, ...players] = ['Migz Paraz','Allan see','Charo nuguid'];

console.log(`${captain} is the captain, and ${players} are the members of his team`);