// Defina uma função para obter a cotação da moeda selecionada
function getCotacao() {
    // Recupere o elemento select
    var moedaSelect = document.getElementById("moeda");
    // Obtenha o valor selecionado
    var moedaSelecionada = moedaSelect.value;

    // Faça uma requisição à API para obter a cotação da moeda
    fetch(`https://api.exchangerate-api.com/v4/latest/${moedaSelecionada}`)
        .then(response => response.json())
        .then(data => {
            // Acesse a cotação da moeda em relação ao dólar (padrão da API)
            var cotação = data.rates.USD;
            // Exiba o resultado na página
            document.getElementById("resultado").innerText = `1 ${moedaSelecionada} = ${cotação} USD`;
        })
        .catch(error => {
            // Em caso de erro, exiba uma mensagem
            console.error('Erro ao obter cotação:', error);
            document.getElementById("resultado").innerText = "Erro ao obter cotação. Por favor, tente novamente mais tarde.";
        });
}
