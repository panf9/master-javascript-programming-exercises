// Write your function here

function isSameLength(word, word2){
    if (word.length === word2.length){
        return true
    } else {
        return false
    }
}

let output = isSameLength('words', 'super');
console.log(output); // --> true