const mobile = {
    brand: 'Apple',
    price: '25000',
    color: 'black',
    model: 'iPhone 11',
    camera: '12mp',
    battery: '4000mAh'
}
// show the property
for (const prop in mobile){    // for in --> object
    console.log(prop);
}
// show the property values
for (const prop in mobile){     // for in --> object
    console.log(prop,':', mobile[prop]);
}

// now convert them in array
const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){     // for of --> array
    console.log(key);
}
for(const key of keys){     // for of --> array
    console.log(key,':', mobile[key]);
}