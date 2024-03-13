function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let newN = preTaxAndTipAmount * ( 1+ 0.095 + 0.15)
    newN =  Number(newN.toFixed(2))
    return newN
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
