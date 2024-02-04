// [1, 2, 4, 5, 6, 7] show it like [7, 6, 5, 4, 2, 1]
const numbers1 = [1, 2, 4, 5, 6, 7];
console.log(numbers1);
numbers1.reverse();
console.log(numbers1);

// Now [7, 6, 5, 4, 3, 2, 1] show it like [1, 2, 3, 4, 5, 6, 7]
const numbers2 = [7, 6, 5, 4, 3, 2, 1]
console.log(numbers2);
const reversed = numbers2.reverse();
console.log(reversed);

// [1, 2, 3, 4, 5, 6, 7, 8] show it like [8, 7, 6, 5, 4, 3, 2, 1]

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8];
const rev_numbers3 = [];
for(const num of numbers3){
    // rev_numbers3.push(num);
    rev_numbers3.unshift(num);
}
console.log(rev_numbers3);