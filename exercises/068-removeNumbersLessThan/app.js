let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (let i in obj){
        if ( obj[i] < num ){
            delete obj[i]
        }
    }
}

removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }