function squareElements(arr) {
  // your code here
  let newA = arr.map(element => element**2)
  return newA
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
