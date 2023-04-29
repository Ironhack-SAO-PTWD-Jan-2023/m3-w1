// pacotes
const express = require('express');

// inicializar o express
const app = express();

// middlewares
app.use(express.static('public'));

// rotas
app.get('/', (req, res) => {
  console.log('requisição no "/"');
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/cat', (req, res) => {
  console.log('requisição no "/cat"');
  res.sendFile(__dirname + '/views/cat.html');
})

// iniciar o server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
})
