const porta = 3003 // Define a porta que será utilizada

const express = require('express') // Importa o Express
const app = express() // Utiliza o express

app.get('/produtos', (req, res, next) => {
  res.send({ nome: 'Notebook', preco: 1234.56 }) // Irá converter para JSON automaticamente
})

app.listen(porta, () => {
  // Escuta a Porta que está sendo executada
  console.log(`Servidor sendo executado na porta ${porta}.`)
})
