function add(price1, price2){
    const total = price1 + price2;
    return total;
}
const bill = add(5, 80);

function add2(price1, price2){
    return price1 + price2;
}
const bill2 = add(5, 80);
console.log(bill, bill2);


/**
 * for a given number tell me the sum, difference, product and quotient
 */
// Problem Below code
function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const product = sum * diff;  // multiplication
    const result = product / 2;  // division
    return result;
}
console.log(sum, diff, product, quotient);
const result = doMath(10, 5);
console.log(result);

