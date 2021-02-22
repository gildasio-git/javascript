function contar(){
    
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

     
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('faltam dados, preencha e tente novamente')
        res.innerHTML = `Impossível contar`

    }else{
        res.innerHTML = `Contando... `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)    
        
        //Testa se o passo é igual a 0
        if(p <=0 ){
            window.alert('passo inválido, considerando passo 1')
            p = 1

        }

        //Testa os valores 
        //Contatem crescente
        if(i < f){
            for(var c=i;c<=f;c+=p){
               
                //Concatenando os valores
                //Para inclusão dos emogis accesse o unicod dos mesmos pelo site :
                //https://unicode.org/emoji/charts/full-emoji-list.html
                res.innerHTML += 	` ${c} \u{1F449}`
              
              }
               

        //Contagem decrescente
        }else {
            for(var c=i;c >= f;c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
            
        }
        res.innerHTML += `\u{1F3c1}`
    
        }
       

}