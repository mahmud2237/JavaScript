const country = 'Bangladesh';   //always use krbo
const division = "Newlkhale";  // always use krbo
const district = `B-Baria`;   // onek use krbo
const thana = new String('Demra');  //special khetre use korbo

console.log("Type of Country is:", typeof country);
console.log("Type of Division is:", typeof division);
console.log("Type of District is:", typeof district);
console.log("Type of Thana is:", typeof thana);
console.log("Type of Thana is:", thana);


const numbers = [54, 43, 64, 67, 87, 99];
console.log(numbers.length);
console.log(numbers[1]);
console.log(numbers);
numbers[1] = 90;        //Array is mutable --> you can change the array elements
console.log(numbers);

const capital = 'Dhaka';
console.log(capital.length);
console.log(capital[3]);
console.log(capital);
capital[0] = 'F';      //String is immutable or not mutable --> You can't change the string elements
console.log(capital);  // see there is no change at all