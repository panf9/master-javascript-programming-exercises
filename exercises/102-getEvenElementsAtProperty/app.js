function getEvenElementsAtProperty(obj, key) {
    // your code hereç
    if ( key in obj ){
      if ( Array.isArray(obj[key])){
        let arr = obj[key].filter(element => element%2===0)
        return arr;
      }
      return [];
    }
    return [];
    
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
