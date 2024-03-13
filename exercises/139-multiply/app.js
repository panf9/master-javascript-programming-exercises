function multiply(num1, num2) {
    // your code here
    let prod = 0
    if ( num2 < 0){
        if ( num1 > 0 ){
            while ( num2 < 0){
                prod = prod + num1
                num2++;
            }    
        } else {
            while ( num2 < 0){
                prod = prod + num1
                num2++;
            }
        }
        return prod
    }else {
        while ( num2 > 0){
            prod = prod + num1
            num2--;
        }
    }
    return prod
}

let output = multiply(4, 7);
console.log(output); // --> 28
