function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  return (person["age"] >= 21)?true:false;
  
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false