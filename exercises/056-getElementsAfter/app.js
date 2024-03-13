function getElementsAfter(array, n) {
  // your code here
  let newArray = array.slice(array.length - n );
  return newArray;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
