const products = [
    { name: 'sampo', price: 300},
    { name: 'shirt', price: 500},
    { name: 'pant', price: 1300},
    { name: 'chiruni', price: 400},
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total += product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('total ajke khosabe: ', total);