const produtos = [
   { nome: 'Notebook', preco: 2499, fragil: true},
   {nome: 'iPad Pro', preco: 4199, fragil: true},
   {nome: 'Copo de vidro', preco: 12.49, fragil: true},
   {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

const produtoCaro = (p) => p.preco >= 500 

const eFragil = (p) => p.fragil

console.log(produtos.filter(produtoCaro).filter(eFragil))