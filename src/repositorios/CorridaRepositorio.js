const Corrida = require('../dominios/Corrida');

class CorridaRepositorio {
  // Carrega e organiza os dados da corrida em objetos Corrida
  carregarDadosCorrida(dados) {
    const corridaMap = new Map();

    dados.forEach(linha => {
      const { codigoPiloto, nomePiloto, numeroVolta, tempoVolta, velocidadeMedia } = this.analisarLinha(linha);
      if (!corridaMap.has(codigoPiloto)) {
        corridaMap.set(codigoPiloto, new Corrida(codigoPiloto, nomePiloto));
      }
      corridaMap.get(codigoPiloto).adicionarVolta(numeroVolta, tempoVolta, velocidadeMedia);
    });

    return Array.from(corridaMap.values());
  }

  // Analisa uma linha de dados e extrai as informações necessárias
  analisarLinha(linha) {
    const [hora, infoPiloto, numeroVolta, tempoVolta, velocidadeMedia] = linha.split(',').map(s => s.trim());
    const [codigoPiloto, nomePiloto] = infoPiloto.split(' - ');

    return {
      codigoPiloto,
      nomePiloto,
      numeroVolta: parseInt(numeroVolta, 10),
      tempoVolta: this.analisarTempo(tempoVolta),
      velocidadeMedia: parseFloat(velocidadeMedia)
    };
  }

  // Converte o tempo da volta de string para milissegundos
  analisarTempo(tempoString) {
    const [minutos, segundos, milissegundos] = tempoString.split(/[:.]/);
    return parseInt(minutos) * 60000 + parseInt(segundos) * 1000 + parseInt(milissegundos);
  }
}

// Exporta a classe para ser usada em outros módulos
module.exports = CorridaRepositorio; 
