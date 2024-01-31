const first = 'Abid';
const last = 'Nabid';

//const fullName = first + last;
const fullName = first + ' ' + last;
console.log(fullName);

const fullName1 = first.concat(last);
console.log(fullName1);

const fullName2 = first.concat(' ').concat(last);
console.log(fullName2);

// check includes
console.log("includes x:", last.includes('x'));
console.log("includes d:", last.includes('d'));