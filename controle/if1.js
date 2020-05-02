function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log("Parabens meu caro amigo!! " + nota)
    }
}

soBoaNoticia(6)
soBoaNoticia(8.1)

function seForVerdadeiroEuFalo(valor){
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo('Falei')
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ')
