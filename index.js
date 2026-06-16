// Seleciona os elementos do HTML
const numeroInput = document.getElementById('numeroinput');
const btnGerar = document.getElementById('btnGerar');
const resultadoTabuada = document.getElementById('resultadotabuada');

// Adiciona o evento de clique no botão
btnGerar.addEventListener('click', () => {
    // Converte o valor digitado para número
    const numero = Number(numeroInput.value);

    // Limpa o resultado anterior
    resultadoTabuada.innerHTML = '';

    // Validação básica: verifica se o campo não está vazio
    if (numeroInput.value === '') {
        resultadoTabuada.innerHTML = '<p class="erro">Por favor, digite um número válido!</p>';
        return;
    }

    // Cria a estrutura da tabuada
    let conteudo = `<h2>Tabuada do ${numero}</h2>`;
    
    // Loop de 1 a 10 para somar
    for (let i = 1; i <= 10; i++) {
        let soma = numero + i;
        conteudo += `<p>${numero} + ${i} = <strong>${soma}</strong></p>`;
    }

    // Insere o resultado na tela
    resultadoTabuada.innerHTML = conteudo;
});