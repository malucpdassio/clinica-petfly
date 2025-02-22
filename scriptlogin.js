//Armazenamento das informações de login
document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("loginForm"); // Formulário de login
    const mensagemErro = document.getElementById("mensagemErro");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const email = document.getElementById("usuario").value.trim().toLowerCase(); // Normaliza o email
        const senha = document.getElementById("senha").value.trim();

        // Verifica se os campos de email e senha foram preenchidos
        if (!email || !senha) {
            alert("Por favor, preencha ambos os campos.");
            return;
        }

        // Recupera os usuários do localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Verifica se o usuário existe e se a senha está correta
        const usuarioEncontrado = usuarios.find(user => user.email.toLowerCase() === email && user.senha === senha);

        if (usuarioEncontrado) {
            // Armazena no sessionStorage que o usuário está logado
            sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

            // Redireciona para o dashboard
            window.location.href = "dashboard.html"; // Caminho da página do dashboard
        } else {
            mensagemErro.style.display = "block"; // Exibe a mensagem de erro
            mensagemErro.textContent = "Email ou senha incorretos."; // Mensagem mais clara
        }
    });
    
    // Oculta a mensagem de erro ao começar a digitar novamente
    document.getElementById("usuario").addEventListener("input", () => mensagemErro.style.display = "none");
    document.getElementById("senha").addEventListener("input", () => mensagemErro.style.display = "none");
});
