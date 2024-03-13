function getElementsUpTo(array, n) {
  // your code here
  const newArr = array.slice(n);
  array.pop(newArr[0]);
  array.pop(newArr[1]);
  return array;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
