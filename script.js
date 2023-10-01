
var URLPesquisa = 'https://economia.awesomeapi.com.br/last/'

var ValorDigitado = document.getElementById("ValorAconverter")

function buscarinfor() {

    fetch(retornURL())
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Erro na solicitação');
            }
            return resposta.json();
        })
        .then(dados => {
            GuardaDados(dados)

        })
        .catch(error => {
            console.error('Erro:', error);
        });

}

function ValorSelecte() {
    let MoedaSelecionada = document.getElementById("modeselecionada")
    var Valor = MoedaSelecionada.value

    return Valor
}



function retornURL() {
    let pesquisarmoeda = URLPesquisa + ValorSelecte() + "-BRL"
    return pesquisarmoeda
}


function GuardaDados(dados) {

    let ValorInformado = ValorDigitado.value 

    let sigla = ValorSelecte() + "BRL"
    let ValorMoeda = (dados[sigla]["bid"]) * ValorInformado
    let Variacao = (dados[sigla]["varBid"])
    let VendaMoeda = (dados[sigla]["ask"])
    let CotacaoAtual = (dados[sigla]["bid"])
    let AtualizacaoInformacao = (dados[sigla]["create_date"])

    // var titulo = dados.EURBRL.bid
    // var container = document.getElementById("lista")
    // container.innerHTML = titulo

    var ValorConvertido = document.getElementById("ValorConvertido")
    var Variacaomoeda = document.getElementById("Variacao")
    var CotacaoMoeda = document.getElementById("cotacaoatual")
    var ValorDeVenda = document.getElementById("valordeVenda")
    var AtualizacaoInfo = document.getElementById("Atualizacao")
    ValorConvertido.innerHTML = ValorMoeda
    Variacaomoeda.innerHTML = Variacao
    CotacaoMoeda.innerHTML = CotacaoAtual
    ValorDeVenda.innerHTML = VendaMoeda
    AtualizacaoInfo.innerHTML = AtualizacaoInformacao
}


