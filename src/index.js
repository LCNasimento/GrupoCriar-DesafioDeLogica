const CorridaServico = require('./servicos/CorridaServico');

//Instanciar o serviço que vai processar a corrida
const corridaServico = new CorridaServico();

//Definir os dados corrida
const dadosCorrida = [
    "23:49:08.2770, 38 - F.MASSA, 1, 1:02.852, 44.275",
    "23:49:10.8580, 33 - R.BARRICHELLO, 1, 1:04.352, 43.243",
    "23:49:11.0750, 02 - K.RAIKKONEN, 1, 1:04.108, 43.408",
    "23:49:12.6670, 23 - M.WEBBER, 1, 1:04.414, 43.202",
    "23:49:30.9760, 15 - F.ALONSO, 1, 1:18.456, 35.470",
    "23:50:11.4470, 38 - F.MASSA, 2, 1:03.170, 44.053",
    "23:50:14.8600, 33 - R.BARRICHELLO, 2, 1:04.002, 43.480",
    "23:50:15.0570, 02 - K.RAIKKONEN, 2, 1:03.982, 43.493",
    "23:50:17.4720, 23 - M.WEBBER, 2, 1:04.805, 42.941",
    "23:50:37.9870, 15 - F.ALONSO, 2, 1:07.011, 41.528",
    "23:51:14.2160, 38 - F.MASSA, 3, 1:02.769, 44.334",
    "23:51:18.5760, 33 - R.BARRICHELLO, 3, 1:03.716, 43.675",
    "23:51:19.0440, 02 - K.RAIKKONEN, 3, 1:03.987, 43.490",
    "23:51:21.7590, 23 - M.WEBBER, 3, 1:04.287, 43.287",
    "23:51:46.6910, 15 - F.ALONSO, 3, 1:08.704, 40.504",
    "23:52:01.7960, 11 - S.VETTEL, 1, 3:31.315, 13.169",
    "23:52:17.0030, 38 - F.MASS, 4, 1:02.787, 44.321",
    "23:52:22.5860, 33 - R.BARRICHELLO, 4, 1:04.010, 43.474",
    "23:52:22.1200, 02 - K.RAIKKONEN, 4, 1:03.076, 44.118",
    "23:52:25.9750, 23 - M.WEBBER, 4, 1:04.216, 43.335",
    "23:53:06.7410, 15 - F.ALONSO, 4, 1:20.050, 34.763",
    "23:53:39.6600, 11 - S.VETTEL, 2, 1:37.864, 28.435",
    "23:54:57.7570, 11 - S.VETTEL, 3, 1:18.097, 35.633",
    ];

// Tentar processar os dados da corrida e exibir os resultados
try {
const resultados = corridaServico.processarDadosCorrida(dadosCorrida);
    console.log("Resultados da Corrida:", resultados);
    
const informacoesAdicionais = corridaServico.obterInformacoesAdicionais(dadosCorrida);
    console.log("Informações Adicionais:", informacoesAdicionais);
    
} catch (erro) {
    console.error("Erro ao processar a corrida:", erro);
}