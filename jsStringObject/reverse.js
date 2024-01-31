const sentence = 'I am learning Web Dev.';
// const result = '.veD beW gninrael ma I'
let reverse = '';
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

for(let i = 0; i<sentence.length; i++){
    console.log(i);
    console.log(sentence[i]);
}