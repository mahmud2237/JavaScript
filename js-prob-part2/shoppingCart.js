const products = [
    { name:'sampo', price: 300, quantity: 2 },
    { name:'shirt', price: 500, quantity: 3},
    { name: 'pant', price: 1300, quantity: 5},
    { name: 'chiruni', price: 400, quantity: 1}
]

function cartTotal(products){
    let total = 0;
    for (const product of products){
        const thisProductCost = product.price * product.quantity;
        total += product.price;
        // console.log(thisProductCost);
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log(shoppingCost);
