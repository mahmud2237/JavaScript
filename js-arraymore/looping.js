/**
 * Looping Techniques
 * 1. while loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 */
const friends =['Elon', 'Bill', 'Mark', 'Waren'];
for(const friend of friends){
    console.log(friend);
}

for(let i = 0; i < friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}
// OR this same thing working with the while loop 
let i = 0;
while(i < friends.length){
    console.log(friends[i]);
    i++;
}

//===================================================//

const numbers = [5, 34, 23, 656, 345, 786, 45, 67]
for (let n = 0; n < numbers.length; n++){
    console.log(numbers[n]);
}
// OR in while loop
let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}
