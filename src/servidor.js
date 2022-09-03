const porta = 3003 // Define a porta que será utilizada

const express = require('express') // Importa o Express
const app = express() // Utiliza o express
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) // Tudo passará por aqui

app.get('/produtos', (req, res, next) => {
  // res.send({ nome: 'Notebook', preco: 1234.56 }) // Irá converter para JSON automaticamente
  res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto) // JSON
})

app.listen(porta, () => {
  // Escuta a Porta que está sendo executada
  console.log(`Servidor sendo executado na porta ${porta}.`)
})
