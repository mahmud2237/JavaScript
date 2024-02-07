/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */
function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 !== 0){       // or for odd, number % 2 === 1;
            // console.log(number);
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    console.log(odds);

    // now get total of the all odd numbers
    let sum = 0;
    for(const odd of odds){
        sum += odd;
    }
    console.log(sum);
    const count = odds.length;
    console.log(count);
    // get the average
    const avg = sum / count;
    return avg;
    // or,
    // return sum / count;
}
const numbers = [42, 13, 58, 65, 81];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg);