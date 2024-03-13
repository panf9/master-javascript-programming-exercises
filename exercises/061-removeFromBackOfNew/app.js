function removeFromBackOfNew(arr) {
  // your code here
  newA = arr.slice()
  newA.pop()

  return newA
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
