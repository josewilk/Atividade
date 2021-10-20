var prompt = require('prompt-sync')()

var nota1 = Number(prompt('Nota 1: '))
var nota2 = Number(prompt('Nota 2: '))
var nota3 = Number(prompt('Nota 3: '))
var nota4 = Number(prompt('Nota 4: '))

var media = (nota1 + nota2 + nota3 + nota4) /4

console.log('Média: ' + `${media}`)

if (media >= 6){
  console.log('Você está APROVADO!')
} else {
  console.log('Você está REPROVADO!')
}