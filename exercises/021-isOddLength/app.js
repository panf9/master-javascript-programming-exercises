// Write your function here
function isOddLength(word){
    return (word.length % 2 === 0)?false:true;
}
let output = isOddLength('special');
console.log(output); // true