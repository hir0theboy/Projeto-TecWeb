        // ===============================
        // BUSCAR PRODUTOS
        // ===============================
        function getProdutos() {
        const dados = localStorage.getItem("produtos");
        return dados ? JSON.parse(dados) : [];
        }

        // ===============================
        // SALVAR PRODUTO
        // ===============================
        function salvarProduto(produto) {
        const produtos = getProdutos();
        produtos.push(produto);
        localStorage.setItem("produtos", JSON.stringify(produtos));
        }

        // ===============================
        // REMOVER PRODUTO
        // ===============================
        function removerProduto(id) {
        const produtos = getProdutos().filter(p => p.id !== id);
        localStorage.setItem("produtos", JSON.stringify(produtos));
        }

        // ===============================
        // ATUALIZAR PRODUTO (EXTRA)
        // ===============================
        function atualizarProduto(produtoAtualizado) {
        const produtos = getProdutos().map(p => {
            return p.id === produtoAtualizado.id ? produtoAtualizado : p;
        });

        localStorage.setItem("produtos", JSON.stringify(produtos));
        }

        function atualizarProduto(produtoAtualizado) {
    const produtos = getProdutos().map(p => {
        return p.id === produtoAtualizado.id ? produtoAtualizado : p;
    });

    localStorage.setItem("produtos", JSON.stringify(produtos));
    }