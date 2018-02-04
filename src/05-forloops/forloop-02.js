//Iterables
const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

//'In' returns the index and some other property included in the prototype
for(const index in cuts) {
    console.log(index)
}

/// 'OF ' returns the elements
for(const cut of cuts) {
    console.log(cut)
}