function removeProperty(obj, key) {
  // your code here
  for ( let k in obj){
    delete obj[k]
  }
  
  return obj
}

let obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined