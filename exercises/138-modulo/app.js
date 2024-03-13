function modulo(num1, num2) {
    // your code here
    if ( num1 < 0 || num2 < 0){
        return (num1 - (Math.floor(num1/num2)+1)* num2)
    } else {
        return (num1 - Math.floor(num1/num2)* num2)
    }
    
}

let output = modulo(25, 4);
console.log(output); // --> 1
