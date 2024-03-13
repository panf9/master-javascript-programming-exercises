function getLengthOfShortestElement(arr) {
    // your code here
    let valor = 1000;
    if ( arr.length > 0){
        for ( let i in arr ){
            if ( valor > arr[i].length){
                valor = arr[i].length
            }
        }
    } else {
        return 0
    }
    
    return valor
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
