document.getElementById('btnGerar').addEventListener('click', function() {
    const numeroInput = document.getElementById('numeroinput').value;
    const resultadoDiv = document.getElementById('resultadoTabuada');
    
    // Limpa o resultado anterior
    resultadoDiv.innerHTML = '';

    // Validação básica
    if (numeroInput === '') {
        alert('Por favor, digite um número válido!');
        return;
    }

    const numero = parseFloat(numeroInput);

    // Gera a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        // Cria um elemento div para cada linha
        const linha = document.createElement('div');
        linha.className = 'item-tabuada';
        
        // Calcula a divisão (toFixed(2) limita a 2 casas decimais)
        const calculo = (numero / i).toFixed(2);
        
        // Define o texto dentro da linha
        linha.textContent = `${numero} ÷ ${i} = ${calculo}`;
        
        // Adiciona a linha ao container de resultados
        resultadoDiv.appendChild(linha);
    }
});