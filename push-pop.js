const ages = [];
const numbers = [12, 87, 98, 45];
console.log(numbers);
// push to add more 
numbers.push(44);
numbers.push(66);
numbers.push(22, 11, 9);
console.log(numbers);
// pop to remove 
numbers.pop(9);
console.log(numbers);

// undefined push and pop works from the end 
const out1 = numbers.pop();
console.log(numbers);
const out2 = numbers.pop();
console.log(numbers);
console.log(out1, out2);