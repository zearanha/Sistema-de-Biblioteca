// Array para armazenar os dados dos livros
let books = [];

// Função para renderizar (exibir) a lista de livros na página
function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Limpa a lista antes de renderizar os livros
    books.forEach((book, index) => {
        // Adiciona cada livro na lista com um botão para deletar
        bookList.innerHTML += `<p>${book.titulo} - ${book.autor} <button onclick="deleteBook(${index})">Deletar</button></p>`;
    });
}

// Função para adicionar um novo livro
function addBook() {
    // Solicita os dados do livro (título e autor) ao usuário
    const titulo = prompt("Título do livro:");
    const autor = prompt("Autor do livro:");
    // Adiciona o novo livro ao array
    books.push({ titulo, autor });
    // Re-renderiza a lista de livros para mostrar o novo livro
    renderBooks();
}

// Função para deletar um livro a partir do índice
function deleteBook(index) {
    // Remove o livro do array com base no índice
    books.splice(index, 1);
    // Re-renderiza a lista de livros para refletir a exclusão
    renderBooks();
}

// Adiciona o botão "Adicionar Livro" ao HTML para interagir com a função addBook
document.getElementById('bookForm').innerHTML = '<button onclick="addBook()">Adicionar Livro</button>';
// Renderiza a lista de livros ao carregar a página
renderBooks();
