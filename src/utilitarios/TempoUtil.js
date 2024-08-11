class TempoUtil {
    // Formatar o tempo em milissegundos para uma string no formato "minutos:segundos.milissegundos"
    static formatarTempo(tempoEmMillis) {
      const minutos = Math.floor(tempoEmMillis / 60000);
      const segundos = Math.floor((tempoEmMillis % 60000) / 1000);
      const milissegundos = tempoEmMillis % 1000;
      return `${minutos}:${segundos}.${milissegundos}`;
    }
  }
  
  // Exporta a classe para ser usada em outros módulos
  module.exports = TempoUtil; 