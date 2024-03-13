// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    if ( key in obj){
        if (Array.isArray(obj[key])){
            let arr = obj[key].filter(element => element > 10)
            return arr
        } else{
            return []
        }
    } else{
        return []
    }
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]