var prompt = require('prompt-sync')()

var salariobruto = Number(prompt("Digite o valor do seu salário bruto: "))

if (salariobruto <= 1556.94){
  console.log(`Seu salário é de: ` + (salariobruto - (salariobruto * 0.08)))
}
if (salariobruto >= 1556.95 && salariobruto <= 2594.92){
  console.log(`Seu salário é de: ` + (salariobruto - (salariobruto * 0.09)))
}
if (salariobruto >= 2594.92 && salariobruto <= 5189.82){
  console.log(`Seu salário é de: ` + (salariobruto - (salariobruto * 0.11)))
}
if (salariobruto >5189.82){
  console.log(`Seu salário é de: ` + (salariobruto - 570.88))
}