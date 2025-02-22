
const form = document.querySelector('form');
const cadastrarBtn = document.querySelector('.botao__cadastro');

cadastrarBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const dadosUsuario = {
        petNome: document.getElementById('pet_nome').value,
        rua: document.getElementById('rua').value,
        complemento: document.getElementById('complemento').value,
        cidade: document.getElementById('cidade').value,
        cep: document.getElementById('cep').value,
        estado: document.getElementById('estado').value,
    };

    // Recupera os dados já salvos ou cria um array vazio
    const usuariosSalvos = JSON.parse(sessionStorage.getItem('usuariosDados')) || [];

    // Adiciona o novo usuário à lista
    usuariosSalvos.push(dadosUsuario);

    // Salva novamente no sessionStorage
    sessionStorage.setItem('usuariosDados', JSON.stringify(usuariosSalvos));

    // Redireciona para o dashboard
    window.location.href = 'dashboard.html';
});

