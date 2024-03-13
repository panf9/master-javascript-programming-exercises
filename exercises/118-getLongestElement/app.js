function getLongestElement(arr) {
    // your code here
    let valor = 0;
    let str = ''
    if ( arr.length > 0){
        for ( let i in arr ){
            if ( valor < arr[i].length){
                valor = arr[i].length
                str = arr[i]
            }
        }
    } else {
        return ""
    }
    
    return str
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
