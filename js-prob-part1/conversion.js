// 12 inch 1 feet

function inchToFeet(inch){
     
    const feet = inch / 12;
    return feet;
}
const Height = inchToFeet(75);
console.log(Height);

function inchToFeet2(inch){
    const feet2 = inch / 12;
    const feetNumber = parseInt(feet2);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch';
    return result;
}
const Height2 = inchToFeet2(75);
console.log(Height2);

// 1 mile = 1.60934 kilometer
function mileToKilo(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const distance = mileToKilo(65);
console.log(distance);

function kiloToMile(kilo){
    const mile = kilo / 1.60934;
    return mile;
}

const distance2 = kiloToMile(distance);     
console.log(distance2);