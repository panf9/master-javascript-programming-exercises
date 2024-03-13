function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if ( key in obj ){
      if ( Array.isArray(obj[key])){
        let arr = obj[key].filter(element => element.length%2===0)
        return arr;
      }
      return [];
    }
    return [];
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
