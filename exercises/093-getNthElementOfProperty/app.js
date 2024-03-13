// Write your function here
function getNthElementOfProperty(obj, key, n){
    if ( key in obj){
        if (Array.isArray(obj[key])){
            return obj[key][n]
        } else{
            return undefined
        }
    } else{
        return undefined
    }
}


let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2