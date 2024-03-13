function getLargestElementAtProperty(obj, key) {
    // your code here
    if ( key in obj ){
      if ( Array.isArray(obj[key]) ){
        // let arr = obj[key].filter(element => element.length%2===0)
        if ( obj[key].length > 0) {
          let arr = obj[key]
          arr.sort(function(a, b) {return a-b})
          return arr[obj[key].length -1]
        }
        return [];
      }
      return [];
    }
    return [];
    
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
