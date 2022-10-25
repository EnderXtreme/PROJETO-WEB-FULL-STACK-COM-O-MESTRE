let data = new Date()
let atual = data.getFullYear()
let nome=[Fabio, Jessica]
let ano = [2000,2002]

idade = ano.map(ano=>{
    return atual-ano
})

console.log(nome);
console.log(idade);