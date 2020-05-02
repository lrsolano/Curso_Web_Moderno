const pilotos = ['Vettel','Leclerc','Hamilton','Bottas']
pilotos.pop() //Bottas quebrou o carro
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Gasly')
console.log(pilotos)

// Splice pode adicionar

pilotos.splice(2,0,'Vettel','Ricardo')
console.log(pilotos)

//Splice pode remover

pilotos.splice(3,1)
console.log(pilotos)

//slice novo array

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1,4) // 4 não entra
console.log(algunsPilotos2)