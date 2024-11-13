// Objeto que representa as configurações do sistema de biblioteca
let librarySystem = {
    maxUsers: 50, // Quantidade máxima padrão de usuários
    loanedBooks: 0 // Inicialmente, não há livros emprestados
};

// Função para renderizar as informações e configurações do sistema de biblioteca na página
function renderLibraryInfo() {
    const libraryInfo = document.getElementById('libraryInfo');
    libraryInfo.innerHTML = `
        <p>Quantidade Máxima de Usuários: ${librarySystem.maxUsers}</p>
        <p>Quantidade de Livros Emprestados: ${librarySystem.loanedBooks}</p>
    `;

    // Formulário para ajustar a quantidade máxima de usuários
    const libraryConfig = document.getElementById('libraryConfig');
    libraryConfig.innerHTML = `
        <label for="maxUsersInput">Definir Quantidade Máxima de Usuários:</label>
        <input type="number" id="maxUsersInput" value="${librarySystem.maxUsers}" min="1">
        <button onclick="updateMaxUsers()">Atualizar</button>
    `;
}

// Função para atualizar a quantidade máxima de usuários
function updateMaxUsers() {
    const maxUsersInput = document.getElementById('maxUsersInput').value;
    if (maxUsersInput > 0) {
        librarySystem.maxUsers = parseInt(maxUsersInput);
        alert(`Quantidade máxima de usuários atualizada para: ${librarySystem.maxUsers}`);
        renderLibraryInfo();
    } else {
        alert("Por favor, insira um valor válido para a quantidade máxima de usuários.");
    }
}

// Função para atualizar o número de livros emprestados
function updateLoanedBooks() {
    librarySystem.loanedBooks = loans.length; // Atualiza com base no número atual de empréstimos
    renderLibraryInfo();
}

// Chamadas iniciais para renderizar as informações ao carregar a página
renderLibraryInfo();
