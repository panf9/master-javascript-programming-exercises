function getOddElementsAtProperty(obj, key) {
    // your code here
    if ( key in obj ){
      if ( Array.isArray(obj[key])){
        let arr = obj[key].filter(element => element%2!==0)
        return arr;
      }
      return [];
    }
    return [];
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
