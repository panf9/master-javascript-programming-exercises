function multiplyBetween(num1, num2) {
    // your code here
    let num = num1;
    let prod = 1;
    if ( num2 > num1){
        while ( num2 > num ){
            prod *= num;
            num ++;
        }
    } else return 0
    

    return prod;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
