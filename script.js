// Variáveis para guardar a pontuação dos times
let pontosVermelho = 0;
let pontosAzul = 0;

// Função para alterar a pontuação (+1 ou -1)
function alterarPontos(time, valor) {
    if (time === 'vermelho') {
        pontosVermelho += valor;
        if (pontosVermelho < 0) pontosVermelho = 0; // Impede pontuação negativa
        document.getElementById('pontos-vermelho').innerText = pontosVermelho;
    } else if (time === 'azul') {
        pontosAzul += valor;
        if (pontosAzul < 0) pontosAzul = 0;
        document.getElementById('pontos-azul').innerText = pontosAzul;
    }
}

// Função para zerar o placar
function reiniciarPlacar() {
    pontosVermelho = 0;
    pontosAzul = 0;
    document.getElementById('pontos-vermelho').innerText = 0;
    document.getElementById('pontos-azul').innerText = 0;
}
