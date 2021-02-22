function tabuada(){
   var numero = document.getElementById('txtnumero')
   var sel  = document.getElementById('opt')

   var n = Number(numero.value)

   if(numero.value.length == 0){
       alert("Precisa preencer um número")
     
   }else{
       var n = Number(numero.value)

       for (var c = 1; c <= 10; c++) {
       
        sel.innerText +=  c + ' X ' +  n + ' = ' + '  ' + n * c  + '  ' + '\n'
 
    } 
       
   } 
}

function limpar(){
    res.innerHTML = " "
}
