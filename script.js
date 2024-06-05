
Passo 1: Escolha da API
Primeiro, você precisa escolher uma API gratuita de cotação de moedas. Uma opção popular
 é a API do ExchangeRatesAPI.io, que fornece taxas de câmbio em tempo real.

Passo 2: Configuração do Projeto
Crie uma pasta para o seu projeto e dentro dela, crie um arquivo HTML, um arquivo
 JavaScript e, opcionalmente, um arquivo CSS para estilizar a interface.

Passo 3: Estrutura HTML
No arquivo HTML, você pode criar a estrutura básica da página, incluindo os elementos
 necessários para exibir as informações de cotação de moedas. Por exemplo:

html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cotação de Moedas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Cotação de Moedas</h1>
    <div id="exchange-rates"></div>

    <script src="script.js"></script>
</body>
</html>
Passo 4: Requisição da API
No arquivo JavaScript, você pode fazer uma requisição à API para obter as taxas de câmbio
 desejadas. Utilize a função fetch() para isso. Por exemplo:

javascript

const apiUrl = 'https://api.exchangeratesapi.io/latest';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Manipule os dados da resposta aqui
        console.log(data);
    })
    .catch(error => {
        console.error('Erro ao obter taxas de câmbio:', error);
    });
Passo 5: Manipulação dos Dados
Dentro do segundo then() da função fetch(), você pode manipular os dados recebidos da 
API e exibi-los na página. Por exemplo, você pode mostrar as taxas de câmbio em uma lista:

javascript

.then(data => {
    const rates = data.rates;
    const exchangeRatesElement = document.getElementById('exchange-rates');
    exchangeRatesElement.innerHTML = '<h2>Taxas de Câmbio:</h2>';
    const ul = document.createElement('ul');
    for (const currency in rates) {
        const li = document.createElement('li');
        li.textContent = `${currency}: ${rates[currency]}`;
        ul.appendChild(li);
    }
    exchangeRatesElement.appendChild(ul);
})

Passo 6: Estilização (Opcional)

Se desejar, você pode estilizar a página utilizando CSS para melhorar a aparência do
aplicativo.

Passo 7: Teste e Ajustes
Teste o aplicativo para garantir que ele esteja funcionando corretamente. Faça ajustes
 conforme necessário.

Com esses passos, você terá criado um aplicativo simples de cotação de moedas em
 JavaScript utilizando uma API gratuita. Você pode expandir esse aplicativo adicionando
  recursos adicionais, como conversão de valores entre moedas, gráficos de histórico de
   taxas de câmbio, etc.
