    const form = document.getElementById("formProduto");
    const erro = document.getElementById("erro");

    form.addEventListener("submit", function(e) {
    e.preventDefault();

    const produto = {
        id: Date.now(),
        nome: nome.value.trim(),
        preco: parseFloat(preco.value),
        categoria: categoria.value,
        descricao: descricao.value.trim()
    };

    // validações
    if (produto.nome.length < 3) {
        erro.textContent = "Nome deve ter pelo menos 3 caracteres";
        return;
    }

    if (isNaN(produto.preco) || produto.preco < 0) {
        erro.textContent = "Preço não pode ser negativo";
        return;
    }

    if (!produto.categoria) {
        erro.textContent = "Selecione uma categoria";
        return;
    }

    if (produto.descricao.length === 0) {
        erro.textContent = "Descrição é obrigatória";
        return;
    }

    salvarProduto(produto);

    alert("Produto cadastrado com sucesso!");
    form.reset();
    erro.textContent = "";
    });

    function toggleDarkMode() {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

