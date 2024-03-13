function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if ( key in obj ){
      if ( Array.isArray(obj[key]) ){
        // let arr = obj[key].filter(element => element.length%2===0)
        if ( obj[key].length > 0) {
          let num = 1;
          obj[key].map(elemenet => {num = elemenet*num})
          return num
        }
        return 0;
      }
      return 0;
    }
    return 0;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
