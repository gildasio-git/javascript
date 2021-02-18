function contar(){
 
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var stop = document.getElementById('passo')
    var res = document.getElementById('res')

    /** 
    if(Number(ini.value == 0) || (Number(fim.value == 0) || (Number(stop.value == 0)))) {
        alert('Valores das variaveis vazil, preencha e tente novamente')
        res.innerHTML = `Variáveis com valores vazios, preencha e tente novamente`
    }else if(Number(passo.value > Number(fim.value) )){
        res.innerHTML = `Campo passo não pode ser maior que inicio`
        res.style.color = 'red'        
        }
       
        //res.innerHTML =`Valore alocados nas varíaveis ${ini.value}, ${fim.value}, ${stop.value}`
        */
  
   for(ini=ini;ini<fim;ini++){
            
            ini++
   }
   console.log(ini.value)
         
        
    }
   

