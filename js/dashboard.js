//dados do dash board
// Espera o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {

    // Recupera os dados do usuário logado do sessionStorage
    const usuarioLogado = sessionStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
        console.warn("Nenhum usuário logado encontrado. Redirecionando para login...");
        window.location.href = "login.html";
    } else {
        // Converte os dados armazenados de volta para um objeto
        const usuario = JSON.parse(usuarioLogado);
       

        // Seleciona os elementos do HTML
        const nomeEl = document.getElementById("usuariosNome");
        const emailEl = document.getElementById("usuariosEmail");
        const telefoneEl = document.getElementById("usuariosTelefone");

        // Preenche os elementos HTML com os dados do usuário
        if (nomeEl) nomeEl.textContent = usuario.nome || "Nome não disponível";
        if (emailEl) emailEl.textContent = usuario.email || "Email não disponível";
        if (telefoneEl) telefoneEl.textContent = usuario.telefone || "Telefone não disponível";
    }

    // Adiciona funcionalidade ao botão de logout
    document.getElementById("logoutBtn").addEventListener("click", function () {
        sessionStorage.clear(); // Remove os dados do usuário logado
        window.location.href = "login.html"; // Redireciona para a página de login
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const petsLista = document.getElementById('petsLista');

    // Recupera os dados do sessionStorage
    let usuariosSalvos = JSON.parse(sessionStorage.getItem('usuariosDados')) || [];

    // Função para salvar os dados no sessionStorage
    function salvarDados() {
        sessionStorage.setItem('usuariosDados', JSON.stringify(usuariosSalvos));
        renderizarLista();
    }

    // Função para renderizar a lista de pets
    function renderizarLista() {
        petsLista.innerHTML = ''; // Limpa a lista antes de renderizar

        usuariosSalvos.forEach((usuario, index) => {
            const li = document.createElement('li');

            // Exibir os dados do pet com botões de editar e excluir
            li.innerHTML = `
                <strong>Pet ${index + 1}</strong><br>
                <strong>Nome:</strong> <span id="petNome-${index}">${usuario.petNome}</span><br>
                <strong>Rua:</strong> <span id="rua-${index}">${usuario.rua}</span><br>
                <strong>Complemento:</strong> <span id="complemento-${index}">${usuario.complemento}</span><br>
                <strong>Cidade:</strong> <span id="cidade-${index}">${usuario.cidade}</span><br>
                <strong>CEP:</strong> <span id="cep-${index}">${usuario.cep}</span><br>
                <strong>Estado:</strong> <span id="estado-${index}">${usuario.estado}</span><br>
                <button onclick="editarPet(${index})"><img src="../imagem/botao2.png" alt="Editar" width="16"> Editar</button>
                <button onclick="deletarPet(${index})"><img src="../imagem/botao3.png" alt="Editar" width="16"> Excluir</button>
                <hr>
            `;

            petsLista.appendChild(li);
        });
    }

    // Função para editar um pet
    window.editarPet = (index) => {
        const novoNome = prompt("Digite o novo nome do pet:", usuariosSalvos[index].petNome);
        const novaRua = prompt("Digite a nova rua:", usuariosSalvos[index].rua);
        const novoComplemento = prompt("Digite o novo complemento:", usuariosSalvos[index].complemento);
        const novaCidade = prompt("Digite a nova cidade:", usuariosSalvos[index].cidade);
        const novoCep = prompt("Digite o novo CEP:", usuariosSalvos[index].cep);
        const novoEstado = prompt("Digite o novo estado:", usuariosSalvos[index].estado);

        // Se o usuário não cancelar, atualizamos os dados
        if (novoNome && novaRua && novaCidade && novoCep && novoEstado) {
            usuariosSalvos[index] = {
                petNome: novoNome,
                rua: novaRua,
                complemento: novoComplemento,
                cidade: novaCidade,
                cep: novoCep,
                estado: novoEstado,
            };
            salvarDados();
        }
    };

    // Função para deletar um pet
    window.deletarPet = (index) => {
        if (confirm(`Tem certeza que deseja excluir o pet "${usuariosSalvos[index].petNome}"?`)) {
            usuariosSalvos.splice(index, 1);
            salvarDados();
        }
    };

    // Renderiza a lista inicial ao carregar a página
    renderizarLista();
});
