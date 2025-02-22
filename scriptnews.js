//Inicio de armazenamento do newsletter
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        if (nome && email) {
            // Criar objeto para armazenar
            const usuario = { nome, email };

            // Recuperar dados já existentes no localStorage
            let listaUsuarios = JSON.parse(localStorage.getItem("newsletter")) || [];

            // Adicionar novo usuário
            listaUsuarios.push(usuario);

            // Salvar no localStorage
            localStorage.setItem("newsletter", JSON.stringify(listaUsuarios));

            // Limpar formulário
            form.reset();
        }
    });
});
