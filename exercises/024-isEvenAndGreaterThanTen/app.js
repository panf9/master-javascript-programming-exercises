// Write your function here
function isEvenAndGreaterThanTen(num){
    return (num%2===0 && num > 10)? true:false;
}

let output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false