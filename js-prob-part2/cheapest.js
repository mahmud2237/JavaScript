const phones = [
    { model: 'Samsung', price: 30000, camera: '60mp', color: 'black' },
    { model: 'xiomi', price: 40000, camera: '115mp', color: 'silver' },
    { model: 'iPhone 13 Pro', price: 65000, camera: '16mp', color: 'blue' },
    { model: 'iPhone 14 Pro', price: 76000, camera: '20mp', color: 'black' },
    { model: 'iPhone 15 Pro', price: 197000, camera: '20mp', color: 'red' },
]
function getCheapestPhone(phones){
    const min = phones[0];
    for (const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is: ', cheap);