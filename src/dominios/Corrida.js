//Definindo a classe Corrida para armazenar as informações de cada piloto
class Corrida{
    constructor(codigoPiloto, nomePiloto) {
        //Inicializar o piloto com um código e nome
        this.codigoPiloto = codigoPiloto;
        this.nomePiloto = nomePiloto;
        this.voltas = []; 
    }

    //Adicionar uma nova volta para o piloto
    adicionarVolta(numeroVolta, tempoVolta, velocidadeMedia) {
        this.voltas.push({ numeroVolta, tempoVolta, velocidadeMedia});
    }

    //Retornar o número total de voltas completadas
    obterTotalVoltas(){
        return this.voltas.length;
    }

    //Calcular o tempo total gasto pelo piloto
    obterTempoTotal(){
        return this.voltas.reduce((total, volta) => total + volta.tempoVolta, 0);
    }

    //Encontrar a melhor volta do piloto (a mais rápida)
    obterMelhorVolta(){
        return this.voltas.reduce((melhorVolta, volta) => !melhorVolta || volta.tempoVolta < melhorVolta.tempoVolta ? volta : melhorVolta, null);
    }

    //Calcular a velocidade média total do piloto
    obterVelocidadeMedia() {
        const totalVelocidade = this.voltas.reduce((total, volta) => total + volta.velocidadeMedia, 0);
        return totalVelocidade / this.voltas.length;
    }
}

//Exportar a classe para ser usada em outros módulos
module.exports = Corrida; 