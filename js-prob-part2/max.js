const disha = 65;
const salman = 96;
if(disha > salman){
    console.log(disha, 'is greater than', salman);
}
else{
    console.log(salman, 'is greater than', disha);
}

// inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max1 = getMax(96, 79);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max1, max2);
console.log('Max of two is:', ultimateMax);