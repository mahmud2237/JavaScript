const person = {
    name: 'Rahim',
    age: 21,
    proffession: 'developer',
    salary: 25000,
    married: true,
    subjects: ['bangla', 'English', 'Physics', 'Math']
}

// dot notation
console.log(person.name);
console.log(person.age);
const boyos = person.age;
console.log('Now age is:', boyos+1);
console.log(person.proffession);

// bracket notation
console.log(person['salary']);
const income = person['salary'];
console.log('Now income is:', income + person['salary']);

console.log(person['married']);
console.log(person['subjects']);

















