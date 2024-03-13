function addFullNameProperty(obj) {
  // Add your code after this line
  let nuevo = Object.values(obj)
  obj.fullName = nuevo[0] + ' ' + nuevo[1];

  return obj
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'