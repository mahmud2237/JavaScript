const jim = 67;
const dim = 57;
const kim = 99;
if(jim>dim && jim>kim){
    console.log('Jim is the ultimate boss');
}
else if(dim>jim && dim>kim){
    console.log('Dim is the ultimate boss');
}
else{
    console.log('Kim is the Kardeshian boss');
}

// same thing using function
function maxOfThree(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
const ultimateMax = maxOfThree(jim, dim, kim);
console.log('Max of three is:', ultimateMax);

// using Math.max to get the max value
const max = Math.max(12, 1, 23, 43, 67, 9, 56, 5);
console.log('max isuing Math.max is:', max);






