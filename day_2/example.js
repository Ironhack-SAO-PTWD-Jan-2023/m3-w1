// MVC -> Model View Controller
// ODM -> Object Document Mapper

require('dotenv/config');

// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost/odm';

mongoose
  .connect(DB_URI)
  .then((x) => {
    console.log('Conectado ao Mongo! Database:', x.connections[0].name);
  })
  // .then(() => {
  //   const Cat = mongoose.model('Cat', { name: String });
  //   // CRIANDO UM NOVO GATO NO DB

  //   // const gatinho = new Cat({ name: 'Waldivia' });
  //   // gatinho.save()
  //   //   .then((newCatFromDB) => {
  //   //     console.log(`Gato salvo no DB com sucesso: ${newCatFromDB.name}`);
  //   //   })
  //   //   .catch(error => console.log('Erro ao salvar o gato no DB!', error));

  //   // LISTAR AS INFORMAÇÕES DO DB
  //   Cat.find({}, { _id: 0 })
  //     .then((catsFromDB) => {
  //       console.log(catsFromDB);
  //     })
  // })
  .then(() => {
    const Cat = mongoose.model('Cat', { name: String });

    function addNewCat(catName) {
      console.log('Criando novo gato:', catName);
      
      // const newCat = new Cat({ name: catName });
      // newCat.save()
      Cat.create({ name: catName })
        .then((newCatFromDB) => {
          console.log(`Gato salvo no DB com sucesso: ${newCatFromDB.name}`);
        })
        .catch(error => console.log('Erro ao salvar o gato no DB!', error));

    }

    function showAllCats() {
      console.log('Mostrando todos os gatcheeeenhos =^.^=');
      Cat.find({}, { _id: 0 })
        .then((catsFromDB) => {
          console.log(catsFromDB);
        })
    }
    showAllCats();
    
    function addTenCats() {
      for(let i = 0; i < 10; i += 1){
        addNewCat(`IronCat ${i}`);
      }
    }

    // addTenCats();
  })
  .catch(error => console.log('ERROR >>>', error));


mongoose.connection.on('connected', () => console.log('Evento ao conectar!'));
mongoose.connection.on('error', () => console.log('Evento de erro ao conectar!'));
mongoose.connection.on('disconnected', () => console.log('Evento ao desconectar!'));
