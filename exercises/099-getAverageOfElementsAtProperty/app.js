function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if ( key in obj) {
    if ( Array.isArray(obj[key]) && obj[key].length > 0){
      let avr = 0;
      obj[key].map( num => avr = avr + num)
      avr = avr / obj[key].length
      return avr
    } else  return 0
  } else return 0
}


let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  