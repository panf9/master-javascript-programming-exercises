function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if ( key in obj ){
      if ( Array.isArray(obj[key]) ){
        // let arr = obj[key].filter(element => element.length%2===0)
        if ( obj[key].length > 0) {
         obj[key].pop()
          return obj[key]
        }
        return [];
      }
      return [];
    }
    return [];
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
