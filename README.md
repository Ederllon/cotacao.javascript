# cotacao.javascript
Um programa web onde contém opções de cotação para dólar(USD), onde consiste em um select no html com option com value com o valor de singlas das moedas e um botão com uma function para pegar os dados, no script iniciar a function com uma variável com o valor do select da opções e em seguida fazer um fetch com crase com a url https://api.exchangerate-api.com/v4/latest/ com a var do valor no final, adicionar o then com uma function de callback  response  com a transformação do response em json, outro then com a function de callback data com uma variável com a cotação da api: "data.rates.USD", fazer um getElemenById de um local de saída com innerHTML e usar a variável de cotação na saida indicando que é o dólar do valor da moeda selecionada.


