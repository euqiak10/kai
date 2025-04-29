document.getElementById('cteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos do formulário
    const numeroCte = document.getElementById('numero_cte').value;
    const numeroNota = document.getElementById('numero_nota').value;
    const nomeEmpresa = document.getElementById('nome_empresa').value;
    const valor = document.getElementById('valor').value;
    const status = document.getElementById('status').value;
    const acaoRealizada = document.getElementById('acao_realizada').value;
    const dataAcao = document.getElementById('data_acao').value;
    const proximaAcao = document.getElementById('proxima_acao').value;
    const dataProximaAcao = document.getElementById('data_proxima_acao').value;

    // Cria uma nova linha na tabela
    const table = document.getElementById('cteTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Adiciona as células à nova linha
    newRow.insertCell(0).textContent = numeroCte;
    newRow.insertCell(1).textContent = numeroNota;
    newRow.insertCell(2).textContent = nomeEmpresa;
    newRow.insertCell(3).textContent = valor;
    newRow.insertCell(4).textContent = status;
    newRow.insertCell(5).textContent = acaoRealizada;
    newRow.insertCell(6).textContent = dataAcao;
    newRow.insertCell(7).textContent = proximaAcao;
    newRow.insertCell(8).textContent = dataProximaAcao;

    // Limpa os campos do formulário
    document.getElementById('cteForm').reset();
});