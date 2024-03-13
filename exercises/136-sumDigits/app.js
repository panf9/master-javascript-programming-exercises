function sumDigits(num) {
    // your code here
    let sum = 0;
    for ( let i=0; i<num.length; i++){
        let n = 0;
        n = num%(10**(i+1));
        sum += n;
        num -=  num - n;
    }
    return sum;
}

let output = sumDigits(-316);
console.log(output); // --> 4
