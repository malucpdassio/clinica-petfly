document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("cadastroForm");
    const mensagemErro = document.getElementById("mensagemErro");

    // Função para validar o cadastro
    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const confirmarSenha = document.getElementById("confirmarsenha").value.trim();

        // Verifica se as senhas coincidem
        if (senha !== confirmarSenha) {
            mensagemErro.style.display = "block"; // Exibe a mensagem de erro
            return; // Impede o envio do formulário se as senhas não coincidem
        } else {
            mensagemErro.style.display = "none"; // Oculta a mensagem de erro se as senhas coincidirem
        }

        // Cria um objeto para armazenar os dados do usuário
        const novoUsuario = {
            id: new Date().getTime(), // Gera um ID único com base no timestamp
            nome,
            telefone,
            email,
            senha,
        };

        // Verifica se já existe um usuário cadastrado com o mesmo email
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const emailExistente = usuarios.some(user => user.email === email);

        if (emailExistente) {
            alert("Este email já está cadastrado.");
            return; // Impede o cadastro se o e-mail já existir
        }

        // Adiciona o novo usuário ao array de usuários
        usuarios.push(novoUsuario);

        // Salva o array de usuários no `localStorage`
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Redireciona para a página de login após o cadastro bem-sucedido
        window.location.href = "login.html"; // Substitua o caminho de acordo com sua aplicação
    });
});
