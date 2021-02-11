/* Condições MULTIPLAS
SWITCH(EXPRESSÃO)
*/

var agora =  new Date()
var diaSem = agora.getDay() 

/**
 Domingo - 0
 segunda - 1
 terça - 2
 quarta - 3
 quinta - 4
 sexta - 5
 sabado - 6
 */

 /** USO DO SWITCH
  * 
  * BREAK - Uso obrigatório para cada linha do SWITCH
  * DEFAULT - Origatório para uma mensagem quando os valores inserios não atender ao critério.
  */
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
        
        case 1:
            console.log('Segunda')
            break

            case 2:
                console.log('Terça')
                break

                case 3:
                    console.log('Quarta')
                    break

                    case 4:
                        console.log('Quinta')
                        break

                        case 5:
                            console.log('Sexta')
                            break

                            case 6:
                                console.log('Sábado')
                                break
                                
                                default:
                                    console.log('Dia inválido') /** Caso não atenda os critérios acima */                               
}