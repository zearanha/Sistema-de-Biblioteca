// Função para mostrar a seção especificada e esconder as outras
function showSection(sectionId) {
    // Remove a classe 'active' de todas as seções
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    // Adiciona a classe 'active' apenas à seção selecionada
    document.getElementById(sectionId).classList.add('active');
}
