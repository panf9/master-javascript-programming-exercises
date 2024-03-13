function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let num = 10000;
  let logic = true
  if( arr.length > 0){
    for (let i in arr){
        if ( typeof arr[i] === 'number'){
            if ( num > arr[i] ){
                num = arr[i];
                logic = false
            }
        }
      }
    } else return 0
    if (logic){
      return 0
    }
    return num
  
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
