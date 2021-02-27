function tabuada(){
   var numero = document.getElementById('txtnumero')
   var sel  = document.getElementById('opt')

   if(numero.value.length == 0){
             alert("Precisa preencer um número")
   }
    else{
        var n = Number(numero.value)

        //Limpa a elemento tabuada antes de mostrar a próxima tabuada 
        sel.innerHTML = ''

        for (var c = 1; c <= 10; c++) {
        
         //cria o elemento OPTION dinamicamente
         let item = document.createElement('option')

         item.text =   c + ' X ' +  n + ' = ' + '  ' + n * c  + '  ' + '\n'
        
        //Linha abaixo para pegar o índíce do elemento (usado e PHP)
         item.value = `sel${c}`

         //Gera o elemento filho dentro do OPTION
         sel.appendChild(item)   
    }
      
   } 
}

function limpar(){
    document.getElementById('opt').length == 0
}
