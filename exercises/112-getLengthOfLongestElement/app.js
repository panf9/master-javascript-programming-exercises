function getLengthOfLongestElement(arr) {
    // Your code here
    let num = 0;
    for ( let i in arr ){
        if ( num <= arr[i].length){
            num = arr[i].length;
        }
    }
    return num
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
