// Write your function here
function countAllCharacters(str){
    let veces = 0;
    let obj = {};
      for ( let i in str ){
        veces = 0; 
        for (let x in str){
          if ( str[i] === str[x]){
            veces++;
          }
        }
        obj[str[i]] = veces
      }
    return obj;
   
  }
  
  
  let output = countAllCharacters('banana');
  console.log(output); // --> {b: 1, a: 3, n: 2}