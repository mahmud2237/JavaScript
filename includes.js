const friends = ['balam', 'kalam', 'gelam', 'salam', 'pailm'];
console.log(friends.includes('gelam'));
console.log(friends.includes('khailam'));

if(friends.includes('salam')){
    console.log('Lets party');
}
else{
    console.log('we are fasting');
}

// if we want to get any index of the array 
console.log(friends.indexOf('salam'));