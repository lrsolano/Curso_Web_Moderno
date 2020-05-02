const carrinho = [ 
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

]

// Retornar um apenas com os preços

function retornarPreco(str) {
    const dado =  JSON.parse(str)
    return dado.preco
}

const precos = carrinho.map(retornarPreco)

console.log(precos)