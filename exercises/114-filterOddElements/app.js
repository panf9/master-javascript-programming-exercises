function filterOddElements(arr) {
  // your code here
  let newA = arr.filter(element => element % 2 !== 0)
  return newA
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
