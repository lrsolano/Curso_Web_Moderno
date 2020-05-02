import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import Multi from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

// ReactDOM.render(<Primeiro />, document.getElementById('root'))
// ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João"/>
    </div>
    , document.getElementById('root'))
