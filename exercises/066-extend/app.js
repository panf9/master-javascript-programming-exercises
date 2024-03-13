let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};


function extend(obj1, obj2) {
    let arr1 = Object.keys(obj1)
    let arr2 = Object.keys(obj2)
   
    
    for (let i in arr2){
      let logic = true;
      for ( let x in arr1){
        if (arr1[x] === arr2[i]){
          logic = false;
        }
      }
      console.log(logic)
      if ( logic ){
        obj1[arr2[i]] = obj2[arr2[i]];
      }
    }
  
    return obj1
}


extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}