
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

//Vetor para analizar os dados 
let valores = []


function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
            return true 
    }else{
           return false
    }
}

function inlista(n,l){
        if(l.indexOf(Number(n)) != -1){
            return true 
        }else{
            return false
        }
}

function adicionar(){
    //testa se é um número, ou se ja existe na lista
    if(isNumero(num.value) && !inlista(num.value,valores)) {
        
        valores.push(Number(num.value))
       
        //criando o objeto select
        let item = document.createElement('option')

        //adicionando numero na lista
        item.text = `Valor ${num.value} adiconado`

        //mostrando o intem na lista 
        lista.appendChild(item)

        //Limpa o resultado do botão finalizar "res"
        res.innerHTML = ''

        }else{
            window.alert('Valor inválido ou já encontrado na lista')
        }
        num.value = ''
        num.focus

    }

    //Mensagens mostradas como retorno ao clicar me finalizar 
    function finalizar(){
            if(valores.length == 0){
            alert('Adicione valores antes de finalizar')
            } else{
                let total = valores.length
                let maior = valores[0]
                let menor = valores[0]
                let soma = 0
                let media = 0

                for(let pos in valores)
                {
                    //soma
                    soma += valores[pos]                  
                    //maior
                    if (valores[pos] > maior)
                    maior = valores[pos]
                    //menor    
                    if(valores[pos] < menor)
                    menor = valores[pos]
                }
                media  = soma/total
         
                res.innerHTML = ''
                res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
                res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
                res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
                res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
                res.innerHTML += `<p>A média dos valores digitados é  ${media}</p>`

        }
    }