function joinArrayOfArrays(arr) {
  // your code here
  let newA = []
  let newB = []
  for ( let i in arr ){
    newB = newA.concat(arr[i])
    newA = newB
  }
  return newB
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
