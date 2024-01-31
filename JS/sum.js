for(let i = 11; i<=20; i++){
    const sum = 0;
    sum = sum + i;
    console.log(sum);
}
console.log('sum of numbers from 11 to 20 is:', sum);

//for loop with continue

for(let i = 11; i<=20; i++){
    if (i === 15){
        continue;
    }
    console.log(i);
}