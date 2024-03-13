// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    if ( key in obj){
        if (Array.isArray(obj[key])){
            let arr = obj[key].filter(element => element < 100)
            return arr
        } else{
            return []
        }
    } else{
        return []
    }
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]