function getSmallestElementAtProperty(obj, key) {
    // your code here
    if ( key in obj ){
      if ( Array.isArray(obj[key]) ){
        // let arr = obj[key].filter(element => element.length%2===0)
        if ( obj[key].length > 0) {
          let arr = obj[key]
        return Math.min(arr[0], arr[1], arr[2]);
        }
        return [];
      }
      return [];
    }
    return [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
