const apiUrl = 'http://134.209.3.120:8080';

const enviar = function(){
    let valor = document.querySelector("#operacao").value;
    
    if(valor == '1'){
        enviarBloqueio();
    }
    if(valor == '2'){
        enviarDesbloqueio();
    }
    if(valor == '3'){
        enviarTransferencia(); 
    }

}

//bloqueio
const enviarBloqueio = function(){
    fetch(apiUrl + `/bloqueio`,
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: buscarDados()
    }).then(tratarDados).then(imprimirDados);
}

const buscarDados = function(){
    let dados = {
        numeroOrdem: document.querySelector("#ordemNumero").value,
        cpfReu: document.querySelector("#cpf").value,
        valorSolicitado: document.querySelector("#valor").value
    }

    return JSON.stringify(dados);
}

const tratarDados = function(resposta){
    return resposta.json();
}

const imprimirDados = function(dados){
    let divConteudo = document.querySelector('#conteudo');
    divConteudo.innerHTML = '';

    for(produto of dados.produtosLista){
        let bloco = `<div class="produto">
            <p>Codigo: ${produto.codigoProduto}</p>
            <p>Nome: ${produto.nomeProduto}</p>
            <p>Saldo: ${produto.saldoProduto}</p>
            <p>Valor Bloqueado: ${produto.valorBloqueado}</p>
        </div>`;

        divConteudo.innerHTML += bloco;
    }
}

document.querySelector('.operation button').onclick = enviar;

//desbloqueio
const enviarDesbloqueio = function(){
    fetch(apiUrl + `/desbloqueio`,
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: buscarDados()

    }).then(JSON.parse(tratarDados)).then(exibirMensagemDesbloqueio(tratarDados));
}

const exibirMensagemDesbloqueio = function(dados){
    let divConteudo = document.querySelector('#conteudo');
    divConteudo.innerHTML = '<p>Desbloqueio Efetivado</p>';
}
//transferencia
const enviarTransferencia = function(){
    fetch(apiUrl + `/transferencia`,
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: buscarDados()
    }).then(tratarDados).then(exibirMensagemTransferencia);
}

const exibirMensagemTransferencia = function(dados){

    console.log("Cheguei no exibir mensagem");
    let divConteudo = document.querySelector('#conteudo');
    divConteudo.text = '<p>Transferencia Realizada com Sucesso</p>';
    
}