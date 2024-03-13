// Write your function here
function computeAverageOfNumbers(arr){
    if (arr.length > 0){
        let suma = 0;
        for (let i  in arr){
            suma = suma + arr[i];
        }

        return suma/arr.length;
    } else {
        return 0;
    }
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3