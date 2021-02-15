function verificar(){
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value)>ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)

    }else{
        var fsex = document.getElementsByName('radsex') //Pega por nome o controle "RADSEX" correspondente a masc. ou fem
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//cria uma tag para img (imagem a ser inserida do documento)
        img.setAttribute('id','foto') //Aletara o id do img para foto

        if(fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade <10){
                     //Criança   
                     img.setAttribute('src', 'crianca_homem.png')

                }else if(idade <21){
                    //Jovem
                    img.setAttribute('src','homem.png')
                }else if(idade > 50){
                    //Adulto
                    img.setAttribute('src','idoso_homem.png')
                }else{
                    //Idoso
                }
                
            }else if (fsex[1].checked){
                genero = 'Mulher'

                if(idade >= 0 && idade < 10){
                    //Criança   
                    img.setAttribute('src','crianca_mulher.png')
               }else if(idade < 21){
                   //Jovem
                   img.setAttribute('src','mulher.png')

               }else if(idade < 50){
                   //Adulto
                   img.setAttribute('src','idosa_mulher.png')
               }else{
                   //Idoso
               }

            }

        res.style.textAlign ='center'
        res.innerHTML  = `<p>Detectamos ${genero} com ${idade} anos. </p>`
        res.appendChild(img).style.margin  = 'auto' //Adiciona (appendChild) um elemento img
    }
    
}