function getCotacao() {

    var moedaSelect = document.getElementById("moeda");

    var moedaSelecionada = moedaSelect.value;


    fetch(`https://api.exchangerate-api.com/v4/latest/${moedaSelecionada}`)
        .then(response => response.json())
        .then(data => {

            var cotação = data.rates.USD;

            document.getElementById("resultado").innerText = `1 ${moedaSelecionada} = ${cotação} USD`;
        })
        .catch(error => {

            console.error('Erro ao obter cotação:', error);
            document.getElementById("resultado").innerText = "Erro ao obter cotação. Por favor, tente novamente mais tarde.";
        });
}
