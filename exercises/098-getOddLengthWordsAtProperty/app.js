// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    if ( key in obj){
        if (Array.isArray(obj[key])){
            let arr = obj[key].filter(element => element.length%2 !== 0)
            return arr
        } else{
            return []
        }
    } else{
        return []
    }
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']