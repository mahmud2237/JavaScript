/**
 * for a given string tell me whether it has even number of characters or not
 */
function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }

}

evenSizedString('hello');
evenSizedString('Dhaka');
evenSizedString('fak ka');

// print double or triple of a number using boolean parameter
function doubleOrTriple(number, double){
    if(double === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));
console.log('Now working with the array parameter-------');

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}
console.log(numberOfElements([1, 2, 3, 4, 5]));

// Problem below code
function getAge(person){
    const age = person;
    return age;
}
const rahimAge = getAge(22);
console.log(rahimAge);
