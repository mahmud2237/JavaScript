/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */
function evenNumbersOnly(numbers){
    const evens = [];
    for (const number of numbers){
        // console.log(numbers);
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
            // return evens;  // wrong place
        }
        // return evens;  // wrong place
    }
    return evens;  // right place
}
const numbers = [5, 8, 91, 24, 6];
const evens = evenNumbersOnly(numbers);
console.log('even numbers are', evens);

// get the sum value
function sumOfEvenNumbers(numbers){
    const sum = 0;
    for (const number of numbers){
        // console.log(numbers);
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
            // return evens;  // wrong place
        }
        // return evens;  // wrong place
    }
    return sum;  // right place
}
const sum = sumOfEvenNumbers(numbers);
console.log('Sum of the even numbers is:', sum);