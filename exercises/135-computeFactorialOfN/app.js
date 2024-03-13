function computeFactorialOfN(n) {
    // your code here
    let fact = 1;
    for ( let i = n; i>0; i--){
        fact *= i; 
    }

    return fact;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
