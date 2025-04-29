function searchCTE() {
    const input = document.getElementById('search').value.toLowerCase();
    const table = document.getElementById('cteTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) { // Começa em 1 para ignorar o cabeçalho
        const cells = rows[i].getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().includes(input)) {
                found = true;
                break;
            }
        }

        rows[i].style.display = found ? '' : 'none'; // Exibe ou oculta a linha
    }
}