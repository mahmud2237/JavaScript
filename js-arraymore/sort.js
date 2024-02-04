const persons = ['rakib', 'sakib', 'akib', 'dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

//sort ===>
const numbers = [4, 1, 3, 5, 7, 9, 6, 8, 2];

/**
 * Ascending ---> smaller to larger: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * Descending ---> larger to smaller: [9, 8, 7, 6, 5, 4, 3, 2, 1]
 */

const numbers_asc = numbers.sort(function(a, b){return a - b });
console.log(numbers_asc);
const numbers_dsc = [...numbers].sort(function(a, b){return b - a });
console.log(numbers_dsc);