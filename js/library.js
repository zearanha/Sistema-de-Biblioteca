// Array que representa os usuários cadastrados
let users = [];

// Função para adicionar um novo usuário
function addUser(username) {
    if (users.length < librarySystem.maxUsers) { // Verifica se ainda há espaço para novos usuários
        users.push(username);
        alert(`Usuário ${username} adicionado com sucesso.`);
    } else {
        alert("Limite máximo de usuários atingido.");
    }
    renderLibraryInfo(); // Atualiza a exibição de informações na página
}

// Função para atualizar a quantidade de usuários mostrada na página
function updateUserCount() {
    const userCountElement = document.getElementById('userCount');
    userCountElement.innerHTML = `<p>Total de Usuários: ${users.length}</p>`;
}

// Atualização da função renderLibraryInfo para incluir contagem de usuários
function renderLibraryInfo() {
    const libraryInfo = document.getElementById('libraryInfo');
    libraryInfo.innerHTML = `
        <p>Quantidade Máxima de Usuários: ${librarySystem.maxUsers}</p>
        <p>Quantidade de Livros Emprestados: ${librarySystem.loanedBooks}</p>
        <p>Total de Usuários Cadastrados: ${users.length}</p>
    `;

    const libraryConfig = document.getElementById('libraryConfig');
    libraryConfig.innerHTML = `
        <label for="maxUsersInput">Definir Quantidade Máxima de Usuários:</label>
        <input type="number" id="maxUsersInput" value="${librarySystem.maxUsers}" min="1">
        <button onclick="updateMaxUsers()">Atualizar</button>
    `;
}

// Função para remover um usuário (opcional)
function removeUser(username) {
    const index = users.indexOf(username);
    if (index !== -1) {
        users.splice(index, 1);
        alert(`Usuário ${username} removido.`);
        renderLibraryInfo(); // Atualiza as informações
    } else {
        alert("Usuário não encontrado.");
    }
}

// Chamadas iniciais para renderizar as informações ao carregar a página
renderLibraryInfo();
