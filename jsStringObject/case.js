const school = 'RAJ UK Uttara Model School';
console.log(school);
console.log(school.toUpperCase());
console.log(school.toLowerCase());

//Uppercase: ABCD EFGH
//Lowercase: abcd efgh
const subject = 'Chemistry';
const book = 'chemistry';
if(subject === book){
    console.log('Yes they are same');
}
else if(subject.toUpperCase() === book.toUpperCase()){
    console.log('Yes they are same by using the Uppercase function');
}
else{
    console.log('No they are not same');
}