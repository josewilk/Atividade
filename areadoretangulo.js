var prompt = require('prompt-sync')()

var base = Number(prompt('Digite a base do retângulo: '))
var altura = Number(prompt('Digite a altura do retângulo: '))
var area = base*altura

console.log('Resultado: ' + `${area}`)