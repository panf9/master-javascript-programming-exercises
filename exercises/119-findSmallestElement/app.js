function findSmallestElement(arr) {
    // your code here
    let valor = 10000;
    if ( arr.length > 0){
        for ( let i in arr ){
            if ( valor > arr[i]){
                valor = arr[i]
            }
        }
    } else {
        return 0
    }
    return valor
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1