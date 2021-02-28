let amigo = {nome: 'José', 
sexo: 'M',
 peso: 85.4,
engordar(p=0){
    console.log('Engordou')

    //alto referência ao objeto
    this.peso += p
}}

//mostrando valores
console.log(amigo)

//mostrando somente um valor 
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg `)