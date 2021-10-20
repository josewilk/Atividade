var prompt = require('prompt-sync')()

var peso = parseFloat(prompt('Peso: '))
var altura = parseFloat(prompt('Altura: '))

var situacao = peso/(altura*altura)

console.log('Situação: ' + `${situacao}`)

if (situacao <= 18.49){
  console.log('Você está abaixo do peso!')
} if (situacao >= 18.5 && situacao <= 24.9){
  console.log('Você está no peso normal!')
} if (situacao >= 25){
  console.log('Você está acima do peso!')
}