// Write your function here
function removeElement(arr, element) {
    let array = arr.filter(ar => ar!==element)
    return array
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]