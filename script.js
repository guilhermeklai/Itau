fetch(`http://viacep.com.br/ws/01001000/json/ `).then(tratarDados).then(imprimirDados);

const tratarDados = function(resposta){
    return resposta.json();
}

const imprimirDados = function(dados){
    document.querySelector('id ou class utilizado').innerHTML = '';
        for(dado of dados){
        gerarBloqueios(dado);
        }
}

const gerarBloqueios = fuction(dado)
    let conteudo = `<p> ${dado.nomeDoJson}</p>`;
    document.querySelector('id ou classe').innerHTML += conteudo;
    
