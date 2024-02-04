const person = {
    name: 'John',
    age: 30,
    job: 'Developer',
    salary: 25000,
    married: true,
    friends: ['Mary', 'John', 'Peter']
}
console.log(person);
// updates values
person.salary = 30000;
person['age'] = 36;

console.log(person);