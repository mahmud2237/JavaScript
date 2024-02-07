const heights = [65, 66, 69, 72, 78, 60, 65, 66];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(min < num){
            min = num;
        }
    }
    return min;
}
const min = getMin(heights);

console.log('min value is:', min);