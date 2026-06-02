function toggleFaq(botao) {
    // Verifica se a pergunta já está aberta
    const estaAberto = botao.getAttribute('aria-expanded') === 'true';
    
    // Pega a resposta logo abaixo do botão
    const resposta = botao.nextElementSibling;
    
    // Inverte o estado do botão para o leitor de tela
    botao.setAttribute('aria-expanded', !estaAberto);
    
    if (!estaAberto) {
        // Abre a resposta
        resposta.style.maxHeight = resposta.scrollHeight + "px";
        resposta.style.padding = "15px";
        resposta.setAttribute('aria-hidden', 'false');
    } else {
        // Fecha a resposta
        resposta.style.maxHeight = null;
        resposta.style.padding = "0 15px";
        resposta.setAttribute('aria-hidden', 'true');
    }
}
