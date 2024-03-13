// Write your function here
function getLastElementOfProperty(obj, key){
    if ( key in obj){
        if (Array.isArray(obj[key])){
            let arr = obj[key].length
            console.log(obj[key].length)
            return obj[key][arr - 1]
        } else{
            return undefined
        }
    } else{
        return undefined
    }
}

let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5