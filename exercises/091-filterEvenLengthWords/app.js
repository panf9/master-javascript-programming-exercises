function filterEvenLengthWords(words) {
    // your code here
    let arr = words.filter(word => word.length%2 === 0)
    return arr
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
