function computeProductOfAllElements(arr) {
  // your code here
  let prod = 1;
  if ( arr.length > 0) {
    for (let i in arr){
      prod = prod * arr[i]
    }
  } else {
    return 0
  }
  return prod
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
