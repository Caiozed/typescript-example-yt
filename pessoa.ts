interface Pessoa {
    Nome: string,
    CPF: number
}

let pessoa = {
    Nome: "Caio",
    CPF: 99999999
}

let pessoa2 = {
    Nome: "Caio"
}

function cpfValido(pessoa: Pessoa): boolean {
  return pessoa.CPF !== null
}

console.log(cpfValido(pessoa));
//console.log(cpfValido(pessoa2));