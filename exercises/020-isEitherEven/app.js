// Write your function here
function isEitherEven(num1, num2){
    return (num1%2===0 || num2%2===0 )?true:false;
}

let output = isEitherEven(1, 3);
console.log(output); // --> true