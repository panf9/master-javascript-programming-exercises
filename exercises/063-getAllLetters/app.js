function getAllLetters(str) {
    // your code here
    let arr = []
    if (str.length === 0){
        return arr;
    }
    for (let i in str ){
        arr.push(str[i]);
    }
    return arr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
