function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const calca = criarProduto('Calça',150)
const notebook = criarProduto('Notebook', 1540)
console.log(calca)
console.log(notebook)