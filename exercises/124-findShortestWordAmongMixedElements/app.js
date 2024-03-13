function findShortestWordAmongMixedElements(arr) {
    // your code here
    let num = 10000;
    let str = ''
    for (let i in arr){
        if ( typeof arr[i] === 'string'){
            if ( num > arr[i].length ){
                num = arr[i].length;
                str = arr[i];
            }
        }
    }
    return str
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
