<h1> Desafio de Lógica de Programação - Corrida de Pilotos</h1>

<h2> Descrição</h2>

<p>Este projeto consiste em uma aplicação que processa os dados de uma corrida de pilotos e gera informações tabulares, <br>
  como a posição de chegada, código do piloto, nome do piloto, quantidade de voltas completadas e o tempo total de prova. <br>
  Adicionalmente, o código identifica a melhor volta de cada piloto, a melhor volta geral da corrida, a velocidade média <br>
  de cada piloto, e o tempo de chegada após o vencedor. Todo o desenvoldimento deste código foi feito em Javascript.</p>

<h2> Estrutura do Projeto</h2> 

<p>O projeto é organizado seguindo as boas práticas de <b>Clean Code</b>:</p>

- <b>Imutabilidade</b>: As variáveis e objetos são mantidos imutáveis sempre que possível.
- <b>Tratamento de Erros</b>: O código faz verificações de erros e lança exceções quando necessário.
- <b>Separação de Responsabilidades</b>: O código é dividido em domínios, serviços e utilitários para facilitar a manutenção e a compreensão.
- <b>Qualidade do Código</b>: Comentários são adicionados para clareza, e funções são organizadas de maneira modular.

<h3> Estrutura de Pastas</h3>

  - <b>src/</b>: Contém o código-fonte do projeto.
  - <b>dados/</b>: Contém os arquivos CSV que armazenam os dados da corrida.
  - <b>servicos/</b>: Implementa a lógica de negócios para processar a corrida.
  - <b>utils/</b>: Funções utilitárias, como formatação de tempo.
  - <b>index.js</b>: Ponto de entrada da aplicação.

<h2> Como Executar o Projeto</h2>

<h3> Pré-requisitos </h3>

- <b>Node.js</b> (versão 14.x ou superior)

<h3> Passos para Execução </h3>

1. <b>Clone o Repositório</b>
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
2. <b>Instale as Dependências</b>
    ```bash
    npm install
3.  <b>Execute a Aplicação</b>
  - Para processar os dados da corrida e gerar a saída esperada, execute o seguinte comando:
    ```bash
    node src/index.js
<h2>Licença</h2>
<p>Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.</p>




