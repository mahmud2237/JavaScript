const college = {
    name: 'Uronchondi college',
    class: ['11', '34'],
    subjects: ['English', 'Math', 'Bangla', 'Islam', 'GK'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college.name);
console.log(college['class']);
console.log(college.unique);
college.unique.result.gpa = 4.5;
console.log(college.unique.result['gpa']);
// console.log(college.unique.color);
// using dot and bracket notation
console.log(college.unique['color']);
console.log(college.subjects);
console.log(college.subjects[1]);
delete college.unique.result.merit;
console.log(college);
