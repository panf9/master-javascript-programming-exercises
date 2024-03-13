// Write your function here

function select(arr, obj){
    let objeto = {}
    arr.map(element => {
        if( obj[element] !== undefined){
        objeto[element] = obj[element]
        console.log(objeto)
        }
    })
    console.log(objeto)
    return objeto
}


let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }