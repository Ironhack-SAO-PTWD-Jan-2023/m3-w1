// pacotes
require('dotenv/config');
const express = require('express');

// inicializar o express
const app = express();
console.log(process.env.SPOTIFY_CLIENT_ID)

// configurando o Handlebars
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// middlewares
app.use(express.static('public'));

// rotas
app.get('/', (req, res) => {
  console.log('requisição no "/"');
  res.render('index');
})

app.get('/profile', (req, res) => {
  console.log('requisição no "/profile"');
  let data = {
    firstName: 'Matheus',
    lastName: 'Chaves',
    city: 'Campina Grande',
    bootcamp: 'Ironhack Web Dev',
    pets: [
      {
        name: 'Lenin',
        type: 'Cat'
      },
      {
        name: 'Aria',
        type: 'Cat'
      }
    ],
    petsShort: [ 'Lenin', 'Aria' ],
    projects: {
      module1: 'Catch Game',
      module2: 'Drinkpedia'
    }
  }
  res.render('profile', data);
})

app.get('/search/:studentId', (req, res) => {
  const { studentId } = req.params;
  const { hide } = req.query;
  const data = [
    {
      id: 0,
      name: 'Matheus',
      age: 31
    },
    {
      id: 1,
      name: 'Hercules',
      age: 41
    },
    {
      id: 2,
      name: 'André',
      age: 36
    },
    {
      id: 3,
      name: 'Lucas',
      age: 27
    },
    {
      id: 4,
      name: 'João',
      age: 23
    },
    {
      id: 5,
      name: 'Natalia',
      age: 32
    }
  ]
  const result = data.find((student) => student.id === parseInt(studentId))
  if (hide === 'age') {
    result.age = '*SEGREDO!*'
  }

  res.render('search', result);
})

// iniciar o server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
})
