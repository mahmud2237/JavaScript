function vaatKhao(){
    console.log('hand wash kore boso');
    console.log('chair a boso');
    console.log('brush teeth');
    console.log('fresh hou');
}

vaatKhao();

// square a number means double (5 ==> 5*5 ==> 25)
function square(number){
    console.log(number);
    const borgo = number*number;
    console.log('square of the given number is:', borgo);
    console.log(number, 'square is' , number*number);
}
square(4);
square(405);
square(50);

// add numbers
function add(num1, num2, num3){
    const sum = num1 + num2 + num3;
    console.log(num1, '+', num2, '+', num3, '=', sum);
}
add(15, 25, 20);
add(45, 15, 10);

//subtract numbers
function subtract(num1, num2){
    const difference = num1 - num2;
    console.log(num1, '-', num2, '=', difference);
}
subtract(15, 25);
subtract(60, 15);


