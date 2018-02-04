//Destructuring Functions

function convertCurrency(amount){
    const converted = {
        USD: amount * 0.76,
        GPB: amount * 0.53,
        AUD: amount * 1.01,
        MEX: amount * 13.30
    };

    return converted;
}

const {USD, GPB, AUD, MEX} = convertCurrency(100);
console.log(USD, GPB, AUD, MEX);