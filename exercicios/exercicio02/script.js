function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//Peta a data em formado 4 digitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //verfica se o campo ano esta vazio 
    if (fano.value.length == 0 || fano.value  > ano){   
        window.alert('Verifique os dados e tente novamente')

    }else {
        var fsex = document.getElementsByName('radsex')//pega os nomes dos ids do formulário - controle radio, pois ids são iguais 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'

           
            if (idade >=0 && idade < 10){
             //Criança
              img.setAttribute('src','crianca_homem.png')

             }else if (idade < 21){
              //Jovem
              img.setAttribute('src','homem.png')

             }else if(idade < 50){
                 //Adulto
                 img.setAttribute('src','idoso_homem.png')

             }else{
                 //Idoso
             }
              
            //Gerando a imagem dinamicamente
            var img = document.createElement('img')

            //Setando um atributo para img
            img.setAttribute('id','foto')

        }else if (fsex[1].checked){
            genero = 'Mulher'

            //Mostrando a imagem de acordo com a escolha
            if (idade >=0 && idade <10){
                //Criança
   
                }else if (idade < 21){
                 //Jovem
   
                }else if(idade <50){
                    //Adulto
                    
                }else{
                    //Idoso
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
        //adicionando a imagem
        res.appendChild(img)

    }
}
