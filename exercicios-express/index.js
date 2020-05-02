const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const saudacao = require('./saudacaoMid')


app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Leonardo'))

app.use((req,res, next) => {
    console.log('será que serei chamado?')
    next()
})

app.get('/clientes/relatorio',(req,res) => {
    res.send(`Cliente relatório completo ${req.query.completo} ano = ${req.query.ano}`)
})


app.post('/corpo', (req,res)=> {
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!!!`)
})


app.get('/opa',(req,res)=>{ 
    // res.send('Estou bem')
    // res.json({
    //     nome:'leonardo',
    //     id: 45869
    // })
    res.json([
        {id: 1},
        {id: 45},
        {id: 56}
    ])
})

app.listen(3000, () => console.log('Backend rodando na porta 3000....'))