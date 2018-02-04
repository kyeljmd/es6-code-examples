//Default arguments

function calculateBill(total, tax=.13, tip=.15){
    return total + (total * tax) + (total * tip)
}
const totalBill = calculateBill(100)

console.log(totalBill,undefined,.13)