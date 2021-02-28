/*
function fatorial(n){
    let fat = 1 

    for(let c = n; c > 1; c--){
        fat *= c

    }
    return fat
    
}

console.log(fatorial(5))

//Calcular fatorial d forma recursiva
*/

function fat(n){
    if(n == 1 ){
        return 1
    }else{
        return n * fat(n-1)
    }
}
console.log(fat(5))