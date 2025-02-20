//dados do dash board
document.addEventListener("DOMContentLoaded", function () {
    // Verifica se há um usuário logado
    const usuarioLogado = sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));


    if (!usuarioLogado) {
        // Se não houver usuário logado, redireciona para a página de login
        window.location.href = "login.html"; // Caminho da página de login
    } else {
        // Se o usuário estiver logado, mostra as informações do usuário
        const usuario = JSON.parse(usuarioLogado);
        
        // Exibe as informações do usuário no dashboard
        document.getElementById("nomeUsuario").textContent = `Bem-vindo, ${usuario.nome}`;
        document.getElementById("emailUsuario").textContent = `Email: ${usuario.email}`;
        document.getElementById("telefoneUsuario").textContent = `Telefone: ${usuario.telefone}`;
    }
    
});

