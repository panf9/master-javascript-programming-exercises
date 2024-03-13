function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let valor = -100000
    let logic = true

    if ( arr.length > 0){
        for ( let element of arr){
            if ( typeof element === "number"){
                console.log("elemento ",element)
                if ( valor <= element){
                    valor = element
                    logic = false
                }
                console.log(valor)
            }
        }
    } else {return 0}

    if ( logic ) {return 0}

    return valor
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
