// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    if ( key in obj){
        if (Array.isArray(obj[key])){
            let arr = obj[key].filter(element => element === 10)
            return arr
        } else{
            return []
        }
    } else{
        return []
    }
}

let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]