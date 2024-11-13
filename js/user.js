// Array para armazenar os dados dos usuários
let users = [];

// Função para renderizar (exibir) a lista de usuários na página
function renderUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Limpa a lista antes de renderizar os usuários
    users.forEach((user, index) => {
        // Adiciona cada usuário na lista com um botão para deletar
        userList.innerHTML += `<p>${user.nome} (${user.email}) <button onclick="deleteUser(${index})">Deletar</button></p>`;
    });
}

// Função para adicionar um novo usuário
function addUser() {
    // Solicita os dados do usuário (nome e e-mail) ao usuário
    const nome = prompt("Nome do usuário:");
    const email = prompt("E-mail do usuário:");
    // Adiciona o novo usuário ao array
    users.push({ nome, email });
    // Re-renderiza a lista de usuários para mostrar o novo usuário
    renderUsers();
}

// Função para deletar um usuário a partir do índice
function deleteUser(index) {
    // Remove o usuário do array com base no índice
    users.splice(index, 1);
    // Re-renderiza a lista de usuários para refletir a exclusão
    renderUsers();
}

// Adiciona o botão "Adicionar Usuário" ao HTML para interagir com a função addUser
document.getElementById('userForm').innerHTML = '<button onclick="addUser()">Adicionar Usuário</button>';
// Renderiza a lista de usuários ao carregar a página
renderUsers();
