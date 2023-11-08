function calcularNivel(vitorias,derrotas ) {
    const saldoVitorias = 101 - 0

    let nivel;

    if (vitorias <10)  {
    nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 30) {
    nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 60) {
    nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 90) {
    nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 100) {
    nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 200) {
    nivel = "Lendário";
    } else {
    nivel = "Imortal";
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está  nivél ${nivel}`;
}

// Exemplo de uso da função:
const vitorias = 101;
const derrotas = 0;

const resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);
