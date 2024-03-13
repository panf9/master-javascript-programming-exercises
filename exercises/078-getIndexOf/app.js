// Write your function here

function getIndexOf(letra, str){
    for ( let i in str ){
        if ( str[i] === letra ){
            console.log(str[i]);
            return (parseInt(i));
        }
    }

    return (-1)
}


let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2