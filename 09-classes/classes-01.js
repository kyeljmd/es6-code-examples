function Dog(name, breed) {
    this.name = name;
    this. breed = breed;
}

Dog.prototype.bark = function() {
    console.log(`Bark bark! ${this.name}`)
}

const snickers = new Dog("Snickers", "King Charles")
snickers.bark()