const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

const meat  = cuts.entries

///cuts.entries returns an array of objects 
// with the entry, and index
///We destructure the returned array to store it inside i and cut
for(const [i, cut] of cuts.entries()) {
    console.log(`${i} is the ${cut}`)
}

function addUpNumbers() {
    let total = 0;
    for (let num of arguments) {
        total += num;
    }
    return total
}

addUpNumbers(10,12,23,24,25)