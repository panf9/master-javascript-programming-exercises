function filterEvenElements(arr) {
    // your code here
    let newA = arr.filter(element => element%2 === 0)
    return newA
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
