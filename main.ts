export {}

enum Estados {
    RJ,
    SP
}

interface Pessoa {
    Nome: string,
    CPF: number
}

function findTextoEstado(estado: Estados): string {
    switch (estado) {
        case Estados.RJ:
            return "Rio de Janeiro"
        case Estados.RJ:
            return "São Paulo"
        default:
            "Estado não encontrado!"
            break;
    }
}

console.log(findTextoEstado(Estados.RJ));