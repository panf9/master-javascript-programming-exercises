function countCharacter(str, char) {
    // your code here
    let num = 0;
    for (let i in str){
        if ( char === str[i]){
            num++;
        } 
    }

    return num;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
