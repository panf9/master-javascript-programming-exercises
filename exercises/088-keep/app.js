// Write your function here
function keep(arr, element){
    let array = arr.filter(ar => ar===element)

    return array
}

let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]