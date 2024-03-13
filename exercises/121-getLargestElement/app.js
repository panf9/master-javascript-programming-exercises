function getLargestElement(arr) {
  // your code here
  let valor = -100000;
    if ( arr.length > 0){
        for ( let i in arr ){
            if ( valor < arr[i]){
                valor = arr[i]
            }
        }
    } else {
        return 0
    }
    
    return valor
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;