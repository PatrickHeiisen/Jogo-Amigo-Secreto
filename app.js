//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
const amigos = []

// Função para adicionar um nome à lista de amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo")
    const nomeAmigo = inputAmigo.value.trim()

    // Verificar se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido.")
        return
    }

    // Adicionar o nome ao array
    amigos.push(nomeAmigo)

    // Atualizar a lista na interface
    atualizarListaAmigos()

    // Limpar o campo de entrada
    inputAmigo.value = ""
    inputAmigo.focus()
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = ""

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li")
        item.textContent = `${index + 1}. ${amigo}`
        item.classList.add("name-item")
        listaAmigos.appendChild(item)
    })
}

// Função para sortear um nome aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!")
        return
    }

    // Sortear um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length)
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir o resultado na interface
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}