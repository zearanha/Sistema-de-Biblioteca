// Array para armazenar os dados dos empréstimos
let loans = [];

// Função para renderizar (exibir) a lista de empréstimos na página
function renderLoans() {
    const loanList = document.getElementById('loanList');
    loanList.innerHTML = ''; // Limpa a lista antes de renderizar os empréstimos
    loans.forEach((loan, index) => {
        // Adiciona cada empréstimo na lista com um botão para deletar
        loanList.innerHTML += `<p>Empréstimo de ${loan.data_emprestimo} a ${loan.data_devolucao} - Status: ${loan.status_emprestimo} <button onclick="deleteLoan(${index})">Deletar</button></p>`;
    });
    // Atualiza o número de livros emprestados no sistema de biblioteca
    updateLoanedBooks();
}

// Função para adicionar um novo empréstimo
function addLoan() {
    // Solicita os dados do empréstimo (data de empréstimo, data de devolução e status) ao usuário
    const data_emprestimo = prompt("Data de Empréstimo:");
    const data_devolucao = prompt("Data de Devolução:");
    const status_emprestimo = prompt("Status do Empréstimo:");
    // Adiciona o novo empréstimo ao array
    loans.push({ data_emprestimo, data_devolucao, status_emprestimo });
    // Re-renderiza a lista de empréstimos para mostrar o novo empréstimo
    renderLoans();
}

// Função para deletar um empréstimo a partir do índice
function deleteLoan(index) {
    // Remove o empréstimo do array com base no índice
    loans.splice(index, 1);
    // Re-renderiza a lista de empréstimos para refletir a exclusão
    renderLoans();
}

// Adiciona o botão "Adicionar Empréstimo" ao HTML para interagir com a função addLoan
document.getElementById('loanForm').innerHTML = '<button onclick="addLoan()">Adicionar Empréstimo</button>';
// Renderiza a lista de empréstimos ao carregar a página
renderLoans();
