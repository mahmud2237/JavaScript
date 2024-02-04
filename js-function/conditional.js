function isEven(number){
    if (number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(10));
console.log(isEven(110));
console.log(isEven(111));

// check odd
function isOdd(number){
    if(number % 2 !== 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isOdd(10));
console.log(isOdd(9));
