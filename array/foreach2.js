Array.prototype.forEach2 = function(callback){
    if (typeof callback === 'function'){
        for (let i = 0; i < this.length; i++){
            callback(this[i], i, this)
        }
    } else {
        throw {
            type: 1,
            desc: `'${callback}' não é uma função`
        }
    }
} 

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach2((nome,indice) => {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach2('Teste')