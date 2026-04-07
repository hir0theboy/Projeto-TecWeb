    const lista = document.getElementById("lista");
    const busca = document.getElementById("busca");
    const filtro = document.getElementById("filtro");
    const contador = document.getElementById("contador");
    const total = document.getElementById("total");

    function render() {
    const produtos = getProdutos();

    const filtrados = produtos.filter(p =>
        p.nome.toLowerCase().includes(busca.value.toLowerCase()) &&
        (filtro.value === "" || p.categoria === filtro.value)
    );

    lista.innerHTML = "";

    // CONTADOR
    contador.textContent = `Total de produtos: ${filtrados.length}`;

    // SOMA
    const soma = filtrados.reduce((acc, p) => acc + p.preco, 0);
    total.textContent = `Valor total: R$ ${soma.toFixed(2)}`;

    if (filtrados.length === 0) {
        lista.innerHTML = "<p>Nenhum produto encontrado</p>";
        return;
    }

    filtrados.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("produto");

        div.innerHTML = `
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <strong>R$ ${p.preco.toFixed(2)}</strong><br>
        <small>${p.categoria}</small><br><br>

        <button onclick="editar(${p.id})">Editar</button>
        <button onclick="excluir(${p.id})">Excluir</button>
        <hr>
        `;

        lista.appendChild(div);
    });
    }

    // EXCLUIR
    function excluir(id) {
    removerProduto(id);
    render();
    }

    // EDITAR
    function editar(id) {
    const produtos = getProdutos();
    const produto = produtos.find(p => p.id === id);

    const novoNome = prompt("Novo nome:", produto.nome);
    const novoPreco = prompt("Novo preço:", produto.preco);
    const novaDescricao = prompt("Nova descrição:", produto.descricao);

    if (!novoNome || novoNome.length < 3) return alert("Nome inválido");
    if (isNaN(novoPreco) || novoPreco < 0) return alert("Preço inválido");
    if (!novaDescricao) return alert("Descrição obrigatória");

    const atualizado = {
        ...produto,
        nome: novoNome,
        preco: parseFloat(novoPreco),
        descricao: novaDescricao
    };

    atualizarProduto(atualizado);
    render();
    }

    busca.addEventListener("input", render);
    filtro.addEventListener("change", render);

    render();

    function toggleDarkMode() {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

