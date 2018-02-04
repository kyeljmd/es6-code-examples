const race = '100m dash';
const winners = ['hunter Gath', 'Singa song', 'Imda Bos'];

const win = winners.map((winner,i) =>
({
    name: winner, 
    race: race, 
    place: (i + 1) 
}));

console.log(win)
const ages = [12,32,45,65,33,44,55]

//Implicit function call just return true or false
const old = ages.filter(age => age > 50)
console.log(old)


