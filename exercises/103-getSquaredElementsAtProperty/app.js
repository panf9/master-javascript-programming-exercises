function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if ( key in obj ){
      if ( Array.isArray(obj[key])){
        let arr = obj[key].map(element => element**2)
        return arr;
      }
      return [];
    }
    return [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
