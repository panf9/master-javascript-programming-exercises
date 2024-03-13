function removeStringValuesLongerThan(num, obj) {
  // your code here
  for ( let i in obj){
    if ( obj[i].length > num ){
      delete obj[i];
    }
  }
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
