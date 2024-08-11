const CorridaRepositorio = require('../repositorios/CorridaRepositorio');
const TempoUtil = require('../utilitarios/TempoUtil');

class CorridaServico {
    constructor() {
        // Instanciar o repositório para carregar os dados da corrida
        this.repositorio = new CorridaRepositorio();
    }

    //Processar os dados da corrida e retorna os resultados ordenados
    processarDadosCorrida(dados) {
        const corridas = this.repositorio.carregarDadosCorrida(dados);

        //Filtra os pilotos que completaram 4 voltas, ordena pelo tempo total e formata os resutados
        const resultados = corridas.filter(corrida => corrida.obterTotalVoltas() >= 4)
            .sort((a, b) => a.obterTempoTotal() - b.obterTempoTotal())
            .map ((corrida, indice) => ({
                posicao: indice +1,
                codigoPiloto: corrida.codigoPiloto,
                nomePiloto: corrida.nomePiloto,
                totalVoltas: corrida.obterTotalVoltas(),
                totalTempo: TempoUtil.formatarTempo(corrida.obterTempoTotal()),
        }));

        return resultados;
    }

    //Gerar informações adicionai sobre a corrida
    obterInformacoesAdicionais (dados) {
        const corridas = this.repositorio.carregarDadosCorrida(dados);

        //Obter a melhor volta de cada piloto
        const melhoresVoltas = corridas.map(corrida => ({
            codigoPiloto: corrida.codigoPiloto,
            nomePiloto: corrida.nomePiloto,
            melhorVolta: TempoUtil.formatarTempo(corrida.obterMelhorVolta().tempoVolta)
        }));

        //Encontrar a melhor volta de toda a corrida
        const melhorVoltaGeral = corridas.reduce((melhorVolta, corrida) => {
            const melhorVoltaCorrida = corrida.obterMelhorVolta();
          
            if (!melhorVolta || melhorVoltaCorrida.tempoVolta < melhorVolta.tempoVolta) {
              return {
                codigoPiloto: corrida.codigoPiloto,
                nomePiloto: corrida.nomePiloto,
                tempoVolta: TempoUtil.formatarTempo(melhorVoltaCorrida.tempoVolta)
              };
            }
          
            return melhorVolta;
          }, null);
        
        //Calcular a velocidade média de cada piloto
        const velocidadesMedias = corridas.map(corrida => ({
            codigoPiloto: corrida.codigoPiloto,
            velocidadeMedia: corrida.obterVelocidadeMedia()
        }));

        //Calcular a diferença de tempo de cada ploto em relação ao vencedor
        const tempoVencedor = corridas[0].obterTempoTotal();
        const diferencasTempo = corridas.map(corrida => ({
            codigoPiloto: corrida.codigoPiloto,
            diferencasTempo: TempoUtil.formatarTempo(corrida.obterTempoTotal() - tempoVencedor)
        }));

        return { melhoresVoltas, melhorVoltaGeral, velocidadesMedias, diferencasTempo};
    }
}

//Exportar a classe para ser usada em outros módulos
module.exports = CorridaServico;