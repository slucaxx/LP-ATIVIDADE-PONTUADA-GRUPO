// Seleciona os elementos do HTML que vamos usar
const numeroInput = document.getElementById('numeroinput');
const btnGerar = document.getElementById('btnGerar');
const resultadoTabuada = document.getElementById('resultadotabuada');

// Adiciona o evento de clique no botão
btnGerar.addEventListener('click', gerarTabuadaSubtracao);

// Permite gerar a tabuada também ao apertar a tecla "Enter" no teclado
numeroInput.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        gerarTabuadaSubtracao();
    }
});

function gerarTabuadaSubtracao() {
    // Pega o valor digitado e transforma em número inteiro
    const numero = parseInt(numeroInput.value);

    // Validação: se não for um número válido, avisa o usuário e para a execução
    if (isNaN(numero)) {
        alert('Por favor, digite um número válido!');
        return;
    }

    // Limpa o resultado anterior antes de mostrar o novo
    resultadoTabuada.innerHTML = '';

    /* Lógica da Subtração:
       Para que a tabuada de subtração não tenha resultados negativos,
       o ideal é começar diminuindo o número dele mesmo (ex: 7 - 7 = 0)
       e ir subindo até (ex: 17 - 7 = 10).
    */
    for (let i = 0; i <= 10; i++) {
        // O minuendo (o número que vem primeiro) precisa ser a soma do valor atual + o número escolhido
        const minuendo = i + numero; 
        const resultado = minuendo - numero;

        // Cria um parágrafo para cada linha da tabuada
        const linha = document.createElement('p');
        
        // Define o texto (Exemplo: 7 - 7 = 0)
        linha.textContent = `${minuendo} − ${numero} = ${resultado}`;
        
        // Adiciona a linha dentro da nossa div de resultado
        resultadoTabuada.appendChild(linha);
    }
}