function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if ( key in obj ){
        if ( Array.isArray(obj[key]) ){
          // let arr = obj[key].filter(element => element.length%2===0)
          if ( obj[key].length > 0) {
            console.log(obj[key])
           let a = obj[key][index]
            return a
          }
          return undefined;
        }
        return undefined;
      }
      return undefined;

}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
