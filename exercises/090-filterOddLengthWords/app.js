function filterOddLengthWords(words) {
    // your code here
    let arr = words.filter(word => word.length%2 !== 0)
    return arr
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
