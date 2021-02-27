// Gerando uma variável compostao (VETOR)
let num = [9,5,7,8]

// Lendo os valores de um VETOR 
console.log(`Nosso vetor é o ${num}`)

// Adicionando uma vvalor a um vetor sem perder os dados ja inclusos no vetor 
// Primeira FORMA
//num[3] = 6

//SEGUNDA FORMA
num.push(9)

console.log(num)

//Pegando numeros de elementos em um ARRAY
num.length

//Ordena elementos em um ARRAY
num.sort()

console.log(num)

//Mostramento elemento em determinada posição
console.log(`o primeiro valor do vetor é ${num[0]}`)

/**
 * na sequencia
 * ACICIONA O UM INDICE E INCLUI O NUMERO 1
 * ORDENA EM ORDEM OS ELEMENTOS DO VERTOR 
 * MOSTRA MENSAGEM COM A NOVRA ORDENAÇÃO DO VETOR JA INCLUINDO O NÚMERO 1
 */
num.push(1)
num.sort()
console.log(`Valores ordenados do vetor ${num}`)

//Mostrando os elementos do vetor usando laço.
//Primeira forma 
for (let i = 0; i < num.length; i++) {
   num.sort()
   console.log(`A posição ${i} tem o valor ${num[i]}`)
    
}

//Usando o for para listar os valores de u m ARRAY 
//Segundaforma (para cada posição na  varíavel)
for (var i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
    
}


//Buscando valore em um vetor 
let posicao = num.indexOf(1)
console.log(`O valor 0 esta na posição ${posicao}`)

//Verificando se existe o valor dentro do ARRAY


let pos = num.indexOf(8)

if(pos== -1){
    console.log("Valor não encontrado")

}else{
    console.log(`o valor 1 esta na posição ${pos}`)
}