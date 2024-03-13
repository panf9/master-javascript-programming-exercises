function getLongestWordOfMixedElements(arr) {
    // your code here
    let long = 0
    let str = ''
    let logic = true
    for (let element of arr ){
        if ( typeof element === 'string' ){
            if ( long < element.length ){
                long = element.length
                str = element
                logic = false
            }
        } 
    }

    if ( logic ) return ''

    return str
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
