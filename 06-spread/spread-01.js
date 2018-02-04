///Spread basically spreads an iterable into single element
const featured = ['Deep Dish', 'Peperoni', 'Hawaiin'];
const specialty = ['Meatzza', 'Spicy mama', 'Margherita'];

//combine 2 arrays
const combined = [...featured, ...specialty];

const deepDish = {
    pizzaName: 'Deep Dish',
    size: 'Medium',
    ingredients: ['Marinar','Italian sausage','Dough', 'Cheese']
}

const {pizza, size} = { ...deepDish } ;
console.log(pizza);
  