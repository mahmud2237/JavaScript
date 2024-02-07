let a = 5;
let b = 7;
console.log('Before:', a, b);
const temp = a;
a = b;
b = temp;
console.log('After Swap:', a, b);

// another way to Swap
let x = 8;
let y = 9;
console.log('Before Swap:', x, y);
[x, y] = [y, x];
console.log('After Swap:', x, y);