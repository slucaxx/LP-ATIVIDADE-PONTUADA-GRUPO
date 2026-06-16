// Aguarda a página carregar completamente antes de ativar o código
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos do HTML
    const numeroInput = document.getElementById('numeroinput');
    const btnGerar = document.getElementById('btnGerar');
    const resultadoTabuada = document.getElementById('resultadotabuada');

    // Verifica se os elementos realmente existem na tela (ajuda a não dar erro no console)
    if (!btnGerar || !numeroInput || !resultadoTabuada) {
        console.error("Erro: Um ou mais elementos do HTML não foram encontrados pelo script.");
        return;
    }

    // Adiciona o evento de clique no botão
    btnGerar.addEventListener('click', () => {
        // Pega o valor e limpa espaços em branco
        const valorInput = numeroInput.value.trim();

        // Validação: se o campo estiver vazio, avisa o usuário
        if (valorInput === '') {
            resultadoTabuada.innerHTML = '<p class="erro">Por favor, digite um número!</p>';
            return;
        }

        // Converte o valor validado para número real
        const numero = Number(valorInput);
        
        // Começa a montar o texto da tabuada
        let conteudo = `<h2>Tabuada do ${numero}</h2>`;
        
        // Loop de soma de 1 a 10
        for (let i = 1; i <= 10; i++) {
            let soma = numero + i;
            conteudo += `<p>${numero} + ${i} = <strong>${soma}</strong></p>`;
        }

        // Insere a tabuada na div e força ela a aparecer
        resultadoTabuada.innerHTML = conteudo;
    });
});