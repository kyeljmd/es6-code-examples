//Class Declaration
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    bark() {
        console.log(`Bark Bark! My Name is ${this.name}`)
    }

    cuddle() {
        console.log(`Cuddle Owner`)
    }

    sayNick() {
        console.log(`My Nickname is ${this.nick}`)
    }

    set nickname(value) {
        this.nick = value.trim()
    }

    get nickname() {
        return this.nick
    }
}

const myDog = new Dog("Spike","Askal")
myDog.nickname = "dog"
myDog.bark()
myDog.cuddle()
myDog.sayNick()