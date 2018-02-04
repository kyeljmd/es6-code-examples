///Some and every
const ages = [32,15,19,12];

const adultPresent = ages.some(age => age > 18);

console.log(adultPresent)

const allOldEnough = ages.every(age => age > 18);
console.log((allOldEnough))