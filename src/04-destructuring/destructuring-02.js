//Destructuring arrays

const details = ['Wes Bos', 123, 'wesbos.com']

const [name, age,web] =  details

const data = 'Basketball,Sports,9320,23'
const [itemName, category, sku, inventory] = data.split(',')


const team  = ['Wes','Harry', 'Sarah', ' Keegan',' Riker']

//retrieve all the remaining elements
//Wes, Harry, and players is sarah, keegan, riker
const [captain, assitant, ...players ] = team;